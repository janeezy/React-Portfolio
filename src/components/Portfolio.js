import React, { useState, useEffect } from 'react';
import { Home, Laptop, Briefcase, User, Mail, ExternalLink, Music, School, Award, Linkedin, Code, Menu } from 'lucide-react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#3B82F6"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">JD</text>
  </svg>
);

const Section = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b-2 border-blue-400 pb-2">{title}</h2>
    {children}
  </div>
);

const Card = ({ title, subtitle, content, className = "" }) => (
  <div className={`bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${className}`}>
    <h3 className="text-2xl font-bold mb-2 text-blue-400">{title}</h3>
    {subtitle && <p className="text-lg text-gray-300 mb-3">{subtitle}</p>}
    {content}
  </div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
  }, [theme]);

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
          <Section title="Welcome to My Portfolio">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-1">
                <p className="text-xl mb-4 text-gray-300">Front-end developer passionate about collaborative work, clear communication, and exceeding project deadlines. Known for thriving in team settings and making significant contributions to a diverse range of projects. Driven by the challenge of transforming ideas into impactful web applications.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                  <li>Team Collaboration: Thrive in group settings, driving towards shared success.</li>
                  <li>Communication: Master at exchanging ideas and aligning with project goals.</li>
                  <li>Deadline Commitment: Consistently deliver projects on time, exceeding expectations.</li>
                  <li>Technical Skills: Proficient in front-end technologies; always integrating the latest innovations.</li>
                  <li>Development Passion: Focused on using technology to create engaging user experiences.</li>
                </ul>
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
                  onClick={() => setActiveSection('experience')}
                >
                  View My Experience
                </button>
              </div>
            </div>
          </Section>
        );
      case 'experience':
        return (
          <Section title="Work Experience">
            <div className="space-y-6">
              <Card
                title="Junior Frontend Developer"
                subtitle="Jether Tech, Lisbon | May 2023 - Current"
                content={
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Advanced in HTML, CSS, JavaScript, React.js for responsive UI development.</li>
                    <li>Aligns technical and visual aspects for optimal UX.</li>
                    <li>Prioritizes clean, efficient code; engages in rigorous code reviews.</li>
                    <li>Quick at identifying and resolving web app issues.</li>
                    <li>Keeps pace with front-end trends and technologies.</li>
                    <li>Ensures project success through strong communication and teamwork.</li>
                  </ul>
                }
              />
              <Card
                title="Frontend Developer (Internship)"
                subtitle="Jether Tech, Lisbon | December 2022 - April 2023"
                content={
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Developed feature-rich web applications using HTML, CSS, JavaScript; specialized in responsive designs.</li>
                    <li>Enhanced UX through close collaboration on UI/UX design and development.</li>
                    <li>Implemented innovative solutions to complex problems, improving user engagement.</li>
                    <li>Proven reliability with effective time management and on-time project delivery.</li>
                    <li>Committed to code quality and ongoing learning in web development.</li>
                    <li>Versatile team player with strong interpersonal skills, contributing to positive project outcomes.</li>
                  </ul>
                }
              />
              <Card
                title="Music Producer"
                subtitle="Janeezybeats, Remote | January 2020 - Current"
                content={
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Founder of JaneezyBeats, showcasing entrepreneurial spirit by producing and marketing beats.</li>
                    <li>Developed a music website (https://janeezy.beatstars.com) for showcasing work to a global audience.</li>
                    <li>Curated a diverse collection of beats across multiple styles and genres.</li>
                    <li>Simplified music licensing, enabling easy online browsing, previewing, and purchase options.</li>
                    <li>Offer exclusive beats with full master ownership, providing unique value for clients.</li>
                  </ul>
                }
              />
            </div>
          </Section>
        );
      case 'skills':
        return (
          <Section title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                title="Technical Skills"
                content={
                  <ul className="space-y-2 text-gray-300">
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
              />
              <Card
                title="Soft Skills"
                content={
                  <ul className="space-y-2 text-gray-300">
                    <li>Problem-Solving</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Continuous Learning</li>
                    <li>Critical Thinking</li>
                  </ul>
                }
              />
            </div>
          </Section>
        );
      case 'projects':
        return (
          <Section title="My Projects">
            <Card
              title="JaneezyBeats Music Website"
              content={
                <>
                  <p className="mb-4 text-gray-300">Developed a music website for showcasing and selling beats, accessible to a global audience.</p>
                  <a href="https://janeezy.beatstars.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 inline-flex items-center transition-colors duration-300">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </>
              }
            />
          </Section>
        );
      case 'education':
        return (
          <Section title="Education and Certifications">
            <div className="space-y-6">
              <Card
                title="Certificate of Completion Web Development"
                subtitle="Udemy - California Online Coding | January 2023"
              />
              <Card
                title="Path To Software Engineering: From Zero To Hero"
                subtitle="European Leadership University - Online, Cyprus | September 2022"
              />
              <Card
                title="Bachelor of Science: General Medicine"
                subtitle="Danylo Halytsky Lviv National Medical University | 2010 - 2016"
              />
              <Card
                title="Additional Certifications"
                content={
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                    <li>Certificate of Completion HTML & CSS (September 2022)</li>
                    <li>Certificate of Completion Web Development, coding Masterclass: Beginner To Advanced Skills Javascript (2022)</li>
                    <li>Certificate of Completion React js, React Native, coding Masterclass: Beginner To Advanced Skills (January 2023)</li>
                  </ul>
                }
              />
            </div>
          </Section>
        );
      case 'contact':
        return (
          <Section title="Contact Me">
            <p className="mb-6 text-lg text-gray-300">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <Card
              content={
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <Mail className="mr-3 text-blue-400" size={24} />
                    <strong className="mr-2">Email:</strong>
                    <a href="mailto:janeezyofficial@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">janeezyofficial@gmail.com</a>
                  </li>
                  <li className="flex items-center">
                    <Briefcase className="mr-3 text-blue-400" size={24} />
                    <strong className="mr-2">Phone:</strong>
                    <a href="tel:+351920009647" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">+351 920 009 647</a>
                  </li>
                  <li className="flex items-center">
                    <Linkedin className="mr-3 text-blue-400" size={24} />
                    <strong className="mr-2">LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/janeezy/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">linkedin.com/in/janeezy</a>
                  </li>
                  <li className="flex items-center">
  <Code className="mr-3 text-blue-400" size={24} />
  <strong className="mr-2">GitHub:</strong>
  <a href="https://github.com/janeezy" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">github.com/janeezy</a>
</li>
                </ul>
              }
            />
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 bg-opacity-90 backdrop-filter backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <h1 className="text-2xl font-bold ml-2">Ezinne Duru</h1>
          </div>
          <div className="flex items-center">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mr-4">
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <nav className={`fixed ${menuOpen ? 'bottom-0' : '-bottom-full'} left-0 right-0 bg-opacity-90 backdrop-filter backdrop-blur-lg transition-all duration-300 ease-in-out md:top-0 md:left-0 md:right-auto md:h-full md:w-24 z-40`}>
        <ul className="flex justify-around md:flex-col md:h-full md:justify-center md:space-y-8 p-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => {
                  setActiveSection(section.id);
                  setMenuOpen(false);
                }}
                className={`p-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <section.icon size={24} />
                <span className="sr-only">{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-16 md:ml-24 p-8 overflow-y-auto h-screen">
        <img 
          src="https://i.ibb.co/zJHYGBT/yVh-Jt4-V.jpg" 
          alt="Ezinne Adaego Jane Duru" 
          className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-blue-500 transition-transform duration-300 hover:scale-105 mx-auto mb-8"
        />
        <h2 className="text-4xl font-bold mb-4 text-center">Ezinne Adaego Jane Duru</h2>
        <p className="text-xl mb-8 text-center">Frontend Developer & UI/UX Enthusiast</p>
        {renderContent()}
      </main>
    </div>
  );
};

export default Portfolio;