import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Column */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hey! I'm <br/><span className="text-blue-600">Seia Shibu</span> <span className="text-4xl">👩‍💻</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
AI & Data Science Engineering Student | Future-Ready Technologist | Turning Ideas into Intelligence

            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl">
Transforming data into intelligence. Developing smart, scalable solutions with a strong foundation in AI and software engineering.            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="/RESUME_SEIASHIBU.pdf"
                download
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center gap-2"><Download size={20} /> Download Resume</div>
              </a>
              <button
                onClick={scrollToProjects}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-2"><Eye size={20} /> View Projects</div>
              </button>
            </div>
          </div>

          {/* Profile Image Column */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white p-4">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    <img
  src="https://i.ibb.co/Q3j8h7gF/photo.jpg"
  alt="Seia Shibu"
  className="w-full h-full object-cover rounded-full"
/>

                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-About Button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
