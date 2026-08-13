const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

type Attempt = { count: number; firstAttempt: number; lockedUntil?: number };

// In-memory and per-process: resets on restart and isn't shared across instances.
// Fine for a single-instance deployment; swap for a shared store (e.g. Redis) if
// this app is ever run behind a load balancer with more than one server process.
const attempts = new Map<string, Attempt>();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

export function isLocked(ip: string): boolean {
  const entry = attempts.get(ip);
  return Boolean(entry?.lockedUntil && Date.now() < entry.lockedUntil);
}

export function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now - entry.firstAttempt > WINDOW_MS) {
    attempts.set(ip, { count: 1, firstAttempt: now });
    return;
  }
  entry.count += 1;
  if (entry.count >= MAX_ATTEMPTS) {
    entry.lockedUntil = now + LOCKOUT_MS;
  }
}

export function clearAttempts(ip: string): void {
  attempts.delete(ip);
}
