import React from 'react';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

// Import video and storyboard image
import adVideo from '../assets/teaadvideo.mp4'; // Replace with the actual path to your video
import storyboardImage from '../assets/STORYBOARD.jpg'; // Replace with the actual path to your image

// Import additional images
import techsummit from '../assets/tech.jpg'; // Replace with the actual path to your image
import nvidiaphoto from '../assets/nvidia.jpg'; // Replace with the actual path to your image
import nvidiaph from '../assets/nvidia1.jpg'; // Replace with the actual path to your image
import tiephoto from '../assets/tie.jpg'; // Replace with the actual path to your image
import tievideo from '../assets/tie1.mp4'; // Replace with the actual path to your image
import isroimg from '../assets/isro.jpg'; // Replace with the actual path to your image

// Placeholder imports for certificates (replace with actual paths)
import beyondersHackathonImage from '../assets/beyond.jpg'; // Replace with actual image path
import miniProjectImage from '../assets/mini.jpeg'; // Replace with actual image path
import toolHuntImage from '../assets/tool.jpeg'; // Replace with actual image path
import gdsc2024Image from '../assets/gdsc.jpg'; // Replace with actual image path
import educationImage from '../assets/atria.jpeg'; // Replace with the actual path to your image

const endeavors = [
  "2nd Contestant in Tool Hunt organised by Mechmarize 2.0",
  "Runners in Beyonders Hackthon organised by Atria University in Collaboration with Microsoft Student Ambassadors Program",
  "Winner in Mini Project Exhibition held by Dept of CSE (Project: Single Axis Solar Tracker)",
  "Runners in Cicada Hackathon held by Dept of ISE",
  "Participated in Bharatiya Antariksha Hackathon (Work: Spectral Classification of Chandrayaan-2 IIRS Data Using AI/ML for Lunar Surface Analysis)",
  "Prepared an ad video on Tea and made a storyboard on it",
];

const Education = () => {
  return (
    <section className="py-8 bg-white"> {/* Reduced padding from py-12 to py-8 */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2> {/* Reduced mb-12 to mb-6 */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Bachelor of Engineering Card */}
          <div className="education-card bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 md:w-1/2">
            <div className="flex items-start mb-6">
              {/* Shifted Icon Slightly Upwards */}
              <FaGraduationCap
                className="text-blue-600 mr-6 animate-bounce relative"
                style={{ fontSize: '15rem', top: '-50px'}} // Explicitly set the size and shifted upwards by 10px
              />
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-gray-600">
                  Atria Institute of Technology, Bangalore
                </p>
                <p className="text-gray-500">2022 - 2026</p>
                <p className="text-gray-500">
                  Pursuing a strong foundation in computer science with coursework in Data Structures, Algorithms, DBMS, Operating Systems, and AI. Actively involved in projects and internships focused on Machine Learning, Blockchain, and Augmented Reality. Engaged in tech events, workshops, and research initiatives to build practical and analytical skills.
                </p>
              </div>
            </div>
          </div>

          {/* Image to the Right */}
          <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2 group">
            <img
              src={educationImage} // Imported image
              alt="Education Illustration"
              className="rounded-lg shadow-2xl w-full transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Endeavors Section */}
        <div className="bg-white p-8 mt-8 rounded-lg shadow-2xl w-full mb-12 animate-slideInUp">
          <h3 className="text-2xl font-bold mb-6 text-center text-black">
            Notable Endeavors during College
          </h3>
          <ul className="list-disc list-inside space-y-4 pl-8 text-gray-700">
            {endeavors.map((endeavor, index) => (
              <li key={index} className="leading-relaxed">
                {endeavor}
              </li>
            ))}
          </ul>
        </div>

        {/* Media Highlights Section */}
        <h4 className="text-2xl font-bold  mb-2 text-center text-black animate-fadeIn">Media Highlights</h4>
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ad Video */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <video
                controls
                className="w-full rounded-lg shadow-md"
                style={{ height: '200px', objectFit: 'cover' }}
                src={adVideo} // Imported video
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Storyboard */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <img
                src={storyboardImage} // Imported image
                alt="Storyboard"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* NVIDIA Image 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <img
                src={nvidiaphoto} // NVIDIA image 1
                alt="NVIDIA Image 1"
                className="w-full rounded-lg"
              />
            </div>

            {/* NVIDIA Image 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <img
                src={nvidiaph} // NVIDIA image 2
                alt="NVIDIA Image 2"
                className="w-full rounded-lg"
              />
            </div>

            {/* TIE Image */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <img
                src={tiephoto} // TIE image
                alt="TIE Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* TIE Video */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <video
                controls
                className="w-full rounded-lg shadow-md"
                style={{ height: '200px', objectFit: 'cover' }}
                src={tievideo} // TIE video
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* ISRO Image */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <img
                src={isroimg} // ISRO image
                alt="ISRO Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* Tech Summit Image */}
            <div className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <img
                src={techsummit} // Tech Summit image
                alt="Tech Summit Image"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;