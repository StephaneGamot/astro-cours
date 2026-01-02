import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

function ipKey(req: Request) {
  // best-effort: Vercel fournit souvent x-forwarded-for
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  return ip;
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "missing slug" }, { status: 400 });

  // anti-gonflage simple: 1 vue / IP / 6h
  const ip = ipKey(req);
  const dedupeKey = `views:dedupe:${slug}:${ip}`;
  const already = await kv.get(dedupeKey);

  if (!already) {
    await kv.set(dedupeKey, 1, { ex: 60 * 60 * 6 }); // 6h
    await kv.incr(`views:${slug}`);
  }

  const count = (await kv.get<number>(`views:${slug}`)) ?? 0;
  return NextResponse.json({ count });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "missing slug" }, { status: 400 });

  const count = (await kv.get<number>(`views:${slug}`)) ?? 0;
  return NextResponse.json({ count });
}
