import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const LaunchCard = () => {
    const { openModal } = useModal();
  
  return (
    <div className="absolute hidden sm:block top-0 left-0 m-4 bg-white rounded  w-[320px] text-center text-sm overflow-hidden shadow-2xl">
      {/* Animated Header */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="bg-primary text-white py-2 font-semibold text-sm"
      >
        NEW LAUNCH
      </motion.div>

      {/* Project Title & Details */}
      <div className="px-4 py-3">
        <h2 className="font-bold text-lg">SOBHA MARINA ONE</h2>
        <p className="text-gray-700 font-medium">At Marine Drive, Kochi</p>
        <p className="text-gray-500 text-xs mb-3">By Puravankara & Sobha Group</p>

        <div className="bg-gray-100 rounded px-3 py-2 text-left space-y-1">
          <div className="flex justify-between font-medium">
            <span>Elevation</span>
            <span className="font-bold">G+27</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Towers</span>
            <span className="font-bold">12</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Possession</span>
            <span className="font-bold">2029</span>
          </div>
        </div>
      </div>

      {/* Highlight Strip */}
      <div className="bg-primary text-white font-medium text-sm py-1">
        Kerala’s Largest Waterfront Residences
      </div>

      {/* Pricing Info */}
      <div className="px-4 py-3">
        <p className="text-gray-700 font-medium mb-1">
          Luxury 3 & 4 BHK Flats Start
        </p>
        <p className="text-cyan-700 font-bold text-xl">
          Rs. 2.55 Cr<span className="text-black text-base font-normal">*</span> <span className="text-sm font-medium">Onwards</span>
        </p>

        <button onClick={openModal} className="mt-3 bg-primary text-white px-4 py-2 rounded text-sm font-semibold">
          Enquire Now
        </button>
      </div>

      {/* RERA Info */}
      <div className="px-4 pb-4 text-[10px] text-gray-500 leading-4 text-left space-y-1">
        <p>RERA : Phase 1 - K-RERA/PRJ/251/2020</p>
        <p>Phase 2 - K-RERA/PRJ/252/2020</p>
        <p>Phase 3 - K-RERA/PRJ/253/2020</p>
        <p>Phase 4 - K-RERA/PRJ/ERN/076/2023</p>
      </div>
    </div>
  );
};

export default LaunchCard;
