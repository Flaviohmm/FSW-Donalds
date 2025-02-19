import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
    domains: ['images.pexels.com', 'u9a6wmr3as.ufs.sh'], // adicione outros domínios conforme necessário
  },
};

export default nextConfig;
