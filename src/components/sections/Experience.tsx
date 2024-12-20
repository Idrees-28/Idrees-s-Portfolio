import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "EMC Program",
    period: "2024 - Present",
    description: "Developed multiple full-stack applications including e-commerce platforms and content management systems."
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    period: "2024 - present",
    description: "Created responsive web applications and implemented modern UI/UX designs."
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}