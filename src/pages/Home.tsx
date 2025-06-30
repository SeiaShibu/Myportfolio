import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    // ✅ Scroll only if it's NOT the hero section
    if (location.pathname === '/' && sectionId && sectionId !== 'hero') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }

      // ✅ Clear state so it doesn’t re-trigger on refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
