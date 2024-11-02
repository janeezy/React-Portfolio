import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Laptop, Briefcase, User, Mail, ExternalLink, Music, School, Award, Linkedin, Code, Menu, Sun, Moon } from 'lucide-react';


// Updated Logo component with modern styling
const Logo = () => (
  <motion.svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="drop-shadow-xl"
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
);


const Section = ({ title, children, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-blue-400 border-blue-400' : 'text-blue-700 border-blue-700'} border-b-2 pb-2`}>{title}</h2>
    {children}
  </motion.div>
);

const Card = ({ title, subtitle, content, className = "", theme }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    className={`${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    } p-6 rounded-lg shadow-md transition-all duration-300 border ${className}`}
  >
    <h3 className={`text-2xl font-bold mb-2 ${
      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
    }`}>{title}</h3>
    {subtitle && <p className={`text-lg mb-3 ${
      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
    }`}>{subtitle}</p>}
    <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
      {content}
    </div>
  </motion.div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };


  const sections = [
    { id: 'home', icon: Home, title: 'Home' },
    { id: 'experience', icon: Briefcase, title: 'Experience' },
    { id: 'skills', icon: User, title: 'Skills' },
    { id: 'projects', icon: Laptop, title: 'Projects' },
    { id: 'education', icon: School, title: 'Education' },
    { id: 'contact', icon: Mail, title: 'Contact' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
  return (
    <Section title="Welcome to My Portfolio" theme={theme}>
      <motion.div 
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1">
          <p className={`text-xl mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Front-end developer passionate about collaborative work, clear communication, and exceeding project deadlines. Known for thriving in team settings and making significant contributions to a diverse range of projects. Driven by the challenge of transforming ideas into impactful web applications.
          </p>
          <ul className={`list-disc list-inside space-y-2 mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Team Collaboration: Thrive in group settings, driving towards shared success.</li>
                  <li>Communication: Master at exchanging ideas and aligning with project goals.</li>
                  <li>Deadline Commitment: Consistently deliver projects on time, exceeding expectations.</li>
                  <li>Technical Skills: Proficient in front-end technologies; always integrating the latest innovations.</li>
                  <li>Development Passion: Focused on using technology to create engaging user experiences.</li>
                </ul>
                <motion.button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
                  onClick={() => setActiveSection('experience')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Experience
                </motion.button>
              </div>
            </motion.div>
          </Section>
        );


        case 'experience':
          return (
            <Section title="Professional Journey" theme={theme}>
              <div className="space-y-16">
                {/* Current Role Highlight */}
                <div className={`p-8 rounded-xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800/50' 
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
                }`}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full
                        ${theme === 'dark'
                          ? 'bg-green-900/50 text-green-300 border border-green-800'
                          : 'bg-green-100 text-green-700 border border-green-200'
                        }`}
                      >
                        Current Role
                      </span>
                    </div>
                    <h3 className={`text-3xl font-bold tracking-tight ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                    }`}>
                      Frontend Developer
                    </h3>
                    <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Jether Tech, Lisbon | May 2023 - Present
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-blue-500">Key Achievements</h4>
                        <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Led the development of high-performance React applications, reducing load times by 40% through code splitting and lazy loading.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Architected scalable frontend solutions handling 100K+ daily users, implementing efficient state management and caching strategies.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Implemented comprehensive testing strategy achieving 80% code coverage using Jest and React Testing Library.</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-blue-500">Technical Impact</h4>
                        <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Built reusable component library reducing development time by 30% across projects.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Optimized CI/CD pipeline reducing deployment time from 45 to 15 minutes.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'React.js', 'TypeScript', 'Redux', 'GraphQL', 
                          'Jest', 'CI/CD', 'Performance Optimization'
                        ].map(tech => (
                          <span key={tech} className={`px-3 py-1 text-sm font-medium rounded-full
                            ${theme === 'dark'
                              ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* Software Development Experience */}
                <div className="space-y-8">
                  <h3 className={`text-2xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                  } border-l-4 border-blue-500 pl-4`}>
                    Software Development Experience
                  </h3>
                  
                  <Card
                    title={
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold tracking-tight">Frontend Developer Intern</h4>
                        <p className="text-lg text-gray-500">Jether Tech | Dec 2022 - Apr 2023</p>
                      </div>
                    }
                    content={
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-semibold mb-3 text-blue-500">Projects & Contributions</h5>
                          <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            <li className="flex items-start gap-3">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                              <span>Developed and maintained React components for high-traffic e-commerce platform (10K+ daily users).</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                              <span>Implemented state management using Redux, improving data flow and application maintainability.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                              <span>Created documentation and style guides using Storybook, accelerating team onboarding.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Redux', 'REST APIs', 'Storybook'].map(tech => (
                            <span key={tech} className={`px-3 py-1 text-sm font-medium rounded-full
                              ${theme === 'dark'
                                ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
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
                        <h4 className="text-2xl font-bold tracking-tight">Freelance Web Developer</h4>
                        <p className="text-lg text-gray-500">Self-employed | 2020 - Present</p>
                      </div>
                    }
                    content={
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-semibold mb-3 text-blue-500">Key Projects</h5>
                          <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            <li className="flex items-start gap-3">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                              <span>Built and launched JaneezyBeats platform, implementing modern e-commerce features and payment processing.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                              <span>Developed custom content management systems for small businesses using modern web technologies.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'MongoDB', 'AWS'].map(tech => (
                            <span key={tech} className={`px-3 py-1 text-sm font-medium rounded-full
                              ${theme === 'dark'
                                ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
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
                  <h3 className={`text-2xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                  } border-l-4 border-blue-500 pl-4`}>
                    Previous Leadership Experience
                  </h3>
        
                  <Card
                    title={
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold tracking-tight">Retention Sales Manager</h4>
                        <p className="text-lg text-gray-500">Golden Markets | Jan 2020 - Feb 2022</p>
                      </div>
                    }
                    content={
                      <div className="space-y-4">
                        <p className={`italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          Led client retention strategies and team management for a major financial services company.
                        </p>
                        <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Managed a team of 12 representatives, implementing data-driven strategies that improved retention by 25%.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Developed and implemented streamlined customer service protocols, reducing response time by 40%.</span>
                          </li>
                        </ul>
                      </div>
                    }
                    theme={theme}
                  />
        
                  <Card
                    title={
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold tracking-tight">Senior Retention Sales Manager</h4>
                        <p className="text-lg text-gray-500">Ashford | Feb 2016 - Jan 2020</p>
                      </div>
                    }
                    content={
                      <div className="space-y-4">
                        <p className={`italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          Spearheaded strategic initiatives and team development in fast-paced financial environment.
                        </p>
                        <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Achieved 13% year-over-year growth through strategic team restructuring and process optimization.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span>Mentored and developed 15+ team members, with 4 achieving promotional advancement.</span>
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

        case 'skills':
          return (
            <Section title="Skills" theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                  title="Technical Skills"
                  content={
                    <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>HTML5, CSS3 & CSS Preprocessors</li>
                      <li>JavaScript (ES6+)</li>
                      <li>React.js</li>
                      <li>Version Control Systems (Git)</li>
                      <li>Responsive Design</li>
                      <li>Build Tools</li>
                      <li>Testing</li>
                      <li>APIs</li>
                      <li>(UI/UX) Principles</li>
                    </ul>
                  }
                  theme={theme}
                />
              <Card
                title="Soft Skills"
                content={
                  <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Problem-Solving</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Continuous Learning</li>
                    <li>Critical Thinking</li>
                  </ul>
                }
                theme={theme}
              />
            </div>
          </Section>
        );

        
        case 'projects':
          return (
            <Section title="Technical Projects" theme={theme}>
              <div className="space-y-16">
                {/* Featured Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-8 rounded-xl ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800/50' 
                      : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full
                          ${theme === 'dark'
                            ? 'bg-blue-900/50 text-blue-300 border border-blue-800'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                          }`}
                        >
                          Featured Project
                        </span>
                      </div>
                      <h3 className={`text-3xl font-bold tracking-tight ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                      }`}>
                        JaneezyBeats Platform
                      </h3>
                      <p className={`text-lg leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Full-stack e-commerce platform for digital music distribution, featuring advanced audio processing and secure payment integration.
                      </p>
                      {/* Technical details remain the same */}
                    </div>
                  </div>
                </motion.div>
        
                {/* Recent Projects Section */}
                <div className="space-y-8">
                  <h3 className={`text-2xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                  }`}>
                    Recent Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Restaurant Platform */}
                    <Card
                      title={
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold tracking-tight">Restaurant Platform</h4>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full
                              ${theme === 'dark'
                                ? 'bg-green-900/30 text-green-300 border border-green-800'
                                : 'bg-green-50 text-green-700 border border-green-200'
                              }`}
                            >
                              Active Development
                            </span>
                          </div>
                        </div>
                      }
                      content={
                        <div className="space-y-4">
                          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            Full-stack restaurant management system with real-time order tracking and analytics dashboard.
                          </p>
                          <div className="space-y-3">
                            <h5 className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                              Technical Challenges Solved
                            </h5>
                            <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              <li>Implemented WebSocket for real-time order updates</li>
                              <li>Built responsive UI with React and TailwindCSS</li>
                              <li>Integrated secure payment processing with Stripe</li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {['React', 'WebSocket', 'Node.js', 'Stripe'].map(tech => (
                              <span key={tech} className={`px-3 py-1 text-sm font-medium rounded-full
                                ${theme === 'dark'
                                  ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                                  : 'bg-blue-50 text-blue-700 border border-blue-200'
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
                                ${theme === 'dark'
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                                }`}
                            >
                              Live Demo <ExternalLink size={16} />
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
                          <h4 className="text-2xl font-bold tracking-tight">Fitness Hub</h4>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full
                              ${theme === 'dark'
                                ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
                              }`}
                            >
                              Completed
                            </span>
                          </div>
                        </div>
                      }
                      content={
                        <div className="space-y-4">
                          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            Modern fitness platform with membership management and workout tracking capabilities.
                          </p>
                          <div className="space-y-3">
                            <h5 className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                              Key Features
                            </h5>
                            <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              <li>Custom animation system for workout demonstrations</li>
                              <li>Responsive design with CSS Grid and Flexbox</li>
                              <li>Progressive Web App capabilities</li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {['React', 'CSS3', 'JavaScript', 'PWA'].map(tech => (
                              <span key={tech} className={`px-3 py-1 text-sm font-medium rounded-full
                                ${theme === 'dark'
                                  ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                                  : 'bg-blue-50 text-blue-700 border border-blue-200'
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
                                ${theme === 'dark'
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                                }`}
                            >
                              View Project <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                      }
                      theme={theme}
                    />
        
                    {/* More GitHub Projects Section */}
                    <div className={`col-span-full p-8 rounded-xl ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border border-gray-700'
                        : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <h3 className={`text-2xl font-bold tracking-tight mb-6 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                      }`}>
                        More on GitHub
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            name: "React Component Library",
                            description: "A collection of reusable React components with Storybook documentation",
                            tags: ["React", "Storybook", "TypeScript"]
                          },
                          {
                            name: "Algorithm Visualizer",
                            description: "Interactive visualization of common algorithms and data structures",
                            tags: ["JavaScript", "Canvas API", "Algorithms"]
                          },
                          {
                            name: "Portfolio Template",
                            description: "Modern portfolio template built with Next.js and TailwindCSS",
                            tags: ["Next.js", "TailwindCSS", "React"]
                          }
                        ].map(project => (
                          <div key={project.name} className="space-y-4">
                            <h4 className={`text-lg font-semibold ${
                              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                            }`}>
                              {project.name}
                            </h4>
                            <p className={`text-sm ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map(tag => (
                                <span key={tag} className={`px-2 py-1 text-xs font-medium rounded-full
                                  ${theme === 'dark'
                                    ? 'bg-gray-700 text-gray-300'
                                    : 'bg-gray-200 text-gray-700'
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
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
                            ${theme === 'dark'
                              ? 'bg-gray-700 hover:bg-gray-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                            }`}
                        >
                          View More on GitHub <Code size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          );

         case 'education':
        return (
          <Section title="Education and Certifications" theme={theme}>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <Card
                title="Certificate of Completion Web Development"
                subtitle="Udemy - California Online Coding | January 2023"
                theme={theme}
              />
              <Card
                title="Path To Software Engineering: From Zero To Hero"
                subtitle="European Leadership University - Online, Cyprus | September 2022"
                theme={theme}
              />
              <Card
                title="Bachelor of Science: General Medicine"
                subtitle="Danylo Halytsky Lviv National Medical University | 2010 - 2016"
                theme={theme}
              />
              <Card
                title="Additional Certifications"
                content={
                  <ul className={`list-disc list-inside mt-2 space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Certificate of Completion HTML & CSS (September 2022)</li>
                    <li>Certificate of Completion Web Development, coding Masterclass: Beginner To Advanced Skills Javascript (2022)</li>
                    <li>Certificate of Completion React js, React Native, coding Masterclass: Beginner To Advanced Skills (January 2023)</li>
                  </ul>
                }
                theme={theme}
              />
            </motion.div>
          </Section>
        );
        case 'contact':
        return (
          <Section title="Contact Me" theme={theme}>
            <p className={`mb-6 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <Card
              content={
                <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-center">
                    <Mail className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                    <strong className="mr-2">Email:</strong>
                    <a href="mailto:janeezyofficial@gmail.com" className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}>janeezyofficial@gmail.com</a>
                  </li>
                  <li className="flex items-center">
                    <Briefcase className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                    <strong className="mr-2">Phone:</strong>
                    <a href="tel:+351920009647" className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}>+351 920 009 647</a>
                  </li>
                  <li className="flex items-center">
                    <Linkedin className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                    <strong className="mr-2">LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/janeezy/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}>linkedin.com/in/janeezy</a>
                  </li>
                  <li className="flex items-center">
                    <Code className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                    <strong className="mr-2">GitHub:</strong>
                    <a href="https://github.com/janeezy" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}>github.com/janeezy</a>
                  </li>
                </ul>
              }
              theme={theme}
            />
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-gray-100 to-white text-gray-900'
    }`}>
     <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: 'spring', stiffness: 120 }}
  className={`fixed top-0 left-0 right-0 bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 ${
    theme === 'dark' ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-md'
  }`}
>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <motion.h1 
  className={`text-2xl font-bold ml-2 ${
    theme === 'dark'
      ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300'
      : 'text-gray-800'
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
  className={`md:hidden p-2 rounded-full ${
    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
  }`}
>
  <Menu size={24} />
</motion.button>
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={toggleTheme}
  className={`mr-4 p-2 rounded-full ${
    theme === 'dark' ? 'bg-gray-700 text-yellow-400' : 'bg-gray-300 text-gray-800'
  }`}
>
  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
</motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 120 }}
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
                    className={`flex items-center p-2 rounded-full transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <section.icon size={24} className="mr-2" />
                    <span>{section.title}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className="hidden md:block fixed top-0 left-0 bottom-0 w-24 bg-gray-800 z-40">
        <ul className="flex flex-col h-full justify-center space-y-8 p-4">
          {sections.map((section) => (
            <li key={section.id}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSection(section.id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <section.icon size={24} />
                <span className="sr-only">{section.title}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      <main className={`pt-16 md:ml-24 p-8 overflow-y-auto h-screen custom-scrollbar ${
  theme === 'dark' ? 'text-white' : 'text-gray-800'
}`}>
       <motion.img 
  src="IMG.png" 
  alt="Ezinne Adaego Jane Duru" 
  className={`w-32 h-32 rounded-full object-cover shadow-lg mx-auto mb-8 ${
    theme === 'dark' ? 'border-4 border-blue-500' : 'border-4 border-blue-300'
  }`}
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
/>
<motion.h2 
  className={`text-4xl font-bold mb-4 text-center ${
    theme === 'dark'
      ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300'
      : 'text-blue-700'
  }`}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
   Welcome, I'm Ezinne Adaego Jane Duru
</motion.h2>
<motion.p 
  className={`text-xl mb-8 text-center ${
    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  }`}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  Software Engineer ~ Frontend & UI/UX Enthusiast | Creating Seamless User Interactions
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





