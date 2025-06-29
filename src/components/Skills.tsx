import React from 'react';
import { Code, Database, Brain, Wrench, Settings, Smile } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Java', 'JavaScript']
    },
    {
      icon: Database,
      title: 'Web Development',
      skills: ['HTML/CSS', 'React.js', 'Node.js', 'Express.js', 'Flask']
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['Machine Learning', 'NLP', 'TensorFlow', 'SHAP']
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['VS Code', 'Git', 'MongoDB', 'MySQL', 'Power BI']
    },
    {
      icon: Settings,
      title: 'DevOps',
      skills: ['Docker', 'GitHub Actions', 'CI/CD Basics']
    },
    {
      icon: Smile,
      title: 'Non-Technical Skills',
      skills: ['Teamwork', 'Communication', 'Time Management', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clean display of what I'm great at across programming, AI, DevOps, web dev, tools, and soft skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-base">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
