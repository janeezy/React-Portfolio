import React, { useState, useEffect, useMemo } from "react";
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
  Award,
  Linkedin,
  Code,
  Menu,
  Sun,
  Moon,
  Euro,
} from "lucide-react";
import { Twitter, Facebook, HeartHandshake, Copyright } from "lucide-react";

// Updated Logo component with modern styling and home page navigation
const Logo = ({ setActiveSection }) => (
  <motion.button
    onClick={() => setActiveSection("home")}
    className="focus:outline-none"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl cursor-pointer"
    >
      <circle cx="24" cy="24" r="24" className="fill-blue-600" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="bold"
      >
        JD
      </text>
    </motion.svg>
  </motion.button>
);
const Section = ({ title, children, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2
      className={`text-3xl font-bold mb-6 ${theme === "dark"
          ? "text-blue-400 border-blue-400"
          : "text-blue-700 border-blue-700"
        } border-b-2 pb-2`}
    >
      {title}
    </h2>
    {children}
  </motion.div>
);

const Card = ({ title, subtitle, content, className = "", theme }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    className={`${theme === "dark"
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200"
      } p-6 rounded-lg shadow-md transition-all duration-300 border ${className}`}
  >
    <h3
      className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-700"
        }`}
    >
      {title}
    </h3>
    {subtitle && (
      <p
        className={`text-lg mb-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
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
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const sections = [
    { id: "home", icon: Home, title: "Home" },
    { id: "experience", icon: Briefcase, title: "Experience" },
    { id: "skills", icon: User, title: "Skills" },
    { id: "projects", icon: Laptop, title: "Projects" },
    { id: "pricing", icon: Euro, title: "Pricing" }, // Add this new line
    { id: "education", icon: School, title: "Education" },
    { id: "contact", icon: Mail, title: "Contact" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
            <Section title="" theme={theme}>
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Hero Section */}
                    <motion.div
                        className="text-center space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h1
                            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${
                                theme === "dark"
                                    ? "bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text"
                                    : "text-gray-900"
                            }`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Frontend Engineer
                        </motion.h1>
                        <motion.p
                            className={`text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-600"
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Building modern web experiences with React.js,
                            JavaScript, HTML5, CSS3, and other frameworks.
                        </motion.p>
                        <motion.p
                            className={`text-lg max-w-2xl mx-auto ${
                                theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Currently advancing in Data Structures & Algorithms,
                            exploring mobile development, and expanding into
                            blockchain engineering for 2025
                        </motion.p>
                    </motion.div>

                    {/* Key Skills Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Frontend Development",
                                skills: [
                                    "HTML5",
                                    "CSS3",
                                    "JavaScript",
                                    "React.js",
                                    "Responsive Design",
                                    "TailwindCSS",
                                ],
                                description:
                                    "Building responsive, modern web applications with focus on user experience",
                            },
                            {
                                title: "Current Focus",
                                skills: [
                                    "Data Structures",
                                    "Algorithms",
                                    "Problem Solving",
                                    "Optimization",
                                ],
                                description:
                                    "Actively expanding knowledge in computer science fundamentals",
                            },
                            {
                                title: "Professional Background",
                                skills: [
                                    "Team Leadership",
                                    "Client Relations",
                                    "Adaptability",
                                    "Communication",
                                ],
                                description:
                                    "7 years of leadership experience in financial services",
                            },
                        ].map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2 + index * 0.1,
                                }}
                                className={`p-6 rounded-xl ${
                                    theme === "dark"
                                        ? "bg-gray-800/50 border border-gray-700"
                                        : "bg-white/50 border border-gray-200"
                                }`}
                            >
                                <h3 className="text-xl font-bold mb-4">
                                    {section.title}
                                </h3>
                                <p
                                    className={`text-sm mb-4 ${
                                        theme === "dark"
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }`}
                                >
                                    {section.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {section.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1 text-sm font-medium rounded-full
                          ${
                              theme === "dark"
                                  ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                  : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Career Journey */}
                    <div
                        className={`p-6 rounded-xl ${
                            theme === "dark"
                                ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50"
                                : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
                        }`}
                    >
                        <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                        <p
                            className={`text-lg leading-relaxed mb-6 ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                            }`}
                        >
                            Blending 8 years in financial sales with data-driven
                            problem solving, I craft high performance,
                            user centric applications. Since transitioning to
                            tech in 2022, I’ve mastered modern frontend
                            frameworks and scalable design. Now, I’m driven to
                            merge my finance expertise with blockchain, building
                            secure dApps and smart contract solutions that shape
                            the future of web, fintech, and decentralized
                            systems.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                className={`
                      px-6 py-3 rounded-full text-lg font-semibold
                      bg-gradient-to-r from-blue-500 to-blue-700
                      text-white shadow-lg hover:shadow-xl
                      transition-all duration-300
                    `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveSection("experience")}
                            >
                                View Experience
                            </motion.button>

                            <motion.a
                                href="https://drive.google.com/file/d/1R-MGaqOhVuY_Oc_Fg7rJkIhEJp878X9W/view?usp=sharing"
                                className={`
                      px-6 py-3 rounded-full text-lg font-semibold
                      border-2 border-blue-500
                      ${theme === "dark" ? "text-blue-400" : "text-blue-600"}
                      hover:bg-blue-500 hover:text-white
                      transition-all duration-300
                    `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </div>
                </div>
            </Section>
        );

      case "experience":
        return (
            <Section title="Professional Experience" theme={theme}>
                <div className="space-y-16">
                    {/* Current Status */}
                    <div
                        className={`p-6 rounded-xl ${
                            theme === "dark"
                                ? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800/50"
                                : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <p
                                className={`text-lg font-medium ${
                                    theme === "dark"
                                        ? "text-green-400"
                                        : "text-green-700"
                                }`}
                            >
                                Frontend Developer | Currently advancing in Data
                                Structures & Algorithms
                            </p>
                        </div>
                    </div>

                    {/* Current Frontend Development Experience */}
                    <div className="space-y-8">
                        <h3
                            className={`text-2xl font-bold tracking-tight ${
                                theme === "dark"
                                    ? "text-blue-400"
                                    : "text-blue-700"
                            } border-l-4 border-blue-500 pl-4`}
                        >
                            Frontend Development Experience
                        </h3>
                        {/* Current Role */}
                        <Card
                            title={
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-2xl font-bold tracking-tight">
                                            Frontend Developer
                                        </h4>
                                        <span
                                            className={`px-3 py-1 text-sm font-medium rounded-full
            ${
                theme === "dark"
                    ? "bg-green-900/30 text-green-300 border border-green-800"
                    : "bg-green-100 text-green-700 border border-green-200"
            }`}
                                        >
                                            Current Role
                                        </span>
                                    </div>
                                    <p className="text-lg text-gray-500">
                                        Jether Tech | May 2023 - Present
                                    </p>
                                </div>
                            }
                            content={
                                <div className="space-y-6">
                                    <ul
                                        className={`space-y-3 ${
                                            theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Built responsive UIs with
                                                React.js, JavaScript, and
                                                Tailwind CSS, boosting
                                                cross-browser compatibility by
                                                25% and performance by 35%. 
                                               
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                            Cut
                                                bug rate by 40% through rigorous
                                                testing and debugging.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                            Developed
                                                reusable components, reducing
                                                feature development time by 30%.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                            Translated wireframes into
                                                interactive features, enhancing
                                                user engagement.
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "HTML5",
                                            "CSS3",
                                            "JavaScript",
                                            "React",
                                            "Responsive Design",
                                            "TailwindCSS",
                                            "Git",
                                            "Team Collaboration",
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 text-sm font-medium rounded-full
              ${
                  theme === "dark"
                      ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            }
                            theme={theme}
                        />
                        <Card
                            title={
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight">
                                        Frontend Developer Intern
                                    </h4>
                                    <p className="text-lg text-gray-500">
                                        Jether Tech | Dec 2022 - Apr 2023
                                    </p>
                                </div>
                            }
                            content={
                                <div className="space-y-6">
                                    <ul
                                        className={`space-y-3 ${
                                            theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                            Built feature-rich web applications using HTML5, CSS3, and JavaScript with
                                            focus on responsive design principles.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                            Developed mobile-first interfaces that improved user engagement metrics by
                                            20% on smartphone devices.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                            Utilized Git for version control and participated in code reviews that improved
                                            overall code quality.
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "HTML5",
                                            "CSS3",
                                            "JavaScript",
                                            "React",
                                            "Responsive Design",
                                            "TailwindCSS",
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 text-sm font-medium rounded-full
                              ${
                                  theme === "dark"
                                      ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                      : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            }
                            theme={theme}
                        />

                        <Card
                            title={
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight">
                                        Frontend Projects
                                    </h4>
                                    <p className="text-lg text-gray-500">
                                        Self-Directed | 2022 - Present
                                    </p>
                                </div>
                            }
                            content={
                                <div className="space-y-6">
                                    <ul
                                        className={`space-y-3 ${
                                            theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Developed JaneezyBeats platform
                                                with React and modern CSS
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Created responsive restaurant
                                                and gym websites
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "React",
                                            "JavaScript",
                                            "HTML5",
                                            "CSS3",
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 text-sm font-medium rounded-full
                              ${
                                  theme === "dark"
                                      ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                      : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            }
                            theme={theme}
                        />
                    </div>

                    {/* Previous Leadership Experience */}
                    <div className="space-y-8">
                        <h3
                            className={`text-2xl font-bold tracking-tight ${
                                theme === "dark"
                                    ? "text-blue-400"
                                    : "text-blue-700"
                            } border-l-4 border-blue-500 pl-4`}
                        >
                            Previous Professional Experience
                        </h3>

                        <Card
                            title={
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight">
                                        Retention Sales Manager
                                    </h4>
                                    <p className="text-lg text-gray-500">
                                        Golden Markets | Jan 2020 - Feb 2022
                                    </p>
                                </div>
                            }
                            content={
                                <div className="space-y-4">
                                    <ul
                                        className={`space-y-3 ${
                                            theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Led team of 12 representatives,
                                                improving retention by 25%
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Managed high-priority client
                                                portfolio worth €2M annually
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            }
                            theme={theme}
                        />

                        <Card
                            title={
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight">
                                        Senior Retention Sales Manager
                                    </h4>
                                    <p className="text-lg text-gray-500">
                                        Ashford | Feb 2016 - Jan 2020
                                    </p>
                                </div>
                            }
                            content={
                                <div className="space-y-4">
                                    <ul
                                        className={`space-y-3 ${
                                            theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                            Provided expert guidance on cryptocurrency investment strategies, blockchain
                                            technology fundamentals, and digital asset portfolio diversification.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Developed and mentored 15+ team
                                                members to career advancement
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            }
                            theme={theme}
                        />
                    </div>

                    {/* Financial Technology Experience */}
                    <div className="space-y-8">
                        <h3
                            className={`text-2xl  font-bold tracking-tight ${
                                theme === "dark"
                                    ? "text-blue-400"
                                    : "text-blue-700"
                            } border-l-4 border-blue-500 pl-4`}
                        >
                            Financial Sales Experience
                        </h3>

                        <Card
                            title="Cryptocurrency & Business Development"
                            subtitle="2017 - 2020"
                            content={
                                <div className="space-y-4">
                                    <p
                                        className={`${
                                            theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Combined expertise in cryptocurrency
                                        markets and business development:
                                    </p>
                                    <ul
                                        className={`space-y-3 ${
                                            theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Mastered cryptocurrency trading
                                                and blockchain technology
                                                fundamentals
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            <span>
                                                Developed analytical and
                                                problem-solving skills in
                                                fast-paced markets
                                            </span>
                                        </li>
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
            <div className="space-y-12">
              {/* Core Frontend Skills */}
              <Card
                title={
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Frontend Development Skills
                    </h3>
                    <p
                      className={`text-sm ${theme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                        }`}
                    >
                      Core web development technologies
                      and frameworks
                    </p>
                  </div>
                }
                content={
                  <div className="space-y-8 mt-4">
                    {/* HTML & CSS */}
                    <div>
                      <h4
                        className={`text-lg font-semibold mb-3 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        HTML & CSS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "HTML5",
                          "CSS3",
                          "Flexbox",
                          "CSS Grid",
                          "Responsive Design",
                          "SASS/SCSS",
                          "TailwindCSS",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 rounded-full text-sm font-medium
                      ${theme === "dark"
                                ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* JavaScript */}
                    <div>
                      <h4
                        className={`text-lg font-semibold mb-3 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        JavaScript
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "ES6+",
                          "DOM Manipulation",
                          "Async/Await",
                          "Fetch API",
                          "Event Handling",
                          "JSON",
                          "Local Storage",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 rounded-full text-sm font-medium
                      ${theme === "dark"
                                ? "bg-yellow-900/30 text-yellow-300 border border-yellow-800"
                                : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* React */}
                    <div>
                      <h4
                        className={`text-lg font-semibold mb-3 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        React.js
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Components",
                          "Props & State",
                          "Hooks",
                          "Context API",
                          "React Router",
                          "API Integration",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className={`px-4 py-2 rounded-full text-sm font-medium
                      ${theme === "dark"
                                ? "bg-purple-900/30 text-purple-300 border border-purple-800"
                                : "bg-purple-50 text-purple-700 border border-purple-200"
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                }
                theme={theme}
              />

              {/* Currently Learning */}
              <Card
                title={
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Currently Learning
                    </h3>
                    <p
                      className={`text-sm ${theme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                        }`}
                    >
                      Mobile development with React Native
                      while expanding my knowledge in
                      algorithms and data structures to
                      build innovative and efficient
                      solutions.
                    </p>
                  </div>
                }
                content={
                  <div className="space-y-6 mt-4">
                    <div>
                      <h4
                        className={`text-lg font-semibold mb-3 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        Data Structures & Algorithms
                      </h4>
                      <ul
                        className={`space-y-2 ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li>
                          • Basic data structures
                          (Arrays, Objects, Sets)
                        </li>
                        <li>
                          • Array methods and
                          manipulations
                        </li>
                        <li>
                          • Basic sorting algorithms
                        </li>
                        <li>
                          • Problem-solving strategies
                        </li>
                      </ul>
                    </div>
                  </div>
                }
                theme={theme}
              />

              {/* Development Tools */}
              <Card
                title={
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Development Tools
                    </h3>
                    <p
                      className={`text-sm ${theme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                        }`}
                    >
                      Essential tools for web development
                    </p>
                  </div>
                }
                content={
                  <div className="space-y-4 mt-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "VS Code",
                        "Git Basics",
                        "GitHub",
                        "Chrome DevTools",
                        "Responsive Design",
                        "Vercel Deployment",
                      ].map((tool) => (
                        <span
                          key={tool}
                          className={`px-4 py-2 rounded-full text-sm font-medium
                    ${theme === "dark"
                              ? "bg-green-900/30 text-green-300 border border-green-800"
                              : "bg-green-50 text-green-700 border border-green-200"
                            }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                }
                theme={theme}
              />

              {/* Soft Skills */}
              <Card
                title={
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Professional Skills
                    </h3>
                  </div>
                }
                content={
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div>
                      <h4
                        className={`text-lg font-semibold mb-4 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        Learning & Growth
                      </h4>
                      <ul
                        className={`space-y-2 ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li>• Fast Learner</li>
                        <li>• Problem Solving</li>
                        <li>• Attention to Detail</li>
                      </ul>
                    </div>

                    <div>
                      <h4
                        className={`text-lg font-semibold mb-4 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        Communication
                      </h4>
                      <ul
                        className={`space-y-2 ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li>• Team Collaboration</li>
                        <li>• Clear Communication</li>
                        <li>• Active Listening</li>
                      </ul>
                    </div>

                    <div>
                      <h4
                        className={`text-lg font-semibold mb-4 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        Work Style
                      </h4>
                      <ul
                        className={`space-y-2 ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li>• Time Management</li>
                        <li>• Organization</li>
                        <li>• Adaptability</li>
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
          <Section title="Technical Projects" theme={theme}>
            <div className="space-y-16">
              {/* Featured Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-8 rounded-xl ${theme === "dark"
                    ? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800/50"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
                  }`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full
                          ${theme === "dark"
                            ? "bg-blue-900/50 text-blue-300 border border-blue-800"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                          }`}
                      >
                        Featured Project
                      </span>
                    </div>
                    <h3
                      className={`text-3xl font-bold tracking-tight ${theme === "dark"
                          ? "text-blue-400"
                          : "text-blue-700"
                        }`}
                    >
                      JaneezyBeats Platform
                    </h3>
                    <p
                      className={`text-lg leading-relaxed mb-6 ${theme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                        }`}
                    >
                      Original beats produced and crafted
                      by me, featuring unique sounds
                      across multiple genres. Professional
                      beat store integrated with BeatStars
                      Pro Page, offering seamless music
                      distribution and licensing.
                      Custom-branded storefront for
                      premium beat sales and instant
                      delivery.
                    </p>

                    {/* Production Details */}
                    <div className="mb-6">
                      <h4
                        className={`text-lg font-semibold mb-3 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        Production Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Original Production",
                          "Hip Hop",
                          "Trap",
                          "R&B",
                          "Custom Beats",
                          "Unique Sound Design",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-sm font-medium rounded-full
                              ${theme === "dark"
                                ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Beat Features */}
                    <div className="mb-6">
                      <h4
                        className={`text-lg font-semibold mb-3 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        Beat Features
                      </h4>
                      <ul
                        className={`grid grid-cols-2 gap-2 ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          100% Original Production
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          High-Quality Mix & Master
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Multiple License Options
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Instant Download Access
                        </li>
                      </ul>
                    </div>

                    {/* Store Features */}
                    <div className="mb-6">
                      <h4
                        className={`text-lg font-semibold mb-3 ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        Store Features
                      </h4>
                      <ul
                        className={`space-y-2 ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          <span>
                            Exclusive beats produced
                            by me, available for
                            instant purchase
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          <span>
                            Professional licensing
                            options for all budgets
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          <span>
                            Secure platform with
                            instant beat delivery
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href="https://janeezy.beatstars.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            inline-flex items-center gap-2 px-6 py-3 rounded-full
                            bg-blue-500 hover:bg-blue-600 text-white font-semibold
                            transition-colors duration-300 shadow-lg
                          `}
                      >
                        <Music className="w-5 h-5" />
                        Listen to My Beats
                      </motion.a>
                      <motion.a
                        href="https://janeezy.beatstars.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            inline-flex items-center gap-2 px-6 py-3 rounded-full
                            border-2 border-blue-500
                            ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }
                            hover:bg-blue-500 hover:text-white
                            transition-all duration-300
                          `}
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Beat Store
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Recent Projects Section */}
              <div className="space-y-8">
                <h3
                  className={`text-2xl font-bold tracking-tight ${theme === "dark"
                      ? "text-blue-400"
                      : "text-blue-700"
                    }`}
                >
                  Recent Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Restaurant Platform */}
                  <Card
                    title={
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold tracking-tight">
                          Restaurant Platform
                        </h4>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full
                              ${theme === "dark"
                                ? "bg-green-900/30 text-green-300 border border-green-800"
                                : "bg-green-50 text-green-700 border border-green-200"
                              }`}
                          >
                            Active Development
                          </span>
                        </div>
                      </div>
                    }
                    content={
                      <div className="space-y-4">
                        <p
                          className={`${theme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                            }`}
                        >
                          Frontend restaurant
                          management system with
                          real-time order tracking and
                          analytics dashboard.
                        </p>
                        <div className="space-y-3">
                          <h5
                            className={`font-semibold ${theme === "dark"
                                ? "text-blue-400"
                                : "text-blue-600"
                              }`}
                          >
                            Technical Challenges
                            Solved
                          </h5>
                          <ul
                            className={`list-disc list-inside space-y-2 ${theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                              }`}
                          >
                            <li>
                              Implemented using
                              Html and CSS3 for
                              real-time order
                              updates
                            </li>
                            <li>
                              Built responsive UI
                              with React and
                              TailwindCSS
                            </li>
                            <li>
                              Integrated secure
                              payment processing
                              with Stripe
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {[
                            "React",
                            "WebSocket",
                            "Node.js",
                            "Stripe",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 text-sm font-medium rounded-full
                                ${theme === "dark"
                                  ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                  : "bg-blue-50 text-blue-700 border border-blue-200"
                                }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 mt-4">
                          <a
                            href="https://resturantapp-mu.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                ${theme === "dark"
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                              }`}
                          >
                            Live Demo{" "}
                            <ExternalLink
                              size={16}
                            />
                          </a>
                        </div>
                      </div>
                    }
                    theme={theme}
                  />

                  {/* Gym Website */}
                  <Card
                    title={
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold tracking-tight">
                          Fitness Hub
                        </h4>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full
                              ${theme === "dark"
                                ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                          >
                            Completed
                          </span>
                        </div>
                      </div>
                    }
                    content={
                      <div className="space-y-4">
                        <p
                          className={`${theme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                            }`}
                        >
                          Modern fitness platform with
                          membership management and
                          workout tracking
                          capabilities.
                        </p>
                        <div className="space-y-3">
                          <h5
                            className={`font-semibold ${theme === "dark"
                                ? "text-blue-400"
                                : "text-blue-600"
                              }`}
                          >
                            Key Features
                          </h5>
                          <ul
                            className={`list-disc list-inside space-y-2 ${theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                              }`}
                          >
                            <li>
                              Custom animation
                              system for workout
                              demonstrations
                            </li>
                            <li>
                              Responsive design
                              with CSS Grid and
                              Flexbox
                            </li>
                            <li>
                              Progressive Web App
                              capabilities
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {[
                            "React",
                            "CSS3",
                            "JavaScript",
                            "PWA",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 text-sm font-medium rounded-full
                                ${theme === "dark"
                                  ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                  : "bg-blue-50 text-blue-700 border border-blue-200"
                                }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 mt-4">
                          <a
                            href="https://gym-rho-one.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                ${theme === "dark"
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                              }`}
                          >
                            View Project{" "}
                            <ExternalLink
                              size={16}
                            />
                          </a>
                        </div>
                      </div>
                    }
                    theme={theme}
                  />

                  {/* More GitHub Projects Section */}
                  <div
                    className={`col-span-full p-8 rounded-xl ${theme === "dark"
                        ? "bg-gray-800/50 border border-gray-700"
                        : "bg-gray-50 border border-gray-200"
                      }`}
                  >
                    <h3
                      className={`text-2xl font-bold tracking-tight mb-6 ${theme === "dark"
                          ? "text-blue-400"
                          : "text-blue-700"
                        }`}
                    >
                      More on GitHub
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          name: "React Component Library",
                          description:
                            "A collection of reusable React components with Storybook documentation",
                          tags: [
                            "React",
                            "Storybook",
                            "TypeScript",
                          ],
                        },
                        {
                          name: "Algorithm Visualizer",
                          description:
                            "Interactive visualization of common algorithms and data structures",
                          tags: [
                            "JavaScript",
                            "Canvas API",
                            "Algorithms",
                          ],
                        },
                        {
                          name: "Portfolio Template",
                          description:
                            "Modern portfolio template built with Next.js and TailwindCSS",
                          tags: [
                            "Next.js",
                            "TailwindCSS",
                            "React",
                          ],
                        },
                      ].map((project) => (
                        <div
                          key={project.name}
                          className="space-y-4"
                        >
                          <h4
                            className={`text-lg font-semibold ${theme === "dark"
                                ? "text-gray-200"
                                : "text-gray-800"
                              }`}
                          >
                            {project.name}
                          </h4>
                          <p
                            className={`text-sm ${theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                              }`}
                          >
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className={`px-2 py-1 text-xs font-medium rounded-full
                                  ${theme === "dark"
                                      ? "bg-gray-700 text-gray-300"
                                      : "bg-gray-200 text-gray-700"
                                    }`}
                                >
                                  {tag}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <a
                        href="https://github.com/janeezy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                            ${theme === "dark"
                            ? "bg-gray-700 hover:bg-gray-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                          }`}
                      >
                        View More on GitHub{" "}
                        <Code size={16} />
                      </a>
                    </div>
                  </div>
                </div>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-xl ${theme === "dark"
                    ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
                  }`}
              >
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">
                    Frontend Development Services
                  </h3>
                  <p
                    className={`${theme === "dark"
                        ? "text-gray-400"
                        : "text-gray-600"
                      }`}
                  >
                    Based in Lisbon, Portugal • Prices in
                    EUR
                  </p>
                </div>
              </motion.div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Package */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-8 rounded-xl ${theme === "dark"
                      ? "bg-gray-800/90 border border-gray-700"
                      : "bg-white border border-gray-200"
                    }`}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-500 mb-2">
                        Landing Page
                      </h3>
                      <p
                        className={`${theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                          }`}
                      >
                        Perfect for small businesses
                      </p>
                    </div>
                    <div className="text-3xl font-bold">
                      €500
                      <span
                        className={`text-sm ${theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                          }`}
                      >
                        /project
                      </span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Responsive Design
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Modern UI/UX
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        SEO Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        5-day Delivery
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Standard Package */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-8 rounded-xl relative ${theme === "dark"
                      ? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500"
                      : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
                    }`}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                      Popular
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-500 mb-2">
                        Multi-page Website
                      </h3>
                      <p
                        className={`${theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                          }`}
                      >
                        For growing businesses
                      </p>
                    </div>
                    <div className="text-3xl font-bold">
                      €1200
                      <span
                        className={`text-sm ${theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                          }`}
                      >
                        /project
                      </span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Up to 5 Pages
                      </li>

                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        React.js Development
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Contact Form Integration
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        2 Weeks Delivery
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        1 Month Support
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Custom Package */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-8 rounded-xl ${theme === "dark"
                      ? "bg-gray-800/90 border border-gray-700"
                      : "bg-white border border-gray-200"
                    }`}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-500 mb-2">
                        Custom Project
                      </h3>
                      <p
                        className={`${theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                          }`}
                      >
                        Tailored solutions
                      </p>
                    </div>
                    <div className="text-3xl font-bold">
                      Custom
                      <p
                        className={`text-sm ${theme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                          }`}
                      >
                        Based on requirements
                      </p>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Custom Features
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Complex Functionality
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Tailored Timeline
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Extended Support
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Additional Services */}
              <div
                className={`p-6 rounded-xl ${theme === "dark"
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                  }`}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Additional Services
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Maintenance: €50/hour
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Code Review: €40/hour
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Bug Fixes: €45/hour
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Consultation: €35/hour
                  </li>
                </ul>
              </div>

              {/* Contact CTA */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`p-8 rounded-xl text-center ${theme === "dark"
                    ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
                  }`}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Need a Custom Solution?
                </h3>
                <p
                  className={`mb-6 ${theme === "dark"
                      ? "text-gray-400"
                      : "text-gray-600"
                    }`}
                >
                  Let's discuss your project requirements and
                  create something amazing together.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection("contact")}
                  className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Notes */}
              <div
                className={`text-sm ${theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                  }`}
              >
                <p>* All prices are in EUR and exclude VAT</p>
                <p>
                  * Payment terms: 50% upfront, 50% upon
                  completion
                </p>
                <p>
                  * Prices may vary based on project
                  complexity
                </p>
              </div>
            </div>
          </Section>
        );

      case "education":
        return (
          <Section
            title="Education & Professional Development"
            theme={theme}
          >
            <div className="space-y-16">
              {/* Current Tech Learning Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${theme === "dark"
                    ? "bg-blue-900/20 border border-blue-800/50"
                    : "bg-blue-50 border border-blue-200"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                  <p
                    className={`text-lg font-medium ${theme === "dark"
                        ? "text-blue-400"
                        : "text-blue-700"
                      }`}
                  >
                    Currently progressing in System Design,
                    Advanced Algorithms, and Blockchain
                    Development.{" "}
                  </p>
                </div>
              </motion.div>

              {/* Software Engineering Education */}
              <div className="space-y-8">
                <h3
                  className={`text-2xl font-bold tracking-tight ${theme === "dark"
                      ? "text-blue-400"
                      : "text-blue-700"
                    } border-l-4 border-blue-500 pl-4`}
                >
                  Software Engineering Education
                </h3>

                {/* AlgoExpert and Technical Training */}
                <Card
                  title="Technical Expertise & Algorithm Mastery"
                  content={
                    <div className="space-y-6 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-blue-500">
                            AlgoExpert Training
                          </h4>
                          <ul
                            className={`space-y-3 ${theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                              }`}
                          >
                            <li>
                              • Completed 100+
                              algorithmic
                              challenges
                            </li>
                            <li>
                              • Mastered DSA
                              patterns and
                              optimization
                            </li>
                            <li>
                              • Advanced
                              problem-solving
                              techniques
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-blue-500">
                            System Design
                          </h4>
                          <ul
                            className={`space-y-3 ${theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                              }`}
                          >
                            <li>
                              • Scalable
                              architecture design
                            </li>
                            <li>
                              • Microservices and
                              distributed systems
                            </li>
                            <li>
                              • Performance
                              optimization
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                  theme={theme}
                />

                <Card
                  title="Software Engineering Certification"
                  subtitle="European Leadership University - Online, Cyprus | September 2022"
                  content={
                    <div className="space-y-4 mt-4">
                      <ul
                        className={`space-y-2 ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li>
                          • Comprehensive software
                          engineering fundamentals
                        </li>
                        <li>
                          • Modern development
                          practices and methodologies
                        </li>
                        <li>
                          • Frontend web development
                        </li>
                      </ul>
                    </div>
                  }
                  theme={theme}
                />

                {/* Web Development Certifications */}
                <Card
                  title="Web Development Certifications"
                  content={
                    <div className="space-y-4 mt-4">
                      <ul
                        className={`list-disc list-inside ${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        <li>
                          Advanced Web Development
                          (Udemy) - January 2023
                        </li>
                        <li>
                          React.js & React Native
                          Masterclass - January 2023
                        </li>
                        <li>
                          Web Development & JavaScript
                          Advanced Skills - 2022
                        </li>
                        <li>
                          HTML & CSS Certification -
                          September 2022
                        </li>
                      </ul>
                    </div>
                  }
                  theme={theme}
                />
              </div>

              {/* Business & Finance Education */}
              <div className="space-y-8">
                <h3
                  className={`text-2xl font-bold tracking-tight ${theme === "dark"
                      ? "text-blue-400"
                      : "text-blue-700"
                    } border-l-4 border-blue-500 pl-4`}
                >
                  Business & Finance Education
                </h3>

                <Card
                  title="Economics & Business Certification"
                  subtitle="IBM | 2017"
                  content={
                    <div className="space-y-4 mt-4">
                      <p
                        className={`${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        Comprehensive business and
                        economics training from IBM,
                        covering market analysis,
                        business strategy, and economic
                        principles.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Business Analysis",
                          "Economic Principles",
                          "Market Strategy",
                          "Financial Planning",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-sm font-medium rounded-full
                                ${theme === "dark"
                                ? "bg-blue-900/30 text-blue-300 border border-blue-800"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                              }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                  theme={theme}
                />

                <Card
                  title="Cryptocurrency & Blockchain Mastery"
                  subtitle="2017"
                  content={
                    <div className="space-y-4 mt-4">
                      <p
                        className={`${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        Specialized training in
                        cryptocurrency markets and
                        blockchain technology, leading
                        to roles in financial services.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Blockchain Technology",
                          "Cryptocurrency Markets",
                          "Trading Strategies",
                          "Market Analysis",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-sm font-medium rounded-full
                                ${theme === "dark"
                                ? "bg-purple-900/30 text-purple-300 border border-purple-800"
                                : "bg-purple-50 text-purple-700 border border-purple-200"
                              }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                  theme={theme}
                />
              </div>

              {/* Prior Education */}
              <div className="space-y-8">
                <h3
                  className={`text-2xl font-bold tracking-tight ${theme === "dark"
                      ? "text-blue-400"
                      : "text-blue-700"
                    } border-l-4 border-blue-500 pl-4`}
                >
                  Prior Education
                </h3>

                <Card
                  title="Bachelor of Science: Medicine"
                  subtitle="Danylo Halytsky Lviv National Medical University | 2010 - 2016"
                  content={
                    <div className="space-y-4 mt-4">
                      <p
                        className={`${theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                          }`}
                      >
                        Completed medical education
                        before successfully
                        transitioning into technology
                        and finance sectors,
                        demonstrating strong
                        adaptability and commitment to
                        continuous learning.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Career Transition",
                          "Adaptability",
                          "Continuous Learning",
                          "Professional Growth",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-sm font-medium rounded-full
                                ${theme === "dark"
                                ? "bg-gray-800 text-gray-300 border border-gray-700"
                                : "bg-gray-100 text-gray-700 border border-gray-200"
                              }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                  theme={theme}
                />
              </div>

              {/* Active Learning Platforms */}
              <div
                className={`p-6 rounded-xl ${theme === "dark"
                    ? "bg-gray-800/50"
                    : "bg-white"
                  }`}
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-500">
                  Current Learning Focus
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      name: "AlgoExpert",
                      status: "Advanced",
                      icon: Code,
                    },
                    {
                      name: "System Design",
                      status: "In Progress",
                      icon: Laptop,
                    },
                    {
                      name: "LeetCode",
                      status: "Active",
                      icon: Code,
                    },
                    {
                      name: "Frontend Masters",
                      status: "Active",
                      icon: Laptop,
                    },
                  ].map((platform) => (
                    <div
                      key={platform.name}
                      className={`p-4 rounded-lg border ${theme === "dark"
                          ? "border-gray-700 hover:border-blue-500"
                          : "border-gray-200 hover:border-blue-500"
                        } transition-colors duration-300`}
                    >
                      <h5 className="font-semibold mb-2">
                        {platform.name}
                      </h5>
                      <span
                        className={`text-sm ${theme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                          }`}
                      >
                        {platform.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        );

      // In the contact section:
      case "contact":
        return (
          <Section title="Let's Connect" theme={theme}>
            <div className="space-y-12">
              {/* Previous contact content remains the same until social links */}

              {/* Updated Social Links */}
              <div className="space-y-6">
                <h3
                  className={`text-2xl font-bold tracking-tight ${theme === "dark"
                      ? "text-blue-400"
                      : "text-blue-700"
                    }`}
                >
                  Connect with Me
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    {
                      platform: "LinkedIn",
                      icon: Linkedin,
                      link: "https://www.linkedin.com/in/janeezy/",
                      color: "blue",
                      description: "Professional Network",
                    },
                    {
                      platform: "GitHub",
                      icon: Code,
                      link: "https://github.com/janeezy",
                      color: "purple",
                      description: "Code & Projects",
                    },
                    {
                      platform: "Twitter",
                      icon: Twitter,
                      link: "https://x.com/Iamjaneezy",
                      color: "sky",
                      description: "Updates & Thoughts",
                    },
                    {
                      platform: "Medium",
                      icon: ExternalLink,
                      link: "https://medium.com/@janeezy",
                      color: "green",
                      description: "Articles & Blog",
                    },
                    {
                      platform: "Facebook",
                      icon: Facebook,
                      link: "https://www.facebook.com/",
                      color: "indigo",
                      description: "Social Connect",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.platform}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                  p-6 rounded-xl flex flex-col items-center gap-3 text-center
                  transition-all duration-300
                  ${theme === "dark"
                          ? `bg-${social.color}-900/20 border border-${social.color}-800/50 hover:border-${social.color}-500`
                          : `bg-${social.color}-50 border border-${social.color}-200 hover:border-${social.color}-500`
                        }
                `}
                    >
                      <social.icon
                        className={`w-8 h-8 text-${social.color}-500`}
                      />
                      <div>
                        <div
                          className={`font-medium text-${social.color}-500`}
                        >
                          {social.platform}
                        </div>
                        <div
                          className={`text-sm ${theme === "dark"
                              ? "text-gray-400"
                              : "text-gray-600"
                            }`}
                        >
                          {social.description}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Sponsor Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-8 rounded-xl text-center ${theme === "dark"
                    ? "bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-800/50"
                    : "bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200"
                  }`}
              >
                <div className="space-y-4">
                  <HeartHandshake
                    className={`w-12 h-12 mx-auto ${theme === "dark"
                        ? "text-pink-400"
                        : "text-pink-600"
                      }`}
                  />
                  <h3 className="text-2xl font-bold">
                    Support My Work
                  </h3>
                  <p
                    className={`max-w-md mx-auto ${theme === "dark"
                        ? "text-gray-400"
                        : "text-gray-600"
                      }`}
                  >
                    If you find my work valuable, consider
                    supporting my open source contributions
                  </p>
                  <div className="flex justify-center mt-4">
                    <iframe
                      src="https://github.com/sponsors/janeezy/button"
                      title="Sponsor janeezy"
                      height="32"
                      width="114"
                      style={{
                        border: 0,
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Previous form and location content remains */}

              {/* Attribution Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`pt-8 mt-12 border-t ${theme === "dark"
                    ? "border-gray-800"
                    : "border-gray-200"
                  }`}
              >
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="flex items-center gap-2">
                    <Copyright className="w-4 h-4" />
                    <p
                      className={`text-sm ${theme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                        }`}
                    >
                      {new Date().getFullYear()} - All
                      rights reserved
                    </p>
                  </div>
                  <p
                    className={`text-sm ${theme === "dark"
                        ? "text-gray-500"
                        : "text-gray-500"
                      }`}
                  >
                    Designed and Developed with
                    <span className="text-red-500 mx-1">
                      ♥
                    </span>
                    by Jane Duru
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
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-gray-900"
        }`}
    >
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={`fixed top-0 left-0 right-0 bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 ${theme === "dark"
            ? "bg-gray-800 shadow-lg"
            : "bg-white shadow-md"
          }`}
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Logo setActiveSection={setActiveSection} />
            <motion.h1
              className={`text-2xl font-bold ml-2 ${theme === "dark"
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300"
                  : "text-gray-800"
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Jane Duru
            </motion.h1>
          </div>
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-full mr-4 ${theme === "dark"
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-800"
                }`}
            >
              <Menu size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`mr-4 p-2 rounded-full ${theme === "dark"
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-300 text-gray-800"
                }`}
            >
              {theme === "dark" ? (
                <Sun size={24} />
              ) : (
                <Moon size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-gray-800 z-40 md:hidden"
          >
            <ul className="flex flex-col h-full justify-center space-y-8 p-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center p-2 rounded-full transition-all duration-300 ${activeSection === section.id
                        ? "bg-blue-500 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-700"
                      }`}
                  >
                    <section.icon
                      size={24}
                      className="mr-2"
                    />
                    <span>{section.title}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className="hidden md:block fixed top-0 left-0 bottom-0 w-24 bg-gray-800 z-40">
        <ul className="flex flex-col h-full justify-center  items-center  space-y-8 p-4">
          {sections.map((section) => (
            <li key={section.id}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSection(section.id)}
                className={`p-2 rounded-full transition-all duration-300 ${activeSection === section.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
              >
                <section.icon size={24} />
                <span className="sr-only">{section.title}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      <main
        className={`pt-16 md:ml-24 p-8 overflow-y-auto h-screen custom-scrollbar ${theme === "dark" ? "text-white" : "text-gray-800"
          }`}
      >
        <motion.img
          src="/IMG.png"
          alt="Ezinne Adaego Jane Duru"
          className={`w-32 h-32 rounded-full object-cover shadow-lg mx-auto mb-8 mt-12 ${theme === "dark"
              ? "border-4 border-blue-500"
              : "border-4 border-blue-300"
            }`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.h2
          className={`text-4xl font-bold mb-4 text-center ${theme === "dark"
              ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300"
              : "text-blue-700"
            }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome, I'm Ezinne Adaego Jane Duru
        </motion.h2>
        <motion.p
          className={`text-xl mb-8 text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Frontend Software Engineer | UI/UX-Focused Developer | 8+ Years in Financial Sales 🚀
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Portfolio;
