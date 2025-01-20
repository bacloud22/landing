const isProd = true; // process.env.NODE_ENV === 'production';
// console.log(isProd);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
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
  basePath: isProd ? '/landing' : '',
};

module.exports = nextConfig;
