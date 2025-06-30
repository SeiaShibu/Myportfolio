import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-XXXXXXXXXX',
      href: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'seia.shibu@email.com',
      href: 'mailto:seia.shibu@email.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'Github link:https://github.com/SeiaShibu',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: ' https://www.linkedin.com/in/seia-shibu-856b0225b',
      color: 'hover:text-blue-600'
    },
   {
  icon: Mail, // You can import Mail icon from Lucide or any icon lib you're using
  label: 'Email',
  href: 'https://mail.google.com/mail/?view=cm&to=siyashibu.56@gmail.com',
  color: 'hover:text-red-500' // You can use any Tailwind color
}

  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
         
          {/* Contact Info & Social */}
          <div className="order-1 lg:order-2 space-y-8">
        
            {/* Social Links */}
           <center> <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 ${social.color}`}
                  >
                    <social.icon size={24} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
            </center>

            {/* Availability Status */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-800">Currently Available</h4>
              </div>
              <p className="text-green-700 text-sm leading-relaxed">
                I'm actively looking for internship opportunities and exciting projects. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;