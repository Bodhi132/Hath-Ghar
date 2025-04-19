"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const videoSlides = [
    { url: "https://www.youtube.com/embed/PqxrJidCQYE?si=sR1Yb1NQ3rrtWmjJ" },
    { url: "https://www.youtube.com/embed/mJwh1S0ovLs?si=hjPjNYxxdknNBxm0" },
    { url: "https://www.youtube.com/embed/AA7KIWLu3ao?si=CwYmA5-to-nK9cbB" },
];

export default function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === videoSlides.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-[#E4D2B9] py-10 text-center font-cormorant w-full">
            <h2 className="text-3xl font-bold mb-6">Hear from our Craftsmen</h2>

            <div className="w-full flex justify-between px-10">
                <button
                    onClick={prevSlide}
                    className="text-white text-4xl block"
                >
                    <FaArrowLeftLong />
                </button>

                {/* Video Slide */}
                <div className="w-[800px] h-[400px]">
                    <iframe
                        src={videoSlides[currentIndex].url}
                        title={`Video ${currentIndex + 1}`}
                        width="100%"
                        height="400"
                        className="w-full rounded-lg shadow-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                <button
                    onClick={nextSlide}
                    className="text-white text-4xl block"
                >
                    <FaArrowRightLong />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {videoSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
