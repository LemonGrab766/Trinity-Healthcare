/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trinity-services-s3.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
