'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import image2 from './image/image fill.png';
import image3 from './image/image.png';
import image4 from './image/image120.png';
import numbeingss from './image/image124.png';
import image5 from './image/image1254.png';

gsap.registerPlugin(ScrollTrigger);


const Pagesix = () => {
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


    
    return (
        <div id='About' ref={wrapperRef} className='py-[24px] sm:py-[32px] md:py-[36px] lg:py-[40px] xl:py-[48px] 2xl:py-[64px] px-6 sm:px-0 relative'>
           <div className='container mx-auto'>
              <div><h2 className='ourpratens text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Powered by the leading LLM providers</h2></div>
              <div className='grid grid-cols-2 md:grid-cols-5 justify-center items-center gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] px-[24px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[192px] '>
                <Image className='w-full h-full' src={image2} alt='Loading...'/>
                <Image className='w-full h-full' src={image3} alt='Loading...'/>
                <Image className='w-full h-full' src={image4} alt='Loading...'/>
                <Image className='w-full h-full' src={numbeingss} alt='Loading...'/>
                <Image className='w-full h-full' src={image5} alt='Loading...'/>
              </div>
           </div>
        </div>
    );
};

export default Pagesix;