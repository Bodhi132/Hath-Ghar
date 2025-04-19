"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
      id: 1,
      image: "/homeAssets/andhraFabric.jpg", // Corrected path
      title: "Elegant Fabric",
      description: "Discover premium textile designs.",
    },
    {
      id: 2,
      image: "/homeAssets/goan-bamboo-sofa.jpg", // Corrected path
      title: "Timeless Patterns",
      description: "Elevate your interiors with our collection.",
    },
    {
      id: 3,
      image: "/homeAssets/punjabi-fulkari-designs.jpeg", // Corrected path
      title: "Heritage Craft",
      description: "Artisan-inspired quality and texture.",
    },
    {
      id: 4,
      image: "/homeAssets/sikkim-wood-carvings.jpg", // Corrected path
      title: "Traditional Footwear",
      description: "Step into tradition with modern flair.",
    },
  ];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Slide container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-[60vh] flex-shrink-0 relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Slide content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-white space-y-2 ml-4">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
              <button className="mt-2 px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/60 z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/60 z-10"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
