'use client';

import { useEffect, useState } from "react";
import HeroPage from './HeroPage';
import NavBar from './NavBar';
// import Video from 'next-video';

// Correct Path: Must be inside /videos folder
// import myVideo from '../../videos/0_Astronaut.mp4';

const Header = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrink(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden customizecollro">
      <div
        className={`absolute inset-0 bg-[#1b1b10] backdrop-blur-3xl transition-all duration-1000 
          ${shrink ? "w-0" : "w-full"} h-full z-999`}
      ></div>
      <div className="relative z-30">
        <NavBar />
        <HeroPage />
      </div>
      
    </div>
  );
};

export default Header;
