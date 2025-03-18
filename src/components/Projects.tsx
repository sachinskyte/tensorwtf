import React from 'react';
import { Github, ExternalLink, Box } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Nestiphy (MVP)',
      description: 'Asset-tracking app built via rapid prototyping',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Portfolio Website',
      description: 'Designed & developed using React.js & Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Open-source Contributions',
      description: 'GitHub repositories and community projects',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
      tags: ['Open Source', 'GitHub', 'Community'],
      links: {
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group h-full flex flex-col">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/10 transition-colors"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.links.github && (
                  <a href={project.links.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="text-gray-400 hover:text-purple-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;