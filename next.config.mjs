/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
        ],
    },
    env: {
        SERV_URL: process.env.SERV_URL || 'http://localhost:3000',
    },
};

export default nextConfig;
