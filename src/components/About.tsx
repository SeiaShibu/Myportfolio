import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  ✨ Hi, I'm <span className="font-semibold text-blue-600">Seia Shibu</span>, 
                  a final year engineering student from RNS Institute of Technology, Bengaluru, 
                  specializing in Artificial Intelligence and Data Science (Class of 2026).
                </p>
                <p className="text-lg">
                  I’m all about building ethical AI, crafting full-stack web apps that actually do stuff, and turning messy real-world data into smart solutions (yes, even the ones with 100 null values 💀).
                </p>
              
                <p className="text-lg">
                  When I'm not coding or analyzing data, you'll find me exploring the latest 
                  AI research, contributing to open-source projects, or brainstorming innovative 
                  solutions to everyday challenges.
                  Fueled by caffeine and curiosity, I spend my time tinkering with tech, diving into the latest AI research, contributing to open-source projects, or just vibing with an idea until it turns into something cool (and hopefully deployable).
Whether it’s writing clean code or decoding complex data patterns, I’m here to create stuff that matters — and have some fun while I’m at it. 😄
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    RNS Institute of Technology
                  </h4>
                  <p className="text-blue-700 font-semibold mb-2">
                    BE – Artificial Intelligence & Data Science
                  </p>
                  
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>2022 – 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Bengaluru, Karnataka</span>
                    </div>
                  </div>
                  
                  <div >
                
                    <div >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
          
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    POORNAPRJNA COLLEGE
                  </h4>
                  <p className="text-blue-700 font-semibold mb-2">
                   Pre-university- PCMB
                  </p>
                  
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>2020 – 2022</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Udupi, Karnataka</span>
                    </div>
                  </div>
                  
                  <div >
                
                    <div >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Bharath Matha School
                  </h4>
                  <p className="text-blue-700 font-semibold mb-2">
                    school
                  </p>
                  
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span> 2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Mysore, Karnataka</span>
                    </div>
                  </div>
                  
                  <div >
                
                    <div >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default About;