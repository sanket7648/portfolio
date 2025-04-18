import React from 'react';
import Hero from './components/Hero'; // Hero Section
import Experience from './components/Experience'; // Experience Section
import Projects from './components/Projects'; // Projects Section
import Skills from './components/Skills'; // Skills Section
import Education from './components/Education'; // Education Section
import Achievements from './components/Achievements'; // Achievements Section
import Footer from './components/Footer'; // Footer Section

const App = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Achievements Section */}
      <Achievements />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;