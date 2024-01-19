/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  env: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
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
    ],
  },
};

module.exports = nextConfig;
