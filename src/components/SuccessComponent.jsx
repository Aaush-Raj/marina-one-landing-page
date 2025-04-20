import React from 'react';

import done from "../assets/done.jpg"

export default function SuccessComponent() {
  // Function to navigate to homepage
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Success icon/image */}
      <div className="w- h-  flex items-center justify-center mb-8 relative">
      <div className="w-full h-64 flex items-center justify-center">
             <img className='h-full w-full' src={done} alt="Thanks"/>
            </div>
      </div>

      {/* Success message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">You're all set!</h1>
      
      {/* Description */}
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-1">Thanks you for expressing interest on our website.</p>
        <p className="text-gray-600">Our expert will get in touch with you shortly.</p>
      </div>
      
      {/* Go back button */}
      <button 
        onClick={navigateToHome}
        className="bg-primary text-white px-6 py-3 rounded flex items-center transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Go back to Home
      </button>
    </div>
  );
}