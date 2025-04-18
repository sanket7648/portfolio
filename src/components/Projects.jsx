import React from 'react';
import { FaMoneyBillWave, FaRobot, FaEthereum, FaWater, FaHandPaper, FaFileAlt } from 'react-icons/fa';
import Money from '../assets/Money.jpg';
import Chatbot from '../assets/chat.jpeg';
import blockchain from '../assets/blockchain.png';
import water from '../assets/water.jpg';
import sign from '../assets/sign.png';
import text from '../assets/text.png';

const projects = [
  {
    title: "Money Laundering Detection System",
    description: "Developed a system to detect suspicious financial transactions using machine learning and deep learning models like KNN, DNN, XGBoost, SVM, and more. Integrated a Streamlit web app for easy data upload, prediction, and model comparison to help identify potential money laundering activities.",
    technologies: ["Machine Learning", "Python", "Kaggle Dataset", "Deep Learning", "Scikit-learn", "Streamlit"],
    githubLink: "https://github.com/sanket7648/Money_Laundering_Detection",
    demoLink: "#",
    icon: <FaMoneyBillWave className="text-4xl mb-4 text-blue-600" />,
    image: Money
  },
  {
    title: "Custom Chatbot",
    description: "Developed a custom chatbot using the Gemini API to enable intelligent and context-aware conversations. The chatbot is designed to handle diverse queries, providing accurate responses through natural language processing. It is integrated with a user-friendly web interface, offering seamless interaction. The backend is powered by Node.js and Express, ensuring smooth communication with the Gemini API for real-time responses.",
    technologies: ["HTML", "CSS", "Javascript", "Nodejs", "Gemini API"],
    githubLink: "https://github.com/sanket7648/Custom_Chatbot",
    demoLink: "#",
    icon: <FaRobot className="text-4xl mb-4 text-blue-600" />,
    image: Chatbot
  },
  {
    title: "Blockchain App for Supply Chain",
    description: "This decentralized application (DApp) leverages blockchain technology to revolutionize supply chain management by improving transparency, traceability, and security across the entire supply chain process. The app enables real-time tracking of goods from manufacturers to consumers, ensuring product authenticity and preventing counterfeiting.",
    technologies: ["Solidity", "React", "Nodejs", "Etherum"],
    githubLink: "https://github.com/sanket7648/Blockchain",
    demoLink: "#",
    icon: <FaEthereum className="text-4xl mb-4 text-blue-600" />,
    image: blockchain
  },
  {
    title: "Water Potability Detection System",
    description: "This project focuses on predicting the potability of water using machine learning models trained on a dataset containing physicochemical features. By analyzing attributes like pH, hardness, solids, chloramines, and more, the system classifies whether the water is safe to drink. It is designed to assist environmental agencies and health organizations in making data-driven decisions for water quality monitoring.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    githubLink: "https://github.com/sanket7648/Water_Potability_Detection",
    demoLink: "#",
    icon: <FaWater className="text-4xl mb-4 text-blue-600" />,
    image: water
  },
  {
    title: "Sign Language Detection System",
    description: "This project utilizes deep learning and computer vision to detect and recognize sign language gestures in real-time. Using a Convolutional Neural Network (CNN) trained on a large dataset of hand signs, the system captures live input from a webcam, processes the gestures, and translates them into readable text. It serves as a helpful tool to bridge the communication gap between sign language users and non-signers.",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    githubLink: "https://github.com/sanket7648/Sign_Language_Detection",
    demoLink: "#",
    icon: <FaHandPaper className="text-4xl mb-4 text-blue-600" />,
    image: sign
  },
  {
    title: "Text Utils React App",
    description: "TextUtils is a lightweight and responsive ReactJS application designed for quick and efficient text manipulation. It allows users to convert text to uppercase or lowercase, remove extra spaces, copy text to the clipboard, and view real-time word and character counts. With a clean user interface and dark/light mode support, it provides a smooth and user-friendly experience for everyday text editing tasks.",
    technologies: ["ReactJS", "JavaScript", "CSS", "Bootstrap"],
    githubLink: "https://github.com/sanket7648/TextUtilsReactApp",
    demoLink: "#",
    icon: <FaFileAlt className="text-4xl mb-4 text-blue-600" />,
    image: text // Replace with the actual image URL or import the image
  }
];

const Projects = () => {
  return (
    <section className="py-8 bg-white"> {/* Reduced padding from py-12 to py-8 */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2> {/* Reduced mb-12 to mb-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-center">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <a href={project.githubLink} className="text-blue-600 hover:text-blue-800 font-medium">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
