
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  output: "export",
  basePath: '/landing',
};

module.exports = nextConfig;
