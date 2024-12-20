import React from 'react';
import ProjectsGrid from './projects/ProjectsGrid';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of web development projects, ranging from simple HTML/CSS websites 
            to complex full-stack applications.
          </p>
        </div>
        
        <ProjectsGrid />
      </div>
    </section>
  );
}