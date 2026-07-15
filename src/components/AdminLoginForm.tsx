"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Invalid password");
        return;
      }
      router.push("/admin/dashboard");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm bg-t-bg-elevated border border-t-border p-8"
    >
      <div className="w-12 h-12 bg-t-dark-panel flex items-center justify-center mb-6">
        <Lock className="w-5 h-5 text-t-accent" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-t-ink mb-2">Admin Login</h1>
      <p className="text-sm text-t-body mb-8">Sign in to edit Pio GmbH site content.</p>

      <label
        htmlFor="admin-password"
        className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-ink mb-2"
      >
        Password
      </label>
      <input
        id="admin-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoFocus
        className="w-full bg-transparent border-0 border-b border-t-border focus:border-t-accent focus:ring-0 outline-none px-0 py-3 text-base text-t-ink transition-colors mb-6"
      />

      {error && <p className="text-sm text-red-600 mb-6">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.1em] uppercase hover:bg-t-dark-panel hover:text-t-on-dark-panel transition-colors duration-150 disabled:opacity-50"
      >
        {loading ? "Signing In…" : "Sign In"}
      </button>
    </motion.form>
  );
}
