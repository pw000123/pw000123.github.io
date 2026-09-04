import type { Metadata } from 'next';
import ScrollReveal from '../../components/ScrollReveal';
import {
  MessageCircle,
  ExternalLink,
  Sparkles,
  BookOpen,
  Wrench,
  Globe,
  Table2,
  FileStack,
} from 'lucide-react';

// 自媒体版：不索引、不追踪，保护匿名身份
export const metadata: Metadata = {
  // absolute 用于绕开 layout 的 title template，避免真名出现在自媒体页标题
  title: {
    absolute: '小冰 | AI 学长手记',
  },
  description:
    '一个理工科硕士的 AI 提效实验记录：用 AI 搭网站、整理资料、做数据分析，把重复劳动交给工具。',
  robots: {
    index: false,
    follow: false,
  },
};

const channels = [
  {
    icon: BookOpen,
    title: '公众号「小冰爱分享」',
    description: '软件安装教程与技术分享',
    stats: [
      { label: '粉丝', value: '7,800+' },
      { label: '变现', value: '600+ 元' },
    ],
  },
  {
    icon: Sparkles,
    title: '小红书 · 考研资料号',
    description: '考研专业课资料整理与分享',
    stats: [
      { label: '引流', value: '60+ 人' },
      { label: '变现', value: '3,000+ 元' },
    ],
  },
  {
    icon: Wrench,
    title: 'AI 工具实践',
    description: '用 AI 搭网站、写文档、做数据分析',
    stats: [
      { label: '实践方向', value: '提效' },
    ],
  },
];

const works = [
  {
    icon: Globe,
    title: '个人主页从 0 到上线',
    description: '用 AI 生成 Next.js 站点，配置 GitHub Pages 自动部署，全程零手写配置。',
  },
  {
    icon: Table2,
    title: '考研录取数据看板',
    description: '整理某高校食品学院近 6 年录取数据，落地为飞书多维表格看板。',
  },
  {
    icon: FileStack,
    title: '考研资料重构',
    description: '旧资料被倒卖后，用 AI 重新整理成结构化的新版资料并售出。',
  },
];

export default function CreatorPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <ScrollReveal />
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-lg font-medium text-gradient font-serif">小冰</span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#channels" className="hover:text-foreground transition-colors">在做什么</a>
            <a href="#works" className="hover:text-foreground transition-colors">作品</a>
            <a href="#follow" className="hover:text-foreground transition-colors">关注</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[200px] bg-primary/3 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center animate-fade-up">
          <div className="mb-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/80 font-sans">
            AI 学长手记 · Creator · 2026
          </div>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 glass-panel rounded-full text-sm text-muted-foreground">
              用 AI 把重复劳动交给工具
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            <span className="text-gradient">小冰</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            记录一个理工科硕士的
            <span className="text-foreground font-medium"> AI 提效实验</span>
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#follow"
              className="glass-panel glass-glow px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 btn-apple"
            >
              关注我
            </a>
            <a
              href="#works"
              className="px-6 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              看看作品
            </a>
          </div>
        </div>
      </section>

      <section id="channels" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <h2 className="text-2xl font-semibold mb-4">我在做什么</h2>
            <p className="text-muted-foreground">内容分享与 AI 工具实践</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <div
                key={channel.title}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center mb-4">
                  <channel.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                <div className="flex flex-wrap gap-4">
                  {channel.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl font-semibold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <h2 className="text-2xl font-semibold mb-4">AI 实践作品</h2>
            <p className="text-muted-foreground">把工具用在真实问题上的记录</p>
          </div>

          <div className="space-y-6">
            {works.map((work, index) => (
              <div
                key={work.title}
                className="scroll-reveal glass-panel rounded-2xl p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center flex-shrink-0">
                    <work.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{work.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="follow" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">关注我</h2>
            <p className="text-muted-foreground">一起用 AI 少做点重复劳动</p>
          </div>

          <div className="scroll-reveal">
            <div className="glass-panel-lg rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="glass-panel rounded-2xl p-4">
                    <img
                      src="/wechat-qr.jpg"
                      alt="公众号二维码"
                      width={200}
                      height={200}
                      className="rounded-xl"
                      loading="eager"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-medium">公众号「小冰爱分享」</div>
                    <div className="text-sm text-muted-foreground mt-1">扫码关注</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass-panel glass-glow rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">微信</div>
                        <div className="font-medium">xiaobing38233</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://xhslink.com/m/9hAYkwOOgaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel glass-glow rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">小红书</div>
                        <div className="font-medium">考研资料号</div>
                      </div>
                    </div>
                    <span className="text-sm text-primary">访问</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-sm text-muted-foreground">
        <p>© 2026 小冰 · 用 AI 搭建</p>
      </footer>
    </div>
  );
}
