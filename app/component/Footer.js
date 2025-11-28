"use client";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import logo from './image/logo.png';
gsap.registerPlugin(ScrollTrigger);
import imageoneback from './image/0_Abstract_Art_Metallic_3840x2160 1.png';
import cardlogoone from './image/Frame 2085662521.png';
import cardlogotwo from './image/Frame 20856625sss21.png';
import cardlogothree from './image/Frame 2085aaa662521.png';
import cardlogofore from './image/Frame 208566sss2521.png';
import Video from 'next-video';
import myVideo4 from '../../videos/4_Astronaut.mp4';


const cardData = [
  {
    img: cardlogoone,
    title: "SparkStarter Platform",
    subtitle: "Our exclusive launchpad",
    btnText: "Visit Launchpad"
  },
  {
    img: cardlogotwo,
    title: "X (Twitter)",
    subtitle: "Follow for updates",
    btnText: "Follow"
  },
  {
    img: cardlogothree,
    title: "Telegram",
    subtitle: "Join our community",
    btnText: "Join Community"
  },
  {
    img: cardlogofore,
    title: "Documentation",
    subtitle: "Technical docs & guides",
    btnText: "View Docs"
  }
];



const Footer = () => {
  useEffect(() => {
        const texts = gsap.utils.toArray(".text");
    
        texts.forEach((text) => {
          gsap.fromTo(
            text,
            { opacity: 0, y: -300 },
            {
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: text,
                start: "top 95%", // when the top of the card hits 80% of viewport
                toggleActions: "play none none none", // play only once
              },
            }
          );
        });
      }, []);
      const cardsRef = useRef([]);
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  cardsRef.current.forEach((card, i) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, []);

    return (
        <div id='Community' className='relative -mt-[1] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[84px] overflow-hidden'>
          <div className=' container mx-auto sm:px-0 px-6 text z-5'>
            <div className="max-w-[758px] mx-auto relative z-5">
              <button className="topethreaincobtn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] relative group duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                  <path d="M0.399902 46.4H12.3999V34.9M12.3999 11.9V0.400024C6.87119 0.400024 5.54964 0.400024 0.399902 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                  <path d="M12.3999 46.4H0.399902V34.9M0.399902 11.9V0.400024C5.92861 0.400024 7.25017 0.400024 12.3999 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                </svg>
                Community
              </button>
              <h2 className="tradines  text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold  mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[16px] 2xl:mt-[20px]">
                Stay <span className="text-white/70!">Connected</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] mt-[24px] sm:mt-[32px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[64px]">
                {cardData.map((item, index) => (
                  <div
                    key={index}
                     ref={(el) => (cardsRef.current[index] = el)}
                    className="cardonegradiens p-[13px] sm:p-[14px] md:p-[15px] lg:p-[16px] xl:p-[20px] 2xl:p-[24px] backdrop-blur-2xl"
                  >
                    <div className="flex items-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]">
                      <Image
                        className="w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[60px]"
                        src={item.img}
                        alt="loading..."
                      />
                      <div>
                        <h2 className="sparklafrom text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]">
                          {item.title}
                        </h2>
                        <p className="ourexlauc text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[12px] mt-[4px]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <button className="vinexwirtes text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] w-full py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[40px] cursor-pointer">
                      {item.btnText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:px-[274px] relative z-5">
              <h2 className="tradines  text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold  mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[16px] 2xl:mt-[20px] text-center">
                Ready to Buy  <span className="text-white/70!">$GXN?</span>
              </h2>
              <p className='bitstartpsss text-white/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] mb-[14px] sm:mb-[15px] md:mb-[16px] lg:mb-[20px] xl:mb-[24px] 2xl:mb-[32px] text-center'>Join our tokenomics ecosystem and be part of the Web3 <br className='sm:block hidden'/> incubation revolution.</p>
              <div className='flex items-center justify-center'>
                <button className='buttonauditelt relative  cursor-pointer flex items-center  group gap-[7.50px] group duration-300'>
                  <div className="relative overflow-hidden h-full flex items-center justify-center">
                    <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                    Buy $GXN Now
                    </span>
                    <span className="opacity-0">Buy $GXN Now</span>

                    <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    Buy $GXN Now
                    </span>
                  </div>
                </button>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 items-center sm:items-start justify-center sm:justify-between mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[84px] '>
                <div className='flex sm:block items-center jsutify-center sm:flex-row flex-col'>
                  <Image className='w-fit h-[22px] sm:h-[28px] 2xl:h-[34px]' src={logo} alt='Logo...'/>
                  <p className='bitstartpsss text-white/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] mb-[24px] sm:mb-[32px] md:mb-[36px] lg:mb-[40px] xl:mb-[48px] 2xl:mb-[64px]'>Your all in one incubation solution</p>
                </div>
                <div className='grid grid-cols-3 items-center jsutify-between w-full listeateitems text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] gap-[20px]'>
                  <ul className="flex flex-col gap-[8px] ">
                    <a>Home</a>
                    <a>About Us</a>
                    <a>Services</a>
                  </ul>
                  <ul className="flex flex-col gap-[8px] ">
                    <a>Incubations</a>
                    <a>Tokenomics</a>
                    <a>Contact</a>
                  </ul>
                  <ul className="flex flex-col gap-[8px] ">
                    <a>Teams of</a>
                    <a>Services</a>
                    <a>Privecy Policy</a>
                  </ul>
                </div>
              </div>
              <div className='flex items-center justify-between gap-3.5 pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] sm:flex-row flex-col'>
                <div>
                  <h3 className='copyright text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>© 2025 genesis. All rights reserved.</h3>
                </div>
                <div className='flex gap-[14px] '>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[32px]" viewBox="0 0 32 32" fill="none">
                    <path d="M17.6026 17.4492H19.8883L20.8026 13.6092H17.6026V11.6892C17.6026 10.7004 17.6026 9.76918 19.4312 9.76918H20.8026V6.54358C20.5046 6.5023 19.3791 6.40918 18.1905 6.40918C15.7082 6.40918 13.9455 7.9999 13.9455 10.9212V13.6092H11.2026V17.4492H13.9455V25.6092H17.6026V17.4492Z" fill="#F0F0F2"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[32px]" viewBox="0 0 32 32" fill="none">
                    <path d="M20.6 8H23.0537L17.6937 14.0991L24 22.4H19.0629L15.1931 17.3666L10.7703 22.4H8.31429L14.0469 15.8741L8 8.00113H13.0629L16.5554 12.601L20.6 8ZM19.7371 20.9382H21.0971L12.32 9.38575H10.8617L19.7371 20.9382Z" fill="#F0F0F2"/>
                  </svg>
                  <svg className="w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[32px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1704 8.58398C16.8608 8.58398 17.4204 8.02434 17.4204 7.33398C17.4204 6.64363 16.8608 6.08398 16.1704 6.08398C15.4801 6.08398 14.9204 6.64363 14.9204 7.33398C14.9204 8.02434 15.4801 8.58398 16.1704 8.58398Z" fill="#F0F0F2"/>
                  <path d="M15.3319 3.99805C17.6319 3.99805 19.4985 5.86471 19.4985 8.16471V14.8314C19.4985 17.1314 17.6319 18.998 15.3319 18.998H8.6652C6.3652 18.998 4.49854 17.1314 4.49854 14.8314V8.16471C4.49854 5.86471 6.3652 3.99805 8.6652 3.99805H11.9985H15.3319Z" stroke="#F0F0F2" stroke-width="1.30435" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9959 8.16602C13.8376 8.16602 15.3293 9.65768 15.3293 11.4993C15.3293 13.341 13.8376 14.8327 11.9959 14.8327C10.1543 14.8327 8.6626 13.341 8.6626 11.4993C8.6626 9.65768 10.1543 8.16602 11.9959 8.16602Z" stroke="#F0F0F2" stroke-width="1.30435" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[24px]" viewBox="0 0 16 16" fill="none">
                    <path d="M7.99287 10.2722L10.1538 12.7291C10.9544 13.6393 11.3547 14.0944 11.7737 13.9836C12.1927 13.8728 12.3365 13.2739 12.6238 12.0759L14.2179 5.4306C14.6605 3.58555 14.8817 2.66303 14.3898 2.208C13.8979 1.75298 13.0453 2.0915 11.34 2.76855L3.42845 5.90966C2.06456 6.45116 1.38261 6.72193 1.33932 7.1872C1.33489 7.2348 1.33481 7.28273 1.3391 7.33033C1.38097 7.7958 2.06208 8.06887 3.42431 8.61487C4.04153 8.86227 4.35014 8.986 4.57141 9.22293C4.59629 9.24953 4.62021 9.27713 4.64313 9.3056C4.84699 9.55893 4.934 9.8914 5.10799 10.5563L5.43363 11.8007C5.60294 12.4477 5.6876 12.7712 5.90933 12.8153C6.13105 12.8594 6.32411 12.5911 6.71021 12.0546L7.99287 10.2722ZM7.99287 10.2722L7.781 10.0514C7.53987 9.80006 7.41934 9.67447 7.41934 9.51833C7.41934 9.3622 7.53987 9.23653 7.781 8.9852L10.163 6.50273" stroke="#F0F0F2" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <svg className='w-full absolute left-0 top-0 object-fit -z-1' viewBox="0 0 1726 390" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1726" height="390" fill="url(#paint0_linear_477_19)"/>
          <defs>
          <linearGradient id="paint0_linear_477_19" x1="863" y1="0" x2="863" y2="467.5" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="0.759615" stop-opacity="0"/>
          </linearGradient>
          </defs>
          </svg>
          <svg className='w-full absolute left-0 -bottom-px object-fit -z-1 rotate-180' viewBox="0 0 1726 390" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1726" height="390" fill="url(#paint0_linear_477_19)"/>
          <defs>
          <linearGradient id="paint0_linear_477_19" x1="863" y1="0" x2="863" y2="467.5" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="0.759615" stop-opacity="0"/>
          </linearGradient>
          </defs>
          </svg>
          <div className="mix-blend-luminosity bg-[linear-gradient(90deg,rgba(10,10,10,0)_22.74%,#0A0A0A_80.78%)] absolute top-0 left-0 w-full h-full -z-9"></div>
           <div className='absolute top-0 right-0 -z-10 w-screen h-full scale-x-[-1] grayscale-100'>
              <Video
                src={myVideo4}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="w-full h-full object-cover "
              />
            </div>
        </div>
    );
};

export default Footer;