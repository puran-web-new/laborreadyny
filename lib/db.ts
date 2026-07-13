import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL?.trim();

export function getDbClient() {
  if (!databaseUrl) {
    return null;
  }

  return neon(databaseUrl);
}

export function isDatabaseEnabled() {
  return Boolean(databaseUrl);
}
