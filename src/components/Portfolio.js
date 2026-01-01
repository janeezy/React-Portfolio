import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  Brain,
  Code2,
  Building2,
  Pen,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  ChevronUp,
  Coffee,
  Heart,
  Stethoscope,
  TrendingUp,
  Palette,
  Check,
  Sparkles,
  BookOpen,
  Download,
  Calendar,
  Briefcase,
  ShoppingBag,
  Zap,
  DollarSign,
  FileText,
  Package,
  Star,
  Bot,
  Rocket,
  Smartphone,
  Users,
  MessageCircle,
} from "lucide-react";

// Theme configurations
const themes = {
  violet: {
    name: "Violet",
    dark: {
      bg: "#07040d",
      bgCard: "#0f0a18",
      bgCardHover: "#150f22",
      accent: "#a855f7",
      accentAlt: "#ec4899",
      accentMuted: "#7c3aed",
      gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
      text: "#faf9fc",
      textSecondary: "rgba(250,249,252,0.7)",
      textMuted: "rgba(250,249,252,0.45)",
      border: "rgba(168,85,247,0.12)",
      borderHover: "rgba(168,85,247,0.25)",
      glow: "rgba(168,85,247,0.35)",
    },
    light: {
      bg: "#fefbff",
      bgCard: "#f8f4ff",
      bgCardHover: "#f0eaff",
      accent: "#9333ea",
      accentAlt: "#db2777",
      accentMuted: "#7c3aed",
      gradient: "from-violet-600 via-fuchsia-600 to-pink-600",
      text: "#1a1025",
      textSecondary: "rgba(26,16,37,0.75)",
      textMuted: "rgba(26,16,37,0.5)",
      border: "rgba(147,51,234,0.1)",
      borderHover: "rgba(147,51,234,0.2)",
      glow: "rgba(147,51,234,0.15)",
    },
  },
  blue: {
    name: "Ocean",
    dark: {
      bg: "#030810",
      bgCard: "#081020",
      bgCardHover: "#0c1830",
      accent: "#3b82f6",
      accentAlt: "#06b6d4",
      accentMuted: "#6366f1",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      text: "#f0f9ff",
      textSecondary: "rgba(240,249,255,0.7)",
      textMuted: "rgba(240,249,255,0.45)",
      border: "rgba(59,130,246,0.12)",
      borderHover: "rgba(59,130,246,0.25)",
      glow: "rgba(59,130,246,0.35)",
    },
    light: {
      bg: "#f8fbff",
      bgCard: "#eff6ff",
      bgCardHover: "#dbeafe",
      accent: "#2563eb",
      accentAlt: "#0891b2",
      accentMuted: "#4f46e5",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      text: "#0c1929",
      textSecondary: "rgba(12,25,41,0.75)",
      textMuted: "rgba(12,25,41,0.5)",
      border: "rgba(37,99,235,0.1)",
      borderHover: "rgba(37,99,235,0.2)",
      glow: "rgba(37,99,235,0.15)",
    },
  },
  orange: {
    name: "Ember",
    dark: {
      bg: "#0a0604",
      bgCard: "#151008",
      bgCardHover: "#20180c",
      accent: "#f97316",
      accentAlt: "#ef4444",
      accentMuted: "#eab308",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      text: "#fffbf5",
      textSecondary: "rgba(255,251,245,0.7)",
      textMuted: "rgba(255,251,245,0.45)",
      border: "rgba(249,115,22,0.12)",
      borderHover: "rgba(249,115,22,0.25)",
      glow: "rgba(249,115,22,0.35)",
    },
    light: {
      bg: "#fffdf8",
      bgCard: "#fff7ed",
      bgCardHover: "#ffedd5",
      accent: "#ea580c",
      accentAlt: "#dc2626",
      accentMuted: "#ca8a04",
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
      text: "#1c1008",
      textSecondary: "rgba(28,16,8,0.75)",
      textMuted: "rgba(28,16,8,0.5)",
      border: "rgba(234,88,12,0.1)",
      borderHover: "rgba(234,88,12,0.2)",
      glow: "rgba(234,88,12,0.15)",
    },
  },
  green: {
    name: "Forest",
    dark: {
      bg: "#040a06",
      bgCard: "#081510",
      bgCardHover: "#0c2018",
      accent: "#22c55e",
      accentAlt: "#14b8a6",
      accentMuted: "#10b981",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      text: "#f0fdf4",
      textSecondary: "rgba(240,253,244,0.7)",
      textMuted: "rgba(240,253,244,0.45)",
      border: "rgba(34,197,94,0.12)",
      borderHover: "rgba(34,197,94,0.25)",
      glow: "rgba(34,197,94,0.35)",
    },
    light: {
      bg: "#f8fdf9",
      bgCard: "#ecfdf5",
      bgCardHover: "#d1fae5",
      accent: "#16a34a",
      accentAlt: "#0d9488",
      accentMuted: "#059669",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      text: "#052e16",
      textSecondary: "rgba(5,46,22,0.75)",
      textMuted: "rgba(5,46,22,0.5)",
      border: "rgba(22,163,74,0.1)",
      borderHover: "rgba(22,163,74,0.2)",
      glow: "rgba(22,163,74,0.15)",
    },
  },
  mono: {
    name: "Mono",
    dark: {
      bg: "#000000",
      bgCard: "#0a0a0a",
      bgCardHover: "#141414",
      accent: "#ffffff",
      accentAlt: "#a1a1aa",
      accentMuted: "#71717a",
      gradient: "from-white via-zinc-300 to-zinc-500",
      text: "#fafafa",
      textSecondary: "rgba(250,250,250,0.7)",
      textMuted: "rgba(250,250,250,0.4)",
      border: "rgba(255,255,255,0.08)",
      borderHover: "rgba(255,255,255,0.15)",
      glow: "rgba(255,255,255,0.15)",
    },
    light: {
      bg: "#ffffff",
      bgCard: "#fafafa",
      bgCardHover: "#f4f4f5",
      accent: "#18181b",
      accentAlt: "#52525b",
      accentMuted: "#71717a",
      gradient: "from-zinc-800 via-zinc-600 to-zinc-500",
      text: "#09090b",
      textSecondary: "rgba(9,9,11,0.75)",
      textMuted: "rgba(9,9,11,0.5)",
      border: "rgba(0,0,0,0.06)",
      borderHover: "rgba(0,0,0,0.12)",
      glow: "rgba(0,0,0,0.08)",
    },
  },
};

const Background = ({ colors }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 100% 80% at 50% -30%, ${colors.accent}12, transparent)` }} />
    <motion.div className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full" style={{ background: `radial-gradient(circle, ${colors.accent}08, transparent 70%)` }} animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
    <motion.div className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full" style={{ background: `radial-gradient(circle, ${colors.accentAlt}06, transparent 70%)` }} animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
  </div>
);

const MagneticBtn = ({ children, className, onClick, href, target, style }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const move = (e) => { const rect = ref.current?.getBoundingClientRect(); if (rect) setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.2, y: (e.clientY - rect.top - rect.height / 2) * 0.2 }); };
  const reset = () => setPos({ x: 0, y: 0 });
  const Tag = href ? motion.a : motion.button;
  return <Tag ref={ref} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} onClick={onClick} onMouseMove={move} onMouseLeave={reset} animate={{ x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className={className} style={style}>{children}</Tag>;
};

const Reveal = ({ children, delay = 0, className }) => (
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
);

const GlowCard = ({ children, className, colors, glow = false }) => (
  <div className={`relative group ${className}`}>
    {glow && <div className={`absolute -inset-px bg-gradient-to-r ${colors.gradient} rounded-[26px] blur opacity-0 group-hover:opacity-25 transition-opacity duration-700`} />}
    <div className="relative h-full">{children}</div>
  </div>
);

const ThemePicker = ({ currentTheme, setCurrentTheme, mode, colors, position = "below" }) => {
  const [open, setOpen] = useState(false);
  const isAbove = position === "above";
  return (
    <div className="relative">
      <motion.button onClick={() => setOpen(!open)} className="p-2.5 rounded-xl" style={{ background: `${colors.accent}10`, border: `1px solid ${colors.border}` }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Palette size={18} style={{ color: colors.accent }} /></motion.button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80]" onClick={() => setOpen(false)} />
            <motion.div initial={{ opacity: 0, y: isAbove ? 8 : -8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: isAbove ? 8 : -8, scale: 0.95 }} className={`absolute ${isAbove ? "bottom-full mb-3 right-0" : "top-full mt-3 left-0"} p-2 rounded-2xl backdrop-blur-2xl z-[90] min-w-[170px]`} style={{ background: `${colors.bgCard}f8`, border: `1px solid ${colors.border}`, boxShadow: `0 25px 50px -12px ${colors.glow}` }}>
              {Object.entries(themes).map(([key, theme]) => (
                <button key={key} onClick={() => { setCurrentTheme(key); setOpen(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors" style={{ background: currentTheme === key ? `${colors.accent}12` : "transparent" }}>
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${theme.dark.gradient}`} />
                  <span className="text-sm font-medium">{theme.name}</span>
                  {currentTheme === key && <Check size={14} style={{ color: colors.accent }} className="ml-auto" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const Portfolio = () => {
  const [mode, setMode] = useState("dark");
  const [theme, setTheme] = useState("violet");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const colors = themes[theme][mode];

  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  useEffect(() => { document.body.style.background = colors.bg; document.body.style.color = colors.text; }, [colors]);
  useEffect(() => {
    const handleScroll = () => { setShowScrollTop(window.scrollY > 500); setShowStickyCTA(window.scrollY > 800 && window.scrollY < document.body.scrollHeight - 1500); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id) => { setMenuOpen(false); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100); };

  const nav = [
    { id: "building", label: "Building" },
    { id: "products", label: "Books" },
    { id: "about", label: "About" },
    { id: "writing", label: "Writing" },
    { id: "contact", label: "Contact" },
  ];

  const digitalProducts = [
    { title: "Selective Empathy", subtitle: "Why we cry for some and stay silent for others", description: "Deep dive into the psychology of selective compassion.", price: "€22.99", href: "https://iamjaneezystore.gumroad.com/l/ikgpou", cover: "/book-selective-empathy.png", features: ["Psychology of selective compassion", "Media framing and bias analysis", "Practical exercises included"], badge: "NEW", badgeColor: "#22c55e", icon: BookOpen, featured: true },
    { title: "50 AI Prompts To Make Money", subtitle: "Even as a complete beginner", description: "Copy-paste prompts that actually work.", price: "€9.99", href: "https://iamjaneezystore.gumroad.com/l/iskap", cover: "/book-ai-prompts.png", features: ["50 proven prompts ready to use", "Works with ChatGPT, Claude, Gemini", "No tech experience needed"], badge: "BESTSELLER", badgeColor: "#f59e0b", icon: Zap, featured: true },
  ];

  const faqs = [
    { q: "Do the AI prompts work with ChatGPT, Claude, etc?", a: "Yes! All prompts work with any major AI tool." },
    { q: "I'm not technical. Can I use these guides?", a: "Absolutely. Written for beginners. Copy and paste ready." },
    { q: "Can I get a refund?", a: "Yes, Gumroad offers 30-day refunds. No questions asked." },
    { q: "When is Ohh launching?", a: "Soon! Join the waitlist at zemiolabs.com." },
  ];

  return (
    <div className="min-h-screen" style={{ background: colors.bg, color: colors.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { font-family: 'Outfit', -apple-system, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        ::selection { background: ${colors.accent}30; }
        .text-gradient { background: linear-gradient(135deg, ${colors.accent}, ${colors.accentAlt}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${colors.accent}25; border-radius: 10px; }
      `}</style>

      <Background colors={colors} />

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left" style={{ scaleX: smoothProgress, background: `linear-gradient(90deg, ${colors.accent}, ${colors.accentAlt})` }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl" style={{ background: `${colors.bg}95`, borderBottom: `1px solid ${colors.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.button onClick={() => scrollTo("hero")} className="text-xl font-bold tracking-tight" whileHover={{ scale: 1.02 }}>J<span style={{ color: colors.accent }}>D</span></motion.button>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => <motion.button key={item.id} onClick={() => scrollTo(item.id)} className="px-4 py-2 rounded-xl text-sm font-medium" style={{ color: colors.textSecondary }} whileHover={{ color: colors.text, background: `${colors.accent}08` }}>{item.label}</motion.button>)}
            <div className="w-px h-5 mx-2" style={{ background: colors.border }} />
            <ThemePicker currentTheme={theme} setCurrentTheme={setTheme} mode={mode} colors={colors} position="below" />
            <motion.button onClick={() => setMode(mode === "dark" ? "light" : "dark")} className="p-2.5 rounded-xl ml-1" style={{ background: `${colors.accent}10`, border: `1px solid ${colors.border}` }} whileHover={{ scale: 1.05 }}>{mode === "dark" ? <Sun size={18} style={{ color: colors.accent }} /> : <Moon size={18} style={{ color: colors.accent }} />}</motion.button>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-xl" style={{ background: menuOpen ? `${colors.accent}10` : "transparent" }}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden flex flex-col" style={{ background: colors.bg }}>
            <div className="h-[72px]" />
            <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {nav.map((item, i) => <motion.button key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} onClick={() => scrollTo(item.id)} className="text-2xl font-bold">{item.label}</motion.button>)}
            </nav>
            <div className="px-6 py-8 flex justify-center gap-4" style={{ borderTop: `1px solid ${colors.border}` }}>
              <ThemePicker currentTheme={theme} setCurrentTheme={setTheme} mode={mode} colors={colors} position="above" />
              <motion.button onClick={() => setMode(mode === "dark" ? "light" : "dark")} className="p-2.5 rounded-xl" style={{ background: `${colors.accent}10`, border: `1px solid ${colors.border}` }}>{mode === "dark" ? <Sun size={18} style={{ color: colors.accent }} /> : <Moon size={18} style={{ color: colors.accent }} />}</motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== HERO ===== */}
      <section id="hero" className="min-h-screen flex items-center px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium font-mono" style={{ background: `${colors.accent}10`, border: `1px solid ${colors.border}` }}>
                  <Rocket size={14} style={{ color: colors.accent }} />
                  <span style={{ color: colors.textSecondary }}>Shipping in 2026</span>
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[2.5rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
                <span style={{ color: colors.textSecondary }}>I'm Jane.</span><br />
                <span className="text-gradient">I build apps</span><br />
                <span className="text-gradient">for real humans.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed max-w-xl mb-8" style={{ color: colors.textSecondary }}>
                Founder of <a href="https://zemiolabs.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline underline-offset-4" style={{ color: colors.accent }}>Zemio Labs</a>. 
                Currently building <strong style={{ color: colors.text }}>Ohh</strong>, an app helping women build deeper friendships. 
                I write about AI, psychology, and share my journey on X.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 mb-8">
                <MagneticBtn href="https://iamjaneezystore.gumroad.com" target="_blank" className={`group px-6 py-3.5 bg-gradient-to-r ${colors.gradient} text-white rounded-2xl font-semibold flex items-center gap-2`} style={{ boxShadow: `0 8px 30px ${colors.glow}` }}>
                  <ShoppingBag size={18} />Get my books<ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </MagneticBtn>
                <MagneticBtn href="https://x.com/Iamjaneezy" target="_blank" className="px-6 py-3.5 rounded-2xl font-semibold flex items-center gap-2" style={{ border: `2px solid ${colors.border}` }}>
                  <Twitter size={16} />Follow my journey
                </MagneticBtn>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-6 text-sm">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center" 
                    style={{ background: `${colors.accent}15` }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Smartphone size={16} style={{ color: colors.accent }} />
                  </motion.div>
                  <div><p className="font-bold">5+ apps</p><p style={{ color: colors.textMuted }} className="text-xs">in development</p></div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center" 
                    style={{ background: `${colors.accentAlt}15` }}
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  >
                    <BookOpen size={16} style={{ color: colors.accentAlt }} />
                  </motion.div>
                  <div><p className="font-bold">2 books</p><p style={{ color: colors.textMuted }} className="text-xs">published</p></div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center" 
                    style={{ background: "#22c55e15" }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap size={16} style={{ color: "#22c55e" }} />
                  </motion.div>
                  <div><p className="font-bold">2026</p><p style={{ color: colors.textMuted }} className="text-xs">year of shipping</p></div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <motion.div className={`absolute -inset-6 bg-gradient-to-br ${colors.gradient} rounded-[36px] opacity-15 blur-3xl`} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity }} />
                <div className="relative rounded-[28px] overflow-hidden" style={{ border: `1px solid ${colors.border}` }}>
                  <img src="/IMG.png" alt="Jane Duru" className="w-full aspect-[4/5] object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${colors.bg}, transparent 40%)` }} />
                </div>
                <motion.div 
                  className="absolute -bottom-4 left-4 right-4 px-5 py-4 rounded-2xl backdrop-blur-xl" 
                  style={{ background: `${colors.bgCard}f5`, border: `1px solid ${colors.border}` }} 
                  animate={{ 
                    y: [0, -6, 0],
                    rotate: [0, 0.5, -0.5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <Heart size={14} style={{ color: colors.accentAlt }} />
                      </motion.div>
                      <MessageCircle size={14} style={{ color: colors.accent }} />
                    </div>
                    <div className="flex-1"><p className="font-semibold text-sm">Building Ohh</p><p className="text-xs" style={{ color: colors.textMuted }}>Deeper friendships through meaningful questions</p></div>
                    <motion.span 
                      className="px-2 py-1 rounded-full text-xs font-bold" 
                      style={{ background: "#22c55e20", color: "#22c55e" }}
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      SOON
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OHH FEATURED ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <motion.a 
              href="https://zemiolabs.com" 
              target="_blank" 
              className="group block relative overflow-hidden rounded-[28px] p-8 sm:p-10" 
              style={{ background: `linear-gradient(135deg, ${colors.accentAlt}15, ${colors.accent}08)`, border: `2px solid ${colors.borderHover}` }} 
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 opacity-30"
                style={{ background: `radial-gradient(circle at 80% 20%, ${colors.accentAlt}40, transparent 50%)` }}
                animate={{ 
                  background: [
                    `radial-gradient(circle at 80% 20%, ${colors.accentAlt}40, transparent 50%)`,
                    `radial-gradient(circle at 20% 80%, ${colors.accent}40, transparent 50%)`,
                    `radial-gradient(circle at 80% 20%, ${colors.accentAlt}40, transparent 50%)`
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span 
                      className="px-3 py-1 rounded-full text-xs font-bold" 
                      style={{ background: "#ec489920", color: "#ec4899" }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🚀 COMING SOON
                    </motion.span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: `${colors.accent}20`, color: colors.accent }}>iOS and Android</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">Ohh</h3>
                  <p className="text-lg font-medium mb-3" style={{ color: colors.accentAlt }}>Connection, reimagined.</p>
                  <p className="text-base mb-4" style={{ color: colors.textSecondary }}>Helping women build deeper friendships through meaningful questions.<br /><span className="font-medium" style={{ color: colors.text }}>Beyond "how are you?"</span></p>
                  <motion.div 
                    className="inline-flex items-center gap-2 font-semibold" 
                    style={{ color: colors.accent }}
                    whileHover={{ x: 5 }}
                  >
                    Join the waitlist
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center" 
                  style={{ background: `linear-gradient(135deg, #ec4899, #a855f7)` }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  animate={{ 
                    boxShadow: [
                      `0 0 20px ${colors.accentAlt}40`,
                      `0 0 40px ${colors.accentAlt}60`,
                      `0 0 20px ${colors.accentAlt}40`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart size={36} color="#fff" />
                </motion.div>
              </div>
            </motion.a>
          </Reveal>
        </div>
      </section>

      {/* ===== BUILDING ===== */}
      <section id="building" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span className="font-mono text-sm tracking-wider" style={{ color: colors.accent }}>01 / BUILDING</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">What I'm <span className="text-gradient">shipping</span></h2>
            <p className="text-xl mt-4 max-w-2xl" style={{ color: colors.textSecondary }}>Apps for real humans. Designed with intention, made for how people actually live.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Ohh", desc: "Helping women build deeper friendships through meaningful questions.", href: "https://zemiolabs.com", tags: ["React Native", "NestJS"], badge: "FLAGSHIP", badgeColor: "#ec4899" },
              { title: "MyBicho", desc: "AI-powered plant and pet care. Identification, schedules, reminders.", href: "https://mybicho.com", tags: ["React Native", "AI Vision"], badge: "65% DONE", badgeColor: colors.accent, progress: 65 },
              { title: "Wellness Suite", desc: "Affirmation, Motivation, Prayer, Book Logger. All launching 2026.", href: "https://zemiolabs.com", tags: ["React Native", "Expo"], badge: "PIPELINE", badgeColor: "#f59e0b" },
              { title: "Zemio Labs", desc: "Our app studio. Shipping tools that matter.", href: "https://zemiolabs.com", tags: ["Next.js", "React"], badge: "LIVE", badgeColor: "#22c55e" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <GlowCard colors={colors} glow>
                  <motion.a 
                    href={p.href} 
                    target="_blank" 
                    className="group block h-full p-6 rounded-[22px]" 
                    style={{ background: colors.bgCard, border: `1px solid ${colors.border}` }} 
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <motion.span 
                        className="px-3 py-1 rounded-full text-xs font-mono font-semibold" 
                        style={{ background: `${p.badgeColor}15`, color: p.badgeColor }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {p.badge}
                      </motion.span>
                      <motion.div
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowUpRight size={18} style={{ color: colors.textMuted }} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-sm mb-4" style={{ color: colors.textSecondary }}>{p.desc}</p>
                    {p.progress && (
                      <div className="mb-4">
                        <motion.div 
                          className="h-1.5 rounded-full overflow-hidden" 
                          style={{ background: `${colors.accent}20` }}
                        >
                          <motion.div 
                            className="h-full rounded-full" 
                            style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accentAlt})` }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                          />
                        </motion.div>
                      </div>
                    )}
                    <div className="flex gap-2">
                      {p.tags.map((t, idx) => (
                        <motion.span 
                          key={t} 
                          className="px-3 py-1 rounded-lg text-xs font-medium" 
                          style={{ background: `${colors.accent}10` }}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </motion.a>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKS ===== */}
      <section id="products" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span className="font-mono text-sm tracking-wider" style={{ color: colors.accent }}>02 / BOOKS</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">Learn from my <span className="text-gradient">experience</span></h2>
            <p className="text-xl mt-4 max-w-2xl" style={{ color: colors.textSecondary }}>Practical guides on AI and psychology. No fluff, just actionable insights.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {digitalProducts.map((product, i) => (
              <Reveal key={product.title} delay={0.1 * i}>
                <GlowCard colors={colors} glow>
                  <motion.a href={product.href} target="_blank" className="group block h-full rounded-[22px] overflow-hidden" style={{ background: colors.bgCard, border: `2px solid ${colors.borderHover}` }} whileHover={{ y: -4 }}>
                    <div className="relative h-48 sm:h-56 overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accentAlt}15)` }}>
                      <img src={product.cover} alt={product.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                      <div className="absolute inset-0 items-center justify-center hidden"><product.icon size={64} style={{ color: colors.accent, opacity: 0.5 }} /></div>
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold" style={{ background: product.badgeColor, color: "#fff" }}>{product.badge}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-extrabold" style={{ color: colors.accent }}>{product.price}</span>
                        <span className="text-xs font-mono px-2 py-1 rounded-md" style={{ background: `${colors.accent}10` }}>Instant download</span>
                      </div>
                      <h3 className="text-xl font-extrabold mb-1">{product.title}</h3>
                      <p className="text-sm font-medium mb-3" style={{ color: colors.accentAlt }}>{product.subtitle}</p>
                      <div className="space-y-1.5 mb-5">{product.features.map((f, idx) => <div key={idx} className="flex items-center gap-2 text-sm"><Check size={14} style={{ color: "#22c55e" }} /><span style={{ color: colors.textSecondary }}>{f}</span></div>)}</div>
                      <div className={`flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-bold text-sm`}>Get the book<ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></div>
                    </div>
                  </motion.a>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <motion.a href="https://linktr.ee/Janeezy" target="_blank" className="group flex items-center justify-center gap-3 p-4 rounded-2xl" style={{ background: `${colors.accent}08`, border: `1px solid ${colors.border}` }} whileHover={{ scale: 1.01 }}>
              <ShoppingBag size={20} style={{ color: colors.accent }} /><span className="font-semibold">Browse all on Linktree</span><ArrowUpRight size={18} style={{ color: colors.accent }} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span className="font-mono text-sm tracking-wider" style={{ color: colors.accent }}>03 / ABOUT</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">The <span className="text-gradient">builder</span></h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal delay={0.1}><p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>I'm Jane, founder of <strong style={{ color: colors.text }}>Zemio Labs</strong>. We ship apps that actually help people live better.</p></Reveal>
              <Reveal delay={0.15}><p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>My path took me from medicine in Ukraine to managing €20M+ in crypto and fintech over 8 years, then teaching myself to code. Now I ship mobile apps with React Native and have 3+ years in tech.</p></Reveal>
              <Reveal delay={0.2}><p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>I also teach people how to use AI tools to earn online. I write about what I learn on X and Medium, covering AI, psychology, and systems thinking.</p></Reveal>
              <Reveal delay={0.25}><div className="flex flex-wrap gap-2 pt-4">{["React Native", "Expo", "TypeScript", "Next.js", "NestJS", "Tailwind"].map((s) => <motion.span key={s} whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-2 rounded-xl text-sm font-medium cursor-default" style={{ background: `${colors.accent}10`, border: `1px solid ${colors.border}` }}>{s}</motion.span>)}</div></Reveal>
            </div>

            <div className="space-y-4">
              {[
                { icon: Building2, title: "Founder", sub: "Zemio Labs", desc: "App studio shipping 5+ products in 2026. Human first, always.", color: colors.accent },
                { icon: Smartphone, title: "Mobile Developer", sub: "3+ years in tech", desc: "iOS and Android apps with React Native. From idea to App Store.", color: colors.accentAlt },
                { icon: Bot, title: "AI Educator", sub: "Books and guides", desc: "Teaching people how to use AI tools to earn online.", color: "#f59e0b" },
                { icon: TrendingUp, title: "Finance Background", sub: "8 years in fintech", desc: "Managed €20M+ in crypto. High stakes decisions now applied to products.", color: "#10b981" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.08}>
                  <motion.div whileHover={{ x: 8, scale: 1.01 }} whileTap={{ scale: 0.99 }} className="p-5 rounded-[22px] flex items-start gap-4 cursor-pointer" style={{ background: colors.bgCard, border: `1px solid ${colors.border}` }}>
                    <motion.div className="p-3 rounded-xl flex-shrink-0" style={{ background: `${item.color}12` }} whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}><item.icon size={22} style={{ color: item.color }} /></motion.div>
                    <div><h3 className="text-lg font-bold">{item.title}</h3><p className="text-sm font-medium mb-1" style={{ color: colors.accent }}>{item.sub}</p><p className="text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p></div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WRITING ===== */}
      <section id="writing" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <Reveal><span className="font-mono text-sm tracking-wider" style={{ color: colors.accent }}>04 / WRITING</span><h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight mb-5">Follow the <span className="text-gradient">journey</span></h2></Reveal>
              <Reveal delay={0.1}><p className="text-lg leading-relaxed mb-6" style={{ color: colors.textSecondary }}>I share what I'm learning as I build. Apps, AI, psychology, and the messy reality of shipping products.</p></Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <MagneticBtn href="https://x.com/Iamjaneezy" target="_blank" className={`group px-5 py-2.5 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold text-sm flex items-center gap-2`}><Twitter size={16} />Follow on X<ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></MagneticBtn>
                  <MagneticBtn href="https://medium.com/@janeezy" target="_blank" className="px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2" style={{ border: `2px solid ${colors.border}` }}><BookOpen size={16} />Medium</MagneticBtn>
                  <MagneticBtn href="https://janeduru.beehiiv.com/subscribe" target="_blank" className="px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2" style={{ border: `2px solid ${colors.border}` }}><Mail size={16} />Newsletter</MagneticBtn>
                </div>
              </Reveal>
            </div>
            <div className="space-y-3">
              {[
                { icon: "🚀", topic: "Building in Public", title: "Daily updates on shipping Ohh and other apps" },
                { icon: "🤖", topic: "AI and Technology", title: "How to use AI tools to earn and create" },
                { icon: "🧠", topic: "Psychology", title: "Why we think and behave the way we do" },
                { icon: "💡", topic: "Lessons Learned", title: "Mistakes, wins, and everything in between" },
              ].map((item, i) => (
                <Reveal key={item.topic} delay={0.08 + i * 0.05}>
                  <motion.div 
                    whileHover={{ x: 8, scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="p-4 rounded-2xl flex items-center gap-4 cursor-pointer" 
                    style={{ background: colors.bgCard, border: `1px solid ${colors.border}` }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.span 
                      className="text-2xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      {item.icon}
                    </motion.span>
                    <div>
                      <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>{item.topic}</span>
                      <p className="font-medium">{item.title}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12"><span className="font-mono text-sm tracking-wider" style={{ color: colors.accent }}>FAQ</span><h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Common <span className="text-gradient">questions</span></h2></Reveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="p-6 rounded-[22px]" style={{ background: colors.bgCard, border: `1px solid ${colors.border}` }}>
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${colors.accent}20`, color: colors.accent }}>?</span>{faq.q}</h3>
                  <p className="text-sm leading-relaxed pl-9" style={{ color: colors.textSecondary }}>{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal><span className="font-mono text-sm tracking-wider" style={{ color: colors.accent }}>05 / CONTACT</span><h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-3 tracking-tight mb-5">Let's <span className="text-gradient">connect</span></h2></Reveal>
          <Reveal delay={0.1}><p className="text-xl mb-10" style={{ color: colors.textSecondary }}>Want to collaborate, chat about apps, or just say hi? Find me online.</p></Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4 mb-8">
              <MagneticBtn href="https://iamjaneezystore.gumroad.com" target="_blank" className={`group px-7 py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-2xl font-semibold flex items-center gap-2`} style={{ boxShadow: `0 8px 30px ${colors.glow}` }}><ShoppingBag size={18} />Get my books<ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></MagneticBtn>
              <MagneticBtn href="https://cal.com/jane-duru/discovery-call" target="_blank" className="px-7 py-4 rounded-2xl font-semibold flex items-center gap-2" style={{ border: `2px solid ${colors.border}` }}><Calendar size={18} />Free 15min call</MagneticBtn>
              <MagneticBtn href="https://cal.com/jane-duru/1-hour-consultation" target="_blank" className="px-7 py-4 rounded-2xl font-semibold flex items-center gap-2" style={{ border: `2px solid ${colors.accent}`, background: `${colors.accent}10` }}><Calendar size={18} />1hr Consult €75</MagneticBtn>
            </div>
          </Reveal>
          <Reveal delay={0.2}><div className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl w-fit" style={{ background: `${colors.accent}08` }}><MapPin size={16} style={{ color: colors.accent }} /><span className="text-sm font-medium">Lisbon, Portugal</span></div></Reveal>
          <Reveal delay={0.22}>
            <div className="flex flex-wrap gap-4 mb-10">
              <MagneticBtn href="https://janeduru.beehiiv.com/subscribe" target="_blank" className="px-6 py-3 rounded-2xl font-semibold flex items-center gap-2" style={{ border: `2px solid ${colors.border}` }}><Mail size={18} />Join newsletter</MagneticBtn>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Twitter, label: "X Twitter", href: "https://x.com/Iamjaneezy" },
                { icon: ShoppingBag, label: "Gumroad", href: "https://iamjaneezystore.gumroad.com" },
                { icon: Building2, label: "Zemio Labs", href: "https://zemiolabs.com" },
                { icon: Github, label: "GitHub", href: "https://github.com/janeezy" },
                { icon: Pen, label: "Medium", href: "https://medium.com/@janeezy" },
              ].map((s, i) => (
                <MagneticBtn 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  className="group px-5 py-2.5 rounded-xl flex items-center gap-2.5 text-sm font-medium" 
                  style={{ background: `${colors.accent}08`, border: `1px solid ${colors.border}` }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <s.icon size={16} />
                  </motion.div>
                  {s.label}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                </MagneticBtn>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg" style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentAlt})`, boxShadow: `0 4px 20px ${colors.glow}` }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><ChevronUp size={24} color="#fff" /></motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden" style={{ background: `${colors.bg}f5`, backdropFilter: "blur(20px)", borderTop: `1px solid ${colors.border}` }}>
            <a href="https://iamjaneezystore.gumroad.com" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-bold`} style={{ boxShadow: `0 4px 20px ${colors.glow}` }}><ShoppingBag size={18} />Get my books<ArrowUpRight size={16} /></a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ borderTop: `1px solid ${colors.border}` }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3"><span className="font-bold">jane<span style={{ color: colors.accent }}>duru</span></span><span className="text-sm" style={{ color: colors.textMuted }}>Builder and Writer</span></div>
          <p className="text-sm" style={{ color: colors.textMuted }}>© {new Date().getFullYear()} Jane Duru</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;