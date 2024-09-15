"use client";
import React, { useState, useEffect } from 'react';

const Updates = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Simulate card change every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setIsRotating(false);
        setActiveCard((prevCard) => (prevCard + 1) % cards.length);
      }, 1000); // 1000ms for the rotation to complete
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Sample cards data (3 cards)
  const cards = [
    {
      title: "Online Enrollment Notifications",
      description: "Details about Online Enrollment programs for students.",
      reviews: "1704 reviews",
      image: "https://bisempk.edu.pk/img/slider/slider1.jpeg",
        // Replace with actual image path
    },
    {
      title: "Scholarship Programs",
      description: "Details about available scholarship programs.",
      reviews: "1345 reviews",
      image: "https://bisempk.edu.pk/img/slider/slider2.jpeg",
     // Replace with actual image path
    },
    {
      title: "Position Holders Announcements",
      description: "Details about the top position holders in recent exams.",
      reviews: "2087 reviews",
      image: "https://bisempk.edu.pk/img/slider/slider3.jpeg",
     // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 sm:p-8 rounded-lg text-white relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Latest Updates</h2>
      <ul className="text-sm sm:text-base">
        <li className="mb-2">
          <span className="font-semibold">✔ Position Holders SSC-II AND HSC-II</span>
          <br />
          <span>Please Click to View Detail</span>
        </li>
        <li className="mb-2">
          <span className="font-semibold">✔ Combined Exam SSC-II</span>
          <br />
          <span>Please Click to View Detail</span>
        </li>
        <li className="mb-2">
          <span className="font-semibold">✔ Online Enrollment Notifications</span>
          <br />
          <span>Please Click to View Detail</span>
        </li>
      </ul>

      {/* Card Section */}
      <div className="relative mt-8 sm:mt-20 sm:absolute sm:right-8 sm:top-0 bg-white text-black rounded-lg shadow-md w-full sm:w-80 transition-transform duration-1000 ease-out"
           style={{
             transform: isRotating ? 'rotateY(360deg)' : 'rotateY(0deg)',
           }}>
        <h3 className="bg-yellow-500 p-2 rounded-t-lg text-center font-bold">Work For Excellence</h3>
        <div className="p-4 flex flex-col items-center">
          <img src={cards[activeCard].image} alt="Card Image" className="w-full rounded-md mb-4" />
          <h4 className="text-blue-700 font-semibold text-center">{cards[activeCard].title}</h4>
          <p className="text-sm text-center">{cards[activeCard].description}</p>
          <p className="text-sm text-gray-500 mt-2 text-center">{cards[activeCard].reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
