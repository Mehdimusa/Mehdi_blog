/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure all routes are generated at build time
  async generateBuildId() {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id-' + Date.now()
  }
}

module.exports = nextConfig