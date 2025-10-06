import createMdx from '@next/mdx';
import { resolve } from 'path';
import rehypeSlug from 'rehype-slug';

const withMDX = createMdx({
  extension: /\.mdx?$/,

  options: {
    providerImportSource: '@mdx-js/react',
    rehypePlugins: [rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  trailingSlash: true,
  outputFileTracingRoot: resolve(import.meta.dirname, "../../"),
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          'builtin-modules': false,
          worker_threads: false,
        },
      };
    }

    return config;
  },
};

export default withMDX(nextConfig);
