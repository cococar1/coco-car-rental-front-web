/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  compiler: { styledComponents: true },
  env: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dfifwhrxn/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "coco-car-rental.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "coco-car-rental2.s3.us-east-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "coco-car-rental2.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

