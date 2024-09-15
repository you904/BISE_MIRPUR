"use client";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const MovingHeaderWithSearch = () => {
  return (
    <div className="flex flex-nowrap items-center justify-between bg-gradient-to-r from-blue-500 to-purple-500 py-4 px-4">
      {/* Social Icons (Left 20%) */}
      <div className="flex justify-start space-x-4 w-1/5">
        <a href="#" className="text-white text-lg sm:text-xl">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-white text-lg sm:text-xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white text-lg sm:text-xl">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Moving Text (Center 60%) */}
      <div className="flex-1 overflow-hidden w-3/5 text-center">
        <div className=" animate-marquee-slow whitespace-nowrap">
          <h1 className="text-white text-sm sm:text-2xl font-bold">
          يُؤْتِى ٱلْحِكْمَةَ مَن يَشَآءُ ۚ وَمَن يُؤْتَ ٱلْحِكْمَةَ فَقَدْ أُوتِىَ خَيْرًۭا كَثِيرًۭا ۗ وَمَا يَذَّكَّرُ إِلَّآ أُو۟لُوا۟ ٱلْأَلْبَـٰبِ (٢٦٩)                                                                 وہ جس کو چاہتا ہے دانائی بخشتا ہے۔ اور جس کو دانائی ملی بےشک اس کو بڑی نعمت ملی۔ اور نصیحت تو وہی لوگ قبول کرتے ہیں جو عقلمند ہیں

          </h1>
        </div>
      </div>

      {/* Search Field (Right 20%) */}
      <div className="relative flex justify-end w-1/5">
        {/* Search Input Field */}
        <div className="relative">
        <input
            placeholder="Search..."
            className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-full md:w-56 transition-all focus:w-64 outline-none pl-10"
            name="search"
            type="search"
          />
          {/* Search Icon */}
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MovingHeaderWithSearch;
