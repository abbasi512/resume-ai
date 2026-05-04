/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Anthropic SDK usage in API routes
  serverExternalPackages: ["@anthropic-ai/sdk"],
};

export default nextConfig;
