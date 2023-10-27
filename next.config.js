/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  env: {
    API_URL: process.env.API_URL,
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"res.cloudinary.com",
        pathname:"/dfifwhrxn/image/upload/**"
      }
    ]
  }
};

module.exports = nextConfig;
