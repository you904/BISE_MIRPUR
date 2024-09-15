import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <img src="https://bisempk.edu.pk/img/bise_logo.png" className="h-14" alt="BISE Logo" />
            <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">
              Board of Intermediate & Secondary Education, Mirpurkhas
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Navigating Knowledge, Inspiring Minds BISE Mirpurkhas at Your Service Woking for Your Bright & Better Future
                </a>
              </li>
              <li>
                <div className="flex justify-start space-x-5">
                  <a href="#" className="text-gray-500 text-lg sm:text-xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-500 text-lg sm:text-xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-500 text-lg sm:text-xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Information</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">About us</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Institutes</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">News</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Events</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Important Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Online Slips</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Online Results</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Duplicate Transcript</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Chairman@bisempk.edu.pk</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Info@bisempk.edu.pk</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Secretary@bisempk.edu.pk</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">+92 333 2999977</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 bg-gray-100 dark:bg-gray-700 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            © 2024 <a href="https://flowbite.com/" className="hover:underline">BISE™</a>. All Rights Reserved.
          </span>
          <div className="flex space-x-5">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"/>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path d="M20 1.892a8.178 8.178 0 0 1-2.357.654A4.117 4.117 0 0 0 19.447.313a8.219 8.219 0 0 1-2.605.996 4.104 4.104 0 0 0-6.993 3.74A11.643 11.643 0 0 1 1.392.75a4.104 4.104 0 0 0 1.27 5.476A4.073 4.073 0 0 1 .8 5.95v.052a4.104 4.104 0 0 0 3.292 4.02 4.097 4.097 0 0 1-1.085.144c-.265 0-.522-.026-.774-.076a4.106 4.106 0 0 0 3.833 2.85A8.232 8.232 0 0 1 .975 15.75a11.616 11.616 0 0 0 6.29 1.843c7.547 0 11.676-6.252 11.676-11.677 0-.177-.004-.353-.012-.529A8.344 8.344 0 0 0 20 1.892Z"/>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1.579a8.421 8.421 0 1 0 0 16.842 8.421 8.421 0 0 0 0-16.842ZM7.855 13.276v-6.52l5.553 3.26-5.553 3.26Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.235 3.8 9.557 8.717 9.951v-7.033H6.213V10h2.504V7.797c0-2.48 1.493-3.84 3.716-3.84 1.078 0 2.2.192 2.2.192v2.42h-1.24c-1.223 0-1.606.759-1.606 1.538V10h2.732l-.437 2.918H11.79v7.033C16.698 19.557 20 15.235 20 10 20 4.477 15.523 0 10 0Z"/>
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
