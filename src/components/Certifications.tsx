import React from 'react';
import { Award, Languages } from 'lucide-react';

const Certifications = () => {
  const languages = [
    { name: 'Hindi', level: 'Native', progress: 100 },
    { name: 'English', level: 'Full Professional', progress: 95 },
    { name: 'Telugu', level: 'Limited Working', progress: 60 },
    { name: 'Kannada', level: 'Elementary', progress: 40 }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Certifications & Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="section-container p-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-2xl font-semibold text-purple-400">Certifications</h3>
            </div>
            <div className="card group cursor-pointer">
              <h4 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                Summer of Quant (2024)
              </h4>
              <p className="text-gray-300 mt-2">
                Advanced quantitative analysis and financial modeling certification
              </p>
            </div>
          </div>

          <div className="section-container p-8">
            <div className="flex items-center mb-6">
              <Languages className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-2xl font-semibold text-purple-400">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-gray-400">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${lang.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;