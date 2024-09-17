import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Laptop, Briefcase, User, Mail, ExternalLink, Music, School, Award, Linkedin, Code, Menu, Sun, Moon } from 'lucide-react';


const Logo = () => (
  <motion.svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="favicon.ico"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <circle cx="20" cy="20" r="20" fill="#3B82F6"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">JD</text>
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
            <Section title="Work Experience" theme={theme}>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <Card
                  title="Junior Frontend Developer"
                  subtitle="Jether Tech, Lisbon | May 2023 - Current"
                  content={
                    <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>Advanced in HTML, CSS, JavaScript, React.js for responsive UI development.</li>
                      <li>Aligns technical and visual aspects for optimal UX.</li>
                      <li>Prioritizes clean, efficient code; engages in rigorous code reviews.</li>
                      <li>Quick at identifying and resolving web app issues.</li>
                      <li>Keeps pace with front-end trends and technologies.</li>
                      <li>Ensures project success through strong communication and teamwork.</li>
                    </ul>
                  }
                  theme={theme}
                />
                <Card
                  title="Frontend Developer (Internship)"
                  subtitle="Jether Tech, Lisbon | December 2022 - April 2023"
                  content={
                    <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>Developed feature-rich web applications using HTML, CSS, JavaScript; specialized in responsive designs.</li>
                      <li>Enhanced UX through close collaboration on UI/UX design and development.</li>
                      <li>Implemented innovative solutions to complex problems, improving user engagement.</li>
                      <li>Proven reliability with effective time management and on-time project delivery.</li>
                      <li>Committed to code quality and ongoing learning in web development.</li>
                      <li>Versatile team player with strong interpersonal skills, contributing to positive project outcomes.</li>
                    </ul>
                  }
                  theme={theme}
                />
                <Card
                  title="Music Producer"
                  subtitle="Janeezybeats, Remote | January 2020 - Current"
                  content={
                    <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>Founder of JaneezyBeats, showcasing entrepreneurial spirit by producing and marketing beats.</li>
                      <li>Developed a music website (https://janeezy.beatstars.com) for showcasing work to a global audience.</li>
                      <li>Curated a diverse collection of beats across multiple styles and genres.</li>
                      <li>Simplified music licensing, enabling easy online browsing, previewing, and purchase options.</li>
                      <li>Offer exclusive beats with full master ownership, providing unique value for clients.</li>
                    </ul>
                  }
                  theme={theme}
                />
                <Card
                  title="Retention Sales Manager"
                  subtitle="Golden Markets, Kiev | January 2020 - February 2022"
                  content={
                    <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>Enhanced Customer Satisfaction: Proactively addressed client needs, ensuring positive experiences.</li>
                      <li>Versatile Support: Assisted internal and external clients, upholding service excellence.</li>
                      <li>Resolved Inquiries: Improved customer understanding and satisfaction regarding goods and services.</li>
                      <li>Personalized Assistance: Delivered tailored advice and support, meeting specific customer needs.</li>
                      <li>Quality Improvement: Identified and resolved complaint root causes, boosting satisfaction.</li>
                      <li>Efficient Communication: Minimized wait times with prompt call responses, managing 80 calls/day.</li>
                    </ul>
                  }
                  theme={theme}
                />
                <Card
                  title="Retention Sales Manager"
                  subtitle="Ashford, Kiev | February 2016 - January 2020"
                  content={
                    <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>Boosted Sales: Enhanced team management, achieving a 13% sales increase through effective leadership.</li>
                      <li>Grew Client Base: Acquired new customers, demonstrating robust business development capabilities.</li>
                      <li>Strengthened Client Relations: Fostered satisfaction and loyalty through skillful relationship management.</li>
                      <li>Forged Strategic Partnerships: Navigated complex negotiations, boosting business opportunities.</li>
                    </ul>
                  }
                  theme={theme}
                />
              </motion.div>
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
    <Section title="My Projects" theme={theme}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="JaneezyBeats Music Website"
          content={
            <>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Developed a music website for showcasing and selling beats, accessible to a global audience.
              </p>
              <a 
                href="https://janeezy.beatstars.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} inline-flex items-center transition-colors duration-300`}
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </>
          }
          theme={theme}
        />
        <Card
          title="Portfolio Website"
          content={
            <>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Created a responsive personal portfolio website using React and Tailwind CSS.
              </p>
              <a 
                href="https://www.janeduru.site" 
                className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} inline-flex items-center transition-colors duration-300`}
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </>
          }
          theme={theme}
        />
        <Card
          title="Restaurant Platform"
          content={
            <>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Built a responsive restaurant website with product catalog, shopping cart, and checkout process using React and integrating with a payment gateway.
              </p>
              <a 
                href="https://resturantapp-mu.vercel.app" 
                className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} inline-flex items-center transition-colors duration-300`}
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </>
          }
          theme={theme}
        />
        <Card
          title="Quiz Management App"
          content={
            <>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Developed  application The quiz app is built with JavaScript, styled with CSS, uses Zustand for state management, and retrieves quiz data from the Trivia API. It's hosted on Vercel for smooth performance.</p>
              <a 
                href="https://quiz-app-ashy-two.vercel.app" 
                className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} inline-flex items-center transition-colors duration-300`}
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </>
          }
          theme={theme}
        />
        <Card
          title="Wakimi Hostel Ibadan"
          content={
            <>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Built a responsive Student Hostel "Wakimi" booking website with React and integrating booking, with a payment gateway.
              </p>
              <a 
                href="https://wakimi-hostel-updated.vercel.app" 
                className={`${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-800'} inline-flex items-center transition-colors duration-300`}
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </>
          }
          theme={theme}
        />
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





