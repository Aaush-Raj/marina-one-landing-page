import React from 'react';

const LocationSection = () => {
  return (
    <div id="location" className="max-w-6xl mx-auto px-4 py-10">
      {/* Location badge */}
      <div className="mb-6">
        <button className="border-2 border-cyan-600 text-cyan-600 px-5 py-1.5 rounded-full font-medium text-sm">
          Location
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-center text-xl font-medium mb-6">Location Map</h2>

      {/* Embedded Google Maps Place View */}
      <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md mb-6">
        <iframe
          title="Google Maps Marina One"
          src="https://www.google.com/maps/embed?pb=!4v1713567360284!6m8!1m7!1sCAoSLEFGMVFpcE1yMW9hd1MyT3dzcE5OUllmOWg3TExRSFViOW9GckdhR1U5TG5G!2m2!1d9.9679585!2d76.2824768!3f0!4f0!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <a
          href="https://www.google.com/maps/place/Marina+One,+Kochi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white border border-cyan-600 text-cyan-600 px-6 py-2 rounded-full font-medium shadow-sm hover:bg-cyan-50 transition">
            Know More About Location
          </button>
        </a>
      </div>
    </div>
  );
};

export default LocationSection;
