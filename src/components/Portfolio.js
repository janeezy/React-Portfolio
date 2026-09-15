import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  Instagram,
  Mail,
  Menu,
  Sparkles,
  Twitter,
  X,
} from "lucide-react";

const AMAZON = "https://amazon.com/author/janeduru";
const GUMROAD = "https://iamjaneezystore.gumroad.com";

const books = [
  {
    title: "Nobody Pays You for Working Hard Anymore",
    subtitle: "Create value. Build leverage. Make money in the age of AI.",
    cover: "/new-book.jpg",
    latest: true,
  },
  {
    title: "Quiet the Noise",
    subtitle: "Stop overthinking, set boundaries and finally feel free.",
    cover: "/quiet-the-noise.png",
  },
  {
    title: "Selective Empathy",
    subtitle: "Why the world cries for some lives and stays silent for others.",
    cover: "/book-selective-empathy.png",
  },
  {
    title: "50 AI Prompts to Make Money",
    subtitle: "Practical prompts for turning AI into useful income ideas.",
    cover: "/book-ai-prompts.png",
  },
];

const fade = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const joinWaitlist = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/zemiolabs@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          product: "AfterFight",
          _subject: "New AfterFight waitlist signup",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Unable to join");
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="site-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');
        :root { --ink:#16151a; --muted:#716d78; --cream:#fffaf5; --line:#e9e2dc; --coral:#ff6978; --violet:#7462e8; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--cream); color:var(--ink); font-family:'DM Sans',sans-serif; }
        button,input { font:inherit; }
        a { color:inherit; text-decoration:none; }
        .site-shell { min-height:100vh; overflow:hidden; background:radial-gradient(circle at 90% 4%,#f2eaff 0,transparent 28%),radial-gradient(circle at 3% 27%,#ffe8e6 0,transparent 25%),var(--cream); }
        .wrap { width:min(1160px,calc(100% - 40px)); margin:0 auto; }
        .nav { height:76px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid rgba(22,21,26,.08); }
        .logo { font:800 20px 'Manrope'; letter-spacing:-.7px; }
        .logo span { color:var(--coral); }
        .nav-links { display:flex; align-items:center; gap:28px; color:var(--muted); font-size:14px; font-weight:600; }
        .nav-links button { border:0; background:none; cursor:pointer; color:inherit; }
        .nav-links button:hover { color:var(--ink); }
        .nav-cta,.primary,.secondary { display:inline-flex; align-items:center; justify-content:center; gap:8px; border-radius:999px; font-weight:700; transition:.2s ease; cursor:pointer; }
        .nav-cta { padding:11px 18px; color:white; background:var(--ink); }
        .nav-cta:hover,.primary:hover { transform:translateY(-2px); }
        .menu-button { display:none; background:none; border:0; }
        .hero { padding:88px 0 96px; display:grid; grid-template-columns:1.1fr .9fr; gap:70px; align-items:center; }
        .eyebrow { display:inline-flex; align-items:center; gap:8px; color:#7564db; background:#eeeafe; border:1px solid #ded7ff; border-radius:999px; padding:8px 12px; font-size:12px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
        h1,h2,h3 { font-family:'Manrope',sans-serif; margin:0; letter-spacing:-.045em; }
        h1 { margin-top:24px; font-size:clamp(50px,7vw,88px); line-height:.98; max-width:760px; }
        h1 em { font-style:normal; color:var(--coral); }
        .hero-copy { margin:28px 0 0; max-width:610px; color:var(--muted); font-size:19px; line-height:1.65; }
        .actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:34px; }
        .primary { border:0; padding:15px 22px; background:var(--ink); color:white; }
        .secondary { padding:14px 21px; border:1px solid var(--line); background:rgba(255,255,255,.65); }
        .primary.coral { background:var(--coral); }
        .portrait-card { position:relative; padding:14px; border-radius:34px; background:rgba(255,255,255,.68); border:1px solid rgba(255,255,255,.9); box-shadow:0 30px 90px rgba(55,39,86,.14); transform:rotate(1.5deg); }
        .portrait-card img { display:block; width:100%; height:590px; object-fit:cover; object-position:top; border-radius:24px; }
        .float-card { position:absolute; left:-42px; bottom:32px; width:220px; padding:16px; border-radius:18px; background:#fff; box-shadow:0 18px 50px rgba(31,25,40,.18); transform:rotate(-3deg); }
        .float-card strong { display:block; font:800 15px 'Manrope'; }
        .float-card span { color:var(--muted); font-size:12px; }
        .section { padding:100px 0; }
        .section-head { display:flex; justify-content:space-between; align-items:end; gap:30px; margin-bottom:42px; }
        .kicker { color:var(--coral); font-size:12px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; margin-bottom:12px; }
        h2 { font-size:clamp(38px,5vw,62px); line-height:1.04; }
        .section-note { max-width:410px; color:var(--muted); line-height:1.6; }
        .afterfight { position:relative; border-radius:34px; overflow:hidden; padding:64px; color:white; background:linear-gradient(135deg,#211d2b 0%,#352445 55%,#622f51 100%); box-shadow:0 30px 80px rgba(53,36,69,.2); }
        .afterfight:after { content:''; position:absolute; width:420px; height:420px; border-radius:50%; right:-100px; top:-160px; background:radial-gradient(circle,#ff7f8f 0,rgba(255,127,143,0) 68%); opacity:.5; }
        .after-grid { position:relative; z-index:1; display:grid; grid-template-columns:1fr .9fr; gap:70px; align-items:center; }
        .product-mark { width:70px; height:70px; display:grid; place-items:center; border-radius:22px; background:var(--coral); font:800 22px 'Manrope'; transform:rotate(-6deg); }
        .afterfight h2 { margin-top:28px; max-width:620px; }
        .afterfight p { color:rgba(255,255,255,.72); line-height:1.65; font-size:17px; max-width:570px; }
        .points { display:flex; flex-wrap:wrap; gap:10px; margin-top:24px; }
        .point { padding:9px 12px; border-radius:999px; background:rgba(255,255,255,.09); font-size:13px; }
        .waitlist { padding:28px; border-radius:24px; background:white; color:var(--ink); box-shadow:0 18px 70px rgba(0,0,0,.18); }
        .waitlist h3 { font-size:27px; }
        .waitlist p { color:var(--muted); font-size:14px; margin:10px 0 18px; }
        .input-row { display:flex; gap:8px; }
        .input-row input { min-width:0; flex:1; border:1px solid var(--line); border-radius:14px; padding:14px 15px; outline:none; }
        .input-row input:focus { border-color:var(--coral); box-shadow:0 0 0 3px rgba(255,105,120,.12); }
        .input-row button { border:0; border-radius:14px; padding:0 18px; color:white; background:var(--coral); font-weight:800; cursor:pointer; }
        .form-status { min-height:20px; margin:12px 0 0!important; font-size:12px!important; }
        .success { color:#16804d!important; }
        .error { color:#b83f49!important; }
        .garden { height:150px; position:relative; margin-top:24px; border-radius:24px; overflow:hidden; background:linear-gradient(#2f2941 0 57%,#253d31 57%); border:1px solid rgba(255,255,255,.12); }
        .garden:after { content:''; position:absolute; inset:auto 0 0; height:30px; background:linear-gradient(90deg,#294734,#375940,#294734); }
        .moon { position:absolute; width:44px; height:44px; border-radius:50%; right:20px; top:18px; background:#fff3c9; box-shadow:0 0 35px #fff1bd; }
        .flower { position:absolute; bottom:22px; z-index:1; font-size:42px; transform-origin:bottom; animation:bloom 3.5s ease-in-out infinite alternate; }
        .flower.two { left:38%; font-size:34px; animation-delay:.7s; }
        .flower.three { left:68%; font-size:46px; animation-delay:1.2s; }
        @keyframes bloom { from { transform:rotate(-4deg) scale(.92); } to { transform:rotate(5deg) scale(1.06); } }
        .journey { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:34px; }
        .journey-step { position:relative; padding:20px; min-height:134px; border-radius:20px; background:white; border:1px solid var(--line); }
        .journey-step.active { background:#fff0f2; border-color:#ffb4bc; }
        .journey-step span { display:grid; place-items:center; width:28px; height:28px; border-radius:50%; background:#f1edf7; font-size:12px; font-weight:800; }
        .journey-step.active span { background:var(--coral); color:white; }
        .journey-step strong { display:block; margin-top:20px; }
        .journey-step small { color:var(--muted); }
        .github-card { display:flex; align-items:center; justify-content:space-between; gap:20px; padding:24px; margin-top:18px; border-radius:22px; background:#17151b; color:white; }
        .github-card p { margin:4px 0 0; color:rgba(255,255,255,.62); font-size:14px; }
        .creator-links { margin-top:18px; }
        .creator-links .github-card { margin-top:0; }
        .coffee-link { display:inline-flex; align-items:center; gap:7px; margin-top:12px; padding:10px 14px; border:1px solid var(--line); border-radius:999px; background:white; font-size:13px; font-weight:800; }
        .experience { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-top:30px; }
        .experience article { padding:22px; border-radius:20px; background:white; border:1px solid var(--line); }
        .experience strong { display:block; font-family:'Manrope'; }
        .experience small { display:block; margin-top:6px; color:var(--muted); line-height:1.5; }
        .book-feature { display:grid; grid-template-columns:.78fr 1.22fr; gap:70px; align-items:center; padding:50px; border-radius:34px; background:#efe9ff; }
        .book-feature img { display:block; width:100%; max-height:520px; object-fit:contain; filter:drop-shadow(0 24px 26px rgba(41,30,71,.24)); }
        .book-feature h2 { font-size:clamp(38px,5vw,64px); }
        .book-feature p { color:var(--muted); font-size:17px; line-height:1.65; }
        .book-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:22px; }
        .book-card { border:1px solid var(--line); border-radius:24px; background:white; overflow:hidden; }
        .book-cover { height:290px; padding:22px; background:#f4f0ea; }
        .book-cover img { width:100%; height:100%; object-fit:contain; }
        .book-copy { padding:20px; }
        .book-copy h3 { font-size:19px; letter-spacing:-.03em; }
        .book-copy p { min-height:42px; color:var(--muted); font-size:13px; line-height:1.5; }
        .buy-links { display:flex; gap:14px; font-size:13px; font-weight:800; }
        .about { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .about p { color:var(--muted); font-size:18px; line-height:1.75; }
        .about-list { display:grid; gap:12px; }
        .about-item { display:flex; align-items:center; gap:12px; padding:16px; border-radius:17px; background:white; border:1px solid var(--line); font-weight:700; }
        .about-item svg { color:var(--coral); }
        footer { border-top:1px solid var(--line); padding:42px 0; }
        .footer-inner { display:flex; justify-content:space-between; align-items:center; gap:24px; }
        .socials { display:flex; gap:10px; }
        .socials a { width:40px; height:40px; display:grid; place-items:center; border:1px solid var(--line); border-radius:50%; background:white; }
        @media (max-width:900px) {
          .nav-links { display:none; }
          .menu-button { display:block; }
          .mobile-menu { position:absolute; z-index:20; left:20px; right:20px; top:68px; padding:18px; border-radius:18px; background:white; box-shadow:0 20px 50px rgba(0,0,0,.13); display:grid; gap:8px; }
          .mobile-menu button { border:0; background:#faf7f4; border-radius:12px; padding:13px; text-align:left; font-weight:700; }
          .hero,.after-grid,.book-feature,.about { grid-template-columns:1fr; }
          .hero { padding-top:55px; }
          .portrait-card { width:min(520px,100%); margin:0 auto; }
          .afterfight { padding:40px; }
          .journey,.experience { grid-template-columns:repeat(2,1fr); }
          .book-grid { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:600px) {
          .wrap { width:min(100% - 28px,1160px); }
          .hero { gap:45px; padding-bottom:65px; }
          .hero-copy { font-size:17px; }
          .portrait-card img { height:430px; }
          .float-card { left:-5px; bottom:18px; }
          .section { padding:70px 0; }
          .section-head { display:block; }
          .section-note { margin-top:14px; }
          .afterfight { padding:30px 22px; border-radius:26px; }
          .after-grid { gap:36px; }
          .waitlist { padding:22px; }
          .input-row { display:grid; }
          .input-row button { padding:14px; }
          .journey,.experience { grid-template-columns:1fr; }
          .book-feature { padding:28px 20px; gap:30px; border-radius:26px; }
          .book-grid { grid-template-columns:1fr; }
          .book-cover { height:340px; }
          .footer-inner { align-items:flex-start; flex-direction:column; }
        }
      `}</style>

      <header className="wrap">
        <nav className="nav">
          <button className="logo" onClick={() => scrollTo("top")}>Jane<span>.</span></button>
          <div className="nav-links">
            <button onClick={() => scrollTo("products")}>Building</button>
            <button onClick={() => scrollTo("books")}>Books</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <a className="nav-cta" href="#waitlist">Join AfterFight</a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          {menuOpen && (
            <div className="mobile-menu">
              <button onClick={() => scrollTo("products")}>Building</button>
              <button onClick={() => scrollTo("books")}>Books</button>
              <button onClick={() => scrollTo("about")}>About Jane</button>
              <button onClick={() => scrollTo("waitlist")}>Join AfterFight</button>
            </div>
          )}
        </nav>
      </header>

      <section className="wrap hero" id="top">
        <motion.div {...fade}>
          <span className="eyebrow"><Sparkles size={14} /> Founder · Builder · Writer</span>
          <h1>I turn real problems into <em>products.</em></h1>
          <p className="hero-copy">Building AfterFight at Zemio Labs—and sharing the honest journey from problem to product.</p>
          <div className="actions">
            <button className="primary" onClick={() => scrollTo("waitlist")}>Join the AfterFight waitlist <ArrowRight size={17} /></button>
            <a className="secondary" href="https://github.com/janeezy" target="_blank" rel="noreferrer">Watch me build <Github size={17} /></a>
          </div>
        </motion.div>
        <motion.div className="portrait-card" {...fade} transition={{ ...fade.transition, delay:.12 }}>
          <img src="/Img2.png" alt="Jane Duru, founder and writer" />
          <div className="float-card"><strong>Currently building</strong><span>AfterFight · for what comes after conflict</span></div>
        </motion.div>
      </section>

      <section className="section wrap" id="products">
        <motion.div className="afterfight" {...fade}>
          <div className="after-grid">
            <div>
              <div className="product-mark">AF</div>
              <h2>Love after the hard moment.</h2>
              <p>A private, thoughtful experience for couples who want a better way forward after difficult moments.</p>
              <div className="points">
                <span className="point">Private by design</span><span className="point">Built with care</span><span className="point">For every kind of love</span>
              </div>
              <div className="garden" aria-label="An animated couple garden growing flowers">
                <span className="moon"/><span className="flower" style={{left:"10%"}}>🌷</span><span className="flower two">🌼</span><span className="flower three">🌸</span>
              </div>
            </div>
            <form className="waitlist" id="waitlist" onSubmit={joinWaitlist}>
              <span className="kicker">Early access</span>
              <h3>Be first into the garden.</h3>
              <p>Join the waitlist for product updates, beta access and launch news.</p>
              <div className="input-row">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" aria-label="Email address" required />
                <button disabled={status === "loading"}>{status === "loading" ? "Joining…" : "Join"}</button>
              </div>
              <p className={`form-status ${status}`} aria-live="polite">
                {status === "success" && "You’re on the list. Welcome early."}
                {status === "error" && "That didn’t work. Please try again."}
                {status === "idle" && "No noise. Only meaningful updates."}
              </p>
            </form>
          </div>
        </motion.div>

        <div className="section-head" style={{ marginTop:72 }}>
          <div><div className="kicker">Building in public</div><h2>One product. Full focus.</h2></div>
          <p className="section-note">Turning a deeply human problem into a thoughtful product—without sharing the secret sauce.</p>
        </div>
        <div className="journey">
          {[['01','Problem','Understood'],['02','Experience','Designed'],['03','MVP','Building now'],['04','Beta','Up next']].map(([number,title,label], index) => (
            <motion.div className={`journey-step ${index === 2 ? 'active' : ''}`} key={title} whileHover={{y:-4}}><span>{number}</span><strong>{title}</strong><small>{label}</small></motion.div>
          ))}
        </div>
        <div className="creator-links">
          <a className="github-card" href="https://github.com/janeezy" target="_blank" rel="noreferrer"><div><strong>Follow the build on GitHub</strong><p>See the work, experiments and products behind the journey.</p></div><Github size={28}/></a>
          <a className="coffee-link" href="https://buymeacoffee.com/janeezyoffb" target="_blank" rel="noreferrer">☕ Buy me a coffee</a>
        </div>
      </section>

      <section className="section wrap" id="books">
        <motion.div className="book-feature" {...fade}>
          <img src="/new-book.jpg" alt="Nobody Pays You for Working Hard Anymore book cover" />
          <div>
            <div className="kicker">Newest book</div>
            <h2>Nobody Pays You for Working Hard Anymore</h2>
            <p>How to create value, build leverage and make money in the age of AI.</p>
            <div className="actions">
              <a className="primary" href={AMAZON} target="_blank" rel="noreferrer">Find it on Amazon <ArrowUpRight size={16}/></a>
              <a className="secondary" href={GUMROAD} target="_blank" rel="noreferrer">Shop on Gumroad <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </motion.div>
        <div className="section-head" style={{ marginTop:90 }}>
          <div><div className="kicker">Books by Jane Duru</div><h2>Ideas you can use.</h2></div>
          <p className="section-note">On work, leverage, technology, empathy and a quieter life.</p>
        </div>
        <div className="book-grid">
          {books.filter((book) => !book.latest).map((book, index) => (
            <motion.article className="book-card" key={book.title} {...fade} transition={{ ...fade.transition, delay:index*.07 }}>
              <div className="book-cover"><img src={book.cover} alt={`${book.title} book cover`} /></div>
              <div className="book-copy"><h3>{book.title}</h3><p>{book.subtitle}</p><div className="buy-links"><a href={AMAZON} target="_blank" rel="noreferrer">Amazon ↗</a><a href={GUMROAD} target="_blank" rel="noreferrer">Gumroad ↗</a></div></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section wrap about" id="about">
        <motion.div {...fade}>
          <div className="kicker">About Jane</div><h2>Builder’s mind. Founder’s ownership.</h2>
          <p>I’m Jane Duru, co-founder of Zemio Labs. My journey started in finance, sales and customer-facing work before leading me into frontend and mobile engineering. Today, I bring those worlds together—combining product judgment, technology and storytelling to build useful things people understand and want to use.</p>
          <div className="actions"><a className="primary" href="https://zemiolabs.com" target="_blank" rel="noreferrer">Zemio Labs <ArrowUpRight size={16}/></a><a className="secondary" href="mailto:zemiolabs@gmail.com">Work with me <Mail size={16}/></a></div>
        </motion.div>
        <motion.div className="about-list" {...fade} transition={{ ...fade.transition, delay:.1 }}>
          {["Co-founder at Zemio Labs","Apps, SaaS & AI tools","React, React Native & TypeScript","Author and builder in public"].map((item) => <div className="about-item" key={item}><Check size={18}/>{item}</div>)}
        </motion.div>
      </section>

      <section className="wrap" style={{paddingBottom:90}}>
        <div className="kicker">Experience behind the products</div>
        <div className="experience">
          <article><strong>Zemio Labs</strong><small>Co-founder & product builder · Apps, SaaS and AI tools.</small></article>
          <article><strong>Finance & business</strong><small>Customer-facing financial experience, commercial judgment and business operations.</small></article>
          <article><strong>Customer experience</strong><small>Customer service, support and enablement built around clear, human communication.</small></article>
          <article><strong>Sales & product</strong><small>Sales experience combined with product building, research and startup execution.</small></article>
        </div>
      </section>

      <footer><div className="wrap footer-inner"><div><div className="logo">Jane<span>.</span></div><small>Building useful things from real problems.</small></div><div className="socials"><a href="https://x.com/Iamjaneezy" target="_blank" rel="noreferrer" aria-label="X"><Twitter size={17}/></a><a href="https://github.com/janeezy" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.instagram.com/iamjaneezy" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a><a href="mailto:zemiolabs@gmail.com" aria-label="Email"><Mail size={17}/></a></div></div></footer>
    </main>
  );
}
