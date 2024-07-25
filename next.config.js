const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  distDir: 'out',
};


module.exports = {
  ...withNextra(),
  ...nextConfig,
  images: {
    unoptimized: true,
  },
  defaultShowCopyCode: true,
  basePath: "/docs-ng"
}

  
