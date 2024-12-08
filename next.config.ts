// NOTE The images.domains option has been deprecated in recent versions of Next.js (15.0+). Instead, you should use the images.remotePatterns configuration for external image handling.

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

