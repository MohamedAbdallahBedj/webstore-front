/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.shutterstock.com',
            },
            {
                hostname: 'plus.unsplash.com',
            },
        ],
    }
};

export default nextConfig;
