import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through the form or my social media profiles.
              </p>
              
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:idreesjee2810@gmail.com" target='_blank'
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                >
                  <Mail size={20} />
                  idreesjee2810@gmail.com
                </a>
                <a
                  href="https://github.com/Idrees-28" target='_blank'
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                >
                  <Github size={20} />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/idrees-m-i-958b35257/" target='_blank'
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                >
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>
              </div>
              
              <a
                href="/resume.pdf" target='_blank'
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}