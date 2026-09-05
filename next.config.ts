import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // Custom middleware below enforces an explicit SEO-safe 301 for trailing slashes.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
