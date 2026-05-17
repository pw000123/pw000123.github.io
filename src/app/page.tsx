'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { 
  Copy, 
  Check, 
  Mail, 
  MessageCircle, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  Layers,
  Target,
  Briefcase,
  GraduationCap,
  QrCode
} from 'lucide-react';

// 复制到剪贴板的 Hook
function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('复制失败');
    }
  };
  
  return { copied, copy };
}

// 联系方式数据
const contacts = [
  {
    type: 'wechat',
    label: '微信',
    value: 'xiaobing38233',
    icon: MessageCircle,
  },
  {
    type: 'email',
    label: '邮箱',
    value: 'lixiaodong0023@163.com',
    icon: Mail,
    href: 'mailto:lixiaodong0023@163.com',
  },
  {
    type: 'xiaohongshu',
    label: '小红书',
    value: 'xiaobing38233',
    icon: ExternalLink,
    href: 'https://www.xiaohongshu.com/user/profile/xiaobing38233',
  },
];

// 核心能力数据
const abilities = [
  {
    icon: Sparkles,
    title: '运营能力',
    description: '公众号运营 7800+ 粉丝，小红书变现 3000+',
    highlights: ['内容创作', '用户增长', '流量变现'],
  },
  {
    icon: Layers,
    title: 'AI 工具能力',
    description: '使用 AI 工具搭建网站、完成复杂任务',
    highlights: ['网站搭建', '效率提升', '工具应用'],
  },
  {
    icon: Target,
    title: 'SOP 制定能力',
    description: '将复杂流程转化为可执行的标准化操作',
    highlights: ['流程优化', '标准化', '文档输出'],
  },
];

// 工作经历数据
const experiences = [
  {
    company: '滴滴-橙心优选',
    role: '品控专员',
    period: '2021.07 - 2021.12',
    achievements: [
      '独立负责 8 家供应商质量管控，将问题发生率从 20% 降至 0%',
      '主导农残检测流程再造，检测效率提升 50%',
      '完成 50 份产品验收标准编写，覆盖全品类生鲜',
      '输出 122 页结构化培训文档',
    ],
  },
  {
    company: '贾令熏肉',
    role: '品质标准化',
    period: '2024.03 - 至今',
    achievements: [
      '建立标准化配方数据库，解决批次品质波动问题',
      '制定关键控制点检测规范',
      '完成亚硝酸盐含量测定与合规评估',
    ],
  },
];

// 项目作品数据
const projects = [
  {
    title: '公众号「小冰爱分享」',
    description: '软件安装教程与技术分享',
    stats: [
      { label: '粉丝', value: '7,800+' },
      { label: '变现', value: '600+ 元' },
    ],
  },
  {
    title: '小红书「山西农业大学食加」',
    description: '考研专业课资料分享',
    stats: [
      { label: '引流', value: '60+ 人' },
      { label: '变现', value: '3,000+ 元' },
    ],
  },
  {
    title: '学院官方公众号运营',
    description: '负责日常推文编辑',
    stats: [
      { label: '平均阅读', value: '100+' },
    ],
  },
  {
    title: '微电影剪辑',
    description: '从 0 学习视频剪辑',
    stats: [
      { label: '时长', value: '10 分钟' },
    ],
  },
];

// 教育背景数据
const education = [
  {
    school: '山西农业大学',
    major: '食品加工与安全',
    degree: '硕士',
    period: '2023.09 - 2026.06',
    details: [
      '研究课题：卤制牛肉生产过程中微生物污染分析及复合天然保鲜剂的应用',
      '使用 R 语言进行显著性分析和数据可视化',
      '成功分离并筛选出 2 种核心致腐菌株',
      '以第一作者在投 SCI 论文 2 篇，发表中文核心期刊论文 1 篇',
    ],
  },
  {
    school: '华中农业大学',
    major: '食品科学与工程',
    degree: '本科（交流学习）',
    period: '2019.09 - 2020.07',
    details: [],
  },
  {
    school: '塔里木大学',
    major: '食品科学与工程',
    degree: '本科',
    period: '2017.09 - 2021.06',
    details: [],
  },
];

// 滚动动画 Hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const { copied, copy } = useCopyToClipboard();
  const [showQRCode, setShowQRCode] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement>(null);
  
  useScrollReveal();

  // 点击外部关闭二维码
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (qrCodeRef.current && !qrCodeRef.current.contains(event.target as Node)) {
        setShowQRCode(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* 导航栏 */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-lg font-medium text-gradient">小冰</span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">关于</a>
            <a href="#experience" className="hover:text-foreground transition-colors">经历</a>
            <a href="#projects" className="hover:text-foreground transition-colors">作品</a>
            <a href="#contact" className="hover:text-foreground transition-colors">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero 首屏 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* 背景光效 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[200px] bg-primary/3 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center animate-fade-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 glass-panel rounded-full text-sm text-muted-foreground">
              复合型人才 · 会运营 · 能用AI工具搭建网站
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            <span className="text-gradient">小冰</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            把复杂事物变成可执行的
            <span className="text-foreground font-medium">SOP</span>
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="glass-panel glass-glow px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 btn-apple"
            >
              联系我
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              了解更多
            </a>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </section>

      {/* 核心能力 */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <h2 className="text-2xl font-semibold mb-4">核心能力</h2>
            <p className="text-muted-foreground">多元化技能组合，跨界融合创造价值</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {abilities.map((ability, index) => (
              <div
                key={ability.title}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center mb-4">
                  <ability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">{ability.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ability.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">工作经历</h2>
            </div>
            <p className="text-muted-foreground">专业经验与成果产出</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="scroll-reveal glass-panel rounded-2xl p-8"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium">{exp.company}</h3>
                    <p className="text-primary">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目作品 */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <h2 className="text-2xl font-semibold mb-4">项目作品</h2>
            <p className="text-muted-foreground">从 0 到 1 的创作实践</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
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

      {/* 教育背景 */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">教育背景</h2>
            </div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.school}
                className="scroll-reveal glass-panel rounded-2xl p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-medium">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.major} · {edu.degree}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                {edu.details.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">联系我</h2>
            <p className="text-muted-foreground">期待与你的交流</p>
          </div>

          <div className="scroll-reveal">
            <div className="glass-panel-lg rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* 联系方式列表 */}
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.type}
                      className="glass-panel glass-glow rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{contact.label}</div>
                          <div className="font-medium">{contact.value}</div>
                        </div>
                      </div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          访问
                        </a>
                      ) : (
                        <button
                          onClick={() => copy(contact.value)}
                          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4" />
                              已复制
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              复制
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* 公众号二维码 */}
                <div className="flex flex-col items-center justify-center" ref={qrCodeRef}>
                  <div
                    className="glass-panel glass-glow rounded-2xl p-6 cursor-pointer hover:bg-white/5 transition-all duration-300"
                    onClick={() => setShowQRCode(!showQRCode)}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 glass-panel rounded-xl flex items-center justify-center">
                        <QrCode className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <div className="font-medium">公众号「小冰爱分享」</div>
                        <div className="text-sm text-muted-foreground mt-1">点击扫码关注</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 二维码弹窗 */}
                  {showQRCode && (
                    <div className="absolute mt-4 glass-panel-lg rounded-2xl p-4 z-10">
                      <Image
                        src="/wechat-qr.jpg"
                        alt="公众号二维码"
                        width={200}
                        height={200}
                        className="rounded-xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground">
        <p>© 2025 小冰 · 用 AI 搭建</p>
      </footer>
    </div>
  );
}
