/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  })
   
module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  defaultShowCopyCode: true,
  basePath: "/docs"
}
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })

  // export default nextConfig;
  //export default withNextra;

  
