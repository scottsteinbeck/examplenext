module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://agritrackingsystems.com:3000/:path*' // Proxy to Backend
      }
    ]
  }
}