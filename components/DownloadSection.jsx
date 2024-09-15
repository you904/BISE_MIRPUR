import React from 'react';

// Import your images here (e.g., handImage and qrCodeImage)
// import handImage from './path-to-your-hand-image'; 
// import qrCodeImage from './path-to-your-qr-code-image'; 

const DownloadSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-12 bg-gradient-to-r from-purple-600 to-blue-400">
      <div className="container mx-auto px-4 md:px-7 text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Download App</h2>
        <p className="text-white text-base md:text-lg mb-8">
          Download Our Application for Easy access and always stay updated for <br /> upcoming Notifications & events
        </p>

        {/* QR Codes and Download Buttons */}
        <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-2 items-center">
          {/* QR Codes */}
          <div className="flex flex-col items-center space-y-4">
            <img src={"https://bisempk.edu.pk/img/qr.png"} alt="QR Code" className="w-20 h-20 md:w-24 md:h-24" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-4">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              APPLE STORE
            </button>
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              PLAY STORE
            </button>
          </div>
        </div>
      </div>

      {/* Hand Holding Phone Image */}
      <div className="absolute right-4 sm:right-0 md:right-10 bottom-0 mt-8 md:mt-0">
        <img src={"https://bisempk.edu.pk/img/qr-img.png"} alt="Hand holding phone" className="w-48 h-auto md:w-64" />
      </div>
    </section>
  );
};

export default DownloadSection;
