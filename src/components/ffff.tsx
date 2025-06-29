import React, { useState } from 'react';
import { ExternalLink, Github, Code, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Fashion Influence Platform',
      description: 'A comprehensive web platform that tracks fashion trends using influencer analysis, providing insights into emerging styles and consumer preferences.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      features: ['Trend Analysis', 'Influencer Tracking', 'Real-time Data', 'Interactive Dashboard'],
      githubUrl: '#',
      liveUrl: '#',
      year: '2024'
    },
    {
      id: 2,
      title: 'AI Fake News Detector',
      description: 'Advanced NLP-powered system that detects and explains fake news using machine learning algorithms with explainable AI features through SHAP.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      technologies: ['Python', 'Flask', 'SHAP', 'NLP'],
      features: ['Fake News Detection', 'Explainable AI', 'Real-time Analysis', 'Accuracy Metrics'],
      githubUrl: '#',
      liveUrl: '#',
      year: '2024'
    },
    {
      id: 3,
      title: 'Recipe Website',
      description: 'Full-stack web application featuring user-uploaded recipes with advanced ingredient filtering, search functionality, and community features.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Flask', 'HTML/CSS/JS', 'SQLite'],
      features: ['Recipe Upload', 'Ingredient Filter', 'User Profiles', 'Search & Sort'],
      githubUrl: '#',
      liveUrl: '#',
      year: '2023'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'ai', label: 'AI/ML', icon: Code },
    { id: 'web', label: 'Web Dev', icon: Code }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A showcase of my recent work, demonstrating expertise across 
            AI/ML, full-stack development, and innovative problem-solving.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <filter.icon size={18} />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transform hover:scale-105 transition-all">
            View All Projects on GitHub
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;