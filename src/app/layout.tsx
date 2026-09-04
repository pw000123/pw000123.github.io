import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '栗晓东 | 食品质量管理',
    template: '%s | 栗晓东',
  },
  description:
    '食品质量管理硕士，SCI 2区一作。专注生鲜品控、标准体系搭建与微生物风险控制，把混乱的质量问题变成可查、可标、可验证的体系。',
  keywords: [
    '栗晓东',
    '食品质量管理',
    '生鲜品控',
    '食品安全',
    'GB 7718',
    'GB 2760',
    '微生物检测',
    'SOP',
    '山西农业大学',
  ],
  authors: [{ name: '栗晓东' }],
  openGraph: {
    title: '栗晓东 | 食品质量管理',
    description:
      '食品质量管理硕士，SCI 2区一作。专注生鲜品控、标准体系搭建与微生物风险控制。',
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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
