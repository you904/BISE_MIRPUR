import React from 'react';

function Manager() {
  return (
    <div className='my-10'>
        
        <h1 className='text-5xl mb-10 text-gray-800 text-center font-sans font-bold '>Executive Management</h1>
    
        <div className="flex flex-wrap justify-center items-center gap-6 p-4">
  {/* Card 1 */}
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img
      className="rounded-t-lg w-full  object-contain" // Adjusted classes for full width and cover the height
      src="https://bisempk.edu.pk/img/Secretary%20BISE%20Mirpurkhas.jpeg"
      alt="Secretary"
    />
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Muhammad Anisuddin Siddiqui</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Secretary BISE Mirpurkhas</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">0233 900 000</p>
    </div>
  </div>
      {/* Card 2 */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full object-contain"
            src="https://bisempk.edu.pk/img/members/chairman.jpeg"
            alt="Chairman"
          />
        </a>
        <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Muhammad Anisuddin Siddiqui</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Secretary BISE Mirpurkhas</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">0233 900 000</p>
    </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full object-contain"
            src="https://bisempk.edu.pk/img/members/controllar.jpeg"
            alt="Controllar"
          />
        </a>
        <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Muhammad Anisuddin Siddiqui</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Secretary BISE Mirpurkhas</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">0233 900 000</p>
    </div>
      </div>
    </div>
    </div>
  );
}

export default Manager;
