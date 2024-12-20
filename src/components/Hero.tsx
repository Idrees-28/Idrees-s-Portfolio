import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Full Stack Developer
              <span className="block text-primary-600">Building Digital Experiences</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Passionate about creating innovative web solutions and turning ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src='/images/Idrees_Photo.jpg'
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-bottom mx-auto shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}