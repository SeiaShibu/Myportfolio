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

    // Check if this is a browser reload or fresh visit
    const navEntry = performance.getEntriesByType('navigation')[0];
    const isReload =
      navEntry && 'type' in navEntry && (navEntry as PerformanceNavigationTiming).type === 'reload';

    if (sectionId && !isReload) {
      // Only scroll if it was navigation, not refresh
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        navigate(location.pathname, { replace: true }); // clear state
      }, 0); // ⏱ small delay to ensure DOM is rendered
    }
  }, [location]);

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
