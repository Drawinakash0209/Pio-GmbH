import { Pool } from "pg";

// Cached on globalThis so Turbopack/webpack dev hot-reload doesn't reopen a
// new pool (and leak connections) on every module re-eval.
declare global {
  var __pioPgPool: Pool | undefined;
}

function getPool(): Pool {
  if (!globalThis.__pioPgPool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not set.");
    }
    globalThis.__pioPgPool = new Pool({ connectionString });
  }
  return globalThis.__pioPgPool;
}

let schemaReady: Promise<void> | undefined;

// Lazily runs once per server process; every exported function awaits it so
// callers never have to think about migrations.
function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = getPool()
      .query(
        `
        CREATE TABLE IF NOT EXISTS content (
          id TEXT PRIMARY KEY,
          value TEXT NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );

        CREATE TABLE IF NOT EXISTS uploads (
          filename TEXT PRIMARY KEY,
          mime_type TEXT NOT NULL,
          size_bytes INTEGER NOT NULL,
          uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );

        CREATE TABLE IF NOT EXISTS admin_credentials (
          id INTEGER PRIMARY KEY DEFAULT 1,
          password_hash TEXT NOT NULL,
          session_version INTEGER NOT NULL DEFAULT 1,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          CONSTRAINT admin_credentials_singleton CHECK (id = 1)
        );

        ALTER TABLE admin_credentials ADD COLUMN IF NOT EXISTS session_version INTEGER NOT NULL DEFAULT 1;
        `
      )
      .then(() => undefined);
  }
  return schemaReady;
}

export async function getAllContent(): Promise<Record<string, string>> {
  await ensureSchema();
  const { rows } = await getPool().query<{ id: string; value: string }>(
    "SELECT id, value FROM content"
  );
  const result: Record<string, string> = {};
  for (const row of rows) result[row.id] = row.value;
  return result;
}

export async function setContentValue(id: string, value: string): Promise<void> {
  await ensureSchema();
  await getPool().query(
    `INSERT INTO content (id, value, updated_at) VALUES ($1, $2, now())
     ON CONFLICT (id) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`,
    [id, value]
  );
}

export async function deleteContentValue(id: string): Promise<void> {
  await ensureSchema();
  await getPool().query("DELETE FROM content WHERE id = $1", [id]);
}

export async function resetAllContent(): Promise<void> {
  await ensureSchema();
  await getPool().query("DELETE FROM content");
}

export async function recordUpload(
  filename: string,
  mimeType: string,
  sizeBytes: number
): Promise<void> {
  await ensureSchema();
  await getPool().query(
    "INSERT INTO uploads (filename, mime_type, size_bytes) VALUES ($1, $2, $3)",
    [filename, mimeType, sizeBytes]
  );
}

export async function getAdminCredentials(): Promise<{
  passwordHash: string;
  sessionVersion: number;
} | null> {
  await ensureSchema();
  const { rows } = await getPool().query<{
    password_hash: string;
    session_version: number;
  }>("SELECT password_hash, session_version FROM admin_credentials WHERE id = 1");
  if (!rows[0]) return null;
  return { passwordHash: rows[0].password_hash, sessionVersion: rows[0].session_version };
}

export async function getAdminSessionVersion(): Promise<number | null> {
  await ensureSchema();
  const { rows } = await getPool().query<{ session_version: number }>(
    "SELECT session_version FROM admin_credentials WHERE id = 1"
  );
  return rows[0]?.session_version ?? null;
}

// Rotates the admin password and bumps session_version, which invalidates every
// session token minted under the old version (see verifySessionToken).
export async function updateAdminPassword(hash: string): Promise<number> {
  await ensureSchema();
  const { rows } = await getPool().query<{ session_version: number }>(
    `UPDATE admin_credentials
     SET password_hash = $1, session_version = session_version + 1, updated_at = now()
     WHERE id = 1
     RETURNING session_version`,
    [hash]
  );
  return rows[0].session_version;
}
