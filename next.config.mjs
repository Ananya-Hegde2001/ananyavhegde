/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/some-other-path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
