/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
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
