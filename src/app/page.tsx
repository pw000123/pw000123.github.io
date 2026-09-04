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
  Users,
  Wrench,
  Briefcase,
  Microscope,
  GraduationCap,
  MapPin,
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

// 联系方式（求职版：只保留可被 HR 直接使用的入口）
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

// 核心能力：由盖洛普前十才干翻译而来
const abilities = [
  {
    icon: Search,
    title: '问题定位与根因分析',
    talents: '思维 · 排难 · 分析',
    highlights: ['污染点定位', '致腐菌分离', '根因归因'],
    detail: '平遥牛肉全流程微生物监测，锁定分割环节为核心污染点并分离致腐菌株',
  },
  {
    icon: ClipboardList,
    title: '标准体系搭建与落地',
    talents: '纪律 · 责任 · 专注',
    highlights: ['验收标准', 'SOP 编写', '现场培训'],
    detail: '1 个月完成 50 份生鲜验收标准，输出 122 页 SOP 覆盖 3 个岗位',
  },
  {
    icon: Database,
    title: '知识沉淀与数据库建设',
    talents: '搜集',
    highlights: ['配方数据库', '知识体系', '文档工程'],
    detail: '飞书搭建 20+ 香辛料精准配比数据库，解决批次间品质波动',
  },
  {
    icon: Users,
    title: '跨部门协同与快速上手',
    talents: '包容 · 和谐 · 适应',
    highlights: ['合规推动', '供应商培训', '跨界适应'],
    detail: '发现标签违规后联动采购推动商品下架，规避 GB 7718 合规风险',
  },
];

// 专业技能
const skillGroups = [
  {
    title: '法规与标准',
    items: ['GB 7718 食品标签', 'GB 2760 食品添加剂', 'GB 5009 系列检验', '标签合规审核'],
  },
  {
    title: '微生物检测',
    items: ['菌落总数', '腐败菌分离筛选', '16S 测序', '大肠菌群'],
  },
  {
    title: '理化指标检测',
    items: ['pH', 'TVB-N', 'TBARS', '盐度', '亚硝酸盐'],
  },
  {
    title: '数据与工具',
    items: ['R 语言', 'SQL', 'Excel 透视表', 'XMind', 'Markdown', '飞书'],
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

// 科研成果
const researchHighlights = [
  { value: 'SCI 2区', label: '一作论文', detail: 'International Journal of Refrigeration' },
  { value: '1 篇', label: '中文核心', detail: '第一作者' },
  { value: '14 → 21 天', label: '4℃ 货架期', detail: '复合天然保鲜剂应用验证' },
  { value: '分割环节', label: '核心污染点', detail: '全流程微生物监测定位' },
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
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-lg font-medium text-gradient font-serif">栗晓东</span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">能力</a>
            <a href="#experience" className="hover:text-foreground transition-colors">经历</a>
            <a href="#research" className="hover:text-foreground transition-colors">科研</a>
            <a href="#education" className="hover:text-foreground transition-colors">教育</a>
            <a href="#contact" className="hover:text-foreground transition-colors">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero 首屏 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[200px] bg-primary/3 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center animate-fade-up">
          <div className="mb-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/80 font-sans">
            食品质量管理 · Quality Assurance · Portfolio 2026
          </div>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 glass-panel rounded-full text-sm text-muted-foreground">
              硕士 · SCI 2区一作 · 可立即到岗
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            <span className="text-gradient">栗晓东</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
            把混乱的质量问题，变成
            <span className="text-foreground font-medium">可查、可标、可验证</span>
            的体系
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>现居山西大同 · 2026.07 已毕业 · 可立即到岗</span>
          </div>

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
              查看经历
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </section>

      {/* 核心能力 */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <h2 className="text-2xl font-semibold mb-4">核心能力</h2>
            <p className="text-muted-foreground">由盖洛普前十才干提炼，每一项都有可验证的产出</p>
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
            <p className="text-muted-foreground">法规、检测与数据工具的具体清单</p>
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
            <p className="text-muted-foreground">求职ing，期待与你的交流</p>
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
                  <h3 className="text-lg font-medium mb-3">求职意向</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    食品质量管理、生鲜品控、食品安全合规、研发支持方向。
                    现居山西大同，可立即到岗，接受出差与驻厂。
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['生鲜品控', '质量管理', '食品安全', '合规审核'].map((tag) => (
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
        <p>© 2026 栗晓东 · 用 AI 搭建</p>
      </footer>
    </div>
  );
}
