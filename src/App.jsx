import React, { useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const skillsObserver = new IntersectionObserver(observerCallback, observerOptions);
    const projectsObserver = new IntersectionObserver(observerCallback, observerOptions);
    const experienceObserver = new IntersectionObserver(observerCallback, observerOptions);
    const educationObserver = new IntersectionObserver(observerCallback, observerOptions);
    const achievementsObserver = new IntersectionObserver(observerCallback, observerOptions);

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }
    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }
    if (experienceRef.current) {
      experienceObserver.observe(experienceRef.current);
    }
    if (educationRef.current) {
      educationObserver.observe(educationRef.current);
    }
    if (achievementsRef.current) {
      achievementsObserver.observe(achievementsRef.current);
    }

    return () => {
      if (skillsRef.current) skillsObserver.unobserve(skillsRef.current);
      if (projectsRef.current) projectsObserver.unobserve(projectsRef.current);
      if (experienceRef.current) experienceObserver.unobserve(experienceRef.current);
      if (educationRef.current) educationObserver.unobserve(educationRef.current);
      if (achievementsRef.current) achievementsObserver.unobserve(achievementsRef.current);
      
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <section ref={skillsRef} className="skills-section">
        <Skills />
      </section>
      <section ref={projectsRef} className="projects-section">
        <Projects />
      </section>
      <section ref={experienceRef} className="experience-section">
        <Experience />
      </section>
      <section ref={educationRef} className="education-section">
        <Education />
      </section>
      <section ref={achievementsRef} className="achievements-section">
        <Achievements />
      </section>
      <Footer />
    </div>
  );
}

export default App; 