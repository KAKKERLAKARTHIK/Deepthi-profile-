import React, { useState, useEffect } from 'react';
import profileImg from './assets/profile.jpeg';
import websiteImg from './assets/leaflet.jpg';
import { 
  Code, 
  Globe, 
  FileText, 
  Award, 
  ChevronDown, 
  ExternalLink,
  Calendar,
  TrendingUp,
  CheckCircle,
  Target,
  Database,
  Layout,
  Server,
  Presentation,
  Wrench,
  BookOpen,
  Users 
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const softSkills = [
  {
    title: 'Team Collaboration',
    description: 'Worked closely with designers, testers, and stakeholders to meet deadlines.',
    icon: Users
  },
  {
    title: 'Time Management',
    description: 'Handled multiple projects simultaneously with weekly reporting and clear priorities.',
    icon: Calendar
  },
  {
    title: 'Problem Solving',
    description: 'Debugged complex UI/UX issues and fixed deployment bugs independently.',
    icon: CheckCircle
  }
];


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    { name: 'Azistaindustries R2 - V2', type: 'Website', status: 'Under development', link: 'https://www.azistaindustries.com/r2-v2' },
    { name: 'Compass', type: 'Application', status: 'Live', link: 'https://services.heterohcl.com/compass2025/doctor/Login' },
    { name: 'Plumoguard', type: 'Application', status: 'Live', link: 'https://services.heterohcl.com/pulmoguard2025/doctor/Login' },
    { name: 'Moiste R2', type: 'Website', status: 'Under Development', link: 'https://www.moiste.in/r2' },
    { name: 'Sparkel', type: 'Website', status: 'Live', link: 'https://www.thesparkel.com' },
    { name: 'Dr. Vatikonda Srikanth', type: 'Medical Portal', status: 'Under development', link: 'https://hhcldoctorsites.com/srisaihospital' },
    { name: 'PHL-Pharmacy Portal', type: 'Healthcare System', status: 'Under development', link: 'https://www.phlpharmacy.com/demo' },
    { name: 'Leaflets Management System', type: 'Dashboard', status: 'Live', link: 'https://www.hhclleaflets.com' },
    { name: 'Caritero', type: 'Website', status: 'Live', link: 'https://www.hhclleaflets.com' },
    { name: 'Corporate Gift Portal', type: 'Corporate Gift', status: 'Live', link: 'https://www.azistaindustries.com/corporate-gift' }
  ];

  const currentSkills = [
    { name: 'SASS', description: 'Modular, maintainable CSS with advanced styling techniques', icon: Layout },
    { name: 'PHP', description: 'Core backend scripting for web applications', icon: Server },
    { name: 'CodeIgniter', description: 'MVC framework for streamlined PHP development', icon: Code },
    { name: 'SQL', description: 'Efficient database management and query optimization', icon: Database },
    { name: 'PowerPoint', description: 'Effective visual communication and reporting skills', icon: Presentation },
    { name: 'jQuery', description: 'Simplified DOM manipulation and event handling', icon: Code },
    { name: 'Bootstrap', description: 'Responsive design framework for fast UI development', icon: Layout }
  ];

  const futureSkills = [
    { name: 'React JS', description: 'Modern frontend development with components, hooks, and state management', progress: 30 },
    { name: 'PHP (Advanced)', description: 'Deeper understanding of frameworks, security practices, and scalable code design', progress: 60 }
  ];

  const supportingWork = [
    {
      title: 'Website Maintenance - 40+',
      description: 'Managing 40+ websites with regular content updates, design improvements, performance optimization, and SEO enhancements.',
      icon: Wrench
    }
    ,
    { title: 'U QR Code Generation 100+', description: 'Generated 100+ QR codes for business cards, Google reviews, and doctor profiles.', icon: Code },
    { title: 'LMS QR Code Integration 600+', description: 'Generated and integrated 600+ QR codes into packing leaflets for seamless LMS access.', icon: BookOpen },
    { title: 'UI/UX Enhancement', description: 'Bug fixes, testing procedures, and user experience improvements', icon: Layout }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className={`h-8 w-8 ${isScrolled ? 'text-black' : 'text-white'} transition-colors`} />
              <div className="flex items-center space-x-3">
  <img 
    src={profileImg} // Replace with the path to your image (public/profile.jpg)
    alt="Profile"
    className="w-8 h-8 rounded-full object-cover border border-gray-300"
  />
  <span className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'} transition-colors`}>
    Deepthi Gangireddy
  </span>
</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className={`${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'} transition-colors`}>
                Home
              </button>
              <button onClick={() => scrollToSection('projects')} className={`${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'} transition-colors`}>
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className={`${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'} transition-colors`}>
                Skills
              </button>
              <button onClick={() => scrollToSection('reports')} className={`${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'} transition-colors`}>
                Reports
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Web Design & Development
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Project Summary | 2023 – 2024
          </p>
          <p className="text-lg md:text-xl mb-6 opacity-80">
  Delivering clean, responsive websites and scalable applications with a focus on UI/UX and performance.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Skills
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Websites Designed & Developed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over the period of 2023 and 2024, I have been actively involved in the complete design and development
              of several key digital platforms with a focus on usability, responsive design, and seamless functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <Globe className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Live' ? 'bg-green-100 text-green-800' :
                    project.status === 'Under development' || project.status === 'Under Development' ? 'bg-yellow-100 text-yellow-800' :
                    project.status === 'Deployed' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.type}</p>
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 group-hover:text-purple-600 transition-colors hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">View Project</span>
                  </a>
                ) : (
                  <div className="flex items-center text-blue-600 group-hover:text-purple-600 transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">View Project</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leaflets Management Dashboard</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A custom-built dashboard for managing, generating, and tracking 600+ QR-coded packing leaflets across multiple Hetero healthcare, Azista Industries & Azista Bhutan Healhacre products.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  <li>Secure login system with role-based access</li>
                  <li>Admin panel for uploading product leaflet content</li>
                  <li>QR code generator linked to individual product IDs</li>
                  <li>Search, filter, and export leaflet data</li>
                  <li>Integrated PDF viewer and download option</li>
                  <li>Built using PHP + CodeIgniter + MySQL + Bootstrap</li>
                </ul>
              </div>
              <div className="text-center">
                <img 
                  src={websiteImg} 
                  alt="Dashboard Preview" 
                  className="rounded-lg shadow-lg border border-gray-200 mx-auto"
                />
                <p className="text-sm text-gray-500 mt-2">* Preview of the LMS dashboard UI</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://www.hhclleaflets.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center mr-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit HHCL Dashboard
            </a>
            <a 
              href="https://www.azistaleaflets.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center mr-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit Azita Dashboard
            </a>
            <a 
              href="https://www.abhclleaflets.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit ABHCl Dashboard
            </a>
          </div>
        </div>
      </section>


      {/* Supporting Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Supporting Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent contributions to ongoing activities ensuring long-term performance and accessibility of digital platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportingWork.map((work, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <work.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills Learned & Future Plan
            </h2>
            <p className="text-xl text-gray-600">
              Continuous learning and skill development journey
            </p>
          </div>

          {/* Current Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
              Skills Acquired in 2023–2024
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-3">
                    <skill.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Target className="h-6 w-6 text-purple-600 mr-2" />
              Skill Development Plan for 2025
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {futureSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{skill.name}</h4>
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  <div className="bg-white rounded-full p-1">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full h-2 transition-all duration-300" 
                         style={{ width: `${skill.progress}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{skill.progress}% Progress</p>
                </div>
              ))}
            </div>
          </div>

          {/* Objective */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">2025 Objective</h3>
            </div>
            <p className="text-lg opacity-90">
              To enhance both frontend and backend capabilities for building dynamic, robust web applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Soft Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strengthening teamwork, productivity, and problem-solving in every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Reports Section */}
      <section id="reports" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reports & Documentation for Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintaining transparency and project clarity through detailed reporting and documentation work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Weekly Status Reports
              </h3>
              <p className="text-gray-600 text-sm">
                Submitted regularly for project tracking and communication
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Presentation className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Monthly Progress PPTs
              </h3>
              <p className="text-gray-600 text-sm">
                Structured presentations for stakeholder communication
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Half-yearly Reports
              </h3>
              <p className="text-gray-600 text-sm">
                Consolidated performance reports for 2024
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Impact & Results</h3>
            </div>
            <p className="text-gray-600">
              These comprehensive reports have contributed to better planning, communication, and project tracking, 
              ensuring successful delivery of all digital platforms and maintaining high standards of project management.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">Deepthi gangireddy Web Developer</span>
          </div>
          <p className="text-gray-400 mb-4">
            Showcasing excellence in web development and digital innovation
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Web Design & Development. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;