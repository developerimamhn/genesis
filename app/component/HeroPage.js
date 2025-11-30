'use client';

import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Video from 'next-video';
import myVideo from '../../videos/1_Astronaut.mp4';




const HeroPage = () => {
   const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const textElement = textRef.current;

    // Wrap each letter in a span, ignore spaces and <br>
    textElement.innerHTML = Array.from(textElement.childNodes)
      .map(node => {
        if (node.nodeName === "BR") return "<br/>";
        return node.textContent
          .split("")
          .map(letter =>
            letter === " " ? " " : `<span class="inline-block">${letter}</span>`
          )
          .join("");
      })
      .join("");

    const spans = textElement.querySelectorAll("span");

    // Simple but uncommon animation: pop + rotate + wave
    gsap.fromTo(
      spans,
      { opacity: 0, y: 40, rotation: -10, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.05,
      }
    );

    // Optional continuous wave motion
    gsap.to(spans, {
      y: 4,
      duration: 1,
      ease: "sine.inOut",
      repeat: 0,
      yoyo: true,
      stagger: {
        amount: 1.5,
      },
    });
  }, []);

  const textRefs = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5, // starts after a short delay
      }
    );
  }, []);

    const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: 300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".glass-card",
      { opacity: 0, y: 120, scale: 0.9, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".glass-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
    return (
        <div id="hero" className='flex items-end justify-end h-screen'>
          <svg className='w-full absolute left-0 top-0 object-fit z-2' viewBox="0 0 1920 1111" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1920" height="1111" fill="url(#paint0_radial_1401_3362)"/>
          <defs>
          <radialGradient id="paint0_radial_1401_3362" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(960 488) rotate(90) scale(623 960)">
          <stop stop-opacity="0"/>
          <stop offset="1"/>
          </radialGradient>
          </defs>
          </svg>
          <div className='absolute -z-10 w-full'>
            <Video
              src={myVideo}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-screen h-full object-cover top-0 left-0"
            />
          </div>
          <div className='container mx-auto relative z-10 px-6 sm:px-0'>
            <div className=''>
                <div  className='pt-[70px] sm:pt-[70px] md:pt-[90px] lg:pt-[120px] xl:pt-[130px] 2xl:pt-[8%] relative pb-[36px] sm:pb-[40px] md:pb-[48px] lg:pb-[64px] xl:pb-24 2xl:pb-32'>
                  <div className='flex items-start flex-col justify-start glass-card'>
                    <button className="topethreaincobtn backdrop-blur-xl text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] relative group duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                        <path d="M0.399902 46.4H12.3999V34.9M12.3999 11.9V0.400024C6.87119 0.400024 5.54964 0.400024 0.399902 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                        <path d="M12.3999 46.4H0.399902V34.9M0.399902 11.9V0.400024C5.92861 0.400024 7.25017 0.400024 12.3999 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                      </svg>
                      Top Web3 Incubator</button>
                    <h2 ref={textRef} className="tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] font-bold text-start! mt-10">
                      The Leading Web3 & Crypto <br className="sm:block hidden" /> Project Incubator
                    </h2>
                    <p ref={textRefs} className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-3 md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[30px] text-start! '>We help blockchain startups and crypto projects launch securely with proven incubation, <br className='lg:block hidden'/> tokenomics design, KYC, and long-term growth strategies.</p>
                    <div className='flex items-center justify-start gap-[11px] sm:gap-3 md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                        <button className='buttonauditelt relative  cursor-pointer flex items-center  group gap-[7.50px] group duration-300'>
                           <div className="relative overflow-hidden h-full flex items-center justify-center">
                            <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                            Launch Your Project Today
                            </span>
                            <span className="opacity-0">Launch Your Project Today</span>

                            <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                            Launch Your Project Today
                            </span>
                        </div>
                        </button>
                        <button className="growingstabtn group overflow-hidden backdrop-blur-2xl relative ">
                        <div className="relative overflow-hidden h-full flex items-center justify-center">
                            <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                            Explore SparkStarter
                            </span>
                            <span className="opacity-0">Explore SparkStarter</span>

                            <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                            Explore SparkStarter
                            </span>
                        </div>
                    </button>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;