'use client';

import { useEffect, useState } from 'react';
import {
  Copy,
  Check,
  Mail,
  MessageCircle,
  ChevronDown,
  Search,
  ClipboardList,
  Database,
  Sparkles,
  Wrench,
  Briefcase,
  TrendingUp,
  Microscope,
  GraduationCap,
  MapPin,
  Globe,
  PenLine,
  Table2,
  FileStack,
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

const contacts = [
  {
    type: 'email',
    label: '邮箱',
    value: 'lixiaodong0023@163.com',
    icon: Mail,
    href: 'mailto:lixiaodong0023@163.com',
  },
  {
    type: 'wechat',
    label: '微信',
    value: 'xiaobing38233',
    icon: MessageCircle,
  },
];

// 核心能力：综合版（AI / 体系 / 运营 / 数据），由盖洛普前十才干翻译而来
const abilities = [
  {
    icon: Sparkles,
    title: 'AI 工具深度应用',
    talents: '思维 · 搜集 · 学习',
    highlights: ['AI 建站', '资料整理', '提效流水线'],
    detail:
      '用 WorkBuddy、Codex 等 AI 工具从 0 搭建并部署本站（Next.js + GitHub Pages 自动部署），批量重构课程笔记与复习资料，把重复劳动交给工具',
  },
  {
    icon: ClipboardList,
    title: '体系搭建与流程标准化',
    talents: '纪律 · 责任 · 专注',
    highlights: ['SOP 编写', '验收标准', '现场培训'],
    detail:
      '1 个月完成 50 份生鲜验收标准，梳理采购、履约、品控 3 个岗位流程，输出 122 页结构化 SOP 培训文档',
  },
  {
    icon: TrendingUp,
    title: '内容运营与变现',
    talents: '适应 · 包容 · 和谐',
    highlights: ['公众号 100+ 篇', '知乎 12 万阅读', '资料变现'],
    detail:
      '从软件教程、考研资料到答辩 PPT 模板，多个内容方向从 0 做起并实现变现，擅长把知识整理成别人愿意付费的形态',
  },
  {
    icon: Database,
    title: '数据分析与问题定位',
    talents: '排难 · 分析',
    highlights: ['R 语言', 'SQL', '归因分析'],
    detail:
      '客诉数据五维归因（顾客 / 品类 / 供应商 / 仓配 / 问题类型）、菌群测序数据分析、高校录取数据看板搭建',
  },
];

// 专业技能
const skillGroups = [
  {
    title: 'AI 与工具',
    items: ['WorkBuddy', 'Codex / ChatGPT', 'Next.js 建站', 'Git / GitHub Pages', '飞书多维表格'],
  },
  {
    title: '数据分析',
    items: ['R 语言', 'SQL', 'Excel 透视表', 'XMind', 'Markdown'],
  },
  {
    title: '食品法规与检测',
    items: ['GB 7718 标签', 'GB 2760 添加剂', 'GB 5009 检验', '微生物检测', '理化指标'],
  },
  {
    title: '内容与运营',
    items: ['公众号排版', '知乎长文', '小红书', '资料整理', 'PPT 模板设计'],
  },
];

// 工作经历
const experiences = [
  {
    company: '橙心优选（成都）科技发展有限公司',
    role: '生鲜品控专员 · 品质管理部',
    period: '2021.07 - 2021.12',
    achievements: [
      '独立负责 8 家供应商质量管控与现场培训，问题发生率从 20% 降至 0%',
      '审核中发现某品牌葡萄干标签不符合 GB 7718，联动采购推动商品下架，规避合规风险',
      '1 个月内完成 50 份闽浙大区生鲜验收标准 2.0 编写，覆盖蔬果等全品类',
      '用 SQL 与 Excel 透视表对客诉数据做五维归因（顾客 / 品类 / 供应商 / 仓配 / 问题类型），输出周报月报',
      '梳理采购、履约、品控 3 个岗位核心流程，XMind + Markdown 输出 122 页结构化 SOP 培训文档',
    ],
  },
  {
    company: '贾令熏肉',
    role: '品质标准化',
    period: '2026.03 - 2026.06',
    achievements: [
      '对原有香辛料配方做系统定量分析，飞书建立 20+ 香辛料精准配比数据库，解决批次间口味波动',
      '掌握盐度计、大肠菌群检测、亚硝酸盐测定等方法，制定操作规程并培训一线生产人员',
      '快速检测法结合国标 GB 5009.33 完成亚硝酸盐测定，对照 GB 2760 做合规评估与整改建议',
    ],
  },
];

// AI 与运营实践
const practices = [
  {
    icon: Globe,
    title: '用 AI 搭建并部署本站',
    description:
      'Next.js + Tailwind + GitHub Actions 自动部署，从设计、开发到上线全程 AI 协作完成——你正在看的这个网站就是作品之一。',
  },
  {
    icon: PenLine,
    title: '内容账号从 0 到变现',
    description:
      '公众号软件教程 100+ 篇；知乎回答最高 12 万阅读；小红书考研资料整理变现，答辩 PPT 模板售出 100+ 份。',
  },
  {
    icon: Table2,
    title: '数据资料产品化',
    description:
      '把高校食品学院近 6 年研究生录取数据整理为飞书多维表格看板；将零散课程资料重构为结构化笔记并售出。',
  },
  {
    icon: FileStack,
    title: 'AI 提效流水线',
    description:
      '用 AI 批量重构课程视频笔记、整理考研复习资料、辅助论文数据分析（R 语言 + 高通量测序），形成一套可复用的个人提效工作流。',
  },
];

// 科研成果
const researchHighlights = [
  { value: 'SCI 2区', label: '一作论文', detail: 'International Journal of Refrigeration' },
  { value: '1 篇', label: '中文核心', detail: '第一作者' },
  { value: '14 → 21 天', label: '4℃ 货架期', detail: '复合天然保鲜剂应用验证' },
  { value: 'R + 测序', label: '数据分析', detail: '菌群群落结构与显著性分析' },
];

// 教育背景
const education = [
  {
    school: '山西农业大学',
    major: '食品加工与安全',
    degree: '硕士',
    period: '2023.09 - 2026.07',
    details: [
      '研究课题：卤制牛肉生产过程中微生物污染分析及复合天然保鲜剂应用',
      '对平遥牛肉全流程进行微生物污染监测，分离并筛选核心致腐菌株',
      '使用 R 语言进行显著性分析与数据可视化',
    ],
  },
  {
    school: '华中农业大学',
    major: '食品科学与工程',
    degree: '本科（交流学习）',
    period: '2019.08 - 2020.05',
    details: [],
  },
  {
    school: '塔里木大学',
    major: '食品科学与工程',
    degree: '本科',
    period: '2017.09 - 2021.07',
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

  useScrollReveal();

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* 导航栏 */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-gradient font-serif">小冰</span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-sans hidden sm:inline">
              XIAOBING
            </span>
          </span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">能力</a>
            <a href="#experience" className="hover:text-foreground transition-colors">经历</a>
            <a href="#practice" className="hover:text-foreground transition-colors">实践</a>
            <a href="#education" className="hover:text-foreground transition-colors">教育</a>
            <a href="#contact" className="hover:text-foreground transition-colors">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero 首屏：满版水彩杂志刊头 */}
      <section className="hero-pano min-h-screen flex flex-col relative overflow-hidden">
        {/* 中央刊头 */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-44 relative z-10 animate-fade-up">
          <div className="text-[11px] tracking-[0.45em] text-muted-foreground font-sans mb-2">
            PERSONAL PORTFOLIO
          </div>
          <div className="text-[11px] tracking-[0.35em] text-primary/80 font-sans mb-8">
            ISSUE 01 · 2026
          </div>

          <h1 className="text-7xl md:text-8xl font-semibold text-gradient tracking-[0.08em] mb-8">
            小冰
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-5 max-w-xl mx-auto leading-relaxed">
            把复杂的事物，变成
            <span className="text-foreground font-medium">可执行的 SOP</span>
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <MapPin className="w-4 h-4" />
            <span>食品背景 × AI 实践 × 内容运营 × 数据分析</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="#contact" className="btn-apple">
              联系我
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-xl font-medium border border-border text-foreground hover:border-primary/60 hover:text-primary transition-colors flex items-center gap-2 bg-transparent"
            >
              查看经历 <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* 右侧竖排标签列 */}
        <div className="hidden lg:flex flex-col items-end gap-2 absolute right-8 top-[36%] text-[10px] tracking-[0.28em] text-muted-foreground/70 font-sans z-10">
          <span>FOOD SCIENCE</span>
          <span className="text-primary/50">×</span>
          <span>AI PRACTICE</span>
          <span className="text-primary/50">×</span>
          <span>CONTENT OPERATION</span>
          <span className="text-primary/50">×</span>
          <span>DATA ANALYSIS</span>
        </div>

        {/* 右下角画面标注 */}
        <div className="hidden md:block absolute right-8 bottom-14 text-right text-[10px] tracking-[0.3em] text-muted-foreground/70 font-sans z-10 leading-loose">
          YARRA RIVER<br />MELBOURNE<br />2026
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-float">
          <ChevronDown className="w-5 h-5 text-muted-foreground/60" />
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground/60 font-sans">SCROLL</span>
        </div>
      </section>

      {/* 核心能力 */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <h2 className="text-2xl font-semibold mb-4">核心能力</h2>
            <p className="text-muted-foreground">AI、体系、运营、数据四条线，每一项都有可验证的产出</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {abilities.map((ability, index) => (
              <div
                key={ability.title}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center mb-4">
                  <ability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-1">{ability.title}</h3>
                <div className="text-xs text-primary mb-3 tracking-wide">{ability.talents}</div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{ability.detail}</p>
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

      {/* 专业技能 */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">专业技能</h2>
            </div>
            <p className="text-muted-foreground">AI、数据、食品、运营的具体清单</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className="scroll-reveal glass-panel rounded-2xl p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-base font-medium mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground"
                    >
                      {item}
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
            <p className="text-muted-foreground">从生鲜电商品控到传统肉制品标准化</p>
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

      {/* AI 与运营实践 */}
      <section id="practice" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">AI 与运营实践</h2>
            </div>
            <p className="text-muted-foreground">课堂和实验室之外，我用 AI 和内容做了这些事</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((item, index) => (
              <div
                key={item.title}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 科研成果 */}
      <section id="research" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">科研成果</h2>
            </div>
            <p className="text-muted-foreground">硕士期间的可验证产出</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchHighlights.map((item, index) => (
              <div
                key={item.label}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-semibold text-gradient mb-2">{item.value}</div>
                <div className="text-sm font-medium mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.detail}</div>
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
            <p className="text-muted-foreground">欢迎交流 AI 工具、内容运营或食品质量的任何话题</p>
          </div>

          <div className="scroll-reveal">
            <div className="glass-panel-lg rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
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
                          发信
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

                <div className="text-center md:text-left">
                  <h3 className="text-lg font-medium mb-3">关于我</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    食品硕士出身，但不止于食品：既做过品控与标准体系，也用 AI
                    搭网站、写教程、做数据看板。相信把复杂事物拆解成可执行的
                    SOP，是跨领域都管用的底层能力。
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['AI 工具', '内容运营', '数据分析', '食品质量'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground">
        <p>© 2026 小冰 · 用 AI 搭建</p>
      </footer>
    </div>
  );
}
