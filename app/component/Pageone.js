'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import Video from 'next-video';
import myVideo3 from '../../videos/4_Astronaut.mp4';
import { h2Animation } from './animations/h2Animation.js';

const data = [
  {
    bg: "linear-gradient(180deg, #32CD32 -154.96%, #0F0F0F 100%)",
    iconone: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 340 13" fill="none">
        <path d="M339 12L339 0.999985L327.687 0.999986M12.313 1L1 1C1 6.06798 1 7.2794 1 12" stroke="#32CD32" stroke-width="2" stroke-linecap="round"/>
      </svg>
    ),
    icon: (
      <svg className='w-[35px] lg:w-[41px] xl:w-[50px] 2xl:w-[70px]' viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="70" height="70" rx="8" fill="white" fill-opacity="0.12"/>
      <path d="M48.4375 41.5225V29.9492C48.4373 29.8226 48.4129 29.6973 48.3656 29.5806C48.3183 29.4639 48.249 29.358 48.1618 29.2691C48.0746 29.1802 47.9712 29.1101 47.8576 29.0627C47.744 29.0154 47.6225 28.9918 47.5 28.9934H36.5125C36.2127 28.9929 35.9193 28.9039 35.6668 28.7368C35.4143 28.5698 35.2133 28.3316 35.0875 28.0504L34.525 26.7717L33.7625 25.0667C33.7257 24.9865 33.6839 24.9089 33.6375 24.8342C33.3438 24.2775 32.9099 23.8132 32.3819 23.4903C31.8538 23.1675 31.2511 22.9981 30.6375 23H25C24.5485 22.9997 24.1013 23.0913 23.6841 23.2697C23.2669 23.4481 22.8879 23.7097 22.5686 24.0396C22.2493 24.3695 21.9961 24.7613 21.8235 25.1924C21.6509 25.6235 21.5622 26.0855 21.5625 26.5521V41.5225C21.5622 41.9891 21.6509 42.4511 21.8235 42.8822C21.9961 43.3134 22.2493 43.7051 22.5686 44.035C22.8879 44.3649 23.2669 44.6265 23.6841 44.8049C24.1013 44.9833 24.5485 45.0749 25 45.0746H45C45.4515 45.0749 45.8987 44.9833 46.3159 44.8049C46.7331 44.6265 47.1121 44.3649 47.4314 44.035C47.7507 43.7051 48.0039 43.3134 48.1765 42.8822C48.3491 42.4511 48.4378 41.9891 48.4375 41.5225Z" fill="white"/>
      <path d="M36.6553 27.7553C36.682 27.7907 36.7222 27.8205 36.7715 27.8413C36.8208 27.8621 36.8773 27.8732 36.935 27.8734H47.6244C47.926 27.8713 48.2247 27.9145 48.5 28C48.3886 27.446 47.9926 26.9385 47.3848 26.571C46.777 26.2035 45.9984 26.0007 45.1922 26H35.5L36.108 26.9114L36.6553 27.7553Z" fill="white"/>
      </svg>

    ),
    title: "Total Projects Incubated",
    value: "7 Projects",
  },
  {
    bg: "linear-gradient(180deg, #FAB86D -140.48%, #0F0F0F 100%)",
    iconone: (<svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 340 13" fill="none">
  <path d="M339 12L339 0.999985L327.687 0.999986M12.313 1L1 1C1 6.06798 1 7.2794 1 12" stroke="#FAB86D" stroke-width="2" stroke-linecap="round"/>
</svg>),
    icon: (
      <svg className='w-[35px] lg:w-[41px] xl:w-[50px] 2xl:w-[70px]' viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="70" height="70" rx="8" fill="white" fill-opacity="0.12"/>
      <path d="M29.9899 25.625H40.0099L42.1724 23.895C42.9086 23.3075 43.1836 22.3537 42.8724 21.4638C42.5611 20.5738 41.7524 20 40.8124 20H29.1874C28.2474 20 27.4386 20.575 27.1274 21.4638C26.8161 22.3525 27.0911 23.3075 27.8261 23.8937L29.9899 25.625Z" fill="white"/>
      <path d="M40.1813 27.5H29.8187C26.405 30.8512 23.75 36.7312 23.75 41.5625C23.75 45.7612 25.9725 50 30.9375 50H39.375C43.6162 50 46.25 46.7663 46.25 41.5625C46.25 36.7312 43.595 30.8512 40.1813 27.5ZM34.525 37.8125H35.475C36.9362 37.8125 38.125 39.0013 38.125 40.4625C38.125 41.7763 37.1775 42.8575 35.9375 43.0775V44.0613C35.9375 44.5788 35.5175 44.9988 35 44.9988C34.4825 44.9988 34.0625 44.5788 34.0625 44.0613V43.125H32.8125C32.295 43.125 31.875 42.705 31.875 42.1875C31.875 41.67 32.295 41.25 32.8125 41.25H35.475C35.9025 41.25 36.25 40.9025 36.25 40.475C36.25 40.035 35.9025 39.6875 35.475 39.6875H34.525C33.0638 39.6875 31.875 38.4987 31.875 37.0375C31.875 35.7238 32.8225 34.6425 34.0625 34.4225V33.4375C34.0625 32.92 34.4825 32.5 35 32.5C35.5175 32.5 35.9375 32.92 35.9375 33.4375V34.375H37.1875C37.705 34.375 38.125 34.795 38.125 35.3125C38.125 35.83 37.705 36.25 37.1875 36.25H34.525C34.0975 36.25 33.75 36.5975 33.75 37.025C33.75 37.465 34.0975 37.8125 34.525 37.8125Z" fill="white"/>
      </svg>

    ),
    title: "Total Volume Generated",
    value: "$4,220,000",
  },
  {
    bg: "linear-gradient(180deg, #CD32C5 -154.96%, #0F0F0F 100%)",
    iconone: (<svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 340 13" fill="none">
  <path d="M339 12L339 0.999985L327.687 0.999986M12.313 1L1 1C1 6.06798 1 7.2794 1 12" stroke="#CD32C5" stroke-width="2" stroke-linecap="round"/>
</svg>),
    icon: (
      <svg className='w-[35px] lg:w-[41px] xl:w-[50px] 2xl:w-[70px]' viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="70" height="70" rx="8" fill="white" fill-opacity="0.12"/>
      <path d="M26.1808 32.1612C27.9916 32.1589 29.7276 31.4386 31.008 30.1582C32.2885 28.8777 33.0088 27.1418 33.0111 25.331C32.635 16.2699 19.7253 16.2725 19.3506 25.331C19.3529 27.1418 20.0732 28.8778 21.3536 30.1582C22.6341 31.4386 24.37 32.1589 26.1808 32.1612ZM25.4265 25.9249C24.8716 25.9195 24.3413 25.6953 23.9508 25.301C23.5603 24.9068 23.3413 24.3743 23.3413 23.8194C23.3413 23.2644 23.5604 22.7319 23.9509 22.3377C24.3414 21.9434 24.8717 21.7192 25.4266 21.7139H25.5869V21.1734C25.5893 21.0175 25.6529 20.8687 25.764 20.7592C25.8752 20.6498 26.0249 20.5884 26.1809 20.5884C26.3368 20.5884 26.4866 20.6498 26.5977 20.7593C26.7088 20.8687 26.7724 21.0175 26.7748 21.1734V21.7139H28.4497C28.6051 21.717 28.7532 21.7809 28.862 21.892C28.9709 22.003 29.0318 22.1523 29.0318 22.3078C29.0318 22.4633 28.9709 22.6126 28.862 22.7237C28.7532 22.8347 28.6051 22.8986 28.4496 22.9017H26.7748V24.737H26.9351C27.2167 24.7402 27.4948 24.7997 27.7529 24.9121C28.0111 25.0245 28.2441 25.1875 28.4382 25.3914C28.6323 25.5954 28.7836 25.8361 28.8832 26.0995C28.9827 26.3629 29.0285 26.6436 29.0177 26.9249C29.007 27.2063 28.94 27.4826 28.8208 27.7377C28.7015 27.9927 28.5323 28.2213 28.3232 28.4098C28.1141 28.5984 27.8694 28.7432 27.6034 28.8356C27.3374 28.928 27.0557 28.9662 26.7747 28.948L26.7748 29.4885C26.7743 29.6457 26.7115 29.7963 26.6002 29.9073C26.4888 30.0183 26.338 30.0806 26.1808 30.0806C26.0236 30.0806 25.8729 30.0183 25.7615 29.9073C25.6502 29.7963 25.5874 29.6457 25.5869 29.4885V28.948H23.912C23.8338 28.9483 23.7564 28.9331 23.6841 28.9033C23.6119 28.8736 23.5462 28.8299 23.4908 28.7747C23.4355 28.7195 23.3915 28.654 23.3616 28.5818C23.3316 28.5096 23.3162 28.4322 23.3162 28.3541C23.3162 28.2759 23.3316 28.1985 23.3616 28.1263C23.3915 28.0542 23.4355 27.9886 23.4908 27.9334C23.5462 27.8783 23.6119 27.8345 23.6841 27.8048C23.7564 27.7751 23.8338 27.7599 23.912 27.7601H25.5869V25.9249H25.4265Z" fill="white"/>
      <path d="M27.8554 26.8453C27.8531 26.711 27.8223 26.5787 27.765 26.4573C27.7076 26.3358 27.6251 26.2279 27.5228 26.1409C27.4206 26.0538 27.3009 25.9895 27.1719 25.9522C27.0429 25.9149 26.9074 25.9056 26.7744 25.9247V27.76C26.9069 27.7791 27.0419 27.77 27.1706 27.7331C27.2992 27.6962 27.4186 27.6324 27.5208 27.546C27.623 27.4595 27.7056 27.3523 27.7633 27.2315C27.821 27.1108 27.8524 26.9791 27.8554 26.8453Z" fill="white"/>
      <path d="M25.5865 22.9015C25.4542 22.8811 25.319 22.8895 25.1903 22.9263C25.0615 22.963 24.9423 23.0272 24.8406 23.1143C24.739 23.2015 24.6574 23.3096 24.6015 23.4313C24.5456 23.5529 24.5166 23.6852 24.5166 23.8191C24.5166 23.953 24.5456 24.0853 24.6015 24.207C24.6574 24.3286 24.739 24.4367 24.8406 24.5239C24.9423 24.6111 25.0616 24.6752 25.1903 24.712C25.3191 24.7487 25.4542 24.7571 25.5866 24.7367L25.5865 22.9015Z" fill="white"/>
      <path d="M50.9538 33.4675C50.8804 33.3944 50.7892 33.3418 50.6892 33.3147C50.5892 33.2876 50.4839 33.287 50.3836 33.3131L43.2564 35.178C43.1567 35.2047 43.0658 35.2572 42.9929 35.3302C42.9199 35.4032 42.8674 35.4941 42.8407 35.5938C42.6698 36.0676 43.3527 36.4907 43.6425 36.8529C40.4654 39.7845 36.962 42.3414 33.2011 44.4731C30.3887 46.0668 27.4437 47.4141 24.399 48.5C22.4089 49.2113 20.3804 49.8101 18.323 50.2937C18.1835 50.3291 18.0615 50.414 17.9798 50.5326C17.8981 50.6512 17.8623 50.7955 17.879 50.9385C17.8957 51.0815 17.9638 51.2136 18.0706 51.3103C18.1774 51.4069 18.3157 51.4614 18.4597 51.4637C28.8741 50.5231 38.8184 46.6907 47.1705 40.3987L48.1089 41.3906C48.1814 41.4666 48.2727 41.522 48.3736 41.5513C48.4744 41.5806 48.5812 41.5827 48.6832 41.5574C48.7851 41.532 48.8785 41.4802 48.9539 41.4071C49.0294 41.334 49.0841 41.2422 49.1126 41.1412L51.1023 34.0436C51.1305 33.943 51.1316 33.8368 51.1055 33.7356C51.0794 33.6345 51.0271 33.542 50.9538 33.4675Z" fill="white"/>
      <path d="M20.2414 38.9912C20.084 38.9917 19.9332 39.0544 19.8219 39.1657C19.7106 39.277 19.6479 39.4278 19.6475 39.5851V48.7377C21.1173 48.3463 22.5685 47.8949 24.001 47.3835C24.5391 47.1968 25.0615 46.9917 25.5868 46.7896V39.5851C25.5863 39.4278 25.5236 39.277 25.4123 39.1657C25.3011 39.0544 25.1503 38.9917 24.9929 38.9912H20.2414Z" fill="white"/>
      <path d="M39.8417 38.5577V30.0822C39.8412 29.9248 39.7785 29.774 39.6672 29.6628C39.5559 29.5515 39.4051 29.4887 39.2477 29.4883H34.4963C34.3389 29.4887 34.1881 29.5515 34.0768 29.6628C33.9655 29.774 33.9028 29.9248 33.9023 30.0822V42.6855C35.2811 41.8552 36.6001 40.984 37.953 39.995C38.5924 39.5293 39.2183 39.0491 39.8417 38.5577Z" fill="white"/>
      <path d="M27.3683 34.2397C27.211 34.2402 27.0602 34.3029 26.9489 34.4142C26.8376 34.5255 26.7749 34.6763 26.7744 34.8337V46.3026C28.8118 45.4526 30.7953 44.4787 32.7138 43.3863V34.8337C32.7133 34.6763 32.6506 34.5255 32.5393 34.4142C32.428 34.3029 32.2772 34.2402 32.1198 34.2397H27.3683Z" fill="white"/>
      </svg>

    ),
    title: "Total Revenue Generated",
    value: "$61,210",
  },
];

const Pageone = () => {
  useEffect(() => {
      const cards = gsap.utils.toArray(".card");
  
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 200 },
          {
            opacity: 1,
            y: 0,
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
      const texts = gsap.utils.toArray(".text");
  
      texts.forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: -200 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
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
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 40%",
            scrub: false,
          },
        }
      );
    });
  }, []);
    const dataone = [
  { project: "Nodez", revenue: "$17,735", volume: "$850K" },
  { project: "Beat", revenue: "$12,123", volume: "1.1 Million" },
  { project: "Blocklance", revenue: "$2,020", volume: "$300K" },
  { project: "Orax", revenue: "$4,472", volume: "$92K" },
  { project: "AxisLink", revenue: "$3,500", volume: "$250K" },
  { project: "Zentium", revenue: "$12,697", volume: "1.1 Million" },
  { project: "Rollback", revenue: "$8,663", volume: "$530K" },
  ];
  useEffect(() => {
    h2Animation();
  }, []);
    return (
        <div  id='About'  className='relative w-full pb-[36px] sm:pb-[40px] md:pb-[48px] lg:pb-[64px] xl:pb-[96px] 2xl:pb-[130px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[123px] overflow-hidden'>
          <svg className='w-full absolute left-0 top-0 object-fit z-2' viewBox="0 0 1726 390" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1726" height="390" fill="url(#paint0_linear_477_19)"/>
          <defs>
          <linearGradient id="paint0_linear_477_19" x1="863" y1="0" x2="863" y2="467.5" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="0.759615" stop-opacity="0"/>
          </linearGradient>
          </defs>
          </svg>
          <svg className='w-full absolute left-0 -bottom-px object-fit z-2 rotate-180' viewBox="0 0 1726 390" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1726" height="390" fill="url(#paint0_linear_477_19)"/>
          <defs>
          <linearGradient id="paint0_linear_477_19" x1="863" y1="0" x2="863" y2="467.5" gradientUnits="userSpaceOnUse">
          <stop/>
          <stop offset="0.759615" stop-opacity="0"/>
          </linearGradient>
          </defs>
          </svg>
          <div
            class="absolute inset-0 w-full h-full -z-8 mix-blend-luminosity bg-[radial-gradient(36.8%_50%_at_50%_50%,rgba(10,10,10,0.5)_0%,#0A0A0A_100%)]"
          ></div>

          <div className='absolute top-0 left-0 -z-10 w-screen h-auto grayscale-100'>
            <Video
              src={myVideo3}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-full h-full object-cover"
            />
          </div>
            <div className='container mx-auto px-[24px] sm:px-0 relative z-5'>
              <h2  className='comprecsupform animate-h2 pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] text-[28px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[52px] text-center'>Genesis Impact <span className='shadow-none text-white/70'>in Numbers</span>
              </h2>
               <div className="w-full flex justify-center px-[24px] lg:px-[50px] xl:px-[320px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white w-full mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[88px]">

                  {data.map((item, i) => (
                    <div
                      key={i}
                      style={{ background: item.bg }}
                       ref={(el) => (cardsRef.current[i] = el)}
                      className="flex flex-col items-center justify-center relative py-[14px] sm:py-[15px] md:py-[16px] lg:py-[20px] xl:py-[24px] 2xl:py-[32px] text-center w-full group "
                    >
                      <div className="w-full absolute top-0 left-0 group-hover:scale-105 group-hover:-top-[3%] duration-400">{item.iconone}</div>
                      <div className="mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px] pb-[5px] md:pb-[8px]">{item.icon}</div>

                      <h3
                        className="itesmracenas text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]"
                      >
                        {item.title}
                      </h3>

                      <p
                        className="consersn text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]"
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}

                </div>
              </div>
              <div>
                <div className="w-full mx-auto xl:px-[270px]">
                  <div
                  className="grid grid-cols-3 px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] backgrounone text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  >
                    <p>Project</p>
                    <div className='flex items-center justify-center'>
                      <p>Revenue</p>
                    </div>
                    <div className='flex items-end justify-center'>
                      <p>Volume</p>
                    </div>
                  </div>


                  {/* Rows */}
                  <div className="flex flex-col gap-2 mt-2">
                    {dataone.map((item, i) => (
                    <div
                    key={i}
                    className="grid grid-cols-3 px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] hover:scale-102 duration-200 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] backgorunds backdrop-blur-2xl"
                    >
                      <p>{item.project}</p>
                      <div className='flex items-center justify-center'>
                        <p>{item.revenue}</p>
                      </div>
                      <div className='flex items-end justify-center'>
                        <p>{item.volume}</p>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Pageone;