import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [{ source: '/cappadocia-airport-shuttle', destination: '/', permanent: true }];
  },
};

export default nextConfig;
