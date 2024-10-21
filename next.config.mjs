/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xfkvjckis9fcttft.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
