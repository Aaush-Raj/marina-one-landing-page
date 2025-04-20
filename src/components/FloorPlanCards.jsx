import React from 'react';
import { useModal } from '../context/ModalContext';

const FloorPlanCards = () => {

  const {openModal} = useModal();
  const handleEnquiry = (planType) => {
    console.log(`Enquiry for ${planType}`);



  };

  const cards = [
    {
      id: 1,
      title: 'Master Plan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOitRONQBVWeiNhA6NwD6Fp1G4ZTs5aczHpg&s', // Replace with your actual image path
      type: 'Master Plan',
      footer: '2 BHK',
    },
    {
      id: 2,
      title: 'Floor Plan',
      image: 'https://imagecdn.99acres.com/media1/28717/2/574342585M-1741006328858.webp', // Replace with your actual image path
      type: '3 BHK',
      footer: '3 BHK'
    },
    {
      id: 3,
      title: 'Floor Plan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKDtRr-91zMS72bRdrV7gqi9GqBT3fIf3qQ&s', // Replace with your actual image path
      type: '4 BHK',
      footer: '4 BHK'
    }
  ];

  return (
    <div id="site-plan" className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10">
      <div className="inline-block rounded-full  border-2 border-cyan-600 font-semibold mb-8">
        <div className="text-cyan-600  sm:text-base  px-8 py-3 ">Site & Floor Plan</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative">
            {/* Card title for the first card */}
            {card.id === 1 && (
              <h2 className="text-2xl font-bold mb-4">Master Plan</h2>
            )}
            
            {/* Card title for the second card and it should only show once */}
            {card.id === 2 && (
              <h2 className="text-2xl font-bold mb-4">Floor Plan</h2>
            )}
            {card.id === 3 && (
              <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
            )}
            
            {/* Image container with overlay */}
            <div className="relative h-80 overflow-hidden">
              {/* Image */}
              <div className="w-full h-full bg-gray-300">
                <img 
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              
              {/* Enquire button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="border-2 cursor-pointer border-white text-white px-8 py-3 bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-70"
                  onClick={openModal}
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
            
            {/* Footer for BHK info */}
            {card.footer && (
              <div className="w-full bg-cyan-500 text-white text-center py-4 text-2xl font-medium">
                {card.footer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Request more plans button */}
      <div className="flex justify-center mt-6">
        <button 
          className="text-cyan-500 border border-cyan-500 rounded-md px-8 py-3 transition-all duration-300 ease-in-out hover:scale-105"
          onClick={openModal}
        >
          Request For More Floor Plans
        </button>
      </div>
    </div>
  );
};

export default FloorPlanCards;