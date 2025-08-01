import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
  showLiveDemo?: boolean;
  year: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
  id: 9,
  title: 'Real-time Air Quality Index (AQI) Predictor',
  description: 'A full-stack AI-powered application that predicts AQI in real-time based on user-input pollutant levels. Built with Flask, Scikit-learn, and a responsive frontend.',
  image: 'https://onetreeplanted.org/cdn/shop/articles/nature_facts_2000x.jpg?v=1705008496', // Replace with the actual image if needed
  category: 'fullstack',
  technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Scikit-learn'],
  githubUrl: 'https://github.com/SeiaShibu/Real-Time-AQI-Predictor', // Update if needed
  liveUrl: 'https://real-time-air-quality-index-system-jszvhulvpkhdbzdtfp5kdh.streamlit.app/', // Replace with actual deployed URL
  showLiveDemo: true,
  year: '2025',
  features: [
    'Real-time AQI prediction based on user inputs of key pollutants',
    'Trained machine learning model using Scikit-learn',
    'Responsive and user-friendly frontend interface',
    'White-themed input fields and buttons for clean UI',
    'Deployed live with seamless backend integration',
    'Includes multiple pollutant fields like PM2.5, NO2, O3, etc.',
    'Built using Flask for backend and Python ML models',
    'Fast and lightweight model loading via .pkl files'
  ]
},

  {
  id: 8,
  title: 'IMGpop – AI Image Generator',
  description: 'A full-featured AI-powered image generation and editing tool built with Flask and Bria API. From generating HD images to erasing elements and creating lifestyle product shots, IMGpop empowers creatives with next-gen tools.',
  image: 'https://cdn.prod.website-files.com/655741af3f04e006606d26ad/67b36f4aeb76704e26a398a5_2563e6f4-3ff7-4f1e-abb2-1d72bef487fd.jpg',
  category: 'AI',
  technologies: ['Flask', 'Bria AI API', 'HTML/CSS', 'JavaScript'],
  features: [
    'Text-to-Image Generation',
    'Product Lifestyle Shots',
    'Packshot & Shadow Editor',
    'Generative Fill & Erase Tools',
    'Prompt Enhancer',
    'Responsive UI'
  ],
  githubUrl: 'https://github.com/SeiaShibu/IMAGE-POP-GENERATOR',
  liveUrl: 'https://art-pop-ai-image-generator.onrender.com',
  showLiveDemo: true,
  year: '2025',
},

    {
      id: 1,
      title: 'Fashion Influence Platform',
      description: 'A web app that tracks fashion trends using influencer analysis.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      features: ['Trend Analysis', 'Influencer Tracking', 'Real-time Data'],
      githubUrl: 'https://github.com/SeiaShibu/Trendsetter-fashion-influence-website',
      liveUrl: 'https://seiashibu.github.io/Trendsetter-fashion-influence-website/',
      showLiveDemo: true,
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
      githubUrl: 'https://github.com/SeiaShibu/AI-loan-pedicting-system',
      liveUrl: 'https://seiashibu.github.io/AI-loan-pedicting-system/',
      showLiveDemo: true,
      year: '2024',
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
      showLiveDemo: false,
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
      showLiveDemo: false,
      year: '2025',
    },
    {
      id: 4,
      title: 'Autism Predicting System',
      description: 'AI-based system to assist early detection of autism using behavioral data.',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      technologies: ['Python', 'Sklearn', 'Streamlit'],
      features: ['Prediction', 'Report Generation', 'Explainable Insights'],
      githubUrl: 'https://github.com/SeiaShibu/Autism-predicting-system',
      liveUrl: '#',
      showLiveDemo: false,
      year: '2025',
    },
    
 
    {
      id: 7,
      title: 'ShowCase',
      description: 'To showcase talent and sell and earn it.',
      image: 'https://images.pexels.com/photos/6476259/pexels-photo-6476259.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React', 'Tailwind', 'js','html'],
      features: ['Responsive Design', 'Project Filtering', 'Dark Mode'],
      githubUrl: 'https://github.com/SeiaShibu/ShowCase',
      liveUrl: '#',
      showLiveDemo: false,
      year: '2025',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A showcase of my work across AI/ML, full-stack development, and real-world problem solving.
          </p>
        </div>

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
                  {project.showLiveDemo && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/SeiaShibu?tab=repositories"
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
