import { useEffect, useMemo, useState } from "react";
import {
  Github,
  Mail,
  ChevronUp,
  Moon,
  Sun,
  User,
  FolderKanban,
  Trophy,
  Code2,
  Sparkles,
  GraduationCap,
  Download,
  ExternalLink,
  Menu,
  X,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const profile = {
  name: "李梓琳 - Elina",
  role: "中山大学系统科学与工程学院 信息工程专业",
  intro:
    "关注 AI 应用、工程实现与科研项目落地，重视从问题定义、系统搭建、实验验证到成果输出的完整链路，强调可复现、可验证、可交付。",
  emailWork: "18675122066@163.com",
  emailSchool: "lizlin28@mail2.sysu.edu.cn",
  github: "https://github.com/xiaochenxiny",
  resume: "/Elina resume.pdf",
};

const navItems = [
  { label: "首页", href: "#home" },
  { label: "关于我", href: "#about" },
  { label: "产品实践经历", href: "#owns" },
  { label: "项目经历", href: "#projects" },
  { label: "技能栈", href: "#skills" },
  { label: "成果奖项", href: "#awards" },
  { label: "联系方式", href: "#contact" },
];

const stats = [
  { label: "项目实践", value: "嵌入式Agent-信息物理-电力自动脚本" },
  { label: "成果能力", value: "论文，发明专利，CET-6" },
  { label: "工具使用", value: "Cursor，Coze，Visio" },
];

const owns = [
  {
    title: "实习经历-嵌入式AI Agent",
    period: "2025.6- 2025.8",
    role: "AI实习生",
    description:
      "参与面向嵌入式开发场景的 AI Agent 产品开发与实践，目标是打通从需求理解、任务拆解到代码生成、编译烧录与调试反馈的开发闭环，提升嵌入式开发流程的自动化程度与交付效率。",
    stack: ["Python", "嵌入式", "Tool Calling", "Prompt Engineering"],
    contribution:
      "参与 Agent 整体架构设计与结果调优，重点负责 Planner 模块与 Tool 模块的设计、联调与优化",
    highlights: [
      "目前产品在内测阶段",
    ],
  },
  {
    title: "个人项目-AI语音实时转写助手",
    period: "2025 - 至今",
    role: "独立开发(Vibe Coding)",
    description:
      "针对线上会议、课程学习、访谈记录及视频内容难以及时沉淀的问题，设计并开发 AI 语音转写助手，支持音频采集、语音识别、内容整理与总结输出，提升信息记录与会后整理效率。",
    stack: ["Python", "Javasript", "Vercel", "Github"],
    contribution:
      "前后端分离。前端采用React+Vite搭建交互界面，后端利用Python+FastAPI搭建接口服务，调用faster-whisper完成语音识别。",
    highlights: [
      "前端已发布，后端暂时只支持本地部署",
      "前端链接: https://transcribe-seven-mauve.vercel.app/",
    ],
  },
{
  title: "个人项目-Coze数模竞赛备赛助手",
  period: "2025 - 至今",
  role: "独立设计与搭建",
  description:
    "基于 Coze 搭建面向大学生数学建模竞赛的 AI 备赛助手，帮助用户完成题型识别、方法推荐、备赛规划、论文写作指导与比赛策略分析。",
  stack: ["Coze", "Prompt Engineering", "Knowledge Base", "Workflow Design"],
  contribution:
    "完成助手人设设计、Prompt 优化与知识库模块化整理，围绕数模竞赛高频场景构建结构化问答能力；结合备赛流程、常见模型方法、论文写作规范与代码模板，提升助手输出的针对性、可执行性与场景适配度。",
  highlights: [
    "支持题型识别、方法讲解等内容",
  ],
},

];

const projects = [
  {
    title: "面向 SPICE 自动化电路仿真脚本生成工具",
    period: "2025.10 - 2026.02",
    role: "核心成员",
    description:
      "参与电路仿真脚本自动生成工具开发，构建自动化 SPICE 仿真流程。相关成果《A SPICE Circuit Simulation Tool with Automatic Script-Generation》以第一作者投稿 IEEE PESGM 并被接收。",
    stack: ["Python", "SPICE", "Xyce/Ngspice", "脚本自动化", "实验验证"],
    contribution:
      "将复杂电路仿真流程拆解为模块化组件，参与系统模型到仿真脚本的自动转换实现，支持仿真任务批量生成与执行；同时编写与调试实验脚本，对输出结果进行样例校验和差异分析，持续优化流程正确性与复用性。",
    highlights: [
      "IEEE PESGM 论文接收",
      "支持批量仿真任务生成",
      "提升流程自动化与复用性",
    ],
  },
  {
    title: "AI+物理驱动的大规模传热反演方法研究",
    period: "2025.06 - 至今",
    role: "核心成员",
    description:
      "参与基于深度学习与物理约束的热通量预测研究，相关成果以第二发明人申请专利《基于物理信息驱动TransUNet的沸腾表面热通量高分辨率软测量方法》。",
    stack: ["Python", "Deep Learning", "TransUNet", "PINN", "数据处理"],
    contribution:
      "参与正问题数据生成流程搭建，编写数据处理与实验脚本，为模型训练提供高质量数据支持；围绕模型稳定性、泛化能力与输出一致性开展实验验证，整理 badcase 并分析问题成因，为后续迭代优化提供依据。",
    highlights: [
      "专利申请第二发明人",
      "构建高质量数据流程",
      "支持模型稳定性与泛化分析",
    ],
  },
  {
    title: "百度网盘校园推广项目",
    period: "2024.04 - 2024.12",
    role: "执行大使",
    description:
      "围绕校园用户资料获取、资源搜索与内容使用场景开展推广与反馈收集，从 0 搭建覆盖 500 余人的微信群并持续沉淀用户需求。",
    stack: ["用户运营", "内容策划", "数据整理", "视频剪辑", "活动执行"],
    contribution:
      "持续收集用户高频反馈并完成需求归纳；围绕不同使用场景策划活动内容，跟踪用户转化与参与效果；完成采访脚本、拍摄与后期剪辑，协同团队推进宣传活动落地。",
    highlights: [
      "搭建 500+ 用户社群",
      "单条视频浏览量过万",
      "形成需求整理与活动优化闭环",
    ],
  },
];

const skillGroups = [
  {
    title: "编程语言",
    icon: Code2,
    items: ["Python", "C++", "TypeScript", "MATLAB", "SQL"],
  },
  {
    title: "开发工具",
    icon: FolderKanban,
    items: ["Git/GitHub", "VS Code", "Cursor", "Jupyter", "Linux", "LaTeX"],
  },
  {
    title: "AI / 数据能力",
    icon: Sparkles,
    items: [
      "Prompt Engineering",
      "Vibe Coding",
      "数据处理",
      "可视化表达",
      "文档撰写",
    ],
  },
];

const awards = [
  {
    title: "国家级荣誉",
    detail: "第十五届 MathorCup 数学应用挑战赛全国一等奖｜队长（2025.06）",
  },
  {
    title: "省级荣誉",
    detail:
      "全国大学生数学建模竞赛广东赛区二等奖｜核心成员（2025.11）；第十四届全国海洋航行器设计与制作大赛华南赛区三等奖｜核心成员（2025.08）",
  },
  {
    title: "校级荣誉",
    detail:
      "中山大学 2024 年一星级志愿者（2025.03）；中山大学校级优秀学生一等奖学金、三等奖学金（2023-2025）；中山大学何文伉俪奖助学金（2023-2025）；中山大学 2024 年寒招优秀志愿者（2024.11）",
  },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.35 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [ids]);

  return active;
}

function Tag({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: 999,
        padding: "8px 14px",
        fontSize: 13,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "inherit",
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, darkMode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "7px 12px",
          borderRadius: 999,
          fontSize: 12,
          marginBottom: 14,
          color: darkMode ? "#a1a1aa" : "#52525b",
          border: darkMode
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(24,24,27,0.08)",
          background: darkMode
            ? "rgba(255,255,255,0.04)"
            : "rgba(255,255,255,0.72)",
        }}
      >
        <Sparkles size={14} />
        <span>{eyebrow}</span>
      </div>
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(28px, 4vw, 42px)",
          lineHeight: 1.15,
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(
    () => ["home", "about", "owns", "projects", "skills", "awards", "contact"],
    []
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const theme = {
    bg: darkMode ? "#09090b" : "#f5f7fb",
    text: darkMode ? "#ffffff" : "#111827",
    subText: darkMode ? "#a1a1aa" : "#52525b",
    card: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.86)",
    cardBorder: darkMode ? "rgba(255,255,255,0.1)" : "rgba(24,24,27,0.08)",
    navBg: darkMode ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.78)",
    buttonBg: darkMode ? "#ffffff" : "#111827",
    buttonText: darkMode ? "#111827" : "#ffffff",
    secondaryButtonBg: darkMode ? "transparent" : "transparent",
    secondaryButtonText: darkMode ? "#ffffff" : "#111827",
    shadow: darkMode
      ? "0 10px 50px rgba(0,0,0,0.35)"
      : "0 10px 40px rgba(15,23,42,0.08)",
  };

  const sectionStyle = {
    padding: "88px 0",
    scrollMarginTop: 100,
  };

const containerStyle = {
  width: "min(1500px, calc(100% - 20px))",
  margin: "0 auto",
};

  return (
    <div
      style={{
        background: theme.bg,
        color: theme.text,
        minHeight: "100vh",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(34,211,238,0.10)",
            filter: "blur(90px)",
            top: -50,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.10)",
            filter: "blur(90px)",
            bottom: 30,
            right: 0,
          }}
        />
      </div>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(16px)",
          background: theme.navBg,
          borderBottom: `1px solid ${theme.cardBorder}`,
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
            gap: 16,
          }}
        >
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: theme.text,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                border: `1px solid ${theme.cardBorder}`,
                background: theme.card,
                fontWeight: 700,
              }}
            >
              ZL
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{profile.name}</div>
              <div style={{ fontSize: 12, color: theme.subText }}>Portfolio</div>
            </div>
          </a>

          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              gap: 28,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    color: isActive ? theme.text : theme.subText,
                    fontSize: 14,
                    transition: "0.2s",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div
            className="desktop-actions"
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <button
              onClick={() => setDarkMode((v) => !v)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                border: `1px solid ${theme.cardBorder}`,
                background: theme.card,
                color: theme.text,
                cursor: "pointer",
              }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 14,
                background: theme.buttonBg,
                color: theme.buttonText,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              联系我
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              display: "none",
              width: 42,
              height: 42,
              borderRadius: 14,
              border: `1px solid ${theme.cardBorder}`,
              background: theme.card,
              color: theme.text,
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              style={{
                borderTop: `1px solid ${theme.cardBorder}`,
                background: darkMode ? "rgba(9,9,11,0.98)" : "rgba(255,255,255,0.98)",
              }}
            >
              <div
                style={{
                  ...containerStyle,
                  padding: "16px 0 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      textDecoration: "none",
                      color: theme.text,
                      fontSize: 14,
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main style={{ position: "relative", zIndex: 1 }}>
        <section id="home" style={{ ...sectionStyle, paddingTop: 100 }}>
          <div
  style={{
    ...containerStyle,
    display: "grid",
    gridTemplateColumns: "1.3fr 0.9fr",
    gap: 32,
    alignItems: "center",
  }}
  className="hero-grid"
>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(34,211,238,0.10)",
                  border: "1px solid rgba(34,211,238,0.18)",
                  color: darkMode ? "#67e8f9" : "#0f766e",
                  fontSize: 14,
                  marginBottom: 20,
                }}
              >
                <Sparkles size={16} />
                个人主页
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(42px, 7vw, 68px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.045em",
                  fontWeight: 800,
                }}
              >
                {profile.name}
              </h1>

              <p
                style={{
                  marginTop: 18,
                  fontSize: "clamp(18px, 2vw, 22px)",
                  color: theme.subText,
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {profile.role}
              </p>

              <p
                style={{
                  marginTop: 22,
                  maxWidth: 760,
                  fontSize: 17,
                  lineHeight: 1.95,
                  color: theme.subText,
                }}
              >
                {profile.intro}
              </p>

<div
  className="hero-action-row"
  style={{
    marginTop: 34,
    display: "grid",
    gridTemplateColumns: "auto auto minmax(240px, 1fr)",
    gap: 14,
    alignItems: "stretch",
  }}
>
  <a
    href="#projects"
    style={{
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 22px",
      borderRadius: 16,
      background: theme.buttonBg,
      color: theme.buttonText,
      fontWeight: 600,
      whiteSpace: "nowrap",
      minHeight: 56,
    }}
  >
    查看项目 <ExternalLink size={16} />
  </a>

  <a
    href={profile.resume}
    style={{
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 22px",
      borderRadius: 16,
      border: `1px solid ${theme.cardBorder}`,
      background: theme.card,
      color: theme.text,
      fontWeight: 600,
      whiteSpace: "nowrap",
      minHeight: 56,
    }}
  >
    下载简历 <Download size={16} />
  </a>

  <div
    style={{
      minHeight: 56,
      borderRadius: 18,
      border: `1px solid ${theme.cardBorder}`,
      background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.72)",
      display: "flex",
      alignItems: "center",
      padding: "12px 16px",
      boxShadow: theme.shadow,
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: darkMode ? "#ffffff" : "#111827",
        color: darkMode ? "#111827" : "#ffffff",
        flexShrink: 0,
        marginRight: 12,
      }}
    >
      <Sparkles size={18} />
    </div>

    <div style={{ minWidth: 0 }}>
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: theme.text,
          lineHeight: 1.4,
        }}
      >
        尊崇第一性原理
      </div>
      <div
        style={{
          marginTop: 4,
          fontSize: 13,
          color: theme.subText,
          lineHeight: 1.6,
        }}
      >
        聚焦 AI 应用落地与可验证成果输出
      </div>
    </div>
  </div>
</div>

              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <Tag>AI 应用</Tag>
                <Tag>工程实践</Tag>
                <Tag>科研表达</Tag>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <div
                style={{
                  borderRadius: 30,
                  background: theme.card,
                  border: `1px solid ${theme.cardBorder}`,
                  boxShadow: theme.shadow,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 22,
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: darkMode ? "#ffffff" : "#111827",
                        color: darkMode ? "#111827" : "#ffffff",
                      }}
                    >
                      <User size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700 }}>个人概览</div>
                      <div style={{ fontSize: 13, color: theme.subText }}>
                        Personal Snapshot
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      background: "rgba(34,197,94,0.10)",
                      color: darkMode ? "#86efac" : "#15803d",
                      border: "1px solid rgba(34,197,94,0.18)",
                    }}
                  >
                    Available
                  </div>
                </div>

                <div style={{ display: "grid", gap: 14 }}>
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        borderRadius: 18,
                        padding: 16,
                        border: `1px solid ${theme.cardBorder}`,
                        background: darkMode
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.7)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: theme.subText,
                        }}
                      >
                        {item.label}
                      </div>
                      <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
                  <a
                    href={profile.github}
                    style={iconButtonStyle(theme)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} />
                  </a>
                  <a href={`mailto:${profile.emailWork}`} style={iconButtonStyle(theme)}>
                    <Mail size={16} />
                  </a>
                  <a href={`mailto:${profile.emailSchool}`} style={iconButtonStyle(theme)}>
                    <GraduationCap size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" style={sectionStyle}>
          <div style={containerStyle}>
            <SectionTitle eyebrow="About Me" title="关于我" darkMode={darkMode} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 22,
              }}
              className="about-grid"
            >
              <div style={cardStyle(theme, 28)}>
                <p style={paragraphStyle(theme)}>
                  我目前就读于中山大学，主要关注 AI 应用落地、系统建模与工程实现。相比单纯展示“会什么技术”，我更希望通过项目证明自己具备从问题拆解、流程搭建、实验验证到结果表达的完整能力。
                </p>
                <p style={{ ...paragraphStyle(theme), marginTop: 18 }}>
                  过往经历覆盖科研项目、工程工具开发、数学建模竞赛与校园推广实践，既有偏技术和实验验证的工作，也有面向用户反馈、内容策划与协同落地的经验。我希望把技术能力、表达能力与真实成果连接起来，形成更有说服力的个人作品集。
                </p>
              </div>

              <div style={{ display: "grid", gap: 22 }}>
                <div style={cardStyle(theme, 24)}>
                  <div style={miniTitleRow()}>
                    <GraduationCap size={18} />
                    <h3 style={miniTitleText()}>背景定位</h3>
                  </div>
                  <p style={smallParagraphStyle(theme)}>
                    中山大学信息工程本科生，经历覆盖科研、建模竞赛、工程工具开发与校园项目实践，适合展示为“具备技术理解与落地执行能力”的复合型候选人。
                  </p>
                </div>

                <div style={cardStyle(theme, 24)}>
                  <div style={miniTitleRow()}>
                    <Sparkles size={18} />
                    <h3 style={miniTitleText()}>个人特色</h3>
                  </div>
                  <p style={smallParagraphStyle(theme)}>
                    个人特色可概括为：一是重视把复杂问题拆成可执行流程，二是兼顾技术实现、实验分析与成果表达，既能做事，也能把事情讲清楚。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="owns" style={sectionStyle}>
          <div style={containerStyle}>
            <SectionTitle
              eyebrow="Product Practice"
              title="产品实践经历"
              darkMode={darkMode}
            />

            <div className="owns-grid" style={grid2Style()}>
              {owns.map((own, index) => (
                <motion.div
                  key={own.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div style={projectCardStyle(theme)}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 14,
                        marginBottom: 18,
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: 22,
                            lineHeight: 1.35,
                            fontWeight: 700,
                          }}
                        >
                          {own.title}
                        </h3>
                        <div
                          style={{
                            marginTop: 10,
                            display: "flex",
                            gap: 10,
                            flexWrap: "wrap",
                            fontSize: 13,
                            color: theme.subText,
                          }}
                        >
                          <span>{own.role}</span>
                          <span>·</span>
                          <span>{own.period}</span>
                        </div>
                      </div>

                      <div
                        style={{
                          borderRadius: 14,
                          padding: 10,
                          border: `1px solid ${theme.cardBorder}`,
                          background: darkMode
                            ? "rgba(255,255,255,0.03)"
                            : "rgba(255,255,255,0.7)",
                        }}
                      >
                        <Briefcase size={18} />
                      </div>
                    </div>

                    <p style={smallParagraphStyle(theme)}>{own.description}</p>

                    <div style={{ marginTop: 18 }}>
                      <div style={eyebrowText(theme)}>技术栈</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                        {own.stack.map((item) => (
                          <span key={item} style={badgeStyle(theme)}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <p style={{ ...smallParagraphStyle(theme), margin: 0 }}>
                        <span style={{ color: theme.text, fontWeight: 700 }}>个人贡献：</span>
                        {own.contribution}
                      </p>
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <div style={eyebrowText(theme)}>成果亮点</div>
                      <ul
                        style={{
                          margin: "10px 0 0",
                          paddingLeft: 18,
                          color: theme.subText,
                          lineHeight: 1.9,
                          fontSize: 14,
                        }}
                      >
                        {own.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" style={sectionStyle}>
          <div style={containerStyle}>
            <SectionTitle
              eyebrow="Selected Projects"
              title="项目经历"
              darkMode={darkMode}
            />

            <div className="project-grid" style={grid3Style()}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div style={projectCardStyle(theme)}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 14,
                        marginBottom: 18,
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: 22,
                            lineHeight: 1.35,
                            fontWeight: 700,
                          }}
                        >
                          {project.title}
                        </h3>
                        <div
                          style={{
                            marginTop: 10,
                            display: "flex",
                            gap: 10,
                            flexWrap: "wrap",
                            fontSize: 13,
                            color: theme.subText,
                          }}
                        >
                          <span>{project.role}</span>
                          <span>·</span>
                          <span>{project.period}</span>
                        </div>
                      </div>

                      <div
                        style={{
                          borderRadius: 14,
                          padding: 10,
                          border: `1px solid ${theme.cardBorder}`,
                          background: darkMode
                            ? "rgba(255,255,255,0.03)"
                            : "rgba(255,255,255,0.7)",
                        }}
                      >
                        <Briefcase size={18} />
                      </div>
                    </div>

                    <p style={smallParagraphStyle(theme)}>{project.description}</p>

                    <div style={{ marginTop: 18 }}>
                      <div style={eyebrowText(theme)}>技术栈</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                        {project.stack.map((item) => (
                          <span key={item} style={badgeStyle(theme)}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <p style={{ ...smallParagraphStyle(theme), margin: 0 }}>
                        <span style={{ color: theme.text, fontWeight: 700 }}>个人贡献：</span>
                        {project.contribution}
                      </p>
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <div style={eyebrowText(theme)}>成果亮点</div>
                      <ul
                        style={{
                          margin: "10px 0 0",
                          paddingLeft: 18,
                          color: theme.subText,
                          lineHeight: 1.9,
                          fontSize: 14,
                        }}
                      >
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" style={sectionStyle}>
          <div style={containerStyle}>
            <SectionTitle
              eyebrow="Skills & Toolkit"
              title="技能栈"
              darkMode={darkMode}
            />

            <div className="skill-grid" style={grid3Style()}>
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div style={cardStyle(theme, 24)}>
                      <div style={miniTitleRow()}>
                        <div
                          style={{
                            borderRadius: 12,
                            padding: 10,
                            border: `1px solid ${theme.cardBorder}`,
                            display: "inline-flex",
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <h3 style={miniTitleText()}>{group.title}</h3>
                      </div>

                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                        {group.items.map((item) => (
                          <span key={item} style={badgeStyle(theme)}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="awards" style={sectionStyle}>
          <div style={containerStyle}>
            <SectionTitle
              eyebrow="Awards & Achievements"
              title="成果奖项"
              darkMode={darkMode}
            />

            <div className="award-grid" style={grid3Style()}>
              {awards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div style={cardStyle(theme, 24, true)}>
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: darkMode ? "#ffffff" : "#111827",
                        color: darkMode ? "#111827" : "#ffffff",
                        marginBottom: 16,
                      }}
                    >
                      <Trophy size={20} />
                    </div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ ...smallParagraphStyle(theme), marginTop: 12 }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={sectionStyle}>
          <div style={containerStyle}>
            <SectionTitle eyebrow="Contact" title="联系方式" darkMode={darkMode} />

            <div
              className="contact-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 0.92fr",
                gap: 22,
              }}
            >
              <div style={cardStyle(theme, 30)}>
                <h3 style={{ margin: 0, fontSize: 30, fontWeight: 700 }}>欢迎联系我</h3>
                <p style={{ ...paragraphStyle(theme), marginTop: 16 }}>
                  若有合作、交流、实习机会或项目请联系
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 14,
                    marginTop: 28,
                  }}
                  className="contact-card-grid"
                >
                  <a href={`mailto:${profile.emailWork}`} style={contactItemStyle(theme)}>
                    <div style={contactTitleRow()}>
                      <Mail size={16} /> 工作邮箱
                    </div>
                    <div style={contactTextStyle(theme)}>{profile.emailWork}</div>
                  </a>

                  <a href={`mailto:${profile.emailSchool}`} style={contactItemStyle(theme)}>
                    <div style={contactTitleRow()}>
                      <GraduationCap size={16} /> 学校邮箱
                    </div>
                    <div style={contactTextStyle(theme)}>{profile.emailSchool}</div>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    style={contactItemStyle(theme)}
                  >
                    <div style={contactTitleRow()}>
                      <Github size={16} /> GitHub
                    </div>
                    <div style={contactTextStyle(theme)}>github.com/xiaochenxiny</div>
                  </a>

                  <a href={profile.resume} style={contactItemStyle(theme)}>
                    <div style={contactTitleRow()}>
                      <Download size={16} /> 简历下载
                    </div>
                    <div style={contactTextStyle(theme)}>点击后可直接下载</div>
                  </a>
                </div>
              </div>

              <div
                style={{
                  ...cardStyle(theme, 30),
                  background: darkMode
                    ? "linear-gradient(135deg, #111827 0%, rgba(255,255,255,0.06) 100%)"
                    : "linear-gradient(135deg, #111827 0%, #374151 100%)",
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "7px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Let’s build something meaningful.
                </div>

                <h3
                  style={{
                    marginTop: 20,
                    marginBottom: 0,
                    fontSize: 30,
                    lineHeight: 1.25,
                    fontWeight: 700,
                  }}
                >
                  让技术、表达与作品形成闭环
                </h3>

                <p
                  style={{
                    marginTop: 16,
                    fontSize: 15,
                    lineHeight: 1.95,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  无论是想进行科研项目还是工程项目的合作，相信我不会让你失望！请进一步联系。
                </p>

                <div style={{ marginTop: 34 }}>
                  <a
                    href={`mailto:${profile.emailWork}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      textDecoration: "none",
                      padding: "14px 20px",
                      borderRadius: 16,
                      background: "#ffffff",
                      color: "#111827",
                      fontWeight: 700,
                    }}
                  >
                    发送邮件 <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          borderTop: `1px solid ${theme.cardBorder}`,
          padding: "28px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
            color: theme.subText,
            fontSize: 14,
          }}
        >
          <p style={{ margin: 0 }}>© 2026 {profile.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              style={footerLinkStyle(theme)}
            >
              GitHub
            </a>
            <a href={`mailto:${profile.emailWork}`} style={footerLinkStyle(theme)}>
              Work Email
            </a>
            <a href={`mailto:${profile.emailSchool}`} style={footerLinkStyle(theme)}>
              School Email
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "fixed",
              right: 20,
              bottom: 20,
              zIndex: 60,
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: `1px solid ${theme.cardBorder}`,
              background: theme.card,
              color: theme.text,
              boxShadow: theme.shadow,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        a {
          transition: 0.22s ease;
        }

        a:hover {
          transform: translateY(-1px);
        }

@media (max-width: 1200px) {
  .hero-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 980px) {
  .desktop-nav,
  .desktop-actions {
    display: none !important;
  }

  .mobile-menu-btn {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
  }

  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr !important;
  }

  .project-grid,
  .skill-grid,
  .award-grid,
  .owns-grid {
    grid-template-columns: 1fr !important;
  }
}

        @media (max-width: 720px) {
          .contact-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function iconButtonStyle(theme) {
  return {
    width: 42,
    height: 42,
    borderRadius: 14,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: theme.text,
    background: theme.card,
    border: `1px solid ${theme.cardBorder}`,
  };
}

function grid3Style() {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 22,
  };
}

function grid2Style() {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 22,
  };
}

function cardStyle(theme, radius = 24) {
  return {
    borderRadius: radius,
    background: theme.card,
    border: `1px solid ${theme.cardBorder}`,
    boxShadow: theme.shadow,
    padding: 24,
  };
}

function projectCardStyle(theme) {
  return {
    borderRadius: 28,
    background: theme.card,
    border: `1px solid ${theme.cardBorder}`,
    boxShadow: theme.shadow,
    padding: 24,
    height: "100%",
  };
}

function badgeStyle(theme) {
  return {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "7px 12px",
    fontSize: 13,
    color: theme.text,
    background: theme.card,
    border: `1px solid ${theme.cardBorder}`,
  };
}

function paragraphStyle(theme) {
  return {
    margin: 0,
    color: theme.subText,
    fontSize: 16,
    lineHeight: 1.95,
  };
}

function smallParagraphStyle(theme) {
  return {
    margin: 0,
    color: theme.subText,
    fontSize: 14,
    lineHeight: 1.9,
  };
}

function miniTitleRow() {
  return {
    display: "flex",
    alignItems: "center",
    gap: 10,
  };
}

function miniTitleText() {
  return {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
  };
}

function eyebrowText(theme) {
  return {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: theme.subText,
    fontWeight: 700,
  };
}

function contactItemStyle(theme) {
  return {
    textDecoration: "none",
    borderRadius: 18,
    padding: 16,
    border: `1px solid ${theme.cardBorder}`,
    background: theme.card,
    color: theme.text,
  };
}

function contactTitleRow() {
  return {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 700,
    fontSize: 14,
  };
}

function contactTextStyle(theme) {
  return {
    marginTop: 10,
    fontSize: 14,
    color: theme.subText,
    lineHeight: 1.7,
    wordBreak: "break-all",
  };
}

function footerLinkStyle(theme) {
  return {
    textDecoration: "none",
    color: theme.subText,
  };
}

export default App;