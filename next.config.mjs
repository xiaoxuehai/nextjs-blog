import createMDX from '@next/mdx';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);
