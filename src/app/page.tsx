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
  QrCode,
  MapPin,
  Calendar,
  Building2,
  Star,
  Zap,
  Heart,
  ArrowRight
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
    href: 'https://xhslink.com/m/9hAYkwOOgaw',
  },
];

// 核心能力数据
const abilities = [
  {
    icon: Sparkles,
    title: '运营能力',
    description: '公众号运营 7800+ 粉丝，小红书变现 3000+',
    highlights: ['内容创作', '用户增长', '流量变现'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Layers,
    title: 'AI 工具能力',
    description: '使用 AI 工具搭建网站、完成复杂任务',
    highlights: ['网站搭建', '效率提升', '工具应用'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'SOP 制定能力',
    description: '将复杂流程转化为可执行的标准化操作',
    highlights: ['流程优化', '标准化', '文档输出'],
    color: 'from-blue-500 to-cyan-500',
  },
];

// 个人标签
const tags = ['复合型人才', '内容运营', 'AI工具应用', '流程优化', '数据驱动'];

// 工作经历数据
const experiences = [
  {
    company: '滴滴-橙心优选',
    role: '品控专员',
    period: '2021.07 - 2021.12',
    location: '福州',
    type: '全职',
    achievements: [
      '独立负责 8 家供应商质量管控，将问题发生率从 20% 降至 0%',
      '主导农残检测流程再造，检测效率提升 50%',
      '完成 50 份产品验收标准编写，覆盖全品类生鲜',
      '输出 122 页结构化培训文档',
    ],
    skills: ['供应商管理', '质量控制', '流程优化', 'SQL', 'Excel'],
  },
  {
    company: '贾令熏肉',
    role: '品质标准化',
    period: '2024.03 - 至今',
    location: '山西晋中',
    type: '项目',
    achievements: [
      '建立标准化配方数据库，解决批次品质波动问题',
      '制定关键控制点检测规范',
      '完成亚硝酸盐含量测定与合规评估',
    ],
    skills: ['标准化', '数据分析', '质量控制', 'GB 2760'],
  },
  {
    company: '腾讯企鹅辅导',
    role: '产品运营官',
    period: '2019.12 - 2020.01',
    location: '线上',
    type: '实习',
    achievements: [
      '负责 3 个千人社群的日常活动运营',
      '成功与 100+ 高中生用户建立联系',
      '成功转化 50+ 用户到课',
    ],
    skills: ['社群运营', '用户促活', '转化'],
  },
  {
    company: 'CSDN',
    role: '社群运营专员',
    period: '2019.08 - 2019.11',
    location: '线上',
    type: '实习',
    achievements: [
      '负责 3 个 Python 社群的日常运营',
      '营造社群氛围，打造高黏性社群',
      '挖掘用户需求，制造话题保持活跃度',
    ],
    skills: ['社群运营', '用户运营', '内容策划'],
  },
];

// 项目作品数据
const projects = [
  {
    title: '公众号「小冰爱分享」',
    description: '软件安装教程与技术分享，知乎 10万+ 阅读爆款文章',
    stats: [
      { label: '粉丝', value: '7,800+', icon: Heart },
      { label: '变现', value: '600+元', icon: Zap },
    ],
    tags: ['内容创作', 'SEO', '流量主'],
  },
  {
    title: '小红书「山西农业大学食加」',
    description: '考研专业课资料分享，精准引流变现',
    stats: [
      { label: '引流', value: '60+人', icon: Star },
      { label: '变现', value: '3,000+元', icon: Zap },
    ],
    tags: ['小红书运营', '引流', '变现'],
  },
  {
    title: '学院官方公众号运营',
    description: '负责日常推文编辑与发布',
    stats: [
      { label: '平均阅读', value: '100+', icon: Star },
    ],
    tags: ['公众号运营', '内容编辑'],
  },
  {
    title: '微电影剪辑',
    description: '从 0 学习视频剪辑，完成 10 分钟微电影',
    stats: [
      { label: '学习周期', value: '1周', icon: Zap },
    ],
    tags: ['视频剪辑', '自学能力'],
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
      '研究课题：卤制牛肉微生物污染分析及复合天然保鲜剂应用',
      '使用 R 语言进行显著性分析和数据可视化',
      '分离筛选出 2 种核心致腐菌株',
      '第一作者在投 SCI 论文 2 篇，发表中文核心期刊 1 篇',
    ],
    highlights: ['SCI 论文', 'R 语言', '数据分析'],
  },
  {
    school: '华中农业大学',
    major: '食品科学与工程',
    degree: '本科（交流学习）',
    period: '2019.09 - 2020.07',
    details: [],
    highlights: ['985高校', '交流学习'],
  },
  {
    school: '塔里木大学',
    major: '食品科学与工程',
    degree: '本科',
    period: '2017.09 - 2021.06',
    details: [],
    highlights: [],
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
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* 动态背景 */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 点阵背景 */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        
        {/* 渐变光斑 */}
        <div className="decoration-orb w-[600px] h-[400px] top-0 left-1/4 bg-gradient-to-r from-orange-500/20 to-amber-500/10" />
        <div className="decoration-orb w-[500px] h-[300px] top-1/3 right-0 bg-gradient-to-r from-purple-500/15 to-pink-500/10" />
        <div className="decoration-orb w-[400px] h-[300px] bottom-1/4 left-0 bg-gradient-to-r from-blue-500/15 to-cyan-500/10" />
        
        {/* 动态粒子 */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-400/60 rounded-full animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      {/* 导航栏 */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-gradient-animated">小冰</span>
          <div className="hidden md:flex items-center gap-1">
            {['关于我', '工作经历', '项目作品', '教育背景', '联系方式'].map((item, index) => (
              <a
                key={item}
                href={['#about', '#experience', '#projects', '#education', '#contact'][index]}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="btn-primary px-5 py-2 rounded-full text-sm font-medium text-white relative z-10"
          >
            <span className="relative z-10">联系我</span>
          </a>
        </div>
      </nav>

      {/* Hero 首屏 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 relative pt-20">
        <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-up">
          {/* 欢迎标签 */}
          <div className="mb-8">
            <span className="capsule capsule-primary">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              欢迎来到我的世界
            </span>
          </div>
          
          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            你好，我是{' '}
            <span className="text-gradient-animated">小冰</span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            把复杂事物变成可执行的 <span className="text-foreground font-medium">SOP</span>
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            复合型人才 · 会运营 · 能用 AI 工具搭建网站
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 行动按钮 */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="btn-primary px-6 py-3 rounded-xl font-medium text-white flex items-center gap-2 group relative z-10"
            >
              <span className="relative z-10">查看作品集</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-secondary px-6 py-3 rounded-xl font-medium text-foreground"
            >
              联系我
            </a>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="capsule capsule-primary">
                <Sparkles className="w-4 h-4" />
                关于我
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              多元技能，<span className="text-gradient">跨界融合</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              从食品专业到运营实践，从内容创作到 AI 工具应用，不断探索、持续成长
            </p>
          </div>

          {/* 能力卡片 */}
          <div className="grid md:grid-cols-3 gap-6">
            {abilities.map((ability, index) => (
              <div
                key={ability.title}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ability.color} p-0.5 mb-5`}>
                  <div className="w-full h-full rounded-[10px] bg-background/90 flex items-center justify-center">
                    <ability.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{ability.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ability.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-muted-foreground border border-white/10"
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

      {/* 工作经历 - 时间轴设计 */}
      <section id="experience" className="py-20 md:py-32 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Work Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              工作<span className="text-gradient">经历</span>
            </h2>
            <p className="text-muted-foreground">持续成长，不断突破自我边界</p>
          </div>

          <div className="relative">
            {/* 时间轴线条 */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`scroll-reveal relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* 时间轴圆点 */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full md:-translate-x-1/2 top-8 shadow-lg shadow-orange-500/30" />
                  
                  {/* 内容卡片 */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-panel glass-glow rounded-2xl p-6 card-hover">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-muted-foreground border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* 占位 */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 项目作品 */}
      <section id="projects" className="py-20 md:py-32 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              项目<span className="text-gradient">作品</span>
            </h2>
            <p className="text-muted-foreground">从 0 到 1 的创作实践</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex gap-6 mb-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gradient">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-muted-foreground border border-white/10"
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

      {/* 教育背景 */}
      <section id="education" className="py-20 md:py-32 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Education</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              教育<span className="text-gradient">背景</span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.school}
                className="scroll-reveal glass-panel glass-glow rounded-2xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                    <p className="text-muted-foreground">
                      {edu.major} · {edu.degree}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>
                
                {edu.details.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {edu.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2.5 py-1 rounded-lg bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-muted-foreground border border-white/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-20 md:py-32 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              联系<span className="text-gradient">我</span>
            </h2>
            <p className="text-muted-foreground">期待与你的交流，一起创造更多可能</p>
          </div>

          <div className="scroll-reveal">
            <div className="glass-panel-lg rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* 联系方式列表 */}
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.type}
                      className="glass-panel glass-glow rounded-xl p-4 flex items-center justify-between card-hover"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                          <contact.icon className="w-5 h-5 text-orange-400" />
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
                          className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          访问
                        </a>
                      ) : (
                        <button
                          onClick={() => copy(contact.value)}
                          className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1"
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4 text-green-400" />
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
                    className="glass-panel glass-glow rounded-2xl p-8 cursor-pointer card-hover text-center"
                    onClick={() => setShowQRCode(!showQRCode)}
                  >
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <QrCode className="w-10 h-10 text-orange-400" />
                    </div>
                    <div className="font-semibold mb-1">公众号「小冰爱分享」</div>
                    <div className="text-sm text-muted-foreground">点击扫码关注</div>
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
      <footer className="py-8 px-4 md:px-8 text-center border-t border-white/5">
        <p className="text-sm text-muted-foreground">
          © 2025 小冰 · 用 <span className="text-gradient">AI</span> 搭建
        </p>
      </footer>
    </div>
  );
}
