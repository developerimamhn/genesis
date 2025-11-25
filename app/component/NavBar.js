"use client";


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import { default as chimage, default as usimage } from './image/us.png';


const navLinks = [
  { name: "Home", id: "Home" },
  { name: "About", id: "About" },
  { name: "Services", id: "Services" },
  { name: "Tokenomics", id: "Tokenomics" },
  { name: "Contact", id: "Contact" },
];

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (currentScrollPos < 50) {
                setIsVisible(true);
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      const options = [
    { image: usimage, label: 'English' },
    { image: chimage, label: 'Chinese' },
  ];

  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };


    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full header backgronsdvg  ${
            isVisible ? "translate-y-0 transition-transform duration-300  " : "-translate-y-full transition-transform duration-300"
        }`}>
            
            <header className='px-[24px] md:px-[30px] lg:px-[30px] xl:px-[40px] 2xl:px-[50px]   flex justify-between items-center py-[14px] sm:py-[16px] lg:py-[20px] relative  '>
            <div className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></div>
            <Link onClick={(e) => handleScrollToTop(e, "/")} href='/' className='cursor-pointer flex items-center justify-start Froggo-Logo'>
                <Image className='w-full h-[22px] sm:h-[28px] 2xl:h-[34px]' src={logo} alt=''/></Link>
                <div className='sm:hidden relative top-[-11px] -left-6'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                 

                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[998] sm:opacity-100 flex justif-start sm:justify-start items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[40px] sm:bg-transparent bg-[#15161B] sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full h-screen sm:h-full pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px]
                    ${toggle ? 'left-[0]' :'left-[120%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                        {navLinks.map((link) => (
                            <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScroll(e, link.id)}
                            className="group relative cursor-pointer Link-manu-bar flex flex-col items-center justify-center overflow-hidden transition-all duration-300"
                            >
                            <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                                {link.name}
                            </span>
                            <span className="opacity-0">{link.name}</span>
                            <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-white">
                                {link.name}
                            </span>
                            </a>
                        ))}
                    <ul className='sm:hidden flex flex-col ml-atuo gap-4'>
                        <div className="select-wrapper relative inline-block">
                    {/* Main button */}
                    <div
                        className="selectboxseZ text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] gap-[5px] lg:gap-[8px]"
                        onClick={toggleDropdown}
                    >
                        <Image
                        src={selected.image}
                        alt={selected.label}
                        width={10}
                        height={10}
                        className="rounded-full object-cover"
                        />
                        <span className="text-sm font-medium">{selected.label}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2802 5.96667L8.93355 10.3133C8.42021 10.8267 7.58022 10.8267 7.06688 10.3133L2.72021 5.96667" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div className="options absolute top-full mt-1 left-0 w-32 bg-[#ffffff0a] rounded border border-[#ffffff1f] z-50">
                        {options.map((option, idx) => (
                            <div
                            key={idx}
                            className="p-2 cursor-pointer flex items-center gap-2"
                            onClick={() => handleSelect(option)}
                            >
                            <Image
                                src={option.image}
                                alt={option.label}
                                width={16}
                                height={16}
                                className="rounded-full"
                            />
                            <span className="selectboxseZ !border-none !bg-none">{option.label}</span>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                    </ul>
                </nav>
                
                <ul className='sm:flex hidden gap-4'>
                    <button className="growingstabtn group overflow-hidden  relative">
                        <div className="relative overflow-hidden h-full flex items-center justify-center">
                            <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                            Get Started
                            </span>
                            <span className="opacity-0">Get Started</span>

                            <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                            Get Started
                            </span>
                        </div>
                    </button>

                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;