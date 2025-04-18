import React, { useEffect } from 'react';
import { FaCode, FaReact, FaNodeJs, FaDatabase, FaBrain, FaTools, FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import profilePhoto from '../assets/sanket.jpg';

// Function to generate random keyframes for floating
const generateRandomKeyframes = () => {
  const randomX1 = Math.random() * 100 - 50; // Random horizontal movement
  const randomY1 = Math.random() * 100 - 50; // Random vertical movement
  const randomX2 = Math.random() * 100 - 50;
  const randomY2 = Math.random() * 100 - 50;

  return `
    @keyframes floatRandom${Math.floor(Math.random() * 100000)} {
      0% { transform: translate(0, 0); }
      25% { transform: translate(${randomX1}vw, ${randomY1}vh); }
      50% { transform: translate(${randomX2}vw, ${randomY2}vh); }
      75% { transform: translate(${-randomX1}vw, ${-randomY1}vh); }
      100% { transform: translate(0, 0); }
    }
  `;
};

// Function to apply random animation to each icon
const applyRandomAnimation = () => {
  const styleSheet = document.styleSheets[0];
  const animationName = `floatRandom${Math.floor(Math.random() * 100000)}`; // Use an integer for a valid name
  const keyframes = generateRandomKeyframes().replace(/floatRandom\d+/, animationName); // Replace the placeholder name
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  return animationName;
};

// Function to generate random initial positions
const generateRandomPosition = () => ({
  top: `${Math.random() * 100}%`, // Random position within 100% of the section height
  left: `${Math.random() * 100}%`, // Random position within 100% of the section width
});

const Hero = () => {
  useEffect(() => {
    // Ensure animations are applied when the component is mounted
    document.querySelectorAll('.floating-icon').forEach((icon) => {
      const animationName = applyRandomAnimation();
      icon.style.animation = `${animationName} ${Math.random() * 10 + 10}s ease-in-out infinite`; // Slower animation duration (10s to 20s)
    });
  }, []);

  return (
    <section
      className="text-white py-12 hero-section" // Reduced padding from py-12 to py-8
      style={{
        background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating Icons */}
      {[FaCode, FaReact, FaNodeJs, FaDatabase, FaBrain, FaTools].map((Icon, index) => (
        <Icon
          key={index}
          className="floating-icon"
          style={{
            position: 'absolute',
            fontSize: '2rem', // Reduced icon size
            color: ['#f39c12', '#61dafb', '#68a063', '#f1c40f', '#e74c3c', '#3498db'][index],
            ...generateRandomPosition(), // Random initial position
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center hero-content">
          <div className="md:w-1/2 mb-8 md:mb-0 hero-text">
            <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Sanket Jha</h1>
            <p className="text-xl mb-6 animate-fadeIn delay-200">Full Stack Developer | AI Enthusiast | Problem Solver</p>
            <p className="text-justify max-w-2xl mb-6 animate-fadeIn delay-400">
              I’m a passionate and driven developer with expertise in full-stack development and artificial intelligence. With a strong foundation in both frontend and backend technologies, I specialize in designing and building efficient, scalable, and user-centric solutions that address real-world challenges. My experience spans developing intuitive user interfaces, robust backend systems, and integrating intelligent features powered by AI to deliver impactful digital experiences.


            </p>
            {/* Contact Information in a Single Line */}
            <div className="text-left mt-2 text-lg animate-fadeIn delay-800">
              <p>
                <a href="mailto:sanketjha177@gmail.com" className="hover:underline">sanketjha177@gmail.com</a> |
                <span className="ml-2">+91 9667093725</span> |
                <span className="ml-2">Bengaluru, Karnataka</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-8 mb-6">
              <a
                href="https://github.com/sanket7648"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanket-jha-b052742a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:sanketjha177@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://x.com/SanketJ92934412"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/_sanket.jha_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={profilePhoto}
              alt="Professional Photo"
              className="hero-image rounded-full w-80 h-80 object-cover border-4 border-white animate-fadeIn delay-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;