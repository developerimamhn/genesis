'use client';


import { useEffect, useState } from "react";
import HeroPage from './HeroPage';
import NavBar from './NavBar';
import Link from "next/link";
import Image from "next/image";
import logo from './image/logo.png';



const Header = () => {
     const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrink(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);
    
    return (
        <div className='relative overflow-hidden h-screen customizecollro'>
           <div
              className={`absolute left-0 top-0 h-screen bg-[#1b1b1b] backdrop-blur-3xl transition-all duration-1000 z-999 ${
                shrink ? "w-0" : "w-screen"
              }`}
            ><Link onClick={(e) => handleScrollToTop(e, "/")} href='/' className='cursor-pointer flex items-center justify-start Froggo-Logo'>
                <Image className='w-full h-[22px] sm:h-[28px] 2xl:h-[34px]' src={logo} alt=''/></Link></div>
            <div className="backgroiunposidhaef"></div>
            <NavBar/>
            <HeroPage/>
            
        </div>
    );
};

export default Header;