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

// Background component
const Background = ({ colors }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(ellipse 100% 80% at 50% -30%, ${colors.accent}12, transparent)`,
      }}
    />
    <motion.div
      className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full"
      style={{
        background: `radial-gradient(circle, ${colors.accent}08, transparent 70%)`,
      }}
      animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full"
      style={{
        background: `radial-gradient(circle, ${colors.accentAlt}06, transparent 70%)`,
      }}
      animate={{ scale: [1, 0.9, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// Magnetic button component
const MagneticBtn = ({ children, className, onClick, href, target, style }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect)
      setPos({
        x: (e.clientX - rect.left - rect.width / 2) * 0.2,
        y: (e.clientY - rect.top - rect.height / 2) * 0.2,
      });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const Tag = href ? motion.a : motion.button;
  return (
    <Tag
      ref={ref}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
};

// Reveal animation component
const Reveal = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Glow card component
const GlowCard = ({ children, className, colors, glow = false }) => (
  <div className={`relative group ${className}`}>
    {glow && (
      <div
        className={`absolute -inset-px bg-gradient-to-r ${colors.gradient} rounded-[26px] blur opacity-0 group-hover:opacity-25 transition-opacity duration-700`}
      />
    )}
    <div className="relative h-full">{children}</div>
  </div>
);

// Theme picker component
const ThemePicker = ({
  currentTheme,
  setCurrentTheme,
  mode,
  colors,
  position = "below",
}) => {
  const [open, setOpen] = useState(false);
  const isAbove = position === "above";

  const handleThemeSelect = (key) => {
    setCurrentTheme(key);
    setOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        className="p-2.5 rounded-xl"
        style={{
          background: `${colors.accent}10`,
          border: `1px solid ${colors.border}`,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change theme"
        aria-expanded={open}
      >
        <Palette size={18} style={{ color: colors.accent }} />
      </motion.button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: isAbove ? 8 : -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isAbove ? 8 : -8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`absolute ${
                isAbove 
                  ? "bottom-full mb-3 right-0" 
                  : "top-full mt-3 left-0"
              } p-2 rounded-2xl backdrop-blur-2xl z-[90] min-w-[170px]`}
              style={{
                background: `${colors.bgCard}f8`,
                border: `1px solid ${colors.border}`,
                boxShadow: `0 25px 50px -12px ${colors.glow}`,
              }}
            >
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => handleThemeSelect(key)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
                  style={{
                    background:
                      currentTheme === key
                        ? `${colors.accent}12`
                        : "transparent",
                  }}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${theme.dark.gradient}`}
                  />
                  <span className="text-sm font-medium">{theme.name}</span>
                  {currentTheme === key && (
                    <Check
                      size={14}
                      style={{ color: colors.accent }}
                      className="ml-auto"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Portfolio component
const Portfolio = () => {
  const [mode, setMode] = useState("dark");
  const [theme, setTheme] = useState("violet");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const colors = themes[theme][mode];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.background = colors.bg;
    document.body.style.color = colors.text;
  }, [colors]);

  // Scroll listener for back to top button and sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setShowStickyCTA(window.scrollY > 800 && window.scrollY < document.body.scrollHeight - 1500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const nav = [
    { id: "about", label: "About" },
    { id: "products", label: "Books" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "writing", label: "Writing" },
    { id: "contact", label: "Contact" },
  ];

  // Digital products data
  const digitalProducts = [
    {
      title: "Selective Empathy",
      subtitle: "Why the world cries for some lives and stays silent for others",
      description: "Explores why humans, media, and societies don't feel equally for all suffering. Deep analysis of bias, psychology, and how we're trained to care selectively.",
      price: "€22.99",
      href: "https://iamjaneezystore.gumroad.com/l/ikgpou",
      cover: "/book-selective-empathy.png",
      features: [
        "Psychology of selective compassion",
        "Media framing & bias analysis",
        "Real-world examples & reflections",
        "Practical exercises & journaling prompts",
      ],
      badge: "NEW",
      badgeColor: "#22c55e",
      icon: BookOpen,
      featured: true,
    },
    {
      title: "50 AI Prompts To Make Money Online",
      subtitle: "Even As A Beginner",
      description: "Copy-and-paste prompts that actually work. For freelancing, content creation, and digital products.",
      price: "€9.99",
      href: "https://iamjaneezystore.gumroad.com/l/iskap",
      cover: "/book-ai-prompts.png",
      features: [
        "50 proven, copy-and-paste prompts",
        "Works with ChatGPT, Claude, Gemini",
        "Prompts for freelancing, content & products",
        "No tech experience required",
      ],
      badge: "BESTSELLER",
      badgeColor: "#f59e0b",
      icon: Zap,
      featured: true,
    },
  ];

  // FAQ data
  const faqs = [
    {
      q: "Are you available for freelance or contract work?",
      a: "Yes! I'm open to frontend projects, especially React/Next.js/TypeScript work. Book a free call to discuss your project.",
    },
    {
      q: "Do the AI prompts work with ChatGPT, Claude, and other tools?",
      a: "Absolutely. All prompts are designed for any major AI tool — ChatGPT, Claude, Gemini, and more. No specific tool required.",
    },
    {
      q: "What's included in consultation calls?",
      a: "The free 15-min call is a quick intro. For deeper dives — code reviews, architecture discussions, or career advice — I offer paid 1-hour sessions.",
    },
    {
      q: "Can I get a refund on digital products?",
      a: "Yes, Gumroad offers a 30-day refund policy. If you're not satisfied, request a refund — no questions asked.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: colors.bg, color: colors.text }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * { font-family: 'Outfit', -apple-system, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        ::selection { background: ${colors.accent}30; }
        
        .text-gradient {
          background: linear-gradient(135deg, ${colors.accent}, ${colors.accentAlt});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${colors.accent}25; border-radius: 10px; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px ${colors.accent}40; }
          50% { box-shadow: 0 0 30px ${colors.accent}60; }
        }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>

      <Background colors={colors} />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX: smoothProgress,
          background: `linear-gradient(90deg, ${colors.accent}, ${colors.accentAlt})`,
        }}
      />

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl"
        style={{
          background: `${colors.bg}95`,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.button
            onClick={() => scrollTo("hero")}
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            J<span style={{ color: colors.accent }}>D</span>
          </motion.button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ color: colors.textSecondary }}
                whileHover={{
                  color: colors.text,
                  background: `${colors.accent}08`,
                }}
              >
                {item.label}
              </motion.button>
            ))}
            <div
              className="w-px h-5 mx-2"
              style={{ background: colors.border }}
            />
            <ThemePicker
              currentTheme={theme}
              setCurrentTheme={setTheme}
              mode={mode}
              colors={colors}
              position="below"
            />
            <motion.button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl ml-1"
              style={{
                background: `${colors.accent}10`,
                border: `1px solid ${colors.border}`,
              }}
              whileHover={{ scale: 1.05 }}
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
            >
              {mode === "dark" ? (
                <Sun size={18} style={{ color: colors.accent }} />
              ) : (
                <Moon size={18} style={{ color: colors.accent }} />
              )}
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ background: menuOpen ? `${colors.accent}10` : "transparent" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: colors.bg }}
          >
            <div className="h-[72px] flex-shrink-0" />

            <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {nav.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-2xl sm:text-3xl font-bold transition-colors"
                  style={{ color: colors.text }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.25, duration: 0.2 }}
              className="flex-shrink-0 px-6 py-8 flex flex-col items-center gap-4"
              style={{ borderTop: `1px solid ${colors.border}` }}
            >
              <div className="flex items-center gap-4">
                <ThemePicker
                  currentTheme={theme}
                  setCurrentTheme={setTheme}
                  mode={mode}
                  colors={colors}
                  position="above"
                />
                <motion.button
                  onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-xl"
                  style={{
                    background: `${colors.accent}10`,
                    border: `1px solid ${colors.border}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
                >
                  {mode === "dark" ? (
                    <Sun size={18} style={{ color: colors.accent }} />
                  ) : (
                    <Moon size={18} style={{ color: colors.accent }} />
                  )}
                </motion.button>
              </div>
              <p className="text-sm font-medium" style={{ color: colors.textMuted }}>
                Choose your vibe ✨
              </p>
            </motion.div>

            <div className="h-safe-area-inset-bottom flex-shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="min-h-screen flex items-center px-6 pt-24 pb-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <span
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium font-mono"
                  style={{
                    background: `${colors.accent}10`,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute h-full w-full rounded-full opacity-75"
                      style={{ background: "#22c55e" }}
                    />
                    <span
                      className="relative rounded-full h-2 w-2"
                      style={{ background: "#22c55e" }}
                    />
                  </span>
                  <span style={{ color: colors.textSecondary }}>
                    Open to opportunities
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
              >
                <span style={{ color: colors.textSecondary }}>
                  Hi, I'm Jane
                </span>
                <br />
                <span className="text-gradient">Frontend Engineer</span>
                <br />
                <span className="text-gradient">& Creator</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl font-semibold mb-4"
                style={{ color: colors.text }}
              >
                React · Next.js · TypeScript · AI
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg leading-relaxed max-w-xl mb-8"
                style={{ color: colors.textSecondary }}
              >
                I develop web apps, write about AI & psychology, and publish digital products. 
                Co-founding{" "}
                <a
                  href="https://zemiolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline underline-offset-4"
                  style={{ color: colors.accent }}
                >
                  Zemio Labs
                </a>
                {" "}from Lisbon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-6"
              >
                <MagneticBtn
                  onClick={() => scrollTo("work")}
                  className={`group px-7 py-3.5 bg-gradient-to-r ${colors.gradient} text-white rounded-2xl font-semibold flex items-center gap-2`}
                  style={{ boxShadow: `0 8px 30px ${colors.glow}` }}
                >
                  See my work{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </MagneticBtn>
                <MagneticBtn
                  href="https://cal.com/jane-duru/discovery-call"
                  target="_blank"
                  className="px-7 py-3.5 rounded-2xl font-semibold flex items-center gap-2"
                  style={{ border: `2px solid ${colors.border}` }}
                >
                  Book a call{" "}
                  <Calendar size={16} />
                </MagneticBtn>
              </motion.div>

              {/* Books Banner */}
              <motion.a
                href="https://linktr.ee/Janeezy"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: `${colors.accent}10`,
                  border: `1px solid ${colors.border}`,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <BookOpen size={18} style={{ color: colors.accent }} />
                <span className="text-sm font-medium">Check out my books & guides</span>
                <ArrowUpRight size={14} style={{ color: colors.accent }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <motion.div
                  className={`absolute -inset-6 bg-gradient-to-br ${colors.gradient} rounded-[36px] opacity-15 blur-3xl`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />

                <div
                  className="relative rounded-[28px] overflow-hidden"
                  style={{ border: `1px solid ${colors.border}` }}
                >
                  <img
                    src="/IMG.png"
                    alt="Jane Duru"
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${colors.bg}, transparent 40%)`,
                    }}
                  />
                </div>

                {/* Floating card - dev focused */}
                <motion.div
                  className="absolute -bottom-4 left-4 right-4 px-5 py-4 rounded-2xl backdrop-blur-xl"
                  style={{
                    background: `${colors.bgCard}f5`,
                    border: `1px solid ${colors.border}`,
                  }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Code2 size={14} style={{ color: colors.accent }} />
                        <Pen size={14} style={{ color: colors.accentAlt }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          Engineer + Creator
                        </p>
                        <p className="text-xs" style={{ color: colors.textMuted }}>
                          Code by day, content by night
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 size={14} style={{ color: colors.accentAlt }} />
                      <span
                        className="text-xs font-medium"
                        style={{ color: colors.textSecondary }}
                      >
                        Co-founder @ Zemio
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[28px] p-8 sm:p-10"
              style={{
                background: `linear-gradient(135deg, ${colors.accent}12, ${colors.accentAlt}08)`,
                border: `1px solid ${colors.borderHover}`,
              }}
            >
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ background: "#22c55e20", color: "#22c55e" }}
                  >
                    FREE GUIDE INSIDE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                    Weekly insights on AI & tech
                  </h3>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    Join 500+ readers. Get actionable tips, no fluff.
                  </p>
                </div>
                <MagneticBtn
                  href="https://janeduru.beehiiv.com/subscribe"
                  target="_blank"
                  className={`px-6 py-3.5 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-bold flex items-center gap-2`}
                >
                  <Mail size={18} /> Subscribe free
                </MagneticBtn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: colors.accent }}
            >
              01 / ABOUT
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">
              Code meets <span className="text-gradient">creativity</span>
            </h2>
            <p
              className="text-xl mt-4 max-w-2xl"
              style={{ color: colors.textSecondary }}
            >
              Frontend engineer by trade, content creator by passion. My path through medicine 
              and finance shaped how I approach problems and communicate ideas.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <Reveal delay={0.1}>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.text }}
                >
                  What I do
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  I develop{" "}
                  <strong style={{ color: colors.text }}>
                    responsive, performant web applications
                  </strong>{" "}
                  with modern JavaScript frameworks. Currently leading frontend at Zemio Labs, 
                  where we're launching products used by real people.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  My unconventional path from medicine to fintech and tech
                  gives me{" "}
                  <strong style={{ color: colors.text }}>
                    a systems-thinking approach
                  </strong>{" "}
                  to complex problems.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <h3
                  className="text-xl font-bold mb-3 mt-6"
                  style={{ color: colors.text }}
                >
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "Tailwind CSS",
                    "Framer Motion",
                    "REST APIs",
                    "Git & GitHub",
                    "React Native",
                    "NestJS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl text-sm font-medium"
                      style={{
                        background: `${colors.accent}10`,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  icon: Code2,
                  title: "Frontend Development",
                  sub: "React · Next.js · TypeScript",
                  desc: "Delivering accessible, performant UIs. Achieved 35% faster load times and 30% better team velocity.",
                  color: colors.accent,
                },
                {
                  icon: Building2,
                  title: "Co-founder & Tech Lead",
                  sub: "Zemio Labs",
                  desc: "Leading architecture and product development. Currently launching MyBicho and wellness apps.",
                  color: colors.accentAlt,
                },
                {
                  icon: Bot,
                  title: "AI Educator & Writer",
                  sub: "Digital Products",
                  desc: "Creating guides that help beginners use AI to earn online. Translating complexity into clarity.",
                  color: "#f59e0b",
                },
                {
                  icon: Pen,
                  title: "Content Creator",
                  sub: "X (Twitter) & Medium",
                  desc: "Writing about technology, psychology, and systems thinking. Making ideas accessible.",
                  color: "#10b981",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.08}>
                  <GlowCard colors={colors} glow>
                    <motion.div
                      whileHover={{ x: 6 }}
                      className="p-5 rounded-[22px] flex items-start gap-4"
                      style={{
                        background: colors.bgCard,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <div
                        className="p-3 rounded-xl flex-shrink-0"
                        style={{ background: `${item.color}12` }}
                      >
                        <item.icon size={22} style={{ color: item.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p
                          className="text-sm font-medium mb-1"
                          style={{ color: colors.accent }}
                        >
                          {item.sub}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: colors.textSecondary }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIGITAL PRODUCTS ===== */}
      <section id="products" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: colors.accent }}
            >
              02 / BOOKS & GUIDES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">
              Digital <span className="text-gradient">products</span>
            </h2>
            <p
              className="text-xl mt-4 max-w-2xl"
              style={{ color: colors.textSecondary }}
            >
              Practical guides on AI, psychology, and making money online. 
              Real strategies from real experience.
            </p>
          </Reveal>

          {/* Books Grid - Side by Side with Covers */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {digitalProducts.filter(p => p.featured).map((product, i) => (
              <Reveal key={product.title} delay={0.1 * i}>
                <GlowCard colors={colors} glow>
                  <motion.a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-[22px] overflow-hidden"
                    style={{
                      background: colors.bgCard,
                      border: `2px solid ${colors.borderHover}`,
                    }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Book Cover */}
                    <div 
                      className="relative h-48 sm:h-56 overflow-hidden"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accentAlt}15)`,
                      }}
                    >
                      <img
                        src={product.cover}
                        alt={product.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback if no image */}
                      <div 
                        className="absolute inset-0 items-center justify-center hidden"
                        style={{ background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accentAlt}15)` }}
                      >
                        <product.icon size={64} style={{ color: colors.accent, opacity: 0.5 }} />
                      </div>
                      {/* Badge */}
                      <span
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: `${product.badgeColor}`,
                          color: "#fff",
                        }}
                      >
                        {product.badge === "NEW" ? "✨" : "🔥"} {product.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Price */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-2xl font-extrabold"
                          style={{ color: colors.accent }}
                        >
                          {product.price}
                        </span>
                        <span className="text-xs font-mono px-2 py-1 rounded-md" style={{ background: `${colors.accent}10` }}>
                          Instant download
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-extrabold mb-1">{product.title}</h3>
                      <p
                        className="text-sm font-medium mb-3"
                        style={{ color: colors.accentAlt }}
                      >
                        {product.subtitle}
                      </p>

                      {/* Description */}
                      <p
                        className="text-sm mb-4 line-clamp-2"
                        style={{ color: colors.textSecondary }}
                      >
                        {product.description}
                      </p>

                      {/* Features Preview */}
                      <div className="space-y-1.5 mb-5">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check size={14} style={{ color: "#22c55e" }} />
                            <span style={{ color: colors.textSecondary }}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div
                        className={`flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-bold text-sm`}
                      >
                        Get the book
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </div>
                    </div>
                  </motion.a>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          {/* Browse All Link */}
          <Reveal delay={0.3}>
            <motion.a
              href="https://linktr.ee/Janeezy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 rounded-2xl"
              style={{ background: `${colors.accent}08`, border: `1px solid ${colors.border}` }}
              whileHover={{ scale: 1.01 }}
            >
              <ShoppingBag size={20} style={{ color: colors.accent }} />
              <span className="font-semibold">View all on Linktree</span>
              <ArrowUpRight size={18} style={{ color: colors.accent }} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </Reveal>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: colors.accent }}
            >
              03 / EXPERIENCE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">
              Where I've worked
            </h2>
            <p className="text-lg mt-3" style={{ color: colors.textSecondary }}>
              3+ years in frontend · 8 years in fintech ·{" "}
              <a
                href="https://www.linkedin.com/in/janeezy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
                style={{ color: colors.accent }}
              >
                Full history on LinkedIn →
              </a>
            </p>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                title: "Frontend Developer & Co-founder",
                company: "Zemio Labs",
                period: "2025 – Present",
                desc: "Leading frontend architecture. React, Next.js, TypeScript. Launching MyBicho and wellness apps.",
                current: true,
              },
              {
                title: "Frontend Developer",
                company: "Jether Tech",
                period: "2022 – 2025",
                desc: "Delivered responsive web apps with React/TypeScript. Reduced bugs 40%, improved cross-browser compatibility 25%.",
              },
              {
                title: "Financial Sales Manager",
                company: "Golden Markets & Ashford",
                period: "2016 – 2022",
                desc: "Managed €20M+ portfolio in crypto/fintech. Skills in high-stakes decisions now applied to product work.",
              },
            ].map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-[22px]"
                  style={{
                    background: colors.bgCard,
                    border: `1px solid ${job.current ? colors.borderHover : colors.border}`,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p className="text-sm font-medium" style={{ color: colors.accent }}>
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono" style={{ color: colors.textMuted }}>
                        {job.period}
                      </span>
                      {job.current && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-bold"
                          style={{ background: "#22c55e20", color: "#22c55e" }}
                        >
                          NOW
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    {job.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="work" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: colors.accent }}
            >
              04 / PROJECTS
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">
              Featured work
            </h2>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <GlowCard colors={colors} glow>
                <motion.a
                  href="https://mybicho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[26px] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent}08, ${colors.accentAlt}04)`,
                    border: `1px solid ${colors.border}`,
                  }}
                  whileHover={{ scale: 1.005 }}
                >
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                        style={{
                          background: `${colors.accent}15`,
                          color: colors.accent,
                        }}
                      >
                        CO-FOUNDER
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                        style={{ background: "#22c55e15", color: "#22c55e" }}
                      >
                        IN DEVELOPMENT
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">
                      MyBicho
                    </h3>
                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: colors.accent }}
                    >
                      Zemio Labs
                    </p>
                    <p
                      className="text-lg mb-6 max-w-2xl"
                      style={{ color: colors.textSecondary }}
                    >
                      Leading frontend development for an innovative plant & pet care platform.
                      React Native and Expo. Architected reusable UI libraries 
                      and integrating AI-powered features.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        "React Native",
                        "Expo",
                        "TypeScript",
                        "AI Integration",
                      ].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium"
                          style={{ background: `${colors.accent}10` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      className="flex items-center gap-2 font-semibold"
                      style={{ color: colors.accent }}
                    >
                      Visit site{" "}
                      <ArrowUpRight
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </div>
                  </div>
                </motion.a>
              </GlowCard>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Fitness Hub",
                  desc: "Modern fitness platform with workout tracking and progress analytics.",
                  href: "https://gym-rho-one.vercel.app",
                  tags: ["React", "PWA"],
                  badge: "LIVE",
                  badgeColor: "#22c55e",
                },
                {
                  title: "Zemio Labs Website",
                  desc: "Company website showcasing our vision, products, and team.",
                  href: "https://zemiolabs.com",
                  tags: ["React", "Next.js", "Tailwind"],
                  badge: "LIVE",
                  badgeColor: "#22c55e",
                },
                {
                  title: "GitHub Profile",
                  desc: "Explore my open source contributions and personal projects.",
                  href: "https://github.com/janeezy",
                  tags: ["JavaScript", "React", "TypeScript"],
                  badge: "REPOSITORIES",
                  badgeColor: "#8b5cf6",
                },
              ].map((p, i) => (
                <Reveal key={p.title} delay={0.15 + i * 0.08}>
                  <GlowCard colors={colors} glow>
                    <motion.a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full p-6 rounded-[22px]"
                      style={{
                        background: colors.bgCard,
                        border: `1px solid ${colors.border}`,
                      }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                          style={{
                            background: `${p.badgeColor}15`,
                            color: p.badgeColor,
                          }}
                        >
                          {p.badge}
                        </span>
                        <ArrowUpRight
                          size={18}
                          style={{ color: colors.textMuted }}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                      <p
                        className="text-sm mb-4"
                        style={{ color: colors.textSecondary }}
                      >
                        {p.desc}
                      </p>
                      <div className="flex gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg text-xs font-medium"
                            style={{ background: `${colors.accent}10` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.a>
                  </GlowCard>
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
              <Reveal>
                <span
                  className="font-mono text-sm tracking-wider"
                  style={{ color: colors.accent }}
                >
                  05 / WRITING
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight mb-5">
                  Ideas worth <span className="text-gradient">sharing</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: colors.textSecondary }}
                >
                  I explore how technology shapes thinking, how systems influence behavior, 
                  and how to navigate an AI-driven world.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <MagneticBtn
                    href="https://x.com/Iamjaneezy"
                    target="_blank"
                    className={`group px-5 py-2.5 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold text-sm flex items-center gap-2`}
                  >
                    <Twitter size={16} /> Follow on X
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </MagneticBtn>
                  <MagneticBtn
                    href="https://medium.com/@janeezy"
                    target="_blank"
                    className="px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2"
                    style={{ border: `2px solid ${colors.border}` }}
                  >
                    <BookOpen size={16} /> Read on Medium
                  </MagneticBtn>
                </div>
              </Reveal>
            </div>

            <div className="space-y-3">
              {[
                { icon: "💻", topic: "AI & Technology", title: "How AI systems work and where they're headed" },
                { icon: "🧠", topic: "Psychology", title: "Behavior, incentives, decision-making patterns" },
                { icon: "⛓️", topic: "Web3 & Crypto", title: "Digital empowerment and decentralized systems" },
                { icon: "🌍", topic: "Geopolitics", title: "Africa's rise and shifting global dynamics" },
                { icon: "🌟", topic: "Consciousness", title: "Inner clarity and intentional living" },
              ].map((item, i) => (
                <Reveal key={item.topic} delay={0.08 + i * 0.05}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="p-4 rounded-2xl flex items-center gap-4"
                    style={{
                      background: colors.bgCard,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span
                        className="text-xs font-mono font-semibold"
                        style={{ color: colors.accent }}
                      >
                        {item.topic}
                      </span>
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
          <Reveal className="text-center mb-12">
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: colors.accent }}
            >
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
              Common <span className="text-gradient">questions</span>
            </h2>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div
                  className="p-6 rounded-[22px]"
                  style={{
                    background: colors.bgCard,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${colors.accent}20`, color: colors.accent }}
                    >
                      ?
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed pl-9" style={{ color: colors.textSecondary }}>
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: colors.accent }}
            >
              06 / CONTACT
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-3 tracking-tight mb-5">
              Let's <span className="text-gradient">connect</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-xl mb-10"
              style={{ color: colors.textSecondary }}
            >
              Looking for a frontend engineer? Want to collaborate? Or just say hi — I'd love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4 mb-8">
              <MagneticBtn
                href="https://cal.com/jane-duru/discovery-call"
                target="_blank"
                className={`group px-7 py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-2xl font-semibold flex items-center gap-2`}
                style={{ boxShadow: `0 8px 30px ${colors.glow}` }}
              >
                <Calendar size={18} /> Free 15min call
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticBtn>
              <MagneticBtn
                href="https://cal.com/jane-duru/1-hour-consultation"
                target="_blank"
                className="px-7 py-4 rounded-2xl font-semibold flex items-center gap-2"
                style={{ border: `2px solid ${colors.accent}`, background: `${colors.accent}10` }}
              >
                <Calendar size={18} /> 1hr Deep Dive · €75
              </MagneticBtn>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              className="flex items-center gap-2 mb-10 px-4 py-2 rounded-xl w-fit"
              style={{ background: `${colors.accent}08` }}
            >
              <MapPin size={16} style={{ color: colors.accent }} />
              <span className="text-sm font-medium">Lisbon, Portugal · Remote worldwide</span>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/janeezy" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/janeezy/" },
                { icon: Twitter, label: "X / Twitter", href: "https://x.com/Iamjaneezy" },
                { icon: Pen, label: "Medium", href: "https://medium.com/@janeezy" },
                { icon: BookOpen, label: "Books", href: "https://linktr.ee/Janeezy" },
              ].map((s) => (
                <MagneticBtn
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  className="group px-5 py-2.5 rounded-xl flex items-center gap-2.5 text-sm font-medium"
                  style={{
                    background: `${colors.accent}08`,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <s.icon size={16} /> {s.label}{" "}
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-60 transition-opacity"
                  />
                </MagneticBtn>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentAlt})`,
              boxShadow: `0 4px 20px ${colors.glow}`,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ChevronUp size={24} color="#fff" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden"
            style={{
              background: `${colors.bg}f5`,
              backdropFilter: "blur(20px)",
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <div className="flex gap-2">
              <a
                href="https://linktr.ee/Janeezy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
                style={{ background: `${colors.accent}15`, border: `1px solid ${colors.border}` }}
              >
                <BookOpen size={16} />
                Books
              </a>
              <a
                href="https://cal.com/jane-duru/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-bold text-sm`}
              >
                <Calendar size={16} />
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer
        className="py-10 px-6"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold">
              jane<span style={{ color: colors.accent }}>duru</span>
            </span>
            <span style={{ color: colors.border }}>·</span>
            <span className="text-sm" style={{ color: colors.textMuted }}>
              Frontend Engineer & Creator
            </span>
          </div>
          <p className="text-sm" style={{ color: colors.textMuted }}>
            © {new Date().getFullYear()} Jane Duru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;