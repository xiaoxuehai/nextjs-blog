import { readFileSync } from 'fs';
import { join } from 'path';

export type ContentType = 'blog' | 'projects';

export function getFileBySlug(type: ContentType, slug: string) {
  return readFileSync(
    join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`),
  );
}
