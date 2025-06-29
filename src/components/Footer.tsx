import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blogs', href: '/Blogs' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleFooterLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.slice(1);
      if (isHome) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-400">Seia Shibu</h3>
              <p className="text-gray-400 mt-2">
                AI & Data Science Engineering Student
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate about turning data into intelligence and building smart,
              scalable solutions. Always excited to take on new challenges and
              collaborate on innovative projects that make a real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href)}
                    className="text-left text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Let's Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:siyashibu.56@gmail.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                siyashibu.56@gmail.com
              </a>

              <p className="text-gray-400">Bengaluru, Karnataka</p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Currently</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Available for internships
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} Seia Shibu.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
