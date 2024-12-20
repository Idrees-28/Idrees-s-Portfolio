import React from 'react';
import { Code, BookOpen, Briefcase } from 'lucide-react';

export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'HTML/CSS',
    'Tailwind CSS',
    'Git',
    'RESTful APIs',
    'Responsive Design'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in web technologies.
              I enjoy creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Code className="text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <BookOpen className="text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-600 mt-2">
                    K.Ramakrishnan College of Engineering(Tiruchirappalli)
                  </p>
                  <p className="text-gray-600 mt-2">
                    Mother Teresa Matric Higher Secondary School(Pudukkottai)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Briefcase className="text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-gray-600 mt-2">
                    Developed multiple full-stack applications including e-commerce platforms,
                    weather applications, and content management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Workspace"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <p className="text-gray-600 leading-relaxed">
              My journey in web development has equipped me with a comprehensive understanding
              of both frontend and backend technologies. I'm constantly learning and staying
              up-to-date with the latest industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}