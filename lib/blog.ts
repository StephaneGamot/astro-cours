import { posts } from "@/content/blog/posts";


export function getAllPosts() {
  return [...posts].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.meta.slug === slug) ?? null;
}


export function getRelatedPosts(currentSlug: string, max = 4) {
  const posts = getAllPosts();
  const current = posts.find((p) => p.meta.slug === currentSlug);
  if (!current) return [];

  const currentTags = new Set(current.meta.tags ?? []);

  return posts
    .filter((p) => p.meta.slug !== currentSlug)
    .map((p) => {
      const score = (p.meta.tags ?? []).reduce((acc, t) => acc + (currentTags.has(t) ? 1 : 0), 0);
      return { post: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((x) => x.post);
}