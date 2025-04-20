import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GalleryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images array - populate with placeholder images for demonstration
  // Gallery images array
const originalGalleryImages = [
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    ];
  // Create an infinite array by repeating the original images
  const galleryImages = [...originalGalleryImages, ...originalGalleryImages, ...originalGalleryImages];
  
  // Function to handle next slide with infinite scrolling
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextPos = prev + 1;
      // If we're approaching the end, jump back to keep it infinite
      if (nextPos >= galleryImages.length - originalGalleryImages.length) {
        return originalGalleryImages.length;
      }
      return nextPos;
    });
  };

  // Function to handle previous slide with infinite scrolling
  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevPos = prev - 1;
      // If we're approaching the beginning, jump forward to keep it infinite
      if (prevPos < 0) {
        return galleryImages.length - originalGalleryImages.length - 1;
      }
      return prevPos;
    });
  };

  // Function to open image in popup
  const openImagePopup = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
  };

  // Function to close popup
  const closeImagePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="gallery" className="max-w-7xl mx-auto px-4 py-8">
      {/* Gallery title */}
      <div className="inline-block rounded-full border border-cyan-500 mb-8">
        <div className="text-cyan-500 px-8 py-3 text-lg">Gallery</div>
      </div>

      {/* Gallery carousel */}
      <div className="relative">
        {/* Navigation buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-r shadow hover:bg-opacity-100 transition duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-l shadow hover:bg-opacity-100 transition duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Images container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 20}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="min-w-1/5 w-1/5  px-2 cursor-pointer "
                whileHover={{ scale: 1.03  }}
                onClick={() => openImagePopup(index)}
              >
                <div
                  className="sm:h-44 h-32   bg-gray-200 rounded overflow-hidden"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image popup with AnimatePresence for animations */}
      <AnimatePresence>
  {selectedImage !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-9999 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} // Direct style for consistent opacity
      onClick={closeImagePopup}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-12 right-0 text-white bg-black bg-opacity-90 p-2 rounded-full hover:bg-opacity-70 transition duration-300"
          onClick={closeImagePopup}
          aria-label="Close popup"
        >
          <X size={24} />
        </motion.button>

        <motion.div 
          className="bg-white rounded shadow-lg overflow-hidden"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          exit={{ y: 20 }}
        >
          <img
            src={galleryImages[selectedImage]}
            alt={`Gallery image ${selectedImage + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default GalleryCarousel;