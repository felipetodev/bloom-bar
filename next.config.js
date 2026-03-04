/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    qualities: [80, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'videos.ctfassets.net',
      }
    ]
  },
  async redirects () {
    return [
      {
        source: '/carta',
        destination: '/carta/nikkei',
        permanent: true
      },
      {
        source: '/wp-content/:path*',
        destination: 'https://youtu.be/BBJa32lCaaY',
        permanent: true
      }
    ]
  }
}
