import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO "YYYY-MM-DD"
  tags?: string[];
  cover?: string;
  readingLevel?: "débutant" | "intermédiaire" | "avancé";
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  stats: { text: string; minutes: number };
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): BlogPost[] {
  const files = ensureBlogDir();

  const posts = files.map((file) => {
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const slug = file.replace(/\.mdx$/, "");
    const stats = readingTime(content);

    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
      stats: {
        text: stats.text,
        minutes: Math.max(1, Math.round(stats.minutes)),
      },
    };
  });

  // tri par date desc
  posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    stats: {
      text: stats.text,
      minutes: Math.max(1, Math.round(stats.minutes)),
    },
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const set = new Set<string>();
  posts.forEach((p) => (p.frontmatter.tags ?? []).forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
