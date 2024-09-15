import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MayaCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-4">
      {/* Card 1 */}
      <div className="group hover:bg-purple-600 hover:text-white border border-gray-300 bg-white text-black p-8 rounded-lg w-80 h-80 text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
        <a href="#" className="flex justify-center mb-4">
          <i className="fa-solid fa-download text-5xl"></i> {/* Increased icon size */}
        </a>
        <h3 className="text-2xl font-semibold mb-2">Online Enrollment</h3> {/* Increased heading size */}
        <p className="text-sm">Streamlined online enrollment. Join today to get started!</p>
      </div>
      
      {/* Card 2 */}
      <div className="group hover:bg-purple-600 hover:text-white border border-gray-300 bg-white text-black p-8 rounded-lg w-80 h-80 text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
        <a href="#" className="flex justify-center mb-4">
          <i className="fa-regular fa-id-card text-5xl"></i> {/* Increased icon size */}
        </a>
        <h3 className="text-2xl font-semibold mb-2">Student Card</h3> {/* Increased heading size */}
        <p className="text-sm">Effortless access download your personalized student card online in just a click!</p>
      </div>
      
      {/* Card 3 */}
      <div className="group hover:bg-purple-600 hover:text-white border border-gray-300 bg-white text-black p-8 rounded-lg w-80 h-80 text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
        <a href="#" className="flex justify-center mb-4">
          <i className="fa-solid fa-badge text-5xl"></i> {/* Increased icon size */}
        </a>
        <h3 className="text-2xl font-semibold mb-2">Online Enrollment</h3> {/* Increased heading size */}
        <p className="text-sm">Streamlined online enrollment. Join today to get started!</p>
      </div>
    </div>
  );
};

export default MayaCard;
