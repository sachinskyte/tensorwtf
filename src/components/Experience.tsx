import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Mood Indigo, IIT Bombay',
      role: 'Marketing Team',
      period: 'Aug 2024 - Present',
      description: 'Drove 30% MoM increase in event signups (500+ participants) for Asia\'s largest college fest (150K+ attendees).',
    },
    {
      company: 'GDSC MVJCE',
      role: 'Content/Speaker',
      period: 'Dec 2024 - Present',
      achievements: [
        'Supported campaigns driving 10% engagement growth',
        'Designed 5+ digital assets',
        'Co-organized a 100+ attendee event'
      ]
    },
    {
      company: 'Buildspace Nights & Weekends',
      role: 'S5 Cohort',
      period: 'Jun 2024 - Aug 2024',
      achievements: [
        'Selected from 60K+ applicants (~3% acceptance rate)',
        'Built Nestiphy MVP: an asset-tracking app refined via peer/expert feedback and public iteration'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience</h2>
        <div className="section-container p-8">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="card group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-purple-400 flex items-center mt-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.role}
                    </p>
                  </div>
                  <p className="text-gray-400 flex items-center mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </p>
                </div>
                
                {exp.description ? (
                  <p className="text-gray-300">{exp.description}</p>
                ) : (
                  <ul className="space-y-2">
                    {exp.achievements?.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;