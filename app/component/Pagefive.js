'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Video from 'next-video';
import myVideo1 from '../../videos/3_Astronaut.mp4.mp4';
gsap.registerPlugin(ScrollTrigger);


import Image from 'next/image';

const Pagefive = () => {
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
     useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const startCounting = (el) => {
      let original = el.textContent.trim();
      let clean = original.replace(/\$/g, "").replace(/\+/g, "");
      let target = 0;

      if (clean.includes("M")) {
        target = parseFloat(clean) * 1_000_000;
      } else if (clean.includes("K")) {
        target = parseFloat(clean) * 1000;
      } else {
        target = parseFloat(clean);
      }

      let start = 0;
      let duration = 2000;
      let stepTime = 10;

      const timer = setInterval(() => {
        start += target / (duration / stepTime);

        if (start >= target) {
          start = target;
          clearInterval(timer);
        }

        if (original.includes("M")) {
          el.textContent =
            "$" +
            (start / 1_000_000)
              .toFixed(0)
              .replace(/\.00$/, "") +
            "M" +
            (original.includes("+") ? "+" : "");
        } else if (original.includes("K")) {
          el.textContent =
            "$" +
            (start / 1000).toFixed(0) +
            "K" +
            (original.includes("+") ? "+" : "");
        } else {
          el.textContent = "$" + Math.floor(start).toLocaleString();
        }
      }, stepTime);
    };

    // Scroll Trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.played) {
            entry.target.dataset.played = "true";
            startCounting(entry.target);
          }
        });
      },
      { threshold: 0.6 } // 60% visible
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <div id="Blog" className="relative py-[41px] sm:py-[51px] md:py-[68px] lg:py-[98px] xl:py-[124px] 2xl:py-[145px]  overflow-hidden">
      <svg className='w-full absolute left-0 top-0 object-fit z-2' viewBox="0 0 1726 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1726" height="390" fill="url(#paint0_linear_477_19)"/>
      <defs>
      <linearGradient id="paint0_linear_477_19" x1="863" y1="0" x2="863" y2="467.5" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="0.759615" stop-opacity="0"/>
      </linearGradient>
      </defs>
      </svg>
      <svg className='w-full absolute left-0 bottom-0 object-fit z-2 rotate-180' viewBox="0 0 1726 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1726" height="390" fill="url(#paint0_linear_477_19)"/>
      <defs>
      <linearGradient id="paint0_linear_477_19" x1="863" y1="0" x2="863" y2="467.5" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="0.759615" stop-opacity="0"/>
      </linearGradient>
      </defs>
      </svg>

      <div className='absolute top-0 left-0 -z-10 w-screen h-auto'>
        <Video
          src={myVideo1}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        />
      </div>
      {/* <Image className='w-full h-full absolute left-0 top-0 object-fit -z-px' src={backgroundimagnoe} alt='Loading...'/> */}
      <div className='container mx-auto relative z-5 sm:px-0 px-6'>
        <div className='flex items-center justify-center flex-col '>
          <button className="topethreaincobtn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] relative group duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                <path d="M0.399902 46.4H12.3999V34.9M12.3999 11.9V0.400024C6.87119 0.400024 5.54964 0.400024 0.399902 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                <path d="M12.3999 46.4H0.399902V34.9M0.399902 11.9V0.400024C5.92861 0.400024 7.25017 0.400024 12.3999 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
              <div className="relative overflow-hidden h-full flex items-center justify-center">
                  <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                  Incubated Projects
                  </span>
                  <span className="opacity-0">Explore SparkStarter</span>

                  <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  Incubated Projects
                  </span>
              </div>
          </button>
          <span >
          <h2  className="tradines text-center text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold  mt-10">
            Success Stories, <span className="text-white/70!"> Our <br className="sm:block hidden" /> Past Incubations</span>
          </h2></span>
          <p ref={textRefs} className='bitstartp text-[12px] text-center sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-3 md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[30px]'>We help blockchain startups and crypto projects launch securely with proven incubation, <br className='lg:block hidden'/> tokenomics design, KYC, and long-term growth strategies.</p>
          <button className='viewallinsteaeds hover:scale-105 duration-200  cursor-pointer py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] backdrop-blur-lg '>
            <div className="relative overflow-hidden h-full flex items-center justify-center">
                  <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                  View All Incubated →
                  </span>
                  <span className="opacity-0">View All Incubated →</span>

                  <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  View All Incubated →
                  </span>
              </div>
            </button>
        </div>
        <div className='prmdash grid grid-cols-3 2xl:mx-[385px] gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px] bg-[#00000077]'>
          <div class="absolute z-px left-0 top-0 block h-full w-full animate-gradient bg-linear-to-t from-white/20 via-white/5 to-white/20 bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract! "></div>
          <div className='flex flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
            <h4 className='projemanx'>Project X</h4>
            <div className='trmatching relative w-full group duration-500'>
              <h2 className='counter numbsetis pb-[6px] lg:pb-[8px]'>$50M+</h2>
              <p className='numverinval'>Volume</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M0.5 121.5H11.5V110.187M11.5 11.813V0.5C6.43202 0.5 5.22059 0.5 0.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M11.5 121.5H0.5V110.187M0.5 11.813V0.5C5.56798 0.5 6.77941 0.5 11.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>
            <div className='trmatching relative w-full group duration-500'>
              <h2 className='counter numbsetis pb-[6px] lg:pb-[8px]'>$920K</h2>
              <p className='numverinval'>Volume</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M0.5 121.5H11.5V110.187M11.5 11.813V0.5C6.43202 0.5 5.22059 0.5 0.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M11.5 121.5H0.5V110.187M0.5 11.813V0.5C5.56798 0.5 6.77941 0.5 11.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div className='flex flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
            <h4 className='projemanx'>Best Matchmaker</h4>
            <div className='trmatching relative w-full group duration-500'>
              <h2 className='counter numbsetis pb-[6px] lg:pb-[8px]'>$83K</h2>
              <p className='numverinval'>Volume</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M0.5 121.5H11.5V110.187M11.5 11.813V0.5C6.43202 0.5 5.22059 0.5 0.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M11.5 121.5H0.5V110.187M0.5 11.813V0.5C5.56798 0.5 6.77941 0.5 11.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>
            <div className='trmatching relative w-full group duration-500'>
              <h2 className='counter numbsetis pb-[6px] lg:pb-[8px]'>$2M+</h2>
              <p className='numverinval'>Volume</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
              <path d="M0.5 121.5H11.5V110.187M11.5 11.813V0.5C6.43202 0.5 5.22059 0.5 0.5 0.5" stroke="white" stroke-linecap="round"/>
            </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
              <path d="M11.5 121.5H0.5V110.187M0.5 11.813V0.5C5.56798 0.5 6.77941 0.5 11.5 0.5" stroke="white" stroke-linecap="round"/>
            </svg>
            </div>
          </div>
          <div className='flex flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
            <h4 className='projemanx'>ZENTIUM</h4>
            <div className='trmatching relative w-full group duration-500'>
              <h2 className='counter numbsetis pb-[6px] lg:pb-[8px]'>1<span>.35</span>M</h2>
              <p className='numverinval'>Volume</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M0.5 121.5H11.5V110.187M11.5 11.813V0.5C6.43202 0.5 5.22059 0.5 0.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M11.5 121.5H0.5V110.187M0.5 11.813V0.5C5.56798 0.5 6.77941 0.5 11.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>
            <div className='trmatching relative w-full group duration-500'>
              <h2 className='counter numbsetis pb-[6px] lg:pb-[8px]'>874K</h2>
              <p className='numverinval'>Volume</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M0.5 121.5H11.5V110.187M11.5 11.813V0.5C6.43202 0.5 5.22059 0.5 0.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.2! group-hover:scale-110 duration-400" viewBox="0 0 12 122" fill="none">
                <path d="M11.5 121.5H0.5V110.187M0.5 11.813V0.5C5.56798 0.5 6.77941 0.5 11.5 0.5" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagefive;

