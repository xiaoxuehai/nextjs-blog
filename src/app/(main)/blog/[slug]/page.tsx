import path from 'path';

import { bundleMDX } from 'mdx-bundler';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import { Frontmatter } from '@/types/mdx';

import MDXContent from './MDXContent';

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);

  //   if (!blog) {
  //     notFound();
  //   }
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
      <Prose>
        <MDXContent code={code} />
      </Prose>
    </Container>
  );
}
