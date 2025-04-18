import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import anime from 'animejs';

const Footer = () => {
  useEffect(() => {
    // Anime.js animation for icons
    anime({
      targets: '.footer-icon',
      translateY: [-10, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(200), // Stagger animation for each icon
    });

    // Anime.js animation for text
    anime({
      targets: '.footer-text',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 1500,
    });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 text-black py-6"> {/* Reduced padding from py-10 to py-6 */}
      <div className="container mx-auto px-4 text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://github.com/sanket7648"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon hover:scale-125 transition-transform duration-300 text-black"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanket-jha-b052742a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon hover:scale-125 transition-transform duration-300 text-black"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanketjha177@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon hover:scale-125 transition-transform duration-300 text-black"
          >
            <FaEnvelope size={32} />
          </a>
          <a
            href="https://x.com/SanketJ92934412"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon hover:scale-125 transition-transform duration-300 text-black"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://www.instagram.com/_sanket.jha_/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon hover:scale-125 transition-transform duration-300 text-black"
          >
            <FaInstagram size={32} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="footer-text text-lg">
          &copy; {new Date().getFullYear()} Sanket Jha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;