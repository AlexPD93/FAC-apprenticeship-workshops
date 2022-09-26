BEGIN;

CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
   complete INTEGER DEFAULT 0 CHECK(complete IN (0, 1))
);

COMMIT;