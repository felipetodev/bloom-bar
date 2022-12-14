/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'videos.ctfassets.net']
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
