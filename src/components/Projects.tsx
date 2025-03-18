import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  impact: string;
  demoLink: string;
  image: string;
  snippet?: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "College Daddy – Your Academic Companion",
    description: "An innovative academic toolkit designed to revolutionize the way students manage their educational journey. Built with modern web technologies and a focus on user experience, College Daddy serves as a comprehensive platform for academic success.",
    features: [
      "Advanced CGPA Calculator with semester-wise tracking and prediction capabilities",
      "Comprehensive Study Resource Hub with curated materials and roadmaps",
      "Intelligent Internal Assessment Calculator for precise academic planning",
      "Focus-enhancing Pomodoro Timer with customizable work/break intervals"
    ],
    impact: "Developed during intense end-semester periods, College Daddy addresses critical pain points in student life. By streamlining academic planning and resource management, it has become an indispensable tool for students seeking to optimize their educational journey.",
    demoLink: "https://collegedaddy.tech",
    image: "/collegedaddy.png",
    snippet: "Track your academic progress, access study materials, and boost productivity with our comprehensive suite of student tools.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    title: "AgriBuddy – AI-Powered Farming Assistant",
    description: "A cutting-edge agricultural technology platform that leverages artificial intelligence to transform traditional farming practices. AgriBuddy combines real-time data analytics with machine learning to provide farmers with actionable insights.",
    features: [
      "Advanced AI algorithms for precise crop price predictions and market analysis",
      "Real-time weather monitoring system with automated alerts and advisories",
      "Interactive farming calendar with AI-optimized planting and harvesting schedules",
      "Intelligent chatbot powered by advanced NLP for instant farming guidance"
    ],
    impact: "AgriBuddy bridges the technological gap in agriculture by providing farmers with data-driven insights. This platform has demonstrated significant improvements in crop yield and profitability for farmers across various regions.",
    demoLink: "https://idksachinexpo.vercel.app",
    image: "/agribuddypreview.png",
    snippet: "Empowering farmers with AI-driven insights for optimal crop management and maximum profitability.",
    techStack: ["Next.js", "Python", "TensorFlow", "OpenAI API"]
  },
  {
    title: "Nestiphy – Asset Tracking Made Simple",
    description: "A sophisticated asset tracking solution developed during Buildspace S5, achieving recognition in the top 3% of submissions. Nestiphy redefines asset management with its intuitive interface and powerful backend capabilities.",
    features: [
      "Enterprise-grade asset tracking with real-time location updates",
      "Scalable architecture supporting thousands of concurrent asset traces",
      "Intuitive dashboard with comprehensive analytics and reporting",
      "Automated maintenance scheduling and alert system"
    ],
    impact: "Nestiphy addresses the complex challenges of modern asset management, providing businesses with a reliable and efficient solution that significantly reduces asset loss and improves operational efficiency.",
    demoLink: "https://nestiphy.vercel.app",
    image: "/project-placeholder.jpg",
    snippet: "Streamline your asset management with our enterprise-grade tracking solution.",
    techStack: ["React", "Node.js", "MongoDB", "WebSocket"]
  }
];

const Projects: React.FC = () => {
  const [imageError, setImageError] = React.useState<{[key: string]: boolean}>({});

  const handleImageError = (projectTitle: string) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-16">🚀 Featured Projects</h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group hover:bg-gray-800/70 transform transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-xl h-[300px] group-hover:shadow-2xl transition-all duration-300">
                  {!imageError[project.title] ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(project.title)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-gray-800 flex items-center justify-center">
                      <div className="text-center p-6">
                        <h4 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h4>
                        <p className="text-gray-400 text-sm">{project.snippet}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium italic">{project.snippet}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-300">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-purple-400 mt-1">✦</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-purple-300">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">Why It Matters</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg">🔗 More innovative projects coming soon... Stay tuned! 🚀</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;