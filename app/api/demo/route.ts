import { NextResponse } from "next/server";

import { getDbClient, isDatabaseEnabled } from "@/lib/db";

function dbDisabledResponse() {
  return NextResponse.json(
    {
      ok: false,
      featureDisabled: true,
      message:
        "Database is not configured. Set DATABASE_URL to enable Neon-backed reads/writes.",
    },
    { status: 503 }
  );
}

export async function GET() {
  if (!isDatabaseEnabled()) {
    return dbDisabledResponse();
  }

  try {
    const sql = getDbClient();

    if (!sql) {
      return dbDisabledResponse();
    }

    const result = await sql`SELECT id, message, created_at FROM demo_notes ORDER BY created_at DESC LIMIT 20`;

    return NextResponse.json({ ok: true, notes: result });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Database table is not initialized yet. POST to this endpoint to create demo data.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!isDatabaseEnabled()) {
    return dbDisabledResponse();
  }

  const body = await request.json().catch(() => ({} as { message?: unknown }));
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!message) {
    return NextResponse.json(
      { ok: false, message: "message is required" },
      { status: 400 }
    );
  }

  const sql = getDbClient();

  if (!sql) {
    return dbDisabledResponse();
  }

  await sql`
    CREATE TABLE IF NOT EXISTS demo_notes (
      id BIGSERIAL PRIMARY KEY,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`INSERT INTO demo_notes (message) VALUES (${message})`;

  const [latest] = await sql`
    SELECT id, message, created_at
    FROM demo_notes
    ORDER BY created_at DESC
    LIMIT 1
  `;

  return NextResponse.json({ ok: true, note: latest }, { status: 201 });
}
