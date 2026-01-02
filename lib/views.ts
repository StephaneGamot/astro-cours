import { kv } from "@vercel/kv";

export async function getViews(slug: string) {
  return (await kv.get<number>(`views:${slug}`)) ?? 0;
}

export async function getViewsMany(slugs: string[]) {
  if (slugs.length === 0) return [];
  const keys = slugs.map((s) => `views:${s}`);
  const vals = (await kv.mget<number[]>(...keys)) as any[];
  return vals.map((v, i) => ({ slug: slugs[i], count: typeof v === "number" ? v : 0 }));
}
