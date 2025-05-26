import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Laptop,
    Briefcase,
    User,
    Mail,
    ExternalLink,
    Music,
    School,
    Linkedin,
    Code,
    Menu,
    Sun,
    Moon,
    Euro,
    Twitter,
    Facebook,
    HeartHandshake,
    Copyright,
    Github
} from "lucide-react";

// Modern Logo with glassmorphism effect
const Logo = ({ setActiveSection }) => (
    <motion.button
        onClick={() => setActiveSection("home")}
        className="focus:outline-none group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <motion.div
            className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/25 backdrop-blur-xl border border-white/20"
            whileHover={{ 
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.6 }
            }}
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
            <div className="flex items-center justify-center h-full">
                <span className="text-white font-bold text-lg tracking-tight">JD</span>
            </div>
        </motion.div>
    </motion.button>
);

const Section = ({ title, children, theme }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16"
    >
        <h2
            className={`text-4xl font-bold mb-8 ${
                theme === "dark"
                    ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
            } border-b border-gradient-to-r from-indigo-500/20 to-pink-500/20 pb-4`}
        >
            {title}
        </h2>
        {children}
    </motion.div>
);

const Card = ({ title, subtitle, content, className = "", theme, featured = false }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ 
            scale: 1.02, 
            y: -5,
            boxShadow: theme === "dark" 
                ? "0 25px 50px rgba(139, 92, 246, 0.15)" 
                : "0 25px 50px rgba(139, 92, 246, 0.10)"
        }}
        className={`
            ${theme === "dark"
                ? "bg-gray-900/70 border-gray-700/50"
                : "bg-white/70 border-gray-200/50"
            } 
            ${featured ? "ring-2 ring-purple-500/20" : ""}
            p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 
            ${className}
        `}
        style={{
            background: theme === "dark"
                ? "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.8) 100%)"
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 250, 251, 0.8) 100%)"
        }}
    >
        <h3
            className={`text-2xl font-bold mb-3 ${
                theme === "dark" 
                    ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text" 
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
            }`}
        >
            {title}
        </h3>
        {subtitle && (
            <p className={`text-lg mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                {subtitle}
            </p>
        )}
        <div className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
            {content}
        </div>
    </motion.div>
);

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.body.className = theme;
        document.body.style.background = theme === "dark" 
            ? "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)";
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const sections = [
        { id: "home", icon: Home, title: "Home" },
        { id: "experience", icon: Briefcase, title: "Experience" },
        { id: "skills", icon: User, title: "Skills" },
        { id: "projects", icon: Laptop, title: "Projects" },
        { id: "pricing", icon: Euro, title: "Pricing" },
        { id: "education", icon: School, title: "Education" },
        { id: "contact", icon: Mail, title: "Contact" },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case "home":
                return (
                    <Section title="" theme={theme}>
                        <div className="max-w-5xl mx-auto space-y-16">
                            {/* Hero Section */}
                            <motion.div
                                className="text-center space-y-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.h1
                                    className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 ${
                                        theme === "dark"
                                            ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                                            : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                                    }`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    Frontend Engineer
                                </motion.h1>
                                <motion.p
                                    className={`text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto ${
                                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                                    }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Building modern web experiences with 4+ years of expertise in
                                    React.js, JavaScript, HTML5, CSS3, and cutting-edge frameworks.
                                </motion.p>
                                <motion.p
                                    className={`text-lg max-w-3xl mx-auto ${
                                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                                    }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    Aspiring blockchain developer currently advancing in Algorithms & Data Structures, 
                                    exploring Web3 technologies, and building scalable solutions at Roy.
                                </motion.p>
                            </motion.div>

                            {/* Key Skills Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Frontend Mastery",
                                        skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"],
                                        description: "4+ years crafting pixel-perfect, high-performance web applications",
                                        gradient: "from-blue-500 to-cyan-500"
                                    },
                                    {
                                        title: "Current Focus",
                                        skills: ["Data Structures", "Algorithms", "Problem Solving", "System Design"],
                                        description: "Continuously expanding computer science fundamentals",
                                        gradient: "from-purple-500 to-pink-500"
                                    },
                                    {
                                        title: "Professional Edge",
                                        skills: ["Team Leadership", "Financial Background", "Client Relations", "Strategic Thinking"],
                                        description: "Unique blend of tech expertise and business acumen",
                                        gradient: "from-indigo-500 to-purple-500"
                                    },
                                ].map((section, index) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                                        className={`p-8 rounded-3xl backdrop-blur-xl border ${
                                            theme === "dark"
                                                ? "bg-gray-900/50 border-gray-700/50"
                                                : "bg-white/50 border-gray-200/50"
                                        } hover:scale-105 transition-all duration-300`}
                                        whileHover={{ y: -10 }}
                                    >
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.gradient} mb-6 flex items-center justify-center`}>
                                            <div className="w-6 h-6 bg-white rounded-lg opacity-80" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                        <p className={`text-sm mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                            {section.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {section.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm
                                                        ${theme === "dark"
                                                            ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
                                                            : "bg-white/60 text-gray-700 border border-gray-300/50"
                                                        }`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <motion.div
                                className={`p-10 rounded-3xl backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20"
                                        : "bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-200/50"
                                }`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <h3 className="text-3xl font-bold mb-6 text-center">
                                    Let's Build Something Amazing
                                </h3>
                                <p className={`text-lg text-center mb-8 max-w-3xl mx-auto ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                                }`}>
                                    With 4+ years of frontend expertise and a unique financial background, 
                                    I create scalable, user-centric applications that drive business results.
                                </p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <motion.button
                                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveSection("experience")}
                                    >
                                        View Experience
                                    </motion.button>
                                    <motion.a
                                        href="https://drive.google.com/file/d/10LwRHKhvkRVzPEWhE8oNdgD1_pRukgLB/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-8 py-4 rounded-2xl border-2 font-semibold transition-all duration-300
                                            ${theme === "dark"
                                                ? "border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white"
                                                : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                                            }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Download Resume
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "experience":
                return (
                    <Section title="Professional Experience" theme={theme}>
                        <div className="space-y-12">
                            {/* Current Status Banner */}
                            <motion.div
                                className={`p-6 rounded-3xl backdrop-blur-xl border ${
                                    theme === "dark"
                                        ? "bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/20"
                                        : "bg-gradient-to-r from-green-50/80 to-emerald-50/80 border-green-200/50"
                                }`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-30"></div>
                                    </div>
                                    <p className={`text-lg font-semibold ${theme === "dark" ? "text-green-400" : "text-green-700"}`}>
                                        Frontend Developer at Roy | 4+ Years Experience | Advancing in Algorithms & System Design
                                    </p>
                                </div>
                            </motion.div>

                            {/* Experience Cards */}
                            <div className="space-y-8">
                                {/* Current Role */}
                                <Card
                                    title={
                                        <div className="flex items-center gap-4 mb-4">
                                            <div>
                                                <h4 className="text-2xl font-bold">Frontend Developer</h4>
                                                <p className="text-lg text-gray-500">Roy | March 2025 - Present</p>
                                            </div>
                                            <span className={`px-4 py-2 text-sm font-medium rounded-full
                                                ${theme === "dark"
                                                    ? "bg-green-900/40 text-green-300 border border-green-800/50"
                                                    : "bg-green-100 text-green-700 border border-green-200"
                                                }`}>
                                                Current Role
                                            </span>
                                        </div>
                                    }
                                    content={
                                        <div className="space-y-6">
                                            <ul className="space-y-4">
                                                {[
                                                    "Built and optimized core UI features including user dashboard, secure login page, and interactive forms using React.js, HTML5, Tailwind CSS, and CSS3",
                                                    "Improved front-end performance by 30% through efficient component structuring and CSS optimization",
                                                    "Collaborated with back-end developers to integrate REST APIs, ensuring real-time data rendering",
                                                    "Worked closely with UX/UI designers to implement pixel-perfect interfaces from Figma designs"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-3">
                                                {["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Figma", "Performance Optimization"].map((tech) => (
                                                    <span key={tech} className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm
                                                        ${theme === "dark"
                                                            ? "bg-indigo-900/40 text-indigo-300 border border-indigo-800/50"
                                                            : "bg-indigo-50 text-indigo-700 border border-indigo-200/50"
                                                        }`}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                    theme={theme}
                                    featured={true}
                                />

                                {/* Previous Role */}
                                <Card
                                    title={
                                        <div className="mb-4">
                                            <h4 className="text-2xl font-bold">Junior Frontend Developer</h4>
                                            <p className="text-lg text-gray-500">Jether Tech | December 2022 - March 2025</p>
                                        </div>
                                    }
                                    content={
                                        <div className="space-y-6">
                                            <ul className="space-y-4">
                                                {[
                                                    "Developed responsive user interfaces improving cross-browser compatibility by 25%",
                                                    "Optimized website performance by 35% through code refactoring and lazy loading",
                                                    "Reduced bug rate by 40% through comprehensive testing and systematic debugging",
                                                    "Created reusable React components reducing development time by 30%"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-3">
                                                {["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Testing"].map((tech) => (
                                                    <span key={tech} className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm
                                                        ${theme === "dark"
                                                            ? "bg-purple-900/40 text-purple-300 border border-purple-800/50"
                                                            : "bg-purple-50 text-purple-700 border border-purple-200/50"
                                                        }`}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                {/* Internship */}
                                <Card
                                    title={
                                        <div className="mb-4">
                                            <h4 className="text-2xl font-bold">Frontend Developer Intern</h4>
                                            <p className="text-lg text-gray-500">Jether Tech | June 2022 - November 2022</p>
                                        </div>
                                    }
                                    content={
                                        <div className="space-y-6">
                                            <ul className="space-y-4">
                                                {[
                                                    "Built feature-rich web applications using HTML5, CSS3, and JavaScript",
                                                    "Developed mobile-first interfaces improving user engagement by 20%",
                                                    "Utilized Git for version control and participated in code reviews",
                                                    "Created custom JavaScript solutions for complex UI interactions"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />
                            </div>
                        </div>
                    </Section>
                );

            case "skills":
                return (
                    <Section title="Technical Skills" theme={theme}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Core Technologies */}
                            <Card
                                title="Core Technologies"
                                content={
                                    <div className="space-y-6">
                                        {[
                                            { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design"], color: "from-blue-500 to-cyan-500" },
                                            { category: "Styling", skills: ["Tailwind CSS", "CSS Preprocessors", "Flexbox", "CSS Grid"], color: "from-purple-500 to-pink-500" },
                                            { category: "Tools", skills: ["Git", "VS Code", "Chrome DevTools", "Figma"], color: "from-green-500 to-teal-500" }
                                        ].map((group) => (
                                            <div key={group.category}>
                                                <h4 className={`text-lg font-semibold mb-3 bg-gradient-to-r ${group.color} text-transparent bg-clip-text`}>
                                                    {group.category}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {group.skills.map((skill) => (
                                                        <span key={skill} className={`px-3 py-2 text-sm font-medium rounded-full backdrop-blur-sm
                                                            ${theme === "dark"
                                                                ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
                                                                : "bg-white/60 text-gray-700 border border-gray-300/50"
                                                            }`}>
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                                theme={theme}
                            />

                            {/* Learning & Growth */}
                            <Card
                                title="Currently Learning"
                                content={
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                                                Algorithms & Data Structures
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Advanced problem-solving techniques</li>
                                                <li>• Algorithm optimization strategies</li>
                                                <li>• System design fundamentals</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text">
                                                Blockchain Development
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Web3 technologies & dApps</li>
                                                <li>• Solidity programming</li>
                                                <li>• Smart contract development</li>
                                                <li>• DeFi protocols & tokenomics</li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                                theme={theme}
                            />
                        </div>
                    </Section>
                );

            case "projects":
                return (
                    <Section title="Featured Projects" theme={theme}>
                        <div className="space-y-12">
                            {/* Featured Project */}
                            <Card
                                title="JaneezyBeats Platform"
                                content={
                                    <div className="space-y-6">
                                        <p className="text-lg">
                                            Professional beat store featuring original music production, 
                                            integrated with BeatStars Pro Page for seamless distribution and licensing.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-semibold mb-3 text-indigo-400">Technical Features</h5>
                                                <ul className="space-y-2 text-sm">
                                                    <li>• Custom-branded storefront</li>
                                                    <li>• Instant download system</li>
                                                    <li>• Multiple licensing options</li>
                                                    <li>• Responsive audio player</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold mb-3 text-purple-400">Music Production</h5>
                                                <ul className="space-y-2 text-sm">
                                                    <li>• Original hip-hop beats</li>
                                                    <li>• Trap & R&B production</li>
                                                    <li>• Professional mixing</li>
                                                    <li>• Custom sound design</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            <motion.a
                                                href="https://janeezy.beatstars.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Music className="w-5 h-5" />
                                                Listen to Beats
                                            </motion.a>
                                            <motion.a
                                                href="https://www.janeduru.site"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 font-semibold transition-all duration-300
                                                    ${theme === "dark"
                                                        ? "border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white"
                                                        : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                View Portfolio
                                            </motion.a>
                                        </div>
                                    </div>
                                }
                                theme={theme}
                                featured={true}
                            />

                            {/* Other Projects */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card
                                    title="Restaurant Platform"
                                    content={
                                        <div className="space-y-4">
                                            <p>Modern restaurant website with responsive design and interactive menu system.</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["HTML5", "CSS3", "JavaScript", "Responsive Design"].map((tech) => (
                                                    <span key={tech} className={`px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm
                                                        ${theme === "dark"
                                                            ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
                                                            : "bg-white/60 text-gray-700 border border-gray-300/50"
                                                        }`}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href="https://resturantapp-mu.vercel.app"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                                    ${theme === "dark"
                                                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                                                        : "bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
                                                    }`}
                                            >
                                                Live Demo <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Fitness Hub"
                                    content={
                                        <div className="space-y-4">
                                            <p>Modern fitness platform with workout tracking and membership management.</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["React", "CSS3", "JavaScript", "PWA"].map((tech) => (
                                                    <span key={tech} className={`px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm
                                                        ${theme === "dark"
                                                            ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
                                                            : "bg-white/60 text-gray-700 border border-gray-300/50"
                                                        }`}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href="https://gym-rho-one.vercel.app"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                                    ${theme === "dark"
                                                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                                                        : "bg-purple-100 hover:bg-purple-200 text-purple-700"
                                                    }`}
                                            >
                                                View Project <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    }
                                    theme={theme}
                                />
                            </div>
                        </div>
                    </Section>
                );

            case "pricing":
                return (
                    <Section title="Services & Pricing" theme={theme}>
                        <div className="space-y-12">
                            {/* Intro Banner */}
                            <motion.div
                                className={`p-8 rounded-3xl text-center backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20"
                                        : "bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-200/50"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">Frontend Development Services</h3>
                                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    Based in Lisbon, Portugal • Prices in EUR • 4+ Years Experience
                                </p>
                            </motion.div>

                            {/* Pricing Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <Card
                                    title="Landing Page"
                                    content={
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-indigo-500 mb-2">€500</div>
                                                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                                    Perfect for small businesses
                                                </p>
                                            </div>
                                            <ul className="space-y-3">
                                                {["Responsive Design", "Modern UI/UX", "SEO Optimization", "5-day Delivery"].map((feature) => (
                                                    <li key={feature} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Multi-page Website"
                                    content={
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-purple-500 mb-2">€1200</div>
                                                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                                    For growing businesses
                                                </p>
                                            </div>
                                            <ul className="space-y-3">
                                                {["Up to 5 Pages", "React.js Development", "Contact Forms", "2 Weeks Delivery", "1 Month Support"].map((feature) => (
                                                    <li key={feature} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                    featured={true}
                                />

                                <Card
                                    title="Custom Project"
                                    content={
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-pink-500 mb-2">Custom</div>
                                                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                                    Tailored solutions
                                                </p>
                                            </div>
                                            <ul className="space-y-3">
                                                {["Custom Features", "Complex Functionality", "Tailored Timeline", "Extended Support"].map((feature) => (
                                                    <li key={feature} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />
                            </div>

                            {/* Contact CTA */}
                            <motion.div
                                className={`p-8 rounded-3xl text-center backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20"
                                        : "bg-gradient-to-br from-purple-50/80 to-pink-50/80 border border-purple-200/50"
                                }`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                                <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    Let's discuss your requirements and create something amazing together.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveSection("contact")}
                                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "education":
                return (
                    <Section title="Education & Certifications" theme={theme}>
                        <div className="space-y-12">
                            {/* Current Learning */}
                            <motion.div
                                className={`p-6 rounded-3xl backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20"
                                        : "bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-200/50"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                    <p className={`text-lg font-medium ${theme === "dark" ? "text-blue-400" : "text-blue-700"}`}>
                                        Aspiring blockchain developer advancing in Algorithms, System Design, and Web3 Technologies
                                    </p>
                                </div>
                            </motion.div>

                            {/* Technical Education */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <Card
                                    title="Algorithm Fundamentals"
                                    subtitle="AlgoExpert | January 2022 - July 2022"
                                    content={
                                        <div className="space-y-4">
                                            <p>Comprehensive algorithmic problem-solving and data structures mastery.</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Advanced problem-solving techniques</li>
                                                <li>• Algorithm optimization strategies</li>
                                                <li>• Data structure implementations</li>
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Responsive JavaScript Frameworks"
                                    subtitle="Google | April 2022 - June 2022"
                                    content={
                                        <div className="space-y-4">
                                            <p>Certificate in Responsive Web Design and JavaScript Frameworks.</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Modern JavaScript frameworks</li>
                                                <li>• Responsive design principles</li>
                                                <li>• Cross-browser compatibility</li>
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Meta Front-End Developer Certificate"
                                    subtitle="Coursera | January 2022 - May 2022"
                                    content={
                                        <div className="space-y-4">
                                            <p>Comprehensive frontend development certification from Meta.</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• React.js development</li>
                                                <li>• Modern CSS techniques</li>
                                                <li>• Version control with Git</li>
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Bachelor of Science: General Medicine"
                                    subtitle="Danylo Halytsky Lviv National Medical University | 2016"
                                    content={
                                        <div className="space-y-4">
                                            <p>Strong analytical and problem-solving foundation from medical education.</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Analytical thinking</li>
                                                <li>• Attention to detail</li>
                                                <li>• Complex problem solving</li>
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />
                            </div>
                        </div>
                    </Section>
                );

            case "contact":
                return (
                    <Section title="Let's Connect" theme={theme}>
                        <div className="space-y-12">
                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card
                                    title="Get In Touch"
                                    content={
                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <Mail className="w-5 h-5 text-indigo-500" />
                                                    <span>janeezyofficial@gmail.com</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center">📍</div>
                                                    <span>Lisbon, Portugal</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                Available for frontend development projects, 
                                                collaborations, and freelance opportunities.
                                            </p>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Professional Links"
                                    content={
                                        <div className="space-y-4">
                                            {[
                                                { name: "Portfolio", url: "https://www.janeduru.site", icon: ExternalLink },
                                                { name: "LinkedIn", url: "https://www.linkedin.com/in/janeezy/", icon: Linkedin },
                                                { name: "GitHub", url: "https://github.com/janeezy", icon: Github },
                                                { name: "Twitter", url: "https://x.com/Iamjaneezy", icon: Twitter }
                                            ].map((link) => (
                                                <motion.a
                                                    key={link.name}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-indigo-500/50 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, x: 5 }}
                                                >
                                                    <link.icon className="w-5 h-5 text-indigo-500" />
                                                    <span>{link.name}</span>
                                                    <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                </motion.a>
                                            ))}
                                        </div>
                                    }
                                    theme={theme}
                                />
                            </div>

                            {/* Support Section */}
                            <motion.div
                                className={`p-8 rounded-3xl text-center backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/20"
                                        : "bg-gradient-to-br from-pink-50/80 to-purple-50/80 border border-pink-200/50"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <HeartHandshake className={`w-12 h-12 mx-auto mb-4 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />
                                <h3 className="text-2xl font-bold mb-4">Support My Work</h3>
                                <p className={`max-w-md mx-auto mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    If you find my work valuable, consider supporting my open source contributions
                                </p>
                                <iframe
                                    src="https://github.com/sponsors/janeezy/button"
                                    title="Sponsor janeezy"
                                    height="32"
                                    width="114"
                                    style={{ border: 0, borderRadius: "8px" }}
                                />
                            </motion.div>

                            {/* Footer */}
                            <motion.div
                                className={`pt-8 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="text-center space-y-3">
                                    <div className="flex items-center justify-center gap-2">
                                        <Copyright className="w-4 h-4" />
                                        <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                            {new Date().getFullYear()} - All rights reserved
                                        </span>
                                    </div>
                                    <p className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-500"}`}>
                                        Designed and Developed with <span className="text-red-500">♥</span> by Jane Duru
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                );

            default:
                return null;
        }
    };

    return (
        <div className={`min-h-screen font-sans transition-all duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-900"
        }`}>
            {/* Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
                    theme === "dark"
                        ? "bg-gray-900/80 border-gray-800/50"
                        : "bg-white/80 border-gray-200/50"
                }`}
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Logo setActiveSection={setActiveSection} />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className={`text-2xl font-bold ${
                                theme === "dark"
                                    ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                                    : "bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
                            }`}>
                                Jane Duru
                            </h1>
                            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                Frontend Engineer
                            </p>
                        </motion.div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`md:hidden p-3 rounded-2xl backdrop-blur-xl ${
                                theme === "dark"
                                    ? "bg-gray-800/50 text-gray-300 border border-gray-700/50"
                                    : "bg-white/50 text-gray-800 border border-gray-300/50"
                            }`}
                        >
                            <Menu size={20} />
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className={`p-3 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                                theme === "dark"
                                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                    : "bg-indigo-500/20 text-indigo-600 border border-indigo-500/30"
                            }`}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className={`fixed top-0 right-0 bottom-0 w-80 z-40 md:hidden backdrop-blur-xl ${
                            theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                        }`}
                    >
                        <div className="p-8 pt-24">
                            <ul className="space-y-4">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <motion.button
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                setActiveSection(section.id);
                                                setMenuOpen(false);
                                            }}
                                            className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 ${
                                                activeSection === section.id
                                                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                                                    : theme === "dark"
                                                    ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                                            }`}
                                        >
                                            <section.icon size={20} />
                                            <span className="font-medium">{section.title}</span>
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <nav className={`hidden md:block fixed top-0 left-0 bottom-0 w-20 z-40 backdrop-blur-xl ${
                theme === "dark" ? "bg-gray-900/80" : "bg-white/80"
            }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
                    {sections.map((section) => (
                        <motion.button
                            key={section.id}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setActiveSection(section.id)}
                            className={`p-4 rounded-2xl transition-all duration-300 ${
                                activeSection === section.id
                                    ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-xl shadow-purple-500/25"
                                    : theme === "dark"
                                    ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                            }`}
                            title={section.title}
                        >
                            <section.icon size={24} />
                        </motion.button>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 md:ml-20 px-6 md:px-12 pb-12">
                {/* Profile Section - Only show on home */}
                {activeSection === "home" && (
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="relative inline-block mb-8"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                                <img
                                    src="/IMG.png"
                                    alt="Ezinne Adaego Jane Duru"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
                        </motion.div>
                        
                        <motion.h2
                            className={`text-4xl md:text-5xl font-bold mb-4 ${
                                theme === "dark"
                                    ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Ezinne Adaego Jane Duru
                        </motion.h2>
                        
                        <motion.p
                            className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Frontend Software Engineer | 4+ Years Experience | Aspiring Blockchain Developer 🚀
                        </motion.p>
                    </motion.div>
                )}

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default Portfolio;