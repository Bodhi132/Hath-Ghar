"use client";
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const offerCards = [
  {
    heading: "Handcrafted Elegance",
    subheading: "Discover the beauty of carved wooden art",
    image: "/homeAssets/phad2.jpg",
    offer: "20% OFF on Woodwork",
  },
  {
    heading: "Festive Combo",
    subheading: "Double the joy with Buy 1 Get 1 Free",
    image: "/homeAssets/coconutshellcraft3.jpg",
    offer: "Buy 1 Get 1 Free",
  },
  {
    heading: "Festive Vibes",
    subheading: "Celebrate with our special collection",
    image: "/homeAssets/chitrakatha.jpg",
    offer: "Flat 30% OFF",
  },
  {
    heading: "New Arrivals",
    subheading: "Freshly crafted wooden decor",
    image: "/homeAssets/goludoll.jpg",
    offer: "10% OFF",
  },
];

export default function OffersSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.offsetWidth;
    const scrollAmount = containerWidth / 3; // one card’s width (3 cards fit)
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative bg-[#E4D2B9] p-6 rounded-xl flex flex-col gap-6">
      {/* Header with arrows */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => scroll('left')} className="text-2xl">
          <FaChevronLeft />
        </button>
        <h2 className="text-2xl font-bold">Offers</h2>
        <button onClick={() => scroll('right')} className="text-2xl">
          <FaChevronRight />
        </button>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth no-scrollbar"
      >
        {offerCards.map((card, idx) => (
          <div
            key={idx}
            className="relative flex-none w-1/3 h-[320px] bg-white rounded-lg overflow-hidden shadow-md group transition-shadow hover:shadow-xl"
          >
            {/* Image + hover-offer */}
            <div className="relative w-full h-[200px] overflow-hidden">
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  {card.offer}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.heading}</h3>
              <p className="text-sm text-gray-600">{card.subheading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
