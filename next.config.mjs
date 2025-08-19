const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-cdn.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60
},
  webpack(config{
    config.module.rules.push({
      test: /\.glb$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]'
}
}
});
    return config;
  },
  experimental: {
    optimizeCss: true
}
});

export default nextConfig;