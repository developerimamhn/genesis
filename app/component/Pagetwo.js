'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Video from 'next-video';
import myVideo4 from '../../videos/5_Astronaut.mp4';
import { h2Animation } from './animations/h2Animation.js';

gsap.registerPlugin(ScrollTrigger);


const Pagetwo = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
  
        // Skip all animations on mobile
        if (isMobile) return;
  
        // Main wrapper animation (desktop only)
        gsap.fromTo(
          wrapperRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Title animation (desktop only)
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Grid items animation (desktop only)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });
  
        // Acquire CRX section animation (desktop only)
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);
  
  const itemRefs = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;
  
        // Skip animations on mobile
        if (isMobile) return;
  
        // Item animations (desktop only)
        itemRefs.current.forEach((el, index) => {
          if (!el) return;
  
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: 50,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 100%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);

 const listRef = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;

        if (isMobile) return; // Skip mobile animation

        // Animate each <li> one by one
        gsap.fromTo(
          listRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15, // one by one effect
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current[0], // start animation when first li comes
              start: 'top 85%',
              end: 'bottom 50%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    );

    return () => mm.revert();
  }, []);
  
const itemsRef = useRef([]);

  const data = [
    {
      title: "Transaction Tax Allocation",
      text: "Of the 5% tax, 20% (equivalent to 1%) is deposited directly into a staking pool for revenue sharing."
    },
    {
      title: "Additional Revenue Pooling",
      text: "An additional 40% of all revenue generated from our incubations is funneled into the same staking pool, amplifying the rewards available."
    },
    {
      title: "Inclusive Staking",
      text: "There’s no minimum staking threshold—any $GXN holder, regardless of amount, can participate. A minimum lock period of 30 days applies, with ETH rewards distributed from day one of staking. The more you stake and the longer you lock, the greater your earnings."
    },
    {
      title: "Regular Deposits",
      text: "Every 7 days, fresh funds are added to the staking pool, ensuring consistent growth and opportunities for rewards."
    }
  ];
    useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);
    useEffect(() => {
    h2Animation();
  }, []);
    return (
        <div id='About' ref={wrapperRef} className='py-[40px] sm:py-[40px] md:py-[48px] lg:py-[64px] xl:py-[96px] 2xl:py-[120px] px-6 sm:px-0 relative overflow-hidden'>
           <div className='container mx-auto xl:px-[270px]'>
              <div  className='vadesigns p-[24px] sm:p-[32px] md:p-[36px] lg:p-[40px] xl:p-[48px] 2xl:p-[64px]'>
                <button className="topethreaincobtn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] relative group duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                    <path d="M0.399902 46.4H12.3999V34.9M12.3999 11.9V0.400024C6.87119 0.400024 5.54964 0.400024 0.399902 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                    <path d="M12.3999 46.4H0.399902V34.9M0.399902 11.9V0.400024C5.92861 0.400024 7.25017 0.400024 12.3999 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                  </svg>
                  Revenue
                </button>
                <h2 className="tradines animate-h2 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold  mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[16px] 2xl:mt-[20px]">
                  How Our Revenue  <span className="text-white/70!">Model Works</span>
                </h2>
                <p className='bitstartpsss animate-h2 text-white/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>With the Genesis $GXN token, every project incubated generates community-driven rewards. Through staking and revenue-sharing pools, users benefit from continuous returns.</p>
                <div className='vibesstyle relative p-[16px] sm:p-[20px] md:p-[24px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px] mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[40px] overflow-hidden'>
                  <div class="absolute inset-0 -z-9 mix-blend-luminosity bg-[linear-gradient(280deg,rgba(10,10,10,0)_22.74%,#0A0A0A_80.78%)]"></div>
                  <div className='absolute top-0 right-0 -z-10 w-auto h-full scale-x-[-1] grayscale-100'>
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
                  <div className="space-y-6 sm:pr-[30%]">
                  <ul className="relative z-10 flex flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]">
                    {data.map((item, i) => (
                      <li
                        key={i}
                        ref={(el) => (itemsRef.current[i] = el)}
                        className=""
                      >
                        <h2 className="tradines text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
                          {item.title}
                        </h2>

                        <p className="bitstartpsss text-white/80 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[5px] md:pt-[8px]">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
                <div className='flex items-center justify-center mt-[24px] sm:mt-[32px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[64px]'>
                <button className='buttonauditelt relative  cursor-pointer flex items-center  group gap-[7.50px] group duration-300'>
                  <div className="relative overflow-hidden h-full flex items-center justify-center">
                    <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                    Stake $GXN →
                    </span>
                    <span className="opacity-0">Stake $GXN →</span>

                    <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    Stake $GXN →
                    </span>
                  </div>
                </button>
              </div>
              </div>
           </div>
        </div>
    );
};

export default Pagetwo;