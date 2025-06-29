import React, { useState } from 'react';
import { ExternalLink, Github, Code, BrainCircuit, Landmark} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  year: string;
}


const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Fashion Influence Platform',
      description: 'A web app that tracks fashion trends using influencer analysis.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      features: ['Trend Analysis', 'Influencer Tracking', 'Real-time Data'],
      githubUrl: 'https://github.com/SeiaShibu/fashion-influence',
      liveUrl: '#',
      year: '2025',
    },
    {
      id: 2,
      title: 'AI Fake News Detector',
      description: 'Detects and explains fake news using NLP + SHAP.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      technologies: ['Python', 'Flask', 'NLP', 'SHAP'],
      features: ['Fake News Detection', 'Explainable AI', 'Accuracy Metrics'],
      githubUrl: 'https://github.com/SeiaShibu/FAKE-NEWS-DECTECTOR',
      liveUrl: '#',
      year: '2024',
    },
    {
      id: 3,
      title: 'Recipe Website',
      description: 'User-uploaded recipes with filtering and search features.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Flask', 'HTML/CSS/JS', 'SQLite'],
      features: ['Upload Recipes', 'Ingredient Filter', 'User Profiles'],
      githubUrl: 'https://github.com/SeiaShibu/RECIPE-MANAGEMENT-SYSTEM',
      liveUrl: 'https://github.com/SeiaShibu/RECIPE-MANAGEMENT-SYSTEM',
      year: '2025',
    },
    {
      id: 4,
      title: 'Autism predicting system',
      description: 'AI-based system to assist early detection of autism using behavioral data.',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      technologies: ['Python', 'Sklearn', 'Streamlit'],
      features: ['Prediction', 'Report Generation', 'Explainable Insights'],
      githubUrl: 'https://github.com/SeiaShibu/Autism-predicting-system',
      liveUrl: '#',
      year: '2025',
    },
    {
      id: 5,
      title: 'Smart Loan Approval System',
      description: 'Loan approval system using explainable AI to reduce financial bias.',
      image: 'https://images.pexels.com/photos/4386392/pexels-photo-4386392.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['Python', 'Flask', 'XAI', 'Pandas'],
      features: ['Loan Prediction', 'SHAP Explanation', 'Data Dashboard'],
      githubUrl: 'https://github.com/SeiaShibu/loan-predicting-system',
      liveUrl: '#',
      year: '2023',
    },
    {
      id: 6,
      title: 'AI for Marine Ecosystem Conservation',
      description: ' AI-powered prediction system to analyze pollution levels and recommend conservation strategies',

      image: 'https://www.alfalaval.in/globalassets/images/local/colombia/marine-2020-640x360.jpg',
      category: 'fullstack',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB'],
      features: ['Sensor Data Visualization', 'Marine Alerts', 'Geo Tracking'],
      githubUrl: 'https://github.com/SeiaShibu/AI-for-Marine-Ecosystem-Conservation',
      liveUrl: '#',
      year: '2024',
    },
    {
      id: 7,
      title: 'ShowCase',
      description: 'To showcase talent and sell and earn it.',
      image: 'https://images.pexels.com/photos/6476259/pexels-photo-6476259.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React', 'Tailwind', 'js','Nodejs/express','MongoDB'],
      features: ['Responsive Design', 'Project Filtering', 'Dark Mode'],
      githubUrl: '#',
      liveUrl: '#',
      year: '2025',
    }
  ];

  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A showcase of my work across AI/ML, full-stack development, and real-world problem solving.
          </p>

          {/* Filter Buttons */}
          
        </div>

        {/* Project Cards */}
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

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

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/SeiaShibu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transform hover:scale-105 transition-all"
          >
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
