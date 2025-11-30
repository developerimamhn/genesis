'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination, HashNavigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import frameone from './image/Frame 2147225480.png';
import frametwo from './image/Frame 2147225478.png';
import framethree from './image/Frame 2147225479.png';
import { h2Animation } from './animations/h2Animation.js';

gsap.registerPlugin(ScrollTrigger);


import Image from 'next/image';

const Pagethree = () => {
  const swiperRef = useRef(null);
    useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 200, x: -200 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%", // when the top of the card hits 80% of viewport
            toggleActions: "play none none none", // play only once
          },
        }
      );
    });
  }, []);
    useEffect(() => {
      h2Animation();
    }, []);
  return (
    <div id="Blog" className="relative py-8 sm:py-9 md:py-10 lg:py-12 xl:py-16 2xl:py-[100px]">
      
      <div id='pin-windmill' className="card relative container flex-col mx-auto flex jusitfy-start items-start px-6 lg:px-[150px] xl:px-[270px]">
        <button className="topethreaincobtn relative group duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
          <path d="M0.399902 46.4H12.3999V34.9M12.3999 11.9V0.400024C6.87119 0.400024 5.54964 0.400024 0.399902 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
          <path d="M12.3999 46.4H0.399902V34.9M0.399902 11.9V0.400024C5.92861 0.400024 7.25017 0.400024 12.3999 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
        </svg>
        Team
      </button>
      <h2 className="tradines animate-h2 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold  mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[16px] 2xl:mt-[20px]">
        Meet the <span className="text-white/70!">Builders</span>
      </h2>
      <p className='bitstartpsss animate-h2 text-white/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] mb-[24px] sm:mb-[32px] md:mb-[36px] lg:mb-[40px] xl:mb-[48px] 2xl:mb-[64px]'>A diverse team of blockchain veterans, advisors, and community leaders.</p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          effect={'flip'}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[HashNavigation, Pagination, Navigation,Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper w-full relative"
          breakpoints={{
                        0: {            // mobile
                          slidesPerView: 1,
                          spaceBetween: 8,
                        },
                        640: {          // sm
                          slidesPerView: 1.3,
                          spaceBetween: 10,
                        },
                        768: {          // md
                          slidesPerView: 2,
                          spaceBetween: 12,
                        },
                        1024: {         // lg
                          slidesPerView: 2.5,
                          spaceBetween: 15,
                        },
                        1280: {         // xl
                          slidesPerView: 3,
                          spaceBetween: 17,
                        },
                      }}
        >
          <SwiperSlide >
            <div>
              <Image src={frameone} alt="Loading.."/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <Image src={frametwo} alt="Loading.."/>
            </div>
          </SwiperSlide>

          <SwiperSlide className='mt-auto'>
            <div className=''>
              <Image src={framethree} alt="Loading.."/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <Image src={frameone} alt="Loading.."/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <Image src={frametwo} alt="Loading.."/>
            </div>
          </SwiperSlide>

          <SwiperSlide className='mt-auto'>
            <div>
              <Image src={framethree} alt="Loading.."/>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='flex justify-center mx-auto itmes-center gap-[10px] lg:gap-[16px] mt-[24px] sm:mt-[32px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[64px]'  id="pin-windmill-svg">
          <button  className=" custom-next cursor-pointer transition hover:scale-110 hover:opacity-80 duration-300 col-span-2 relative mr-auto 2xl:w-1/2 h-fit rounded-full lg:col-start-3">
            <div class="absolute inset-0 block animate-gradient bg-linear-to-tr from-[#ffffff63] via-[#fff0] to-[#ffffff63] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
            <svg
              className='rounded-full w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[96px]'
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="120"
                height="120"
                rx="60"
                transform="matrix(-1 0 0 1 120 0)"
                fill="black"
                fillOpacity="0.01"
              />
              <path
                d="M57.5703 53.9299L51.5003 59.9999L57.5703 66.0699"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M68.5 60H51.67"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Custom Next Button */}
          <button className="custom-prev cursor-pointer transition hover:scale-110 hover:opacity-80 duration-300 col-span-1 2xl:col-span-2 relative 2xl:w-1/2 h-fit rounded-full ml-auto">
            <div class="absolute inset-0 block animate-gradient bg-linear-to-br from-[#ffffff63] via-[#fff0] to-[#ffffff63] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
            <svg className='rounded-full w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[96px]' viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" rx="60" fill="black" fill-opacity="0.01"/>
            <path d="M62.4297 53.9299L68.4997 59.9999L62.4297 66.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M51.5 60H68.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagethree;