import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '小冰 | 个人主页',
    template: '%s | 小冰',
  },
  description:
    '复合型人才，擅长运营与AI工具应用。把复杂事物变成可执行的SOP。',
  keywords: [
    '小冰',
    '个人主页',
    '运营',
    'AI工具',
    '内容运营',
    '新媒体运营',
  ],
  authors: [{ name: '小冰' }],
  openGraph: {
    title: '小冰 | 个人主页',
    description:
      '复合型人才，擅长运营与AI工具应用。把复杂事物变成可执行的SOP。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
