'use client';
import { useEffect, useRef, useState } from 'react';

const reels = [
  'https://www.instagram.com/reel/DGp1kyOi_kP/',
  'https://www.instagram.com/reel/DCeNKiZyego/',
  'https://www.instagram.com/reel/DITRwaFt9Y7/',
  'https://www.instagram.com/reel/DGp1kyOi_kP/',
  'https://www.instagram.com/reel/DCeNKiZyego/',
  'https://www.instagram.com/reel/DITRwaFt9Y7/',
];

const REELS_PER_PAGE = 3;

export default function InstaReelCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);

  const totalPages = Math.ceil(reels.length / REELS_PER_PAGE);

  const prev = () => {
    setStartIndex((prev) =>
      prev === 0 ? reels.length - REELS_PER_PAGE : Math.max(prev - REELS_PER_PAGE, 0)
    );
  };

  const next = () => {
    setStartIndex((prev) => (prev + REELS_PER_PAGE) % reels.length);
  };

  const goToPage = (page) => {
    setStartIndex(page * REELS_PER_PAGE);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';

      const selectedReels = reels.slice(startIndex, startIndex + REELS_PER_PAGE);
      selectedReels.forEach((reel, idx) => {
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'instagram-media';
        blockquote.setAttribute('data-instgrm-permalink', reel);
        blockquote.setAttribute('data-instgrm-version', '14');
        blockquote.style.width = '100%';
        blockquote.style.borderRadius = '12px';
        blockquote.style.transition = 'transform 0.3s ease';
        if (idx === 1) {
          blockquote.style.transform = 'scale(1.05)';
          blockquote.style.border = '2px solid #6A4E29';
        }

        containerRef.current.appendChild(blockquote);
      });

      const script = document.createElement('script');
      script.setAttribute('src', 'https://www.instagram.com/embed.js');
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [startIndex]);

  return (
    <div className="py-12 px-4 text-center relative">
      <h2 className="text-3xl font-bold mb-8 text-[#6A4E29] font-serif">Join the Tribe</h2>

      <div className="relative overflow-hidden">
        <button
          onClick={prev}
          className="text-3xl absolute left-0 ml-4 z-30 top-1/2 -translate-y-1/2 text-[#6A4E29]"
        >
          ←
        </button>

        <div
          ref={containerRef}
          className="flex justify-center gap-7 z-20 w-full p-[10rem] transition-all duration-300"
        >
          {/* Instagram embeds injected here */}
        </div>

        <button
          onClick={next}
          className="text-3xl absolute right-0 mr-4 z-30 top-1/2 -translate-y-1/2 text-[#6A4E29]"
        >
          →
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === Math.floor(startIndex / REELS_PER_PAGE)
                ? 'bg-[#6A4E29]'
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      <footer className='flex flex-col items-center justify-center mt-5 gap-4'>
        <h1 className=' text-5xl '>Come join us in being vocals for locals</h1>
        <div>
          <button className={`bg-gray-400 py-2 px-6 rounded-md text-x`}>Join</button>
        </div>
      </footer>
    </div>
  );
}
