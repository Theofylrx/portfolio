/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Changed from 'standalone' to 'export' for static hosting
    images: {
        unoptimized: true // Disables Next.js image optimization
    },
};

export default nextConfig;