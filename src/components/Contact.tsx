import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-container p-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-300">
                Feel free to reach out for collaborations or just a friendly chat
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:sachinpatel09628@gmail.com"
                className="card group flex items-center justify-center py-8 hover:scale-105"
              >
                <Mail className="w-6 h-6 text-purple-500 group-hover:text-purple-400 mr-3 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  sachinpatel09628@gmail.com
                </span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/sachinskyte"
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center justify-center py-8 hover:scale-105"
              >
                <Linkedin className="w-6 h-6 text-purple-500 group-hover:text-purple-400 mr-3 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  linkedin.com/in/sachinskyte
                </span>
              </a>
            </div>

            <form className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;