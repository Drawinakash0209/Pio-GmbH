// Explicitly seeds the singleton admin_credentials row from ADMIN_PASSWORD.
// Run once per environment: `npm run seed` (requires DATABASE_URL + ADMIN_PASSWORD,
// e.g. `node --env-file=.env scripts/seed.js` for local dev).
// Safe to re-run: it skips seeding if an admin account already exists — use the
// in-app "change password" flow (once logged in) to rotate an existing password.
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

const BCRYPT_ROUNDS = 12;

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL environment variable is not set.");
    process.exit(1);
  }
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    console.error("ADMIN_PASSWORD environment variable is not set.");
    process.exit(1);
  }

  const pool = new Pool({ connectionString });
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin_credentials (
        id INTEGER PRIMARY KEY DEFAULT 1,
        password_hash TEXT NOT NULL,
        session_version INTEGER NOT NULL DEFAULT 1,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        CONSTRAINT admin_credentials_singleton CHECK (id = 1)
      );
    `);

    const { rows } = await pool.query("SELECT id FROM admin_credentials WHERE id = 1");
    if (rows.length > 0) {
      console.log("Admin account already seeded — skipping. Use the dashboard's change-password flow to rotate it.");
      return;
    }

    const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);
    await pool.query(
      "INSERT INTO admin_credentials (id, password_hash, session_version) VALUES (1, $1, 1)",
      [hash]
    );
    console.log("Admin account seeded.");
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
