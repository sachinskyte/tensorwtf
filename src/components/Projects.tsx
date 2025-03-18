import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  impact: string;
  demoLink: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "College Daddy – Your Academic Companion",
    description: "A must-have tool for students, College Daddy is designed to simplify academic life.",
    features: [
      "Smart CGPA & Internal Marks Calculators – Know where you stand & what you need",
      "Comprehensive Study Resources – Notes, roadmaps, and structured learning paths",
      "Pomodoro Timer & Productivity Boosters – Study smarter, not harder"
    ],
    impact: "Built during end-semester chaos, this project solves real student problems, from note-sharing struggles to exam preparation stress.",
    demoLink: "https://collegedaddy.tech"
  },
  {
    title: "AgriBuddy – AI-Powered Farming Assistant",
    description: "Bringing data-driven decision-making to large-scale farming, AgriBuddy empowers farmers.",
    features: [
      "AI-Powered Crop Price Predictions – Sell at the right time for maximum profit",
      "Live Weather Alerts & Mandi Prices – Stay ahead of market & climate risks",
      "Smart Farming Calendar – Get personalized schedules for planting & harvesting",
      "AI Chatbot for Farming Assistance – Ask about pest control, soil health & more"
    ],
    impact: "Farmers often lack real-time, actionable insights—AgriBuddy changes that by providing data-driven recommendations for better yield & profitability.",
    demoLink: "https://idksachinexpo.vercel.app"
  },
  {
    title: "Nestiphy – Asset Tracking Made Simple",
    description: "Developed for Buildspace S5 (Top 3% selection), Nestiphy is an MVP for real-time asset tracking.",
    features: [
      "Rapid Prototyping & Iteration – Designed with real-world feedback loops",
      "Secure & Scalable Architecture – Built to handle enterprise-grade asset tracking",
      "Optimized UI for Speed & Efficiency – No unnecessary clutter, just results"
    ],
    impact: "Asset tracking is a critical challenge in logistics & inventory management—Nestiphy aims to simplify and streamline the entire process.",
    demoLink: "https://nestiphy.vercel.app"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">🚀 Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group hover:bg-gray-800/70 transform transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
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
                
                <p className="text-gray-300">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-purple-300">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">✅</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-purple-300">Why It Matters?</h4>
                  <p className="text-gray-300">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">🔗 More projects coming soon... Stay tuned! 🚀</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;