import React from 'react';
import { useModal } from '../context/ModalContext';

const OverviewSection = () => {
  const { openModal } = useModal();
  return (
    <div className="bg-white p-4 sm:p-6 md:p-10 rounded-md max-w-5xl mx-auto">
      {/* Tab-like Button */}
      <div className="mb-4">
        <button className="border-2 border-cyan-600 text-cyan-600 px-4 sm:px-5 py-1.5 rounded-full font-medium text-sm sm:text-base">
          Overview
        </button>
      </div>

      {/* Headings */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-600 mb-1">
        Sobha Marina One
      </h2>
      <h3 className="text-base sm:text-lg text-cyan-500 mb-4">
        At Marine Drive, Kochi
      </h3>

      {/* Description */}
      <p className="text-gray-800 mb-6 leading-relaxed text-sm sm:text-base">
        Sobha Marina One Kochi, the best waterfront residential community for the city of Kochi is managed by Sobha Kochi and Puravankara’s synergistic efforts. This superb property raises the standard of super Luxury for the residents of Kochi and Kerala. Sobha Marina One Kochi – This amazing development features 12 high-rise buildings and a central five-acre urban park, on a suitable 16.7-acre site. They will also enjoy an elegance of amenities including large swimming pools, beautifully landscaped gardens, walking paths, play areas for children, and community enjoyment places in Sobha Kochi.
      </p>

      {/* Brochure Button */}
      <div className="text-left">
        <button 
          onClick={openModal} 
          className="border-2 border-cyan-600 text-cyan-600 px-6 py-2 rounded-md font-medium text-sm sm:text-base hover:bg-cyan-50 transition"
        >
          Request to Download Brochure
        </button>
      </div>
    </div>
  );
};

export default OverviewSection;
