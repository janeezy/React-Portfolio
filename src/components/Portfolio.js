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
    Twitter,
    Github,
    Rocket,
    Globe,
    CheckCircle,
    Zap,
    Target
} from "lucide-react";

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
                transition: { duration: 0.6 },
            }}
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
            <div className="flex items-center justify-center h-full">
                <span className="text-white font-bold text-lg tracking-tight">
                    JD
                </span>
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
        {title && (
            <h2
                className={`text-4xl font-bold mb-8 ${
                    theme === "dark"
                        ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                        : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                } border-b border-gradient-to-r from-indigo-500/20 to-pink-500/20 pb-4`}
            >
                {title}
            </h2>
        )}
        {children}
    </motion.div>
);

const Card = ({
    title,
    subtitle,
    content,
    className = "",
    theme,
    featured = false,
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow:
                theme === "dark"
                    ? "0 25px 50px rgba(139, 92, 246, 0.15)"
                    : "0 25px 50px rgba(139, 92, 246, 0.10)",
        }}
        className={`
            ${
                theme === "dark"
                    ? "bg-gray-900/70 border-gray-700/50"
                    : "bg-white/70 border-gray-200/50"
            } 
            ${featured ? "ring-2 ring-purple-500/20" : ""}
            p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 
            ${className}
        `}
        style={{
            background:
                theme === "dark"
                    ? "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.8) 100%)"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 250, 251, 0.8) 100%)",
        }}
    >
        {title && (
            <h3
                className={`text-2xl font-bold mb-3 ${
                    theme === "dark"
                        ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
                }`}
            >
                {title}
            </h3>
        )}
        {subtitle && (
            <p
                className={`text-lg mb-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
            >
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
        document.body.style.background =
            theme === "dark"
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
        { id: "availability", icon: CheckCircle, title: "Availability" },
        { id: "education", icon: School, title: "Education" },
        { id: "contact", icon: Mail, title: "Contact" },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case "home":
                return (
                    <Section title="" theme={theme}>
                        <div className="max-w-5xl mx-auto space-y-16">
                            <motion.div
                                className="text-center space-y-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.div
                                    className="flex justify-center gap-4 mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <motion.div
                                        animate={{ 
                                            y: [-10, 10, -10],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{ 
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Code className="w-8 h-8 text-purple-400" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ 
                                            y: [10, -10, 10],
                                            rotate: [360, 180, 0]
                                        }}
                                        transition={{ 
                                            duration: 3.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Rocket className="w-8 h-8 text-indigo-400" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ 
                                            y: [-10, 10, -10],
                                            rotate: [0, -180, -360]
                                        }}
                                        transition={{ 
                                            duration: 4.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Zap className="w-8 h-8 text-pink-400" />
                                    </motion.div>
                                </motion.div>

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
                                    Frontend Developer
                                </motion.h1>
                                
                                <motion.p
                                    className={`text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto ${
                                        theme === "dark"
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    React • Next.js • TypeScript | Building fast, scalable web applications
                                </motion.p>
                                
                                <motion.p
                                    className={`text-lg max-w-3xl mx-auto ${
                                        theme === "dark"
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    3+ years of frontend development experience with unique expertise in fintech and cryptocurrency from 8+ years in financial sales. 
                                    Combining technical skills with deep understanding of user needs in complex financial applications.
                                </motion.p>

                                <motion.div
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
                                    </div>
                                    <span className={theme === "dark" ? "text-green-400" : "text-green-700"}>
                                        Available for Full-Time & Contract Opportunities
                                    </span>
                                </motion.div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Technical Skills",
                                        icon: Code,
                                        skills: [
                                            "React.js & Next.js",
                                            "TypeScript",
                                            "Modern JavaScript",
                                            "Responsive Design",
                                        ],
                                        description: "3+ years building production applications",
                                        gradient: "from-blue-500 to-cyan-500",
                                    },
                                    {
                                        title: "Proven Results",
                                        icon: Zap,
                                        skills: [
                                            "35% Faster Apps",
                                            "40% Fewer Bugs",
                                            "30% Dev Time Saved",
                                            "Performance Focused",
                                        ],
                                        description: "Measurable impact on every project",
                                        gradient: "from-purple-500 to-pink-500",
                                    },
                                    {
                                        title: "Domain Expertise",
                                        icon: Target,
                                        skills: [
                                            "8 Years of Sales in Crypto/Fintech",
                                            "Financial Systems",
                                            "User Psychology",
                                            "Complex UIs",
                                        ],
                                        description: "Unique perspective from financial background",
                                        gradient: "from-indigo-500 to-purple-500",
                                    },
                                ].map((section, index) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.3 + index * 0.2,
                                            duration: 0.6,
                                        }}
                                        className={`p-8 rounded-3xl backdrop-blur-xl border ${
                                            theme === "dark"
                                                ? "bg-gray-900/50 border-gray-700/50"
                                                : "bg-white/50 border-gray-200/50"
                                        } hover:scale-105 transition-all duration-300`}
                                        whileHover={{ y: -10 }}
                                    >
                                        <motion.div
                                            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.gradient} mb-6 flex items-center justify-center`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <section.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold mb-4">
                                            {section.title}
                                        </h3>
                                        <p className={`text-sm mb-6 ${
                                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                                        }`}>
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
                                    Looking for Your Next Developer?
                                </h3>
                                <p className={`text-lg text-center mb-8 max-w-3xl mx-auto ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                                }`}>
                                    I bring a unique combination: strong React/Next.js/TypeScript skills plus 8 years of fintech/crypto experience. 
                                    I don't just build interfaces—I understand the users behind them.
                                </p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <motion.button
                                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveSection("projects")}
                                    >
                                        View My Work
                                    </motion.button>
                                    <motion.button
                                        className={`px-8 py-4 rounded-2xl border-2 font-semibold transition-all duration-300
                                            ${theme === "dark"
                                                ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                                                : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                                            }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveSection("contact")}
                                    >
                                        Get In Touch
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "experience":
                return (
                    <Section title="Professional Experience" theme={theme}>
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card
                                    title="Freelance Frontend Developer"
                                    subtitle="Remote | June 2025 - Present"
                                    content={
                                        <div className="space-y-6">
                                            <motion.p 
                                                className="text-lg leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                Building modern web applications for various clients and agencies, with focus on performance, scalability, and user experience.
                                            </motion.p>
                                            
                                            <motion.ul 
                                                className="space-y-4"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {[
                                                    "Developed corporate websites and digital platforms for UK-based software companies",
                                                    "Built scalable React/Next.js applications with TypeScript for startups and established businesses",
                                                    "Designed reusable component libraries and UI architectures, reducing development time by 30%",
                                                    "Implemented performance optimizations achieving 35% faster load times and improved accessibility compliance",
                                                    "Collaborated with clients to translate business requirements into technical solutions",
                                                    "Created comprehensive technical documentation for component usage and best practices",
                                                ].map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="flex items-start gap-3"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.5 + index * 0.1 }}
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>

                                            <motion.div 
                                                className="flex flex-wrap gap-3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1 }}
                                            >
                                                {[
                                                    "React.js",
                                                    "Next.js",
                                                    "TypeScript",
                                                    "Tailwind CSS",
                                                    "Framer Motion",
                                                    "REST APIs",
                                                ].map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm
                                                        ${theme === "dark"
                                                            ? "bg-purple-900/40 text-purple-300 border border-purple-800/50"
                                                            : "bg-purple-50 text-purple-700 border border-purple-200/50"
                                                        }`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </motion.div>
                                        </div>
                                    }
                                    theme={theme}
                                    featured={true}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className={`text-2xl font-bold mb-6 ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}>
                                    Previous Roles
                                </h3>
                                <div className="space-y-6">
                                    <Card
                                        title="Frontend Developer (Contract)"
                                        subtitle="ROY | March 2025 - June 2025"
                                        content={
                                            <ul className="space-y-3">
                                                {[
                                                    "Built and optimized core UI features including user dashboard, secure login page, and interactive forms",
                                                    "Improved front-end performance by 30% through efficient component structuring and CSS optimization",
                                                    "Collaborated with back-end developers to integrate REST APIs for real-time data rendering",
                                                    "Implemented pixel-perfect interfaces from Figma designs, increasing user satisfaction",
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        }
                                        theme={theme}
                                    />

                                    <Card
                                        title="Junior Frontend Developer"
                                        subtitle="Jether Tech | December 2022 - March 2025"
                                        content={
                                            <ul className="space-y-3">
                                                {[
                                                    "Developed responsive user interfaces improving cross-browser compatibility by 25%",
                                                    "Optimized website performance by 35% through code refactoring and lazy loading",
                                                    "Reduced bug rate by 40% implementing comprehensive testing procedures",
                                                    "Created reusable React components reducing development time by 30%",
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        }
                                        theme={theme}
                                    />

                                    <Card
                                        title="Frontend Developer Intern"
                                        subtitle="Jether Tech | June 2022 - November 2022"
                                        content={
                                            <ul className="space-y-3">
                                                {[
                                                    "Built feature-rich web applications using HTML5, CSS3, and JavaScript",
                                                    "Developed mobile-first interfaces improving user engagement by 20%",
                                                    "Utilized Git for version control and participated in code reviews",
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        }
                                        theme={theme}
                                    />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-12"
                                >
                                    <h3 className={`text-2xl font-bold mb-6 ${
                                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                                    }`}>
                                        Relevant Background
                                    </h3>
                                    <Card
                                        title="Financial Sales Experience"
                                        subtitle="Fintech & Cryptocurrency Markets | 8+ Years"
                                        content={
                                            <div className="space-y-4">
                                                <p className="text-lg">
                                                    Before transitioning to software development, I spent 8 years in financial sales specializing in fintech and cryptocurrency markets. 
                                                    This background gives me unique insight when building financial applications.
                                                </p>
                                                <ul className="space-y-3">
                                                    {[
                                                        "Deep understanding of cryptocurrency markets, DeFi protocols, and blockchain technology",
                                                        "Managed €20M+ client portfolio—I understand user needs in financial applications",
                                                        "Expertise in translating complex financial concepts for non-technical users",
                                                        "Strong client communication skills that now enhance my developer-client collaboration",
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 mt-2 flex-shrink-0"></div>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className={`p-4 rounded-xl ${
                                                    theme === "dark" 
                                                        ? "bg-yellow-900/20 border border-yellow-800/30" 
                                                        : "bg-yellow-50 border border-yellow-200"
                                                }`}>
                                                    <p className="text-sm italic">
                                                        💡 This background makes me particularly valuable for fintech, crypto, or financial product companies where I can bridge technical and business perspectives.
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                        theme={theme}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "skills":
                return (
                    <Section title="Technical Skills" theme={theme}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card
                                title="Core Technologies"
                                content={
                                    <div className="space-y-6">
                                        {[
                                            {
                                                category: "Frontend Development",
                                                skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
                                                color: "from-blue-500 to-cyan-500",
                                            },
                                            {
                                                category: "Tools & Workflow",
                                                skills: ["Git/GitHub", "VS Code", "Figma", "REST APIs", "Responsive Design", "Performance Optimization"],
                                                color: "from-purple-500 to-pink-500",
                                            },
                                        ].map((group) => (
                                            <div key={group.category}>
                                                <h4 className={`text-lg font-semibold mb-3 bg-gradient-to-r ${group.color} text-transparent bg-clip-text`}>
                                                    {group.category}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {group.skills.map((skill) => (
                                                        <motion.span
                                                            key={skill}
                                                            className={`px-3 py-2 text-sm font-medium rounded-full backdrop-blur-sm
                                                                ${theme === "dark"
                                                                    ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
                                                                    : "bg-white/60 text-gray-700 border border-gray-300/50"
                                                                }`}
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                                theme={theme}
                            />

                            <Card
                                title="Additional Strengths"
                                content={
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                                                Professional Skills
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Cross-functional team collaboration</li>
                                                <li>• Client requirement analysis</li>
                                                <li>• Technical documentation writing</li>
                                                <li>• Agile development methodologies</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text">
                                                Domain Knowledge
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• 8+ years cryptocurrency/blockchain expertise</li>
                                                <li>• Fintech & financial services understanding</li>
                                                <li>• User psychology in financial applications</li>
                                                <li>• Complex data visualization</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
                                                Currently Learning
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Advanced TypeScript patterns</li>
                                                <li>• Web3 & blockchain integration</li>
                                                <li>• Advanced testing strategies</li>
                                                <li>• Cloud deployment (AWS, Vercel)</li>
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
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Card
                                    title={
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                                                    Software Company Website
                                                </h4>
                                                <p className="text-xl text-gray-500">
                                                    Zemiolabs: UK-Based Software Company
                                                </p>
                                            </div>
                                            <motion.div
                                                className="flex gap-2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <span className={`px-4 py-2 text-sm font-medium rounded-full
                                                    ${theme === "dark"
                                                        ? "bg-gradient-to-r from-purple-900/40 to-pink-900/40 text-purple-300 border border-purple-800/50"
                                                        : "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200"
                                                    }`}>
                                                    Live
                                                </span>
                                                <span className={`px-4 py-2 text-sm font-medium rounded-full
                                                    ${theme === "dark"
                                                        ? "bg-blue-900/40 text-blue-300 border border-blue-800/50"
                                                        : "bg-blue-100 text-blue-700 border border-blue-200"
                                                    }`}>
                                                    Start up
                                                </span>
                                            </motion.div>
                                        </div>
                                    }
                                    content={
                                        <div className="space-y-6">
                                            <motion.p 
                                                className="text-lg leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                Developed professional corporate website for a UK software company showcasing their services, mission, and digital solutions. 
                                                Built with modern web technologies and optimized for performance, SEO, and user experience.
                                            </motion.p>
                                            
                                            <motion.div 
                                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <div className="space-y-3">
                                                    <h5 className="font-semibold text-purple-400">Key Features</h5>
                                                    <ul className="space-y-2 text-sm">
                                                        <li>• Modern responsive design</li>
                                                        <li>• Performance optimized (Lighthouse 95+)</li>
                                                        <li>• SEO optimized structure</li>
                                                        <li>• Professional branding & UI</li>
                                                        <li>• Contact form integration</li>
                                                        <li>• Mobile-first approach</li>
                                                    </ul>
                                                </div>
                                                <div className="space-y-3">
                                                    <h5 className="font-semibold text-pink-400">Technical Highlights</h5>
                                                    <ul className="space-y-2 text-sm">
                                                        <li>• React component architecture</li>
                                                        <li>• Framer Motion animations</li>
                                                        <li>• Tailwind CSS styling</li>
                                                        <li>• Responsive across all devices</li>
                                                        <li>• Fast load times</li>
                                                        <li>• Clean, maintainable code</li>
                                                    </ul>
                                                </div>
                                            </motion.div>

                                            <motion.div 
                                                className="flex flex-wrap gap-3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                {[
                                                    "React.js",
                                                    "Tailwind CSS",
                                                    "Framer Motion",
                                                    "Responsive Design",
                                                    "SEO",
                                                    "Performance",
                                                ].map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm
                                                        ${theme === "dark"
                                                            ? "bg-purple-900/40 text-purple-300 border border-purple-800/50"
                                                            : "bg-purple-50 text-purple-700 border border-purple-200/50"
                                                        }`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </motion.div>

                                            <motion.div 
                                                className="flex flex-wrap gap-4 pt-4"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.8 }}
                                            >
                                                <motion.a
                                                    href="https://zemiolabs.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Globe className="w-5 h-5" />
                                                    View Live Site
                                                </motion.a>
                                            </motion.div>
                                        </div>
                                    }
                                    theme={theme}
                                    featured={true}
                                />
                            </motion.div>

                            <div className="space-y-6">
                                <h3 className={`text-2xl font-bold mb-4 ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}>
                                    Additional Projects
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card
                                        title="Fitness Hub"
                                        content={
                                            <div className="space-y-4">
                                                <p>Modern fitness platform with workout tracking, membership management, and progress analytics for health enthusiasts.</p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {["React.js", "CSS3", "JavaScript", "PWA"].map((tech) => (
                                                        <span key={tech} className={`px-2 py-1 text-xs rounded-full ${
                                                            theme === "dark" 
                                                                ? "bg-green-900/40 text-green-300" 
                                                                : "bg-green-100 text-green-700"
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
                                                            ? "bg-green-600 hover:bg-green-700 text-white"
                                                            : "bg-green-100 hover:bg-green-200 text-green-700"
                                                        }`}
                                                >
                                                    <ExternalLink size={16} />
                                                    View Project
                                                </a>
                                            </div>
                                        }
                                        theme={theme}
                                    />

                                    <Card
                                        title="JaneezyBeats Platform"
                                        content={
                                            <div className="space-y-4">
                                                <p>Professional beat store featuring music production with integrated licensing system and audio streaming capabilities.</p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {["API Integration", "Audio Streaming", "E-commerce"].map((tech) => (
                                                        <span key={tech} className={`px-2 py-1 text-xs rounded-full ${
                                                            theme === "dark" 
                                                                ? "bg-purple-900/40 text-purple-300" 
                                                                : "bg-purple-100 text-purple-700"
                                                        }`}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <a
                                                    href="https://janeezy.beatstars.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                                        ${theme === "dark"
                                                            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                                                            : "bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
                                                        }`}
                                                >
                                                    <Music size={16} />
                                                    Listen to Beats
                                                </a>
                                            </div>
                                        }
                                        theme={theme}
                                    />
                                </div>
                            </div>

                            <motion.div
                                className={`p-8 rounded-3xl text-center ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50"
                                        : "bg-gradient-to-br from-gray-50 to-white border border-gray-200"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    More Projects Coming Soon
                                </h3>
                                <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    Currently building additional React/TypeScript projects. Check back soon or view my GitHub for code samples.
                                </p>
                                <motion.a
                                    href="https://github.com/janeezy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300
                                        ${theme === "dark"
                                            ? "bg-gray-800 hover:bg-gray-700 text-white"
                                            : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Github className="w-5 h-5" />
                                    View GitHub
                                </motion.a>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "availability":
                return (
                    <Section title="Open to Opportunities" theme={theme}>
                        <div className="space-y-8">
                            <motion.div
                                className={`p-8 rounded-3xl text-center backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20"
                                        : "bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-green-200/50"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20"></div>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold mb-4">
                                    Currently Available
                                </h3>
                                <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                    Actively seeking frontend developer opportunities
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <Card
                                    title="Full-Time Roles"
                                    content={
                                        <div className="space-y-4">
                                            <p className="text-sm">Looking for permanent positions where I can grow with a team</p>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    Frontend Developer
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    React Developer
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    Web Developer
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    Remote or Lisbon-based
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Contract Work"
                                    content={
                                        <div className="space-y-4">
                                            <p className="text-sm">Available for project-based engagements</p>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-500" />
                                                    3-6 month contracts
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-500" />
                                                    Product development
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-500" />
                                                    Agency partnerships
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-purple-500" />
                                                    Startup consulting
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Ideal Role"
                                    content={
                                        <div className="space-y-4">
                                            <p className="text-sm">What I'm looking for in my next position</p>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-indigo-500" />
                                                    React/Next.js stack
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-indigo-500" />
                                                    TypeScript preferred
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-indigo-500" />
                                                    Collaborative team
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-indigo-500" />
                                                    Growth opportunities
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    theme={theme}
                                />
                            </div>

                            <motion.div
                                className={`p-8 rounded-3xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20"
                                        : "bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-200/50"
                                }`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="text-center space-y-6">
                                    <h3 className="text-2xl font-bold">
                                        Why Work With Me?
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-indigo-400">Technical Skills</h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• 4+ years React/Next.js experience</li>
                                                <li>• TypeScript proficient</li>
                                                <li>• Performance-focused mindset</li>
                                                <li>• Clean, maintainable code</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-purple-400">Unique Value</h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• 8 years fintech/crypto expertise</li>
                                                <li>• Understand complex UIs</li>
                                                <li>• Strong client communication</li>
                                                <li>• Business-minded developer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveSection("contact")}
                                            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                                        >
                                            Get In Touch
                                        </motion.button>
                                        <motion.a
                                            href="/Jane_Duru_Resume.pdf"
                                            download
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                                                theme === "dark"
                                                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                                                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                                            }`}
                                        >
                                            Download Resume
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "education":
                return (
                    <Section title="Education & Certifications" theme={theme}>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <Card
                                    title="Technical Certifications"
                                    content={
                                        <div className="space-y-4">
                                            <div className="space-y-3">
                                                <h4 className="font-semibold">Meta Front-End Developer Certificate</h4>
                                                <p className="text-sm">Coursera | 2022</p>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold">Responsive JavaScript Frameworks</h4>
                                                <p className="text-sm">Google | 2022</p>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold">Algorithm Fundamentals</h4>
                                                <p className="text-sm">AlgoExpert | 2022</p>
                                            </div>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Academic Background"
                                    content={
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold">Bachelor of Science: General Medicine</h4>
                                                <p className="text-sm">Danylo Halytsky Lviv National Medical University | 2017</p>
                                                <p className="text-sm mt-2">General Medicine: Step 1 Medical Certificate</p>
                                            </div>
                                            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                                                <p className="text-sm italic">
                                                    "My medical background gives me a unique perspective on problem-solving, attention to detail, and systematic thinking in tech."
                                                </p>
                                            </div>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card
                                    title="Get In Touch"
                                    content={
                                        <div className="space-y-6">
                                            <p className="text-lg font-semibold">I'm available for:</p>
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                    <span>Full-time frontend positions</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                    <span>Contract projects (3-6 months)</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                    <span>Remote opportunities worldwide</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                    <span>Lisbon-based positions</span>
                                                </li>
                                            </ul>
                                            <div className="space-y-3 pt-4 border-t border-gray-700/50">
                                                <div className="flex items-center gap-3">
                                                    <Mail className="w-5 h-5 text-indigo-500" />
                                                    <a href="mailto:janeezyofficial@gmail.com" className="hover:text-indigo-400 transition-colors">
                                                        janeezyofficial@gmail.com
                                                    </a>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center">📍</div>
                                                    <span>Lisbon, Portugal</span>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Professional Links"
                                    content={
                                        <div className="space-y-6">
                                            <p className="text-sm">Connect with me on these platforms:</p>
                                            <div className="space-y-3">
                                                <motion.a
                                                    href="https://www.linkedin.com/in/janeezy/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-indigo-500/50 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, x: 5 }}
                                                >
                                                    <Linkedin className="w-5 h-5 text-indigo-500" />
                                                    <span>LinkedIn Profile</span>
                                                    <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                </motion.a>
                                                <motion.a
                                                    href="https://github.com/janeezy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-indigo-500/50 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, x: 5 }}
                                                >
                                                    <Github className="w-5 h-5 text-indigo-500" />
                                                    <span>GitHub</span>
                                                    <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                </motion.a>
                                                <motion.a
                                                    href="https://x.com/Iamjaneezy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-indigo-500/50 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, x: 5 }}
                                                >
                                                    <Twitter className="w-5 h-5 text-indigo-500" />
                                                    <span>Twitter/X</span>
                                                    <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                </motion.a>
                                                <motion.a
                                                    href="https://medium.com/@janeezy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-indigo-500/50 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, x: 5 }}
                                                >
                                                    <Code className="w-5 h-5 text-indigo-500" />
                                                    <span>Developer Blog</span>
                                                    <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                </motion.a>
                                            </div>
                                        </div>
                                    }
                                    theme={theme}
                                />
                            </div>

                            <motion.div
                                className={`pt-8 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="text-center space-y-3">
                                    <p className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-500"}`}>
                                        Designed and Developed with <span className="text-red-500">♥</span> by Jane Duru
                                    </p>
                                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                        © {new Date().getFullYear()} Jane Duru - Frontend Developer
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
        <div className={`min-h-screen font-sans transition-all duration-300 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {/* Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
                    theme === "dark" ? "bg-gray-900/80 border-gray-800/50" : "bg-white/80 border-gray-200/50"
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
                                Frontend Developer
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
                {/* Profile Image (Home Section Only) */}
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
                                    alt="Jane Duru"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <motion.div 
                                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <motion.h2
                            className={`text-4xl md:text-5xl font-bold mb-4 leading-relaxed ${
                                theme === "dark"
                                    ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{ paddingBottom: '0.25rem' }}
                        >
                            Ezinne Adaego Jane Duru
                        </motion.h2>
                    </motion.div>
                )}

                {/* Dynamic Content */}
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