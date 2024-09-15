"use client"
import React, { useState } from 'react';

const OMRSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 space-y-6 md:space-y-0 md:space-x-6">
      
      {/* Text Section */}
      <div className="md:w-1/2 ">
        <h1 className="text-5xl pt-16 font-bold mb-4">How To Fill Optical Mark Recognition (OMR)</h1>
        <p className="text-lg">
          Careful filling, following provided instructions, and avoiding stray marks are crucial 
          to ensure accurate reading and evaluation during assessments or exams.
        </p>
      </div>

      {/* Video Section */}
      <div className="md:w-1/2">
        <div className="relative">
          {isPlaying ? (
            <video
              className="rounded-lg shadow-lg w-full"
              controls
              autoPlay
            >
              <source src="https://bisempk.edu.pk/video/omr.mp4?autoplay=1" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              {/* Placeholder for the video thumbnail */}
              <img
                src="https://www.itstimetologoff.com/wp-content/uploads/2021/04/aaron-burden-y02jEX_B0O0-unsplash-scaled.jpg"
                alt="Video thumbnail"
                className="rounded-lg shadow-lg w-[90%]"
              />
              {/* Play button */}
              <button
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white p-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-6.197 3.73A1 1 0 017 13.945V7.55a1 1 0 011.555-.832l6.197 3.73a1 1 0 010 1.664z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OMRSection;
