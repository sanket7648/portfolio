import React from 'react';
import { FaAward } from 'react-icons/fa';

const achievements = [
  {
    title: "Applied Generative AI Certification",
    issuer: "Infosys Spring Board",
    year: "2023"
  },
  {
    title: "Artificial Intelligence Foundation Certification",
    issuer: "Infosys Springboard",
    year: "2023"
  },
  {
    title: "Google Developers Solution Challenge Task Submission Certification",
    issuer: "Google Developers Student Club",
    year: "2024"
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    year: "2023"
  },
  {
    title: "Runners in Beyonders Hackathon",
    issuer: "Atria University in collaboration with Microsoft Learn Student Ambassador Program",
    year: "2023"
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Infosys Springboard",
    year: "2023"
  },
  {
    title: "JPMorgan Chase & Co - Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2025",
    credentialId: "eX23mjEteWPZERgMP"
  },
  {
    title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
    issuer: "Forage",
    year: "2025",
    credentialId: "btZxKdt8NyJsntbim"
  }
];

const Achievements = () => {
  return (
    <section className="py-8 bg-gray-50"> {/* Reduced padding from py-12 to py-8 */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2> {/* Reduced mb-12 to mb-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="achievement-card bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slideInUp"
            >
              <div className="flex items-center mb-4">
                <FaAward className="text-5xl text-yellow-500 mr-4 animate-pulse" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.issuer}</p>
                  <p className="text-gray-500">{achievement.year}</p>
                  {achievement.credentialId && (
                    <p className="text-gray-500 text-sm">
                      Credential ID: <span className="font-medium">{achievement.credentialId}</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;