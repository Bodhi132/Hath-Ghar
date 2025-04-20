"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ImageCarousel from "../components/sellersidecomponent/procedureimgcorousel";



export default function page() {
  const texts = [
    "Click here",
    "यहाँ क्लिक करें",
    "এখানে ক্লিক করুন",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#5c5b3d] py-30 text-white p-8 shadow-lg space-y-8 md:space-y-0 md:space-x-10">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-2xl text-black md:text-3xl font-bold mb-4 py-6">
          Sell in our website/<br />
          हमारे प्लेटफ़ॉर्म पर बेचें /<br />
          আমাদের ওয়েবসাইটে বিক্রি করুন
        </h2>
        <p className="italic text-black text-sm md:text-base mb-4 py-6 space-y-8 md:space-y-4"> 
          Talk to us / बात करें / আমাদের সঙ্গে কথা বলুন
        </p>
        <button className="bg-black text-#FFF0F0 text-sm md:text-base px-5 py-3 rounded hover:bg-gray-800 cursor-pointer">
        {texts[currentTextIndex]}
        </button>
      </div>

      <div className="mt-8 md:mt-0 md:ml-8">
        <Image
          src="/homeassets/techsupport.png"
          alt="Support agent illustration"
          width={300}
          height={300}
          className="rounded"
        />
      </div>
    </div>
    <ImageCarousel />
    </>

  );
}


