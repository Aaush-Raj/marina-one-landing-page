import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AmenitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // List of amenities with icons and names
  const amenitiesList = [
    // Slide 1
    [
      { 
        name: "TODDLERS INDOOR PLAY AREA", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 20H25V30H15V20ZM30 20H40V30H30V20ZM10 35H20V45H10V35ZM25 35H35V45H25V35Z" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "BADMINTON COURT", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="15" r="10" stroke="#888888" strokeWidth="1.5" />
            <path d="M10 40L35 15" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "TODDLERS OUTDOOR PLAY AREA", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 30C15 25 20 20 25 20C30 20 35 25 35 30" stroke="#888888" strokeWidth="1.5" />
            <rect x="20" y="30" width="10" height="10" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "SQUASH COURT", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="28" height="28" rx="2" stroke="#888888" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="2" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "MUSIC ROOM", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15L15 35" stroke="#888888" strokeWidth="1.5" />
            <path d="M15 15C20 12 25 15 25 20V40C25 35 20 32 15 35V15Z" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "LIBRARY", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15H38V35H10V15Z" stroke="#888888" strokeWidth="1.5" />
            <path d="M15 20H33M15 25H33M15 30H25" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
    ],
    // Slide 2
    [
      { 
        name: "SWIMMING POOL", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C15 15 20 25 25 20C30 15 35 25 40 20" stroke="#888888" strokeWidth="1.5" />
            <path d="M10 30C15 25 20 35 25 30C30 25 35 35 40 30" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "GYM", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="28" height="8" rx="2" stroke="#888888" strokeWidth="1.5" />
            <circle cx="15" cy="24" r="3" stroke="#888888" strokeWidth="1.5" />
            <circle cx="33" cy="24" r="3" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "YOGA DECK", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="18" height="18" rx="2" stroke="#888888" strokeWidth="1.5" />
            <path d="M20 24H28M24 20V28" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "GARDEN", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 15V35" stroke="#888888" strokeWidth="1.5" />
            <path d="M24 15C20 15 15 20 18 25C12 25 10 35 24 35C38 35 36 25 30 25C33 20 28 15 24 15Z" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "BASKETBALL COURT", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="28" height="28" rx="2" stroke="#888888" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="8" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
      { 
        name: "CLUBHOUSE", 
        icon: (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30L24 15L38 30" stroke="#888888" strokeWidth="1.5" />
            <rect x="15" y="20" width="18" height="18" stroke="#888888" strokeWidth="1.5" />
          </svg>
        )
      },
    ]
  ];

  const totalSlides = amenitiesList.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div id="amenities" className="max-w-7xl mx-auto px-4 py-8">
      {/* Amenities title */}
      <div className="inline-block rounded-full border border-cyan-500 mb-8">
        <div className="text-cyan-500 px-8 py-3 text-lg">Amenities</div>
      </div>
      
      {/* Carousel container with fixed height */}
      <div className="relative bg-gray-50 p-6">
        {/* Prev button */}
        <button 
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-r shadow-md hover:bg-gray-400 transition duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Slides container */}
        <div className="overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {amenitiesList.map((slide, slideIndex) => (
              <div 
                key={slideIndex}
                className="min-w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  {slide.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 text-gray-500 mr-6">
                        {amenity.icon}
                      </div>
                      <div className="border-b border-gray-200 pb-4 w-full">
                        <h3 className="text-base md:text-lg font-medium text-gray-800">{amenity.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next button */}
        <button 
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-l shadow-md hover:bg-gray-400 transition duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Optional: Slide indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {amenitiesList.map((_, index) => (
          <button 
            key={index}
            className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-cyan-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSection;