import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import OverviewSection from "./OverviewSection";
import PriceSection from "./PriceSection";
import FloorPlanCards from "./FloorPlanCards";
import AmenitiesSection from "./AmenitiesSection";
import GalleryCarousel from "./GalleryCarousel";
import LocationSection from "./LocationSection";
import NearbySection from "./NearbySection";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="">
      <HeroSection />
      <OverviewSection/>
      <PriceSection/>
      <FloorPlanCards/>
      <AmenitiesSection/>
      <GalleryCarousel/>
      <LocationSection/>
      <NearbySection/>
      <Footer/>
    </div>
  );
};

export default Body;
