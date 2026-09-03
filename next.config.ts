import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 静态导出配置
  output: 'export',
  
  // GitHub Pages 资源路径
  // 如果部署到 https://用户名.github.io/仓库名/，需要设置 basePath
  // 建议仓库名用 用户名.github.io，这样 basePath 为空即可
  // basePath: '/your-repo-name',
  
  allowedDevOrigins: ['*.dev.coze.site'],
  
  // 静态导出时关闭图片优化
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  
  // 确保 trailing slash 以支持 GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
