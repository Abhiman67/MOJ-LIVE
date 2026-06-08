/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myonlinejet.com'
      },
      {
        protocol: 'https',
        hostname: 'www.myonlinejet.com'
      }
    ]
  }
}

export default nextConfig
