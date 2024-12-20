import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import Button from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xnnqkwjv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/Idrees_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Idrees_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <p className="leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:idreesjee2810@gmail.com" target='_blank'
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Mail size={20} />
                  idreesjee2810@gmail.com
                </a>
                <a
                  href="https://github.com/Idrees-28" target='_blank'
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Github size={20} />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/idrees-m-i-958b35257/" target='_blank'
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>
              </div>
              
              <Button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </Button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <Button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}