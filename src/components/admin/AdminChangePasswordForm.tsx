"use client";

import { useState } from "react";
import { KeyRound } from "lucide-react";

export default function AdminChangePasswordForm({ onClose }: { onClose: () => void }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Could not change password");
        return;
      }
      setSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-t-bg-elevated border border-t-border p-8"
      >
        <div className="w-12 h-12 bg-t-dark-panel flex items-center justify-center mb-6">
          <KeyRound className="w-5 h-5 text-t-accent" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-t-ink mb-2">Change Password</h2>
        <p className="text-sm text-t-body mb-6">
          Rotating the password signs out every other active session.
        </p>

        <label
          htmlFor="current-password"
          className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-ink mb-2"
        >
          Current Password
        </label>
        <input
          id="current-password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
          autoFocus
          className="w-full bg-transparent border-0 border-b border-t-border focus:border-t-accent focus:ring-0 outline-none px-0 py-3 text-base text-t-ink transition-colors mb-4"
        />

        <label
          htmlFor="new-password"
          className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-ink mb-2"
        >
          New Password
        </label>
        <input
          id="new-password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength={8}
          className="w-full bg-transparent border-0 border-b border-t-border focus:border-t-accent focus:ring-0 outline-none px-0 py-3 text-base text-t-ink transition-colors mb-4"
        />

        <label
          htmlFor="confirm-password"
          className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-ink mb-2"
        >
          Confirm New Password
        </label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={8}
          className="w-full bg-transparent border-0 border-b border-t-border focus:border-t-accent focus:ring-0 outline-none px-0 py-3 text-base text-t-ink transition-colors mb-6"
        />

        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
        {success && <p className="text-sm text-green-600 mb-4">Password changed.</p>}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-4 border border-t-border text-[11px] font-black tracking-[0.1em] uppercase text-t-ink hover:border-t-ink transition-colors"
          >
            Close
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-4 bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.1em] uppercase hover:bg-t-dark-panel hover:text-t-on-dark-panel transition-colors duration-150 disabled:opacity-50"
          >
            {loading ? "Saving…" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
