import React from 'react';
import { Calendar, MapPin, Award, Users, TrendingUp, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise web applications serving 100K+ users. Architecting scalable solutions and mentoring junior developers.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led team of 5 developers on major platform redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Built real-time collaboration features used by 50K+ users'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
      highlights: ['Team Leadership', 'Performance Optimization', 'System Architecture']
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed the core platform from ground up, working directly with founders to build MVP and scale to first 10K users.',
      achievements: [
        'Built entire platform architecture from scratch',
        'Implemented user authentication and authorization system',
        'Created responsive dashboard with real-time analytics',
        'Integrated payment processing with Stripe API'
      ],
      technologies: ['Vue.js', 'Django', 'MongoDB', 'Redis', 'Stripe', 'Heroku'],
      highlights: ['Startup Environment', 'MVP Development', 'Full Ownership']
    },
    {
      id: 3,
      company: 'WebDev Agency',
      position: 'Frontend Developer',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Specialized in creating pixel-perfect, responsive websites for clients across various industries. Collaborated with designers and backend developers.',
      achievements: [
        'Delivered 25+ client projects on time and within budget',
        'Improved client satisfaction scores by 35%',
        'Mentored 3 junior developers and interns',
        'Established best practices for responsive design'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'SASS', 'jQuery', 'Bootstrap', 'WordPress'],
      highlights: ['Client Relations', 'Responsive Design', 'Team Collaboration']
    },
    {
      id: 4,
      company: 'Digital Marketing Co.',
      position: 'Junior Web Developer',
      location: 'Boston, MA',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey building marketing websites and landing pages. Learned fundamentals of web development and user experience.',
      achievements: [
        'Built 50+ landing pages with conversion rates above 3%',
        'Learned modern web development stack',
        'Collaborated with marketing team on A/B testing',
        'Implemented Google Analytics and tracking pixels'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Google Analytics'],
      highlights: ['Foundation Building', 'Marketing Focus', 'Analytics Integration']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Award
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022',
      icon: Code
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      year: '2021',
      icon: Users
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through different roles and companies, building expertise 
            and delivering impactful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className="ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-gray-500">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                            <TrendingUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-50 text-yellow-700 text-sm font-medium rounded-full border border-yellow-200"
                        >
                          <Award size={14} />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Years of Experience</span>
                  <span className="font-bold text-blue-600">5+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="font-bold text-blue-600">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Teams Led</span>
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Client Satisfaction</span>
                  <span className="font-bold text-blue-600">98%</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <cert.icon size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <h3 className="font-bold mb-4">Interested in working together?</h3>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transform hover:scale-105 transition-all">
                Download Full Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;