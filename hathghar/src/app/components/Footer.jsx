import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-[#7B7A5E] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          {/* Left: Logo + Socials */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-serif">@HathGhar</h2>
  
            <div className="flex gap-4 text-xl text-white/70">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
  
          {/* Right: Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {['Topic', 'Topic', 'Topic'].map((title, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-white font-semibold">{title}</h3>
                <a href="#" className="text-white/70 hover:text-white transition">Page</a>
                <a href="#" className="text-white/70 hover:text-white transition">Page</a>
                <a href="#" className="text-white/70 hover:text-white transition">Page</a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  