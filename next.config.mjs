/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Self-contained server bundle (.next/standalone) for the Docker image
  output: "standalone",
};

export default nextConfig;
