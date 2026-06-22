import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Calendar,
  Check,
  ChevronUp,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Heart,
  Layers,
  Mail,
  MapPin,
  Menu,
  Moon,
  Pen,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  Target,
  Twitter,
  X,
} from "lucide-react";

const OHH_ORANGE = "#ff7a1a";
const STATUS_OLIVE = "#7d8a63";

const DARK = {
  bg: "#0f1115",
  surface: "#171a20",
  accent: "#f28c38",
  gold: "#d7b56d",
  text: "#f6f1ea",
  sub: "rgba(246,241,234,0.68)",
  muted: "rgba(246,241,234,0.42)",
  border: "rgba(242,140,56,0.18)",
  bHover: "rgba(242,140,56,0.36)",
  glow: "rgba(242,140,56,0.20)",
  primaryText: "#171717",
};

const LIGHT = {
  bg: "#fbf8f4",
  surface: "#ffffff",
  accent: "#b85f20",
  gold: "#8f6b2f",
  text: "#171717",
  sub: "rgba(23,23,23,0.66)",
  muted: "rgba(23,23,23,0.42)",
  border: "rgba(184,95,32,0.18)",
  bHover: "rgba(184,95,32,0.34)",
  glow: "rgba(184,95,32,0.16)",
  primaryText: "#ffffff",
};

const Fade = ({ children, delay = 0, y = 28, once = true, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-50px" }}
    transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Btn = ({ href, target, onClick, children, variant = "ghost", c }) => {
  const styles =
    variant === "primary"
      ? {
          background: c.accent,
          color: c.primaryText,
          boxShadow: `0 4px 18px ${c.glow}`,
        }
      : {
          border: `1.5px solid ${c.bHover}`,
          color: c.text,
        };

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
      style={styles}
      whileHover={{ scale: 1.05, y: -2, boxShadow: `0 8px 24px ${c.glow}` }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(false);
  const c = dark ? DARK : LIGHT;

  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  useEffect(() => {
    document.body.style.background = c.bg;
    document.body.style.color = c.text;
  }, [c]);

  useEffect(() => {
    const fn = () => setTop(window.scrollY > 500);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    setMenu(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const navLinks = [
    { id: "expertise", label: "Expertise" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work-with-me", label: "Hire me" },
    { id: "building", label: "Building" },
    { id: "contact", label: "Contact" },
    { id: "code", label: "Code" },
    { id: "books", label: "Books" },
    { id: "writing", label: "Writing" },
  ];

  const expertise = [
    {
      icon: Cpu,
      title: "Frontend engineering",
      copy: "Building fast, responsive, accessible web applications with React, Next.js, TypeScript, JavaScript, and Tailwind CSS.",
    },
    {
      icon: Code2,
      title: "Mobile development",
      copy: "Shipping polished iOS and Android experiences with React Native, Expo, clean component architecture, and mobile-first UI.",
    },
    {
      icon: Layers,
      title: "UI systems",
      copy: "Creating reusable components, consistent layouts, smooth interactions, and interfaces that stay maintainable as products grow.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & performance",
      copy: "Working with testing, accessibility, performance optimization, REST APIs, Git workflows, and production-ready implementation.",
    },
    {
      icon: Target,
      title: "Product-minded delivery",
      copy: "Using UX judgment, MVP thinking, user research, and startup execution to build products people understand and adopt quickly.",
    },
  ];

  const services = [
    {
      icon: Cpu,
      title: "Frontend roles",
      copy: "React, Next.js, TypeScript, Tailwind CSS, dashboards, landing pages, design systems, and production UI ownership.",
    },
    {
      icon: Code2,
      title: "Mobile roles",
      copy: "React Native and Expo app experiences across iOS and Android, with clean flows and polished mobile interaction.",
    },
    {
      icon: Layers,
      title: "Product UI builds",
      copy: "Turning product ideas, wireframes, and MVPs into responsive interfaces that feel modern and ready to ship.",
    },
    {
      icon: Target,
      title: "Startup teams",
      copy: "Joining early-stage teams that need a product-minded frontend/mobile developer who can move fast without losing quality.",
    },
    {
      icon: Building2,
      title: "Selected collaborations",
      copy: "Supporting founders and product studios with frontend delivery, mobile screens, UX judgment, and implementation support.",
    },
  ];

  const pipeline = [
    {
      phase: "Live",
      title: "Ohh",
      copy: "An async conversation card app for couples, friends, families, groups, and solo reflection — designed and shipped for iOS and Android.",
      icon: Heart,
    },
    {
      phase: "Active",
      title: "Usward",
      copy: "A relationship-focused mobile app currently in active development, with emphasis on emotional UX, polished UI, and product-led flows.",
      icon: Layers,
    },
    {
      phase: "Planned",
      title: "More apps",
      copy: "Continuing to build and ship focused consumer products through Zemio Labs with strong design, mobile execution, and AI-assisted workflows.",
      icon: Sparkles,
    },
  ];

  const experience = [
    {
      role: "Co-founder & Frontend/Mobile Developer",
      company: "Zemio Labs",
      period: "2025 - Present",
      copy: "Co-building a product studio focused on consumer apps, mobile experiences, digital products, and AI-enabled workflows.",
      proof: ["Shipping Ohh on iOS and Android", "Building Usward", "React Native and Expo delivery"],
    },
    {
      role: "Frontend Developer",
      company: "ROY",
      period: "2025",
      copy: "Built product UI including dashboards, authentication screens, interactive forms, API-driven interfaces, and responsive frontend flows.",
      proof: ["React/Next.js implementation", "REST API integration", "Performance-focused component structure"],
    },
    {
      role: "Frontend Developer",
      company: "Jether Tech",
      period: "2022 - 2025",
      copy: "Developed responsive interfaces, reusable React components, and mobile-first web experiences across client and product projects.",
      proof: ["Cross-browser UI work", "Reusable components", "Mobile-first delivery"],
    },
    {
      role: "Fintech & Crypto Operations",
      company: "Previous career",
      period: "2014 - 2022",
      copy: "Worked across financial markets, client portfolios, crypto products, and high-trust customer communication before moving deeper into product engineering.",
      proof: ["Fintech domain knowledge", "Customer trust and operations", "Commercial product context"],
    },
  ];

  const coreStack = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React Native",
    "Expo",
    "REST APIs",
    "Git",
    "Responsive UI",
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Expo", "Mobile-first UI", "iOS/Android app thinking"],
    },
    {
      title: "Engineering",
      skills: ["REST APIs", "Reusable components", "Responsive UI", "Git", "Accessibility"],
    },
    {
      title: "Testing & QA",
      skills: ["Jest unit tests", "Component testing", "E2E workflows", "Accessibility audits", "Performance optimization"],
    },
    {
      title: "Product",
      skills: ["UX judgment", "MVP planning", "Startup execution", "Metrics & analytics", "User research"],
    },
  ];

  const books = [
    {
      title: "Quiet the Noise",
      sub: "A Woman's Guide to Stopping Overthinking, Setting Boundaries, and Finally Feel Free",
      price: "€21",
      badge: "★ 5.0",
      badgeClr: "#b88934",
      cover: "/quiet-the-noise.png",
      href: "https://www.amazon.es/stores/Jane-Duru/author/B0GPLWY7ML/allbooks",
      bullets: ["Stop the mental spiral for good", "Set boundaries without guilt", "Kindle & Paperback"],
    },
    {
      title: "Selective Empathy",
      sub: "Why the world cries for some lives and stays silent for others",
      price: "€23",
      badge: "NEW",
      badgeClr: "#6f7d5a",
      cover: "/book-selective-empathy.png",
      href: "https://www.amazon.es/stores/Jane-Duru/author/B0GPLWY7ML/allbooks",
      bullets: ["Psychology of compassion bias", "Media & selective outrage", "Practical empathy exercises"],
    },
    {
      title: "50 AI Prompts To Make Money",
      sub: "Copy-paste prompts that work — even as a complete beginner",
      price: "€9.99",
      badge: "POPULAR",
      badgeClr: "#526b86",
      cover: "/book-ai-prompts.png",
      href: "https://iamjaneezystore.gumroad.com/l/iskap",
      bullets: ["50 ready-to-use prompts", "Works with any AI tool", "No tech experience needed"],
    },
  ];

  return (
    <div style={{ background: c.bg, color: c.text, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=DM+Sans:opsz,wght@9..40,300..700&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        .serif { font-family: 'Lora', Georgia, serif; }
        .mono  { font-family: 'DM Mono', monospace; }
        ::selection { background: ${c.accent}28; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: ${c.accent}25; border-radius: 6px; }
        a { text-decoration: none; color: inherit; }

        .ambient-grid {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(${c.border} 1px, transparent 1px),
            linear-gradient(90deg, ${c.border} 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 50% 0%, black, transparent 70%);
          opacity: ${dark ? 0.18 : 0.2};
        }

        .ambient-wash {
          position: fixed;
          inset: -20%;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, ${c.accent}12 0%, transparent 38%),
            linear-gradient(90deg, transparent 0%, ${c.gold}08 50%, transparent 100%);
          opacity: ${dark ? 0.7 : 0.5};
        }

        .scanline {
          background: linear-gradient(90deg, transparent, ${c.accent}55, ${c.gold}55, transparent);
          background-size: 220% 100%;
          animation: scan 6s ease-in-out infinite;
        }

        @keyframes scan {
          0%, 100% { background-position: 140% 0; opacity: 0.2; }
          50% { background-position: -40% 0; opacity: 0.65; }
        }

        .marquee {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .scanline, .marquee-track { animation: none; }
        }
      `}</style>

      <div className="ambient-grid" />
      <div className="ambient-wash" />

      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
        style={{
          scaleX: bar,
          background: `linear-gradient(90deg, ${c.accent}, ${c.gold})`,
        }}
      />

      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: `${c.bg}f2`,
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.button
            onClick={() => go("hero")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.gold})` }}
            >
              <span className="serif font-bold text-sm" style={{ color: c.primaryText }}>
                JD
              </span>
            </div>
            <span className="serif font-bold text-base hidden sm:inline" style={{ color: c.text }}>
              Jane
            </span>
          </motion.button>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((n) => (
              <motion.button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-sm font-medium transition-colors"
                style={{ color: c.sub }}
                whileHover={{ color: c.text }}
              >
                {n.label}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative group hidden sm:block">
              <motion.button
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
                style={{
                  background: `${c.accent}18`,
                  border: `1.5px solid ${c.bHover}`,
                  color: c.accent,
                }}
                whileHover={{ scale: 1.05, background: `${c.accent}25` }}
              >
                <ShoppingBag size={15} />
                <span>Shop</span>
              </motion.button>

              <div
                className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-lg"
                style={{
                  background: c.surface,
                  border: `1px solid ${c.border}`,
                  zIndex: 50,
                }}
              >
                <a
                  href="https://iamjaneezystore.gumroad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm rounded-t-lg transition-colors"
                  style={{ color: c.text, background: `${c.accent}08` }}
                >
                  📚 Gumroad Store
                </a>
                <a
                  href="https://www.amazon.es/stores/Jane-Duru/author/B0GPLWY7ML/allbooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm rounded-b-lg transition-colors border-t"
                  style={{ color: c.text, borderColor: c.border }}
                >
                  📖 Amazon Books
                </a>
              </div>
            </div>

            <motion.button
              onClick={() => setDark(!dark)}
              className="p-2.5 rounded-lg"
              style={{
                background: `${c.accent}15`,
                border: `1px solid ${c.accent}30`,
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {dark ? (
                <Sun size={16} style={{ color: c.accent }} />
              ) : (
                <Moon size={16} style={{ color: c.accent }} />
              )}
            </motion.button>

            <button
              onClick={() => setMenu(!menu)}
              className="lg:hidden p-2.5 rounded-lg"
              style={{ background: menu ? `${c.accent}15` : "transparent" }}
            >
              {menu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: c.bg }}
          >
            <div className="h-16" />
            <nav className="flex-1 flex flex-col items-center justify-center gap-6">
              {navLinks.map((n, i) => (
                <motion.button
                  key={n.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(n.id)}
                  className="serif text-2xl font-bold"
                  style={{ color: c.text }}
                >
                  {n.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="relative z-10 pt-20 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <a
              href="https://ohh.world"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mono text-xs mb-4"
              style={{
                background: `${c.accent}0f`,
                border: `1px solid ${c.border}`,
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: STATUS_OLIVE }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <span style={{ color: c.sub }}>
                <span style={{ color: OHH_ORANGE, fontWeight: 800 }}>ohh</span>{" "}
                is <span style={{ color: c.accent, fontWeight: 600 }}>live</span>{" "}
                on iOS & Android
              </span>
            </a>
          </Fade>

          <Fade delay={0.06}>
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-6 items-start">
              <div>
                <motion.h1
                  className="serif font-bold leading-[0.98] tracking-tight"
                  style={{ fontSize: "clamp(3rem, 7vw, 5.9rem)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Jane Duru
                  <br />
                  <span style={{ color: c.accent }}>Frontend & mobile</span>
                  <br />
                  <span style={{ color: c.sub }}>building web & mobile.</span>
                </motion.h1>

                <motion.p
                  className="mt-6 text-lg leading-relaxed max-w-2xl"
                  style={{ color: c.sub }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Co-founder at{" "}
                  <a
                    href="https://zemiolabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                    style={{ color: c.accent }}
                  >
                    Zemio Labs
                  </a> */}
                  Building frontend and mobile products with React, Next.js,
                  TypeScript, React Native, and Expo. I combine clean UI
                  implementation, product judgment, and startup-level ownership
                  into every project.
                </motion.p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {coreStack.slice(0, 7).map((skill) => (
                    <span
                      key={skill}
                      className="mono text-xs px-3 py-1.5 rounded-lg"
                      style={{
                        background: `${c.accent}0e`,
                        border: `1px solid ${c.border}`,
                        color: c.sub,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative overflow-hidden rounded-[24px] p-4 lg:max-w-[520px] lg:justify-self-end"
                style={{
                  background: `${c.surface}d8`,
                  border: `1px solid ${c.border}`,
                  boxShadow: `0 24px 90px -50px ${c.gold}`,
                }}
                whileHover={{ y: -4, borderColor: c.bHover }}
              >
                <div className="absolute left-0 right-0 top-0 h-px scanline" />

                <div
                  className="relative overflow-hidden rounded-2xl mb-4"
                  style={{
                    border: `1px solid ${c.border}`,
                    background: `${c.accent}08`,
                  }}
                >
                  <img
                    src="/Img2.png"
                    alt="Jane Duru"
                    className="w-full h-[340px] sm:h-[420px] lg:h-[460px] object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${c.bg}ba, transparent 45%)`,
                    }}
                  />
                  <div
                    className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{
                      background: `${c.surface}e8`,
                      border: `1px solid ${c.border}`,
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <motion.span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: STATUS_OLIVE }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium">
                      Open to the right opportunities
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-xs" style={{ color: c.muted }}>
                    PROFILE SNAPSHOT
                  </span>
                  <span
                    className="mono text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${c.accent}14`,
                      color: c.accent,
                    }}
                  >
                    LISBON
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    ["Frontend/mobile engineer", "React, React Native, Expo, TypeScript"],
                    ["Co-founder", "Building and running Zemio Labs"],
                    ["Product-minded builder", "UX judgment, MVPs, startup execution"],
                    ["Fintech background", "Customer trust, crypto, product context"],
                  ].map(([title, sub], i) => (
                    <motion.div
                      key={title}
                      className="flex items-start gap-3 p-3 rounded-2xl"
                      style={{
                        background: `${c.accent}${dark ? "08" : "0c"}`,
                        border: `1px solid ${c.border}`,
                      }}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + i * 0.08 }}
                    >
                      <Check size={16} style={{ color: c.accent, marginTop: 2 }} />
                      <div>
                        <p className="text-sm font-semibold">{title}</p>
                        <p className="text-xs mt-0.5" style={{ color: c.sub }}>
                          {sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Fade>

          <Fade delay={0.2} className="mt-7 flex flex-wrap gap-3">
            <Btn href="https://ohh.world" target="_blank" variant="primary" c={c}>
              <Heart size={15} /> View Ohh <ArrowUpRight size={14} />
            </Btn>
            <Btn href="https://cal.com/jane-duru/discovery-call" target="_blank" c={c}>
              <Calendar size={15} /> Discuss an opportunity
            </Btn>
            <Btn href="https://iamjaneezystore.gumroad.com" target="_blank" c={c}>
              <ShoppingBag size={15} /> Digital products
            </Btn>
          </Fade>

          <Fade delay={0.28}>
            <div
              className="mt-8 pt-4 grid grid-cols-2 sm:grid-cols-5 gap-6"
              style={{ borderTop: `1px solid ${c.border}` }}
            >
              {[
                { n: "2019", l: "TypeScript since" },
                { n: "React", l: "frontend focus" },
                { n: "RN", l: "mobile apps" },
                { n: "3", l: "products shipped" },
                { n: "12+", l: "years fintech context" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="serif text-3xl font-bold" style={{ color: c.accent }}>
                    {s.n}
                  </p>
                  <p className="mono text-xs mt-1" style={{ color: c.muted }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <div
        className="relative z-10 marquee py-4"
        style={{
          borderTop: `1px solid ${c.border}`,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex items-center gap-6 pr-6">
              {[
                "Frontend Developer",
                "Mobile Developer",
                "React",
                "React Native",
                "Expo",
                "TypeScript",
                "Zemio Labs",
                "Ohh Live",
                "Usward",
                "Lisbon",
              ].map((item) => (
                <span
                  key={`${loop}-${item}`}
                  className="mono text-xs uppercase tracking-widest whitespace-nowrap"
                  style={{ color: c.muted }}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="expertise" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            c={c}
            eyebrow="01 — EXPERTISE"
            title="Engineering with founder-level ownership."
            copy="Building with clean code, product judgment, commercial sense, and real responsibility."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {expertise.map((item, i) => (
              <Fade key={item.title} delay={0.06 * i}>
                <Card c={c}>
                  <item.icon size={22} style={{ color: c.accent }} />
                  <p className="font-semibold mt-5 mb-2">{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: c.sub }}>
                    {item.copy}
                  </p>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            c={c}
            eyebrow="02 — SKILLS"
            title="Production-ready engineering across web & mobile."
            copy="Strong where it matters: responsive design, clean components, real performance, and code that scales with users."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {skillGroups.map((group, i) => (
              <Fade key={group.title} delay={0.06 * i}>
                <Card c={c}>
                  <p className="font-semibold mb-4">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Pill key={skill} c={c}>
                        {skill}
                      </Pill>
                    ))}
                  </div>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            c={c}
            eyebrow="03 — EXPERIENCE"
            title="A frontend/mobile developer with startup and fintech depth."
            copy="My background combines React delivery, mobile-first UI, API integration, reusable components, startup execution, and commercial experience from fintech."
          />

          <div className="grid md:grid-cols-2 gap-4">
            {experience.map((item, i) => (
              <Fade key={`${item.company}-${item.role}`} delay={0.06 * i}>
                <Card c={c} large>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="font-semibold">{item.role}</p>
                      <p className="text-sm mt-1" style={{ color: c.sub }}>
                        {item.company}
                      </p>
                    </div>
                    <span
                      className="mono text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${c.accent}10`,
                        color: c.muted,
                        border: `1px solid ${c.border}`,
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: c.sub }}>
                    {item.copy}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.proof.map((point) => (
                      <Pill key={point} c={c}>
                        {point}
                      </Pill>
                    ))}
                  </div>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="work-with-me" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <p className="mono text-xs tracking-widest mb-3" style={{ color: c.muted }}>
              04 — OPPORTUNITIES
            </p>
          </Fade>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <Fade delay={0.05}>
              <div>
                <h2
                  className="serif font-bold mb-5"
                  style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.2rem)" }}
                >
                  Open to frontend, mobile, product, and startup opportunities.
                </h2>
                <p className="text-base leading-relaxed mb-7" style={{ color: c.sub }}>
                  I am actively building through Zemio Labs, but I still want the
                  right opportunities to find me: frontend/mobile roles, product
                  collaborations, startup partnerships, and selected client work.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Btn
                    href="https://cal.com/jane-duru/discovery-call"
                    target="_blank"
                    variant="primary"
                    c={c}
                  >
                    <Calendar size={14} /> Discuss an opportunity
                  </Btn>
                  <Btn
                    href="https://cal.com/jane-duru/1-hour-consultation"
                    target="_blank"
                    c={c}
                  >
                    <Calendar size={14} /> Book a 1hr consult
                  </Btn>
                </div>
              </div>
            </Fade>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((item, i) => (
                <Fade key={item.title} delay={0.06 * i}>
                  <Card c={c}>
                    <item.icon size={20} style={{ color: c.accent }} />
                    <p className="font-semibold mt-5 mb-2">{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: c.sub }}>
                      {item.copy}
                    </p>
                  </Card>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="building" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <p className="mono text-xs tracking-widest mb-3" style={{ color: c.muted }}>
              05 — BUILDING
            </p>
          </Fade>

          <Fade delay={0.05}>
            <h2
              className="serif font-bold mb-12"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Live now, building next.
            </h2>
          </Fade>

          <Fade delay={0.08}>
            <div
              className="relative overflow-hidden rounded-3xl mb-6"
              style={{
                background: `linear-gradient(135deg, ${c.accent}16 0%, ${c.surface} 60%)`,
                border: `1.5px solid ${c.bHover}`,
              }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 90% 10%, ${c.accent}22, transparent 55%)`,
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="mono text-xs px-3 py-1 rounded-full flex items-center gap-1.5"
                        style={{ background: `${STATUS_OLIVE}20`, color: STATUS_OLIVE }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: STATUS_OLIVE }}
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        LIVE
                      </span>
                      <span
                        className="mono text-xs px-3 py-1 rounded-full"
                        style={{ background: `${c.accent}14`, color: c.accent }}
                      >
                        iOS & Android
                      </span>
                    </div>

                    <h3
                      className="font-bold mb-1 tracking-tight"
                      style={{
                        fontSize: "clamp(2.3rem, 5vw, 3.6rem)",
                        lineHeight: 1,
                        color: OHH_ORANGE,
                      }}
                    >
                      ohh
                    </h3>

                    <p className="font-semibold mb-2" style={{ color: OHH_ORANGE }}>
                      Skip the small talk. Exchange questions that matter.
                    </p>

                    <p className="mb-6 max-w-lg" style={{ color: c.sub }}>
                      My newest live product. Ohh is an async conversation card app
                      for couples, friends, families, groups, and solo reflection.
                      Built with a strong focus on mobile UX, emotional product
                      design, and polished implementation.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <StoreButton
                        href="https://apps.apple.com/us/app/ohh-deep-conversation-cards/id6759226145"
                        label="App Store"
                        small="Download on the"
                        c={c}
                      />
                      <StoreButton
                        href="https://play.google.com/store/apps/details?id=app.ohh.world"
                        label="Google Play"
                        small="Get it on"
                        c={c}
                        orange
                      />
                    </div>
                  </div>

                  <motion.img
                    src="/ohh.png"
                    alt="Ohh App"
                    className="w-20 h-20 rounded-3xl flex-shrink-0 self-start object-cover"
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    animate={{
                      boxShadow: [`0 0 0 0 ${c.glow}`, `0 0 0 10px transparent`],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </Fade>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {pipeline.map((item, i) => (
              <Fade key={item.title} delay={0.08 * i}>
                <Card c={c}>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="mono text-xs px-2.5 py-1 rounded-full"
                      style={{ background: `${c.accent}12`, color: c.accent }}
                    >
                      {item.phase}
                    </span>
                    <item.icon size={18} style={{ color: c.gold }} />
                  </div>
                  <p className="serif text-xl font-bold mb-2">{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: c.sub }}>
                    {item.copy}
                  </p>
                </Card>
              </Fade>
            ))}
          </div>

          <Fade delay={0.2}>
            <a
              href="https://zemiolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-5 p-6 rounded-2xl"
              style={{
                background: c.surface,
                border: `1px solid ${c.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${c.accent}14` }}
              >
                <Building2 size={22} style={{ color: c.accent }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-semibold">Zemio Labs</p>
                  <span
                    className="mono text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${STATUS_OLIVE}18`, color: STATUS_OLIVE }}
                  >
                    LIVE
                  </span>
                </div>
                <p className="text-sm" style={{ color: c.sub }}>
                  App studio — shipping consumer products & AI workflows
                </p>
              </div>
              <ArrowUpRight size={16} style={{ color: c.muted }} />
            </a>
          </Fade>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            c={c}
            eyebrow="06 — CONTACT"
            title="Let's work together"
            copy="I'm actively available for frontend engineering, mobile development, React/Next.js roles, React Native/Expo roles, product UI work, and selected startup collaborations."
          />

          <Fade delay={0.1} className="mb-10">
            <p className="text-sm font-semibold mb-4" style={{ color: c.text }}>
              Role-specific opportunities:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Frontend/Mobile Engineer", href: "https://cal.com/jane-duru/frontend-mobile-chat", emoji: "💻" },
                { label: "React / Next.js Frontend", href: "https://cal.com/jane-duru/frontend-mobile-chat", emoji: "⚛️" },
                { label: "React Native / Expo Mobile", href: "https://cal.com/jane-duru/frontend-mobile-chat", emoji: "📱" },
                { label: "Product UI Collaboration", href: "https://cal.com/jane-duru/discovery-call", emoji: "🎨" },
                { label: "Startup Collaboration", href: "https://cal.com/jane-duru/founder-chat", emoji: "🚀" },
              ].map((r) => (
                <motion.a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: c.surface,
                    border: `1px solid ${c.border}`,
                  }}
                  whileHover={{ scale: 1.02, borderColor: c.bHover }}
                >
                  <span className="text-lg">{r.emoji}</span>
                  <span style={{ color: c.text }}>{r.label}</span>
                </motion.a>
              ))}
            </div>
          </Fade>

          <Fade delay={0.15} className="flex flex-wrap gap-3 mb-8">
            <Btn
              href="https://cal.com/jane-duru/discovery-call"
              target="_blank"
              variant="primary"
              c={c}
            >
              <Calendar size={14} /> 30min Discovery Call
            </Btn>
            <Btn href="https://cal.com/jane-duru/1-hour-consultation" target="_blank" c={c}>
              <Calendar size={14} /> 1hr Consultation — €75
            </Btn>
          </Fade>

          <Fade delay={0.14} className="flex items-center gap-2 mb-8">
            <MapPin size={13} style={{ color: c.accent }} />
            <span className="text-sm" style={{ color: c.muted }}>
              Lisbon, Portugal
            </span>
          </Fade>

          <Fade delay={0.2}>
            <p className="text-sm mb-4" style={{ color: c.muted }}>
              Connect with me across platforms:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: "GitHub", href: "https://github.com/janeezy", icon: Github },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/janeezy/", icon: Twitter },
                { label: "X / Twitter", href: "https://x.com/Iamjaneezy", icon: Twitter },
                { label: "Medium", href: "https://medium.com/@janeezy", icon: Pen },
                { label: "Substack", href: "https://janeezyofficial.substack.com/", icon: Mail },
                { label: "Ohh", href: "https://ohh.world", icon: Heart },
                { label: "Zemio Labs", href: "https://zemiolabs.com", icon: Building2 },
                { label: "Gumroad", href: "https://iamjaneezystore.gumroad.com", icon: ShoppingBag },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
                  style={{
                    background: `${c.accent}0a`,
                    border: `1px solid ${c.border}`,
                    color: c.sub,
                  }}
                  whileHover={{ scale: 1.04, y: -1, borderColor: c.bHover }}
                >
                  <s.icon size={13} style={{ color: c.accent }} />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section id="code" className="relative z-10 py-20 px-6" style={{ borderTop: `1px solid ${c.border}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            c={c}
            eyebrow="07 — CODE & GITHUB"
            title="Open source & shipped code."
            copy="Production React, React Native, Next.js, and TypeScript work across web and mobile products. Reusable components, REST API integration, responsive UI, testing, accessibility, and performance optimization."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                repo: "Ohh App",
                desc: "React Native + Expo iOS/Android app with async conversation flows, product-led UX, and polished mobile UI.",
                tech: ["React Native", "Expo", "Firebase", "Recoil"],
                href: "https://github.com/janeezy/ohh",
              },
              {
                repo: "Portfolio",
                desc: "This portfolio — Framer Motion, Tailwind, responsive design.",
                tech: ["React", "Framer Motion", "Tailwind", "CRA"],
                href: "https://github.com/janeezy/React-Portfolio",
              },
            ].map((p, i) => (
              <Fade key={p.repo} delay={0.06 * i}>
                <motion.a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full p-8 rounded-2xl group flex flex-col"
                  style={{
                    background: c.surface,
                    border: `1px solid ${c.border}`,
                  }}
                  whileHover={{
                    y: -6,
                    borderColor: c.bHover,
                    boxShadow: `0 16px 48px ${c.glow}`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-semibold text-lg">{p.repo}</p>
                      <p className="text-xs mt-1.5" style={{ color: c.muted }}>
                        github.com/janeezy
                      </p>
                    </div>
                    <Github size={20} style={{ color: c.accent }} />
                  </div>
                  <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: c.sub }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {p.tech.map((t) => (
                      <Pill key={t} c={c}>
                        {t}
                      </Pill>
                    ))}
                  </div>
                </motion.a>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="books" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            c={c}
            eyebrow="08 — BOOKS"
            title="Books library"
            copy="Psychology, AI, and getting out of your own head."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map((book, i) => (
              <Fade key={book.title} delay={0.07 * i}>
                <motion.a
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl overflow-hidden h-full"
                  style={{
                    background: c.surface,
                    border: `1px solid ${c.border}`,
                  }}
                  whileHover={{
                    y: -5,
                    borderColor: c.bHover,
                    boxShadow: `0 16px 40px -8px ${c.glow}`,
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ height: 200, background: `${c.accent}10` }}
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-contain p-5 group-hover:scale-[1.04] transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span
                      className="absolute top-3 right-3 mono text-xs px-2.5 py-1 rounded-full font-bold text-white"
                      style={{ background: book.badgeClr }}
                    >
                      {book.badge}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="serif font-bold text-lg leading-tight mb-1">
                      {book.title}
                    </p>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: c.sub }}>
                      {book.sub}
                    </p>

                    <ul className="space-y-1.5 mb-5 flex-1">
                      {book.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs" style={{ color: c.sub }}>
                          <span style={{ color: c.accent, flexShrink: 0, marginTop: 1 }}>
                            —
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: `1px solid ${c.border}` }}
                    >
                      <span className="serif font-bold text-xl" style={{ color: c.accent }}>
                        {book.price}
                      </span>
                      <span className="flex items-center gap-1 mono text-xs" style={{ color: c.muted }}>
                        Get it <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            c={c}
            eyebrow="09 — WRITING"
            title="Building in public."
            copy="I write about product building, AI workflows, user conversion, psychology, and the process of taking ideas from concept to launch."
          />

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              ["01", "Product and conversion", "Notes on moving people from curiosity to consistent use"],
              ["02", "AI workflows", "Practical systems, prompts, and tools for creators and operators"],
              ["03", "Psychology of connection", "Behavioral insight behind communication, trust, and relationships"],
              ["04", "Mobile product building", "Lessons from shipping consumer apps across iOS and Android"],
            ].map(([e, t, d]) => (
              <motion.div
                key={t}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: c.surface,
                  border: `1px solid ${c.border}`,
                }}
                whileHover={{ x: 4, borderColor: c.bHover }}
              >
                <span className="mono text-xs leading-none flex-shrink-0 mt-1" style={{ color: c.accent }}>
                  {e}
                </span>
                <div>
                  <p className="font-semibold text-sm mb-1">{t}</p>
                  <p className="text-xs leading-relaxed" style={{ color: c.sub }}>
                    {d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Medium", href: "https://medium.com/@janeezy", icon: BookOpen },
              { label: "X / Twitter", href: "https://x.com/Iamjaneezy", icon: Twitter },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/janeezy/", icon: Github },
              { label: "Substack", href: "https://janeezyofficial.substack.com/", icon: Mail },
            ].map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
                style={{
                  background: c.surface,
                  border: `1px solid ${c.border}`,
                  color: c.sub,
                }}
                whileHover={{ scale: 1.03, y: -1, borderColor: c.bHover }}
              >
                <l.icon size={14} style={{ color: c.accent }} />
                {l.label}
                <ExternalLink size={11} className="opacity-0 group-hover:opacity-40 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-6" style={{ borderTop: `1px solid ${c.border}` }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="serif font-bold" style={{ color: c.accent }}>
            Jane Duru
          </p>
          <p className="mono text-xs" style={{ color: c.muted }}>
            © {new Date().getFullYear()} — Frontend & Mobile Developer, Lisbon
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {top && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${c.accent}, ${c.gold})`,
              boxShadow: `0 4px 16px ${c.glow}`,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={18} color="#fff" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeader({ c, eyebrow, title, copy }) {
  return (
    <>
      <Fade>
        <p className="mono text-xs tracking-widest mb-3" style={{ color: c.muted }}>
          {eyebrow}
        </p>
      </Fade>
      <Fade delay={0.05}>
        <h2
          className="serif font-bold mb-5 max-w-3xl"
          style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.2rem)" }}
        >
          {title}
        </h2>
      </Fade>
      {copy && (
        <Fade delay={0.08}>
          <p className="text-base leading-relaxed max-w-2xl mb-10" style={{ color: c.sub }}>
            {copy}
          </p>
        </Fade>
      )}
    </>
  );
}

function Card({ c, children, large = false }) {
  return (
    <motion.div
      className={`h-full rounded-2xl ${large ? "p-6" : "p-5"}`}
      style={{
        background: c.surface,
        border: `1px solid ${c.border}`,
      }}
      whileHover={{
        y: -5,
        borderColor: c.bHover,
        boxShadow: `0 18px 60px -42px ${c.gold}`,
      }}
    >
      {children}
    </motion.div>
  );
}

function Pill({ c, children }) {
  return (
    <span
      className="mono text-xs px-2.5 py-1 rounded-lg"
      style={{
        background: `${c.accent}0a`,
        border: `1px solid ${c.border}`,
        color: c.sub,
      }}
    >
      {children}
    </span>
  );
}

function StoreButton({ href, label, small, c, orange = false }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold"
      style={
        orange
          ? {
              background: `${OHH_ORANGE}14`,
              border: `1.5px solid ${OHH_ORANGE}55`,
              color: c.text,
            }
          : {
              background: c.text,
              color: c.bg,
              boxShadow: `0 4px 16px ${c.glow}`,
            }
      }
    >
      <Sparkles size={16} style={{ color: orange ? OHH_ORANGE : "currentColor" }} />
      <div className="text-left leading-tight">
        <p className="text-[10px] opacity-60 font-normal">{small}</p>
        <p className="font-bold text-sm leading-none">{label}</p>
      </div>
    </motion.a>
  );
}