import React from 'react';
import { FaLaptopCode, FaUserFriends, FaTools, FaCode, FaServer, FaBrain, FaChartBar, FaCloudUploadAlt } from 'react-icons/fa';

const skills = {
  languages: [
    "Java", "JavaScript", "Python", "C/C++", "TypeScript", "Data Structures and Algorithms"
  ],
  frontend: [
    "ReactJS", "Next JS", "HTML/CSS", "Tailwind CSS", "Redux", "SpringBoot"
  ],
  backend: [
    "NodeJS/Express", "RESTful APIs", "MySQL", "MongoDB"
  ],
  machineLearning: [
    "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "CNN", "RNN", "Transfer Learning", "Supervised & Unsupervised Learning"
  ],
  dataScience: [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Excel", "Data Cleaning", "EDA", "Statistical Analysis"
  ],
  deployment: [
    "Vercel", "Docker", "Netlify", "Streamlit Sharing", "GitHub Pages"
  ],
  technicalTools: {
    ides: ["VS Code", "IntelliJ"],
    platforms: ["Git", "GitHub", "Google Colab", "Jupyter Notebook"],
    tools: ["Power BI", "Tableau", "Postman", "Figma", "Thunderclient"]
  },
  soft: [
    "Problem Solving", "Team Collaboration", "Communication",
    "Time Management", "Adaptability", "Leadership",
    "Critical Thinking", "Creativity", "Emotional Intelligence", "Conflict Resolution"
  ]
};

const Skills = () => {
  return (
    <section className="py-8 bg-gray-100"> {/* Reduced padding from py-12 to py-8 */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2> {/* Reduced mb-12 to mb-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInLeft"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-yellow-600">
              <FaCode className="mr-2" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInRight"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-orange-600">
              <FaLaptopCode className="mr-2" />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInLeft"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-600">
              <FaServer className="mr-2" />
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Machine Learning */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInRight"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-yellow-600">
              <FaBrain className="mr-2" />
              Machine Learning
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.machineLearning.map((skill, index) => (
                <span key={index} className="skill-tag bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Data Science */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInLeft"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-teal-600">
              <FaChartBar className="mr-2" />
              Data Science
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.dataScience.map((skill, index) => (
                <span key={index} className="skill-tag bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Deployment */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInRight"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-indigo-600">
              <FaCloudUploadAlt className="mr-2" />
              Deployment
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.deployment.map((skill, index) => (
                <span key={index} className="skill-tag bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Tools */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInLeft"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-orange-600">
              <FaTools className="mr-2" />
              Technical Tools
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-600 mb-2">IDEs</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.technicalTools.ides.map((tool, index) => (
                    <span key={index} className="skill-tag bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-600 mb-2">Platforms</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.technicalTools.platforms.map((tool, index) => (
                    <span key={index} className="skill-tag bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-600 mb-2">Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.technicalTools.tools.map((tool, index) => (
                    <span key={index} className="skill-tag bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div
            className="p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-slideInRight"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 240, 240, 1), rgba(220, 220, 220, 1))', // Light gray gradient for cards
            }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-pink-600">
              <FaUserFriends className="mr-2" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <span key={index} className="skill-tag bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;