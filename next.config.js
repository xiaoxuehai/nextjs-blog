const createMDX = require('@next/mdx');
/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX();
module.exports = withMDX(nextConfig);
