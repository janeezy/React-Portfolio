import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu, X, Sun, Moon, ArrowUpRight, Heart,
  Pen, Mail, MapPin, ExternalLink, Github,
  Twitter, ChevronUp, ShoppingBag, Zap,
  BookOpen, FileText, Building2, Calendar,
  Sparkles, Check,
} from "lucide-react";

// ─── palette ────────────────────────────────────────────────────────────────
const DARK = {
  bg:      "#0c0a08",
  surface: "#141210",
  accent:  "#d4845a",
  gold:    "#c9973f",
  text:    "#f2ede8",
  sub:     "rgba(242,237,232,0.55)",
  muted:   "rgba(242,237,232,0.3)",
  border:  "rgba(212,132,90,0.14)",
  bHover:  "rgba(212,132,90,0.3)",
  glow:    "rgba(212,132,90,0.22)",
};
const LIGHT = {
  bg:      "#faf8f5",
  surface: "#f2ede6",
  accent:  "#b85c30",
  gold:    "#a07820",
  text:    "#18120a",
  sub:     "rgba(24,18,10,0.6)",
  muted:   "rgba(24,18,10,0.38)",
  border:  "rgba(184,92,48,0.13)",
  bHover:  "rgba(184,92,48,0.28)",
  glow:    "rgba(184,92,48,0.18)",
};

// ─── micro helpers ───────────────────────────────────────────────────────────
const Fade = ({ children, delay = 0, y = 28, once = true, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-50px" }}
    transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >{children}</motion.div>
);

const Pill = ({ children, color, bg }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
    style={{ background: bg, color }}>{children}</span>
);

const Btn = ({ href, target, onClick, children, variant = "ghost", c }) => {
  const base = "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all";
  const styles = variant === "primary"
    ? { background: c.accent, color: "#fff", boxShadow: `0 4px 18px ${c.glow}` }
    : { border: `1.5px solid ${c.bHover}`, color: c.text };
  const Tag = href ? "a" : "button";
  return (
    <motion.a
      href={href} target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={base}
      style={styles}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
    >{children}</motion.a>
  );
};

// ─── Main ────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [top,  setTop]  = useState(false);
  const c = dark ? DARK : LIGHT;

  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);
  useEffect(() => { document.body.style.background = c.bg; document.body.style.color = c.text; }, [c]);
  useEffect(() => {
    const fn = () => setTop(window.scrollY > 500);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = id => {
    setMenu(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const navLinks = [
    { id: "building", label: "Building" },
    { id: "books",    label: "Books"    },
    { id: "writing",  label: "Writing"  },
    { id: "contact",  label: "Contact"  },
  ];

  const BOOKS = [
    {
      title:    "Quiet the Noise",
      sub:      "A Woman's Guide to Stopping Overthinking, Setting Boundaries, and Finally Feel Free",
      price:    "€21",
      badge:    "★ 5.0",
      badgeClr: "#c9973f",
      cover:    "/quiet-the-noise.png",
      href:     "https://www.amazon.es/stores/Jane-Duru/author/B0GPLWY7ML/allbooks",
      bullets:  ["Stop the mental spiral for good", "Set boundaries without guilt", "Kindle & Paperback"],
    },
    {
      title:    "Selective Empathy",
      sub:      "Why the world cries for some lives and stays silent for others",
      price:    "€23",
      badge:    "NEW",
      badgeClr: "#5fad7e",
      cover:    "/book-selective-empathy.png",
      href:     "https://www.amazon.es/stores/Jane-Duru/author/B0GPLWY7ML/allbooks",
      bullets:  ["Psychology of compassion bias", "Media & selective outrage", "Practical empathy exercises"],
    },
    {
      title:    "50 AI Prompts To Make Money",
      sub:      "Copy-paste prompts that work — even as a complete beginner",
      price:    "€9.99",
      badge:    "POPULAR",
      badgeClr: "#5a90d4",
      cover:    "/book-ai-prompts.png",
      href:     "https://iamjaneezystore.gumroad.com/l/iskap",
      bullets:  ["50 ready-to-use prompts", "Works with any AI tool", "No tech experience needed"],
    },
  ];

  return (
    <div style={{ background: c.bg, color: c.text, minHeight: "100vh" }}>

      {/* ── fonts + globals ── */}
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
      `}</style>

      {/* progress */}
      <motion.div className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
        style={{ scaleX: bar, background: `linear-gradient(90deg, ${c.accent}, ${c.gold})` }} />

      {/* ══ NAV ══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50"
        style={{ background: `${c.bg}ec`, backdropFilter: "blur(18px)", borderBottom: `1px solid ${c.border}` }}>
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <motion.button onClick={() => go("hero")} whileHover={{ scale: 1.02 }}
            className="serif font-bold text-lg tracking-tight">
            Jane <span style={{ color: c.accent }}>Duru</span>
          </motion.button>

          {/* desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(n => (
              <motion.button key={n.id} onClick={() => go(n.id)}
                className="px-4 py-1.5 rounded-lg text-sm font-medium"
                style={{ color: c.sub }}
                whileHover={{ color: c.text, background: `${c.accent}0c` }}>
                {n.label}
              </motion.button>
            ))}
            <div className="w-px h-4 mx-3" style={{ background: c.border }} />
            <motion.button onClick={() => setDark(!dark)}
              className="p-2 rounded-lg" style={{ background: `${c.accent}12`, border: `1px solid ${c.border}` }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {dark ? <Sun size={15} style={{ color: c.accent }} /> : <Moon size={15} style={{ color: c.accent }} />}
            </motion.button>
          </nav>

          {/* mobile burger */}
          <button onClick={() => setMenu(!menu)} className="md:hidden p-2 rounded-lg"
            style={{ background: menu ? `${c.accent}12` : "transparent" }}>
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col" style={{ background: c.bg }}>
            <div className="h-14" />
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((n, i) => (
                <motion.button key={n.id}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                  onClick={() => go(n.id)} className="serif text-3xl font-bold">{n.label}</motion.button>
              ))}
            </nav>
            <div className="px-6 py-8 flex justify-center" style={{ borderTop: `1px solid ${c.border}` }}>
              <motion.button onClick={() => setDark(!dark)} className="p-2.5 rounded-xl"
                style={{ background: `${c.accent}12`, border: `1px solid ${c.border}` }}>
                {dark ? <Sun size={16} style={{ color: c.accent }} /> : <Moon size={16} style={{ color: c.accent }} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section id="hero" className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* live badge */}
          <Fade>
            <a href="https://ohh.world" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mono text-xs mb-10"
              style={{ background: `${c.accent}0f`, border: `1px solid ${c.border}` }}>
              <motion.span className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#5fad7e" }}
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
              <span style={{ color: c.sub }}>
                Ohh is <span style={{ color: c.accent, fontWeight: 600 }}>live</span> on iOS & Android
              </span>
            </a>
          </Fade>

          <Fade delay={0.06}>
            <h1 className="serif font-bold leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
              I'm Jane.<br />
              <span style={{ color: c.accent }}>I build apps.</span><br />
              <span style={{ color: c.sub }}>I write things.</span>
            </h1>
          </Fade>

          <Fade delay={0.14}>
            <p className="mt-7 text-lg leading-relaxed max-w-xl" style={{ color: c.sub }}>
              Co-founder of{" "}
              <a href="https://zemiolabs.com" target="_blank" rel="noopener noreferrer"
                className="font-semibold" style={{ color: c.accent }}>Zemio Labs</a>.
              {" "}Currently shipping{" "}
              <a href="https://ohh.world" target="_blank" rel="noopener noreferrer"
                className="font-semibold" style={{ color: c.accent }}>Ohh</a>
              {" "}— conversation cards for the connections you actually want.
              Writing books on psychology and AI. Based in Lisbon.
            </p>
          </Fade>

          <Fade delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Btn href="https://ohh.world" target="_blank" variant="primary" c={c}>
              <Heart size={15} /> Download Ohh <ArrowUpRight size={14} />
            </Btn>
            <Btn href="https://iamjaneezystore.gumroad.com" target="_blank" c={c}>
              <ShoppingBag size={15} /> Get my books
            </Btn>
          </Fade>

          {/* quick facts */}
          <Fade delay={0.28}>
            <div className="mt-14 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
              style={{ borderTop: `1px solid ${c.border}` }}>
              {[
                { n: "4",    l: "books published"    },
                { n: "2",    l: "apps live"           },
                { n: "8yr",  l: "fintech background"  },
                { n: "1",    l: "studio, Zemio Labs"  },
                { n: "4",    l: "years of experince building"  },
              ].map(s => (
                <div key={s.n}>
                  <p className="serif text-3xl font-bold" style={{ color: c.accent }}>{s.n}</p>
                  <p className="mono text-xs mt-1" style={{ color: c.muted }}>{s.l}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ BUILDING ═════════════════════════════════════════════════════════ */}
      <section id="building" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <Fade><p className="mono text-xs tracking-widest mb-3" style={{ color: c.muted }}>01 — BUILDING</p></Fade>
          <Fade delay={0.05}>
            <h2 className="serif font-bold mb-12" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              What I'm shipping
            </h2>
          </Fade>

          {/* ── OHH hero card ── */}
          <Fade delay={0.08}>
            <div className="relative overflow-hidden rounded-3xl mb-6"
              style={{ background: `linear-gradient(135deg, ${c.accent}16 0%, ${c.surface} 60%)`, border: `1.5px solid ${c.bHover}` }}>
              <motion.div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 90% 10%, ${c.accent}22, transparent 55%)` }}
                animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 6, repeat: Infinity }} />
              <div className="relative p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="mono text-xs px-3 py-1 rounded-full flex items-center gap-1.5"
                        style={{ background: "#5fad7e20", color: "#5fad7e" }}>
                        <motion.span className="w-1.5 h-1.5 rounded-full bg-green-400"
                          animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                        LIVE
                      </span>
                      <span className="mono text-xs px-3 py-1 rounded-full"
                        style={{ background: `${c.accent}14`, color: c.accent }}>iOS & Android</span>
                    </div>

                    <h3 className="serif font-bold mb-1" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}>
                      Ohh
                    </h3>
                    <p className="font-semibold mb-2" style={{ color: c.accent }}>
                      Date nights, girls' nights, family nights — made unforgettable.
                    </p>
                    <p className="mb-6 max-w-lg" style={{ color: c.sub }}>
                      Conversation cards for the connections you actually want.
                      58 decks, 3,000+ cards. Real questions that go beyond "how are you."
                    </p>

                    {/* store badges */}
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href="https://apps.apple.com/us/app/ohh-deep-conversation-cards/id6759226145"
                        target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold"
                        style={{ background: c.text, color: c.bg, boxShadow: `0 4px 16px ${c.glow}` }}>
                        {/* Apple icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left leading-tight">
                          <p className="text-[10px] opacity-60 font-normal">Download on the</p>
                          <p className="font-bold text-sm leading-none">App Store</p>
                        </div>
                      </motion.a>

                      <motion.a
                        href="https://play.google.com/store/apps/details?id=app.ohh.world"
                        target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold"
                        style={{ background: `${c.accent}14`, border: `1.5px solid ${c.bHover}`, color: c.text }}>
                        {/* Play icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: c.accent }}>
                          <path d="M3.18 23.76c.34.19.74.18 1.08-.01l11.3-6.53-2.6-2.6-9.78 9.14zm-1.14-20.2C1.74 3.9 1.5 4.3 1.5 4.8v14.4c0 .5.24.9.54 1.24l.08.07 8.07-8.07v-.19L2.04 3.56zm17.04 7.27L16.6 8.7l-2.78 2.78 2.78 2.78 2.5-1.44c.71-.41.71-1.08-.02-1.49zM4.26.24C3.92.04 3.52.06 3.18.25L13.04 10.1l-2.6 2.6L3.18.24z" />
                        </svg>
                        <div className="text-left leading-tight">
                          <p className="text-[10px] opacity-60 font-normal">Get it on</p>
                          <p className="font-bold text-sm leading-none">Google Play</p>
                        </div>
                      </motion.a>
                    </div>
                  </div>

                  {/* icon */}
                  <motion.div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center flex-shrink-0 self-start"
                    style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.gold})` }}
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    animate={{ boxShadow: [`0 0 0 0 ${c.glow}`, `0 0 0 10px transparent`] }}
                    transition={{ duration: 2.5, repeat: Infinity }}>
                    <Heart size={32} color="#fff" />
                  </motion.div>
                </div>
              </div>
            </div>
          </Fade>

          {/* Zemio Labs — secondary card */}
          <Fade delay={0.14}>
            <motion.a href="https://zemiolabs.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
              whileHover={{ x: 4, borderColor: c.bHover }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${c.accent}14` }}>
                <Building2 size={22} style={{ color: c.accent }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-semibold">Zemio Labs</p>
                  <span className="mono text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "#5fad7e18", color: "#5fad7e" }}>LIVE</span>
                </div>
                <p className="text-sm" style={{ color: c.sub }}>App studio — building Ohh and more</p>
              </div>
              <ArrowUpRight size={16} style={{ color: c.muted }} />
            </motion.a>
          </Fade>
        </div>
      </section>

      {/* ══ BOOKS LIBRARY ════════════════════════════════════════════════════ */}
      <section id="books" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <Fade><p className="mono text-xs tracking-widest mb-3" style={{ color: c.muted }}>02 — BOOKS</p></Fade>
          <Fade delay={0.05} className="mb-2">
            <h2 className="serif font-bold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Books library
            </h2>
          </Fade>
          <Fade delay={0.08} className="mb-12">
            <p className="text-base mt-2" style={{ color: c.sub }}>
              Psychology, AI, and getting out of your own head.
            </p>
          </Fade>

          {/* 3-column book shelf */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BOOKS.map((book, i) => (
              <Fade key={book.title} delay={0.07 * i}>
                <motion.a href={book.href} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl overflow-hidden h-full"
                  style={{ background: c.surface, border: `1px solid ${c.border}` }}
                  whileHover={{ y: -5, borderColor: c.bHover, boxShadow: `0 16px 40px -8px ${c.glow}` }}
                  transition={{ type: "spring", stiffness: 360, damping: 22 }}>

                  {/* cover */}
                  <div className="relative overflow-hidden" style={{ height: 200, background: `${c.accent}10` }}>
                    <img
                      src={book.cover} alt={book.title}
                      className="w-full h-full object-contain p-5 group-hover:scale-[1.04] transition-transform duration-500"
                      onError={e => { e.target.style.display = "none"; }}
                    />
                    <span className="absolute top-3 right-3 mono text-xs px-2.5 py-1 rounded-full font-bold text-white"
                      style={{ background: book.badgeClr }}>
                      {book.badge}
                    </span>
                  </div>

                  {/* info */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="serif font-bold text-lg leading-tight mb-1">{book.title}</p>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: c.sub }}>{book.sub}</p>

                    <ul className="space-y-1.5 mb-5 flex-1">
                      {book.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 text-xs" style={{ color: c.sub }}>
                          <span style={{ color: c.accent, flexShrink: 0, marginTop: 1 }}>—</span>{b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4"
                      style={{ borderTop: `1px solid ${c.border}` }}>
                      <span className="serif font-bold text-xl" style={{ color: c.accent }}>{book.price}</span>
                      <span className="flex items-center gap-1 mono text-xs" style={{ color: c.muted }}>
                        Get it <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Fade>
            ))}
          </div>

          {/* all books CTA */}
          <Fade delay={0.24} className="mt-5">
            <motion.a href="https://www.amazon.es/stores/Jane-Duru/author/B0GPLWY7ML/allbooks"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-medium mono"
              style={{ background: `${c.accent}09`, border: `1px solid ${c.border}` }}
              whileHover={{ scale: 1.01, borderColor: c.bHover }}>
              <BookOpen size={15} style={{ color: c.accent }} />
              <span style={{ color: c.sub }}>All books on Amazon</span>
              <ArrowUpRight size={13} style={{ color: c.accent }} />
            </motion.a>
          </Fade>
        </div>
      </section>

      {/* ══ WRITING ══════════════════════════════════════════════════════════ */}
      <section id="writing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <Fade><p className="mono text-xs tracking-widest mb-3" style={{ color: c.muted }}>03 — WRITING</p></Fade>
          <Fade delay={0.05} className="mb-3">
            <h2 className="serif font-bold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Building in public.
            </h2>
          </Fade>
          <Fade delay={0.08} className="mb-10">
            <p className="text-base leading-relaxed max-w-lg" style={{ color: c.sub }}>
              I write about shipping Ohh, converting curious people into daily users,
              and the psychology behind why people connect — or don't.
              No polished takes. Just what I'm actually learning.
            </p>
          </Fade>

          {/* topics */}
          <Fade delay={0.12}>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {[
                { e: "💬", t: "Ohh & user conversion",  d: "How to get people off social media and into real conversation" },
                { e: "🤖", t: "AI & prompting",          d: "What actually works — tools, prompts, the real stuff" },
                { e: "🧠", t: "Psychology of connection", d: "Why we connect deeply with some and stay shallow with others" },
                { e: "🚀", t: "Building a mobile app",    d: "Shipping React Native to App Store — the unfiltered version" },
              ].map(item => (
                <motion.div key={item.t}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: c.surface, border: `1px solid ${c.border}` }}
                  whileHover={{ x: 4, borderColor: c.bHover }}
                  transition={{ type: "spring", stiffness: 380 }}>
                  <span className="text-xl leading-none flex-shrink-0 mt-0.5">{item.e}</span>
                  <div>
                    <p className="font-semibold text-sm mb-1">{item.t}</p>
                    <p className="text-xs leading-relaxed" style={{ color: c.sub }}>{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Fade>

          {/* platforms */}
          <Fade delay={0.18}>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "X / Twitter",   href: "https://x.com/Iamjaneezy",                            icon: Twitter    },
                { label: "Substack",      href: "https://janeezyofficial.substack.com/",               icon: Mail       },
                { label: "X Articles",    href: "https://x.com/Iamjaneezy/articles",                   icon: FileText   },
                { label: "Medium",        href: "https://medium.com/@janeezy",                          icon: BookOpen   },
              ].map(l => (
                <motion.a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
                  style={{ background: c.surface, border: `1px solid ${c.border}`, color: c.sub }}
                  whileHover={{ scale: 1.03, y: -1, borderColor: c.bHover }}>
                  <l.icon size={14} style={{ color: c.accent }} />
                  {l.label}
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ ABOUT (brief) ════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ borderTop: `1px solid ${c.border}` }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Fade>
            <h2 className="serif font-bold mb-5" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>
              Medicine → fintech → apps.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: c.sub }}>
              I spent years in crypto and fintech managing big portfolios. Then decided to build the products myself.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: c.sub }}>
              Now I run Zemio Labs with my co-founder. Ohh is live. More coming.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React Native", "TypeScript", "NestJS", "Next.js", "Expo"].map(s => (
                <span key={s} className="mono text-xs px-3 py-1.5 rounded-lg"
                  style={{ background: `${c.accent}0e`, border: `1px solid ${c.border}`, color: c.sub }}>{s}</span>
              ))}
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${c.border}` }}>
              <img src="/IMG.png" alt="Jane Duru"
                className="w-full aspect-[4/5] object-cover object-top" />
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${c.bg}cc, transparent 40%)` }} />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{ background: `${c.surface}f0`, border: `1px solid ${c.border}`, backdropFilter: "blur(12px)" }}>
                <motion.span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#5fad7e" }}
                  animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="text-sm font-medium">Shipping in Lisbon</span>
                <span className="ml-auto mono text-xs" style={{ color: c.muted }}>2026</span>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <Fade><p className="mono text-xs tracking-widest mb-3" style={{ color: c.muted }}>04 — CONTACT</p></Fade>
          <Fade delay={0.05} className="mb-3">
            <h2 className="serif font-bold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Let's talk.
            </h2>
          </Fade>
          <Fade delay={0.08} className="mb-8">
            <p className="text-base" style={{ color: c.sub }}>
              Collaboration, apps, or just want to say hi.
            </p>
          </Fade>

          <Fade delay={0.1} className="flex flex-wrap gap-3 mb-8">
            <Btn href="https://cal.com/jane-duru/discovery-call" target="_blank" variant="primary" c={c}>
              <Calendar size={14} /> Free 15-min call
            </Btn>
            <Btn href="https://cal.com/jane-duru/1-hour-consultation" target="_blank" c={c}>
              <Calendar size={14} /> 1hr Consult — €75
            </Btn>
          </Fade>

          <Fade delay={0.14} className="flex items-center gap-2 mb-8">
            <MapPin size={13} style={{ color: c.accent }} />
            <span className="text-sm" style={{ color: c.muted }}>Lisbon, Portugal</span>
          </Fade>

          <Fade delay={0.16}>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: "X / Twitter",  href: "https://x.com/Iamjaneezy",                                            icon: Twitter    },
                { label: "Substack",     href: "https://janeezyofficial.substack.com/",                               icon: Mail       },
                { label: "Gumroad",      href: "https://iamjaneezystore.gumroad.com",                                  icon: ShoppingBag },
                { label: "Amazon",       href: "https://www.amazon.es/stores/Jane-Duru/author/B0GPLWY7ML/allbooks",   icon: BookOpen   },
                { label: "Zemio Labs",   href: "https://zemiolabs.com",                                                icon: Building2  },
                { label: "Ohh",          href: "https://ohh.world",                                                    icon: Heart      },
                { label: "GitHub",       href: "https://github.com/janeezy",                                           icon: Github     },
                { label: "Medium",       href: "https://medium.com/@janeezy",                                          icon: Pen        },
              ].map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
                  style={{ background: `${c.accent}0a`, border: `1px solid ${c.border}`, color: c.sub }}
                  whileHover={{ scale: 1.04, y: -1, borderColor: c.bHover }}>
                  <s.icon size={13} style={{ color: c.accent }} />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6" style={{ borderTop: `1px solid ${c.border}` }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="serif font-bold" style={{ color: c.accent }}>Jane Duru</p>
          <p className="mono text-xs" style={{ color: c.muted }}>
            © {new Date().getFullYear()} — Builder & Writer, Lisbon
          </p>
        </div>
      </footer>

      {/* scroll to top */}
      <AnimatePresence>
        {top && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full"
            style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.gold})`, boxShadow: `0 4px 16px ${c.glow}` }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ChevronUp size={18} color="#fff" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}