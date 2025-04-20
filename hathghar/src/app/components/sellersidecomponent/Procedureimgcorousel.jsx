"use client";
import { useState } from 'react'
import Image from 'next/image'

const images = [
  "/homeAssets/procedureeng.jpg",
  "/homeAssets/procedurehindi.jpg",
  "/homeAssets/procedurebeng.jpg",
]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1)
  const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1)

  return (
    <div className="bg-[#c5ad89] min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-2xl md:text-3xl italic font-medium text-black mb-20 text-center p-6 py-5">
        Procedure / प्रक्रिया / প্রক্রিয়া
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-md">
        <Image
          src={images[current]}
          alt={`Slide ${current + 1}`}
          width={800}
          height={500}
          className="w-full h-auto object-cover"
        />

        {/* Navigation arrows */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-bold text-black bg-white/50 rounded-full p-1">
          ←
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl font-bold text-black bg-white/50 rounded-full p-1">
          →
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${current === i ? 'bg-black' : 'bg-white border border-black'}`}
          />
        ))}
      </div>
    </div>
  )
}
