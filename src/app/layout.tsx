import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '栗晓东 | 个人主页',
    template: '%s | 栗晓东',
  },
  description:
    '食品硕士，也是 AI 工具重度使用者与内容运营实践者：用 AI 搭网站、写教程、做数据看板，也做品控与标准体系。这里是我的经历合集。',
  keywords: [
    '栗晓东',
    '个人主页',
    'AI 工具',
    '内容运营',
    '数据分析',
    '食品质量',
    'SOP',
  ],
  authors: [{ name: '栗晓东' }],
  openGraph: {
    title: '栗晓东 | 个人主页',
    description:
      '食品硕士 × AI 实践 × 内容运营：用 AI 把复杂事物变成可执行的 SOP。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ede2c8',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {/* 素描水彩背景：左右各一幅（右侧为镜像），衬托中间内容 */}
        <div aria-hidden className="sketch-backdrop">
          <div className="sketch-side sketch-left" />
          <div className="sketch-side sketch-right" />
        </div>
        {children}
      </body>
    </html>
  );
}
