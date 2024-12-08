// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.imagin.studio'], // Add the hostname here
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        pathname: '/getimage**', // Allows URLs starting with "/getimage"
      },
    ],
  },
};

module.exports = nextConfig;

