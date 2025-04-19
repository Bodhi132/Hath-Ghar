import Header from "./components/Header";
import HeroCarousel from './components/HeroCarousel'
import OffersSection from './components/offers'
import Image from "next/image";
import indiaMap from '../../public/homeAssets/India-map-en.png'
import VideoCarousel from "./components/VideoCarousel";
import TestimonialSection from "./components/TestimonialSection";
import InstaReelCarousel from "./components/InstaReelCarousel";
import Footer from "./components/Footer";

import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] });


export default function Home() {
  return (
    <div className="bg-[#E4D2B9] flex flex-col gap-7">
      <Header />
      <HeroCarousel />
      <OffersSection />
      <div className={`flex justify-center items-center flex-col gap-5 ${cormorant.className}`}>
        <h1 className="text-[4rem] font-bold text-center mt-10">Crafted by Roots , Carried by hearts</h1>
        <Image src={indiaMap} alt='india' width={600} height={600} />
      </div>
      <VideoCarousel />
      <TestimonialSection />
      <div className={cormorant.className}>
        <InstaReelCarousel />
      </div>
      <Footer />
    </div>
  );
}
