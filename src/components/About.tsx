import React from 'react';
import { Users, Target, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="section-container p-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a CSE undergraduate and aspiring software developer with a passion for creating impactful solutions. 
              My expertise spans software development, video editing, and tech trend analysis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <Users className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Why Connect?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Discuss AI/ML trends</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Tech collaborations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Clean code passion</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <Target className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Next Goals</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Software engineering role</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Impactful projects</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <Code2 className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Software Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Video Editing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Tech Analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;