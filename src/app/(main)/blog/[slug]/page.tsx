import path from 'path';

import { bundleMDX } from 'mdx-bundler';

import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { Container } from '@/components/Container';
import { Frontmatter } from '@/types/mdx';

import { Content } from './Content';
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);
  const { code } = await bundleMDX<Frontmatter>({
    file: path.join(process.cwd(), `/src/contents/blog/${slug}.mdx`),
    mdxOptions(options) {
      return {
        ...options,
        remarkPlugins: [...(options.remarkPlugins ?? []), remarkGfm],
        rehypePlugins: [...(options.rehypePlugins ?? []), rehypeSlug],
      };
    },
  });

  return (
    <Container>
      <Content code={code} />
    </Container>
  );
}
