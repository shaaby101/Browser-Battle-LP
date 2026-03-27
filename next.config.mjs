/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the Turbopack root so Next.js doesn't
  // try to use C:\\Users\\santh as the workspace root.
  // In ESM config files __dirname is not available, so we
  // rely on the current working directory instead.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
