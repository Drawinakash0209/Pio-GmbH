import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "pio-gmbh.db");

// Cached on globalThis so Turbopack/webpack dev hot-reload doesn't reopen a
// new SQLite connection (and leak file handles) on every module re-eval.
declare global {
  var __pioContentDb: DatabaseSync | undefined;
}

function getDb(): DatabaseSync {
  if (!globalThis.__pioContentDb) {
    mkdirSync(DATA_DIR, { recursive: true });
    const db = new DatabaseSync(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS content (
        id TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )
    `);
    globalThis.__pioContentDb = db;
  }
  return globalThis.__pioContentDb;
}

export function getAllContent(): Record<string, string> {
  const rows = getDb().prepare("SELECT id, value FROM content").all() as {
    id: string;
    value: string;
  }[];
  const result: Record<string, string> = {};
  for (const row of rows) result[row.id] = row.value;
  return result;
}

export function setContentValue(id: string, value: string): void {
  getDb()
    .prepare(
      `INSERT INTO content (id, value, updated_at) VALUES (?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`
    )
    .run(id, value, new Date().toISOString());
}

export function deleteContentValue(id: string): void {
  getDb().prepare("DELETE FROM content WHERE id = ?").run(id);
}

export function resetAllContent(): void {
  getDb().exec("DELETE FROM content");
}
