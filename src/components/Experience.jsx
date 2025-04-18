import React from 'react';
import atriaImage1 from '../assets/auimg1.jpg'; // Replace with the actual image path
import atriaImage2 from '../assets/auimg2.jpg'; // Replace with the actual image path
import atriaImage3 from '../assets/auimg3.jpg'; // Replace with the actual image path

const experience = [
  {
    role: "Software Developer Intern",
    company: "Atria Foundation, Bengaluru",
    period: "February 2025 – April 2025",
    link: "https://www.atriafoundation.org/",
    responsibilities: [
      "Worked collaboratively with cross-functional teams including designers, data scientists, and backend engineers to build and deploy scalable web applications.",
      "Developed responsive and dynamic user interfaces using React.js, Next.js, and Tailwind CSS, ensuring seamless user experiences across devices.",
      "Built and consumed RESTful APIs using Node.js and Express, facilitating efficient data exchange between frontend and backend services.",
      "Integrated machine learning models into production environments to enable real-time predictive analytics and enhance application intelligence.",
      "Optimized application performance and ensured code reliability through thorough unit testing, debugging, and code reviews.",
      "Actively participated in Agile development cycles, including sprint planning, daily stand-ups, and retrospectives, contributing to faster and more efficient delivery of features.",
      "Maintained detailed documentation of system architecture, APIs, and workflows to support future development and scalability."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-12 bg-gray-100"> {/* Reduced padding from py-12 to py-8 */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2> {/* Reduced mb-12 to mb-6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Text Content */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideInLeft h-full"
          >
            <h3 className="text-2xl font-bold text-gray-800">{experience[0].role}</h3>
            <p className="text-lg mt-2 text-gray-600">
              <a
                href={experience[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {experience[0].company}
              </a>{" "}
              | {experience[0].period}
            </p>
            <h4 className="text-xl font-semibold mt-6 text-gray-700">Role and Responsibilities:</h4>
            <ul className="mt-4 space-y-4">
              {experience[0].responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <p className="text-gray-700 text-base">{resp}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Images */}
          <div className="space-y-6">
            <img
              src={atriaImage1}
              alt="Atria Foundation Office"
              className="w-full h-64 object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideInRight"
            />
            <img
              src={atriaImage2}
              alt="Team Collaboration at Atria"
              className="w-full h-64 object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideInRight delay-200"
            />
            <img
              src={atriaImage3}
              alt="Atria Foundation Team"
              className="w-full h-64 object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideInRight delay-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;