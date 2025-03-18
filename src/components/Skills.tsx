import React from 'react';
import { Code2, Brain, Laptop, Video } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Git & Git Bash', icon: Code2 },
    { name: 'Java & Python', icon: Code2 },
    { name: 'React.js', icon: Code2 },
    { name: 'Full-Stack Development', icon: Laptop },
    { name: 'Video Editing', icon: Video },
    { name: 'Postman API', icon: Code2 }
  ];

  const softSkills = [
    { name: 'Team Leadership', icon: Brain },
    { name: 'Problem-Solving', icon: Brain },
    { name: 'Strategic Thinking', icon: Brain },
    { name: 'Adaptability', icon: Brain }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills</h2>
        <div className="section-container p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="card group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="card group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;