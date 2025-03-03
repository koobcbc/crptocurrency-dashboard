/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
      rewrites: async () => [
        {
          source: "/cryptocurrency-dashboard",
          destination: "/cryptocurrency-dashboard/index.html",
        },
      ],
};

export default nextConfig;
