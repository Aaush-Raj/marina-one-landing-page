import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from "../../assets/carousel1.jpg"
import carousel2 from "../../assets/carousel2.jpg"
import carousel3 from "../../assets/carousel3.jpg"
import carousel4 from "../../assets/carousel4.jpg"
const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const HeroCarousel = () => {
  return (
    <div className="relative w-full h-full">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows
        renderDotsOutside={false}
        containerClass="w-full h-full"
        itemClass="w-full h-full"
        dotListClass=""
        arrowsistClass="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        customTransition="all .5s ease"
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-80 sm:h-screen">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
