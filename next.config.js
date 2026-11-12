/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
  async headers () {
    return [
      {
        // font files are not content-hashed: rename the file when replacing a font
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      }
    ]
  },
  async redirects () {
    return [
      {
        source: '/carta/:slug',
        destination: '/carta',
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
