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
    Github,
    Rocket,
    Sparkles,
    Building2,
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
                            {/* Hero Section with Animations */}
                            <motion.div
                                className="text-center space-y-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {/* Animated Sparkles */}
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
                                        <Sparkles className="w-6 h-6 text-purple-400" />
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
                                        <Building2 className="w-6 h-6 text-pink-400" />
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
                                    Tech Entrepreneur & Innovator
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
                                    Co-Founder & CEO at Zemio Labs LTD | Building the future of digital solutions
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
                                    Currently developing cutting-edge applications that solve real-world problems. 
                                    Our innovative products are coming soon to transform how people interact with technology.
                                </motion.p>

                                {/* Status Badge */}
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
                                        Actively Building at Zemio Labs
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Key Highlights Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Entrepreneurial Vision",
                                        icon: Rocket,
                                        skills: [
                                            "Strategic Leadership",
                                            "Product Innovation",
                                            "Market Analysis",
                                            "Business Development",
                                        ],
                                        description: "Building Zemio Labs from the ground up with innovative solutions",
                                        gradient: "from-purple-500 to-pink-500",
                                    },
                                    {
                                        title: "Technical Excellence",
                                        icon: Code,
                                        skills: [
                                            "React.js Expert",
                                            "Full-Stack Development",
                                            "Mobile Solutions",
                                            "Cloud Architecture",
                                        ],
                                        description: "4+ years crafting world-class applications",
                                        gradient: "from-blue-500 to-cyan-500",
                                    },
                                    {
                                        title: "Coming Soon",
                                        icon: Sparkles,
                                        skills: [
                                            "Revolutionary Apps",
                                            "AI Integration",
                                            "Social Impact",
                                            "Global Reach",
                                        ],
                                        description: "Game-changing products launching soon",
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
                                    Ready to Transform Your Ideas?
                                </h3>
                                <p className={`text-lg text-center mb-8 max-w-3xl mx-auto ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                                }`}>
                                    With 4+ years of frontend expertise and 8 years of financial sales experience in fintech and cryptocurrency, 
                                    I bring a unique blend of technical skills and business acumen to build transformative digital solutions.
                                </p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <motion.button
                                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveSection("experience")}
                                    >
                                        Explore My Journey
                                    </motion.button>
                                    <motion.a
                                        href="https://calendly.com/janeezyofficial/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-8 py-4 rounded-2xl border-2 font-semibold transition-all duration-300
                                            ${theme === "dark"
                                                ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                                                : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                                            }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Book a Meeting
                                    </motion.a>
                                    <motion.a
                                        href="https://zemiolabs.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-8 py-4 rounded-2xl border-2 font-semibold transition-all duration-300
                                            ${theme === "dark"
                                                ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                                                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                                            }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Visit Zemio Labs
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "experience":
                return (
                    <Section title="Professional Journey" theme={theme}>
                        <div className="space-y-12">
                            {/* Current Role - Zemio Labs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card
                                    title={
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                                                    Co-Founder & CEO
                                                </h4>
                                                <p className="text-xl text-gray-500">
                                                    Zemio Labs LTD | Present
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
                                                    Founder
                                                </span>
                                                <span className={`px-4 py-2 text-sm font-medium rounded-full
                                                    ${theme === "dark"
                                                        ? "bg-green-900/40 text-green-300 border border-green-800/50"
                                                        : "bg-green-100 text-green-700 border border-green-200"
                                                    }`}>
                                                    Active
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
                                                Leading a UK-registered software company (Company No. 16513457) focused on building smart, scalable, and human-centered solutions. 
                                                Currently developing multiple applications set to launch soon, designed to revolutionize how people interact with technology.
                                            </motion.p>
                                            
                                            <motion.ul 
                                                className="space-y-4"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {[
                                                    "Architecting and developing innovative applications from concept to deployment",
                                                    "Building a suite of products that solve real-world problems for businesses and communities",
                                                    "Leading technical strategy and implementation using cutting-edge technologies",
                                                    "Creating scalable solutions with focus on user experience and social impact",
                                                    "Establishing Zemio Labs as a creative lab and strategic partner in digital transformation",
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
                                                className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.8 }}
                                            >
                                                <p className="text-sm italic">
                                                    "We don't just build apps — we craft experiences. Zemio Labs is a creative lab, 
                                                    a strategic partner, and a passionate builder of better digital futures."
                                                </p>
                                            </motion.div>

                                            <motion.div 
                                                className="flex flex-wrap gap-3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1 }}
                                            >
                                                {[
                                                    "Strategic Leadership",
                                                    "Product Development",
                                                    "React.js",
                                                    "Mobile Development",
                                                    "Innovation Strategy",
                                                    "Business Development",
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
                                                transition={{ delay: 1.2 }}
                                            >
                                                <div className="w-full mb-3">
                                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                                        <Building2 className="w-4 h-4" />
                                                        Registered in England & Wales • Company No. 16513457
                                                    </p>
                                                </div>
                                                <motion.a
                                                    href="https://zemiolabs.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                    Visit Website
                                                </motion.a>
                                                <motion.a
                                                    href="https://www.linkedin.com/company/zemio-labs-ltd"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 font-semibold transition-all duration-300
                                                        ${theme === "dark"
                                                            ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                                                            : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                                                        }`}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                    Company LinkedIn
                                                </motion.a>
                                                <motion.a
                                                    href="https://x.com/zemiolabs"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 font-semibold transition-all duration-300
                                                        ${theme === "dark"
                                                            ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                                                            : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                                                        }`}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Twitter className="w-5 h-5" />
                                                    Company Twitter
                                                </motion.a>
                                            </motion.div>
                                        </div>
                                    }
                                    theme={theme}
                                    featured={true}
                                />
                            </motion.div>

                            {/* Previous Roles */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className={`text-2xl font-bold mb-6 ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}>
                                    Previous Experience
                                </h3>
                                <div className="space-y-6">
                                    <Card
                                        title="Frontend Developer"
                                        subtitle="Roy | March 2025"
                                        content={
                                            <ul className="space-y-3">
                                                {[
                                                    "Built and optimized core UI features including user dashboard, secure login page, and interactive forms",
                                                    "Improved front-end performance by 30% through efficient component structuring",
                                                    "Collaborated with back-end developers to integrate REST APIs",
                                                    "Worked closely with UX/UI designers to implement pixel-perfect interfaces",
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
                                                    "Optimized website performance by 35% through code refactoring",
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

                                {/* Financial Sales Background */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-12"
                                >
                                    <h3 className={`text-2xl font-bold mb-6 ${
                                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                                    }`}>
                                        Financial Sales Background
                                    </h3>
                                    <Card
                                        title="Senior Financial Sales Specialist"
                                        subtitle="Various Fintech & Cryptocurrency Companies | 2014 - 2022"
                                        content={
                                            <div className="space-y-4">
                                                <p className="text-lg">
                                                    8 years of experience in financial sales, specializing in fintech and cryptocurrency markets.
                                                </p>
                                                <ul className="space-y-3">
                                                    {[
                                                        "Led high-performing sales teams in fintech and crypto markets",
                                                        "Developed strategic partnerships with major financial institutions",
                                                        "Achieved consistent 150%+ quota attainment across multiple roles",
                                                        "Built deep understanding of financial markets and blockchain technology",
                                                        "Transitioned to tech to combine financial expertise with software development",
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold-500 to-yellow-500 mt-2 flex-shrink-0"></div>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {[
                                                        "Financial Sales",
                                                        "Cryptocurrency",
                                                        "Fintech",
                                                        "Team Leadership",
                                                        "Strategic Partnerships",
                                                        "Market Analysis",
                                                    ].map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className={`px-3 py-1 text-sm font-medium rounded-full
                                                                ${theme === "dark"
                                                                    ? "bg-yellow-900/40 text-yellow-300 border border-yellow-800/50"
                                                                    : "bg-yellow-50 text-yellow-700 border border-yellow-200/50"
                                                                }`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        }
                                        theme={theme}
                                        featured={true}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "skills":
                return (
                    <Section title="Technical Expertise" theme={theme}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card
                                title="Core Technologies"
                                content={
                                    <div className="space-y-6">
                                        {[
                                            {
                                                category: "Frontend Mastery",
                                                skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
                                                color: "from-blue-500 to-cyan-500",
                                            },
                                            {
                                                category: "Development Tools",
                                                skills: ["Git", "VS Code", "Figma", "REST APIs", "Responsive Design"],
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
                                title="Leadership & Innovation"
                                content={
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                                                Entrepreneurial Skills
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Strategic product development</li>
                                                <li>• Team building and leadership</li>
                                                <li>• Market analysis and positioning</li>
                                                <li>• Business development</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-pink-500 to-rose-500 text-transparent bg-clip-text">
                                                Currently Exploring
                                            </h4>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Advanced algorithms & data structures</li>
                                                <li>• Blockchain & Web3 technologies</li>
                                                <li>• AI/ML integration</li>
                                                <li>• Cloud architecture</li>
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
                    <Section title="Portfolio & Projects" theme={theme}>
                        <div className="space-y-12">
                            {/* Zemio Labs Projects */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Card
                                    title="Zemio Labs Applications"
                                    content={
                                        <div className="space-y-6">
                                            <motion.div 
                                                className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <div className="flex items-center gap-3 mb-3">
                                                    <Rocket className="w-6 h-6 text-purple-400" />
                                                    <h4 className="text-xl font-bold">Coming Soon</h4>
                                                </div>
                                                <p className="text-lg mb-4">
                                                    Revolutionary applications currently in development. 
                                                    Our products focus on solving real-world problems with innovative solutions.
                                                </p>
                                                <ul className="space-y-2 text-sm">
                                                    <li>• Human-centered design approach</li>
                                                    <li>• Scalable architecture</li>
                                                    <li>• Social impact focus</li>
                                                    <li>• Cross-platform compatibility</li>
                                                </ul>
                                            </motion.div>
                                            
                                            <div className="flex flex-wrap gap-4">
                                                <motion.a
                                                    href="https://zemiolabs.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Building2 className="w-5 h-5" />
                                                    Learn More About Zemio Labs
                                                </motion.a>
                                            </div>
                                        </div>
                                    }
                                    theme={theme}
                                    featured={true}
                                />
                            </motion.div>

                            {/* Other Projects */}
                            <div className="space-y-6">
                                <h3 className={`text-2xl font-bold mb-4 ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}>
                                    Personal Projects
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card
                                        title="JaneezyBeats Platform"
                                        content={
                                            <div className="space-y-4">
                                                <p>Professional beat store featuring original music production with integrated licensing system.</p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {["BeatStars API", "Audio Streaming", "E-commerce", "Music Production"].map((tech) => (
                                                        <span key={tech} className={`px-2 py-1 text-xs rounded-full ${
                                                            theme === "dark" 
                                                                ? "bg-purple-900/40 text-purple-300" 
                                                                : "bg-purple-100 text-purple-700"
                                                        }`}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex gap-3">
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
                                            </div>
                                        }
                                        theme={theme}
                                    />

                                    <Card
                                        title="Restaurant Platform"
                                        content={
                                            <div className="space-y-4">
                                                <p>Modern restaurant website with responsive design and interactive menu system.</p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {["HTML5", "CSS3", "JavaScript", "Responsive Design"].map((tech) => (
                                                        <span key={tech} className={`px-2 py-1 text-xs rounded-full ${
                                                            theme === "dark" 
                                                                ? "bg-blue-900/40 text-blue-300" 
                                                                : "bg-blue-100 text-blue-700"
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
                                                    <ExternalLink size={16} />
                                                    View Demo
                                                </a>
                                            </div>
                                        }
                                        theme={theme}
                                    />

                                    <Card
                                        title="Fitness Hub"
                                        content={
                                            <div className="space-y-4">
                                                <p>Modern fitness platform with workout tracking, membership management, and progress analytics.</p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {["React", "CSS3", "JavaScript", "PWA", "Fitness API"].map((tech) => (
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
                                        title="Portfolio Website"
                                        content={
                                            <div className="space-y-4">
                                                <p>Personal portfolio showcasing my journey, skills, and creative work as a developer.</p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {["Next.js", "Tailwind CSS", "Framer Motion", "SEO"].map((tech) => (
                                                        <span key={tech} className={`px-2 py-1 text-xs rounded-full ${
                                                            theme === "dark" 
                                                                ? "bg-pink-900/40 text-pink-300" 
                                                                : "bg-pink-100 text-pink-700"
                                                        }`}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <a
                                                    href="https://www.janeduru.site"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                                        ${theme === "dark"
                                                            ? "bg-pink-600 hover:bg-pink-700 text-white"
                                                            : "bg-pink-100 hover:bg-pink-200 text-pink-700"
                                                        }`}
                                                >
                                                    <ExternalLink size={16} />
                                                    Visit Portfolio
                                                </a>
                                            </div>
                                        }
                                        theme={theme}
                                    />
                                </div>
                            </div>
                        </div>
                    </Section>
                );

            case "pricing":
                return (
                    <Section title="Services & Collaboration" theme={theme}>
                        <div className="space-y-12">
                            <motion.div
                                className={`p-8 rounded-3xl text-center backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20"
                                        : "bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-200/50"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    Partner with Zemio Labs
                                </h3>
                                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    Transform your ideas into reality with our innovative solutions
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <Card
                                    title="Startup Consultation"
                                    content={
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-indigo-500 mb-2">
                                                    Let's Talk
                                                </div>
                                                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                                    Strategic guidance
                                                </p>
                                            </div>
                                            <ul className="space-y-3">
                                                {["Technical Architecture", "Product Strategy", "Market Analysis", "Growth Planning"].map((feature) => (
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
                                    title="Development Partnership"
                                    content={
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-purple-500 mb-2">
                                                    Collaborate
                                                </div>
                                                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                                    Build together
                                                </p>
                                            </div>
                                            <ul className="space-y-3">
                                                {["Full-Stack Development", "Mobile Solutions", "API Integration", "Ongoing Support"].map((feature) => (
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
                                    title="Investment Opportunities"
                                    content={
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-pink-500 mb-2">
                                                    Join Us
                                                </div>
                                                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                                    Invest in innovation
                                                </p>
                                            </div>
                                            <ul className="space-y-3">
                                                {["Early-Stage Investment", "Strategic Partnership", "Global Impact", "High Growth Potential"].map((feature) => (
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

                            <motion.div
                                className={`p-8 rounded-3xl text-center backdrop-blur-xl ${
                                    theme === "dark"
                                        ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20"
                                        : "bg-gradient-to-br from-purple-50/80 to-pink-50/80 border border-purple-200/50"
                                }`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    Let's Build the Future Together
                                </h3>
                                <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    Ready to discuss your ideas? Schedule a 30-minute call to explore how we can collaborate.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <motion.a
                                        href="https://calendly.com/janeezyofficial/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                                    >
                                        📅 Book a 30-min Meeting
                                    </motion.a>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveSection("contact")}
                                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                                    >
                                        Contact Details
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                );

            case "education":
                return (
                    <Section title="Education & Growth" theme={theme}>
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
                                                <p className="text-sm">Danylo Halytsky Lviv National Medical University | 2016</p>
                                                <p className="text-sm mt-2">Strong analytical and problem-solving foundation</p>
                                            </div>
                                            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                                                <p className="text-sm italic">
                                                    "My medical background gives me a unique perspective on problem-solving and attention to detail in tech."
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
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <Mail className="w-5 h-5 text-indigo-500" />
                                                    <span>janeezyofficial@gmail.com</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Mail className="w-5 h-5 text-purple-500" />
                                                    <span>support@zemiolabs.com</span>
                                                </div>
                                                {/* <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center">📱</div>
                                                    <a href="tel:+351920009647" className="hover:text-indigo-500 transition-colors">
                                                        Contact Me: +351 920 009 647
                                                    </a>
                                                </div> */}
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center">💬</div>
                                                    <a href="https://wa.me/351920009647" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                                                        WhatsApp (Business Inquiries)
                                                    </a>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Building2 className="w-5 h-5 text-purple-500" />
                                                    <span>Zemio Labs LTD</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center">🇬🇧</div>
                                                    <span>UK Registered Company</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex items-center justify-center">📍</div>
                                                    <span>Based in Lisbon, Portugal</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                Open to partnerships, investments, and innovative collaborations.
                                            </p>
                                            <motion.a
                                                href="https://calendly.com/janeezyofficial/30min"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                📅 Schedule a Meeting
                                            </motion.a>
                                        </div>
                                    }
                                    theme={theme}
                                />

                                <Card
                                    title="Connect Online"
                                    content={
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-sm font-semibold mb-3 text-purple-400">Company Links</h4>
                                                <div className="space-y-3">
                                                    <motion.a
                                                        href="https://zemiolabs.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-purple-500/50 transition-all duration-300"
                                                        whileHover={{ scale: 1.02, x: 5 }}
                                                    >
                                                        <Building2 className="w-5 h-5 text-purple-500" />
                                                        <span>Zemio Labs Website</span>
                                                        <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                    </motion.a>
                                                    <motion.a
                                                        href="https://www.linkedin.com/company/zemio-labs-ltd"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-purple-500/50 transition-all duration-300"
                                                        whileHover={{ scale: 1.02, x: 5 }}
                                                    >
                                                        <Linkedin className="w-5 h-5 text-purple-500" />
                                                        <span>Zemio Labs LinkedIn</span>
                                                        <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                    </motion.a>
                                                    <motion.a
                                                        href="https://x.com/zemiolabs"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-purple-500/50 transition-all duration-300"
                                                        whileHover={{ scale: 1.02, x: 5 }}
                                                    >
                                                        <Twitter className="w-5 h-5 text-purple-500" />
                                                        <span>Zemio Labs Twitter</span>
                                                        <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                    </motion.a>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-sm font-semibold mb-3 text-indigo-400">Personal Links</h4>
                                                <div className="space-y-3">
                                                    <motion.a
                                                        href="https://www.linkedin.com/in/janeezy/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-300/20 hover:border-indigo-500/50 transition-all duration-300"
                                                        whileHover={{ scale: 1.02, x: 5 }}
                                                    >
                                                        <Linkedin className="w-5 h-5 text-indigo-500" />
                                                        <span>My LinkedIn</span>
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
                                                        <span>My GitHub</span>
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
                                                        <span>My Twitter</span>
                                                        <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                                                    </motion.a>
                                                </div>
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
                                        © {new Date().getFullYear()} Zemio Labs LTD - Building the Future
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
                                Founder & CEO at Zemio Labs
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

                        <motion.p
                            className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Co-Founder & CEO at Zemio Labs | Building Tomorrow's Digital Solutions 🚀
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