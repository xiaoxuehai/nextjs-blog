import fs from 'fs/promises';
import path from 'path';

import glob from 'fast-glob';
import matter from 'gray-matter';

export type Frontmatter = {
  title: string; // 标题
  date: string; // 创建日期
  updatedOn?: string; // 最后更新日期，git commit 之前会自动更新此字段
  tags?: string[]; // 标签
  draft?: boolean; // 为 true 则不会展示该文章，默认为 false
  [key: string]: any;
};
export type ContentType = 'blog' | 'library' | 'projects';

export async function getAllFilesFrontmatter(type: ContentType) {
  const contents: string[] = await glob('contents/**/*.mdx');
  return await Promise.all(
    contents.map(async content => {
      const slug = content.replace(/^posts\/|\.mdx$/g, '');
      const frontmatter = await getFileFrontmatter(type, slug);
      return {
        slug,
        frontmatter,
      };
    }),
  );
}

export async function getFileFrontmatter(
  type: ContentType,
  slug: string,
): Promise<Frontmatter> {
  const source = await fs.readFile(
    path.join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`),
    'utf8',
  );
  const frontmatter = matter(source).data as Frontmatter;
  return frontmatter;
}

export async function getAdjacentFile(type: ContentType, slug: string) {
  const files = await getAllFilesFrontmatter(type);
  const index = files.findIndex(item => item.slug === slug);
  const prev = index > 0 ? files[index - 1] : null;
  const next =
    index !== -1 && index < files.length - 1 ? files[index + 1] : null;
  return { prev, next };
}
