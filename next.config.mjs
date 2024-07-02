/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // unplash
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
