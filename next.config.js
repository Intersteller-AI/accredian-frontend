/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st1.zoom.us",
      },
      {
        protocol: "https",
        hostname: "us04images.zoom.us",
      },
      {
        protocol: "https",
        hostname: "blog-app-backend-e3mj.onrender.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
