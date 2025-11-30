'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import dowDebian from "./image/dowDebian.png";
import dowFedora from "./image/dowFedora.png";
import dowLinux from "./image/dowLinux.png";
import dowUbuntu from "./image/dowUbuntu.png";
import dow from './image/litecionlaodin.png';
import imagesefvce from './image/image sdasd14.png';
import { sectionAnimation } from './animations/sectionAnimation.js';

gsap.registerPlugin(ScrollTrigger);


const cardsData = [
  {
    id: 1,
    title: "Secure Token Launches",
    version: "Audited and KYC-compliant.",
    image: dow,
     buttons: ["GPG Signatures"]
  },
  {
    id: 2,
    title: "Whitelist & Early Access Campaigns",
    version: "Build community trust and hype.",
    image: imagesefvce,
    buttons: ["GPG Signatures"]
  },
  {
    id: 3,
    title: "Liquidity & Staking Support",
    version: "Smooth token trading and growth.",
    image: dowLinux,
    buttons: [
      "GPG Signatures",
      "aarch64",
      "x84",
      "arm",
    ],
  },
  {
    id: 4,
    title: "KOL & Influencer Marketing",
    version: "Strategic partnerships for visibility.",
    image: dowUbuntu,
    buttons: ["GPG Signatures"]
  },
  {
    id: 5,
    title: "Advisory & Industry Connections",
    version: "Access to top Web3 experts and investors.",
    image: dowFedora,
    buttons: ["GPG Signatures"]
  },
  {
    id: 6,
    title: "Revenue & Vault Accountability",
    version: "Audited and KYC-compliant.",
    image: dowDebian,
    buttons: ["GPG Signatures"]
  },
];

const Pageone = () => {
const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 200, x: 200 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

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
        duration: 0.3,
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

  const elementsRef = useRef([]);
  elementsRef.current = [];

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionAnimation(elementsRef.current);
  }, []);
  return (
    <div
      id="howitworks" className=" relative   pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[64px] xl:pb-[100px] 2xl:!pb-[130px]">
        {/* <div className='leadingsectionarea w-full h-full absolute bottom-0 left-0'></div> */}
        <div className='container mx-auto px-6 xl:px-[270px]'>
          <div  className='flex items-start justify-start relative py-[36px] sm:py-[40px] md:py-[48px] lg:py-[64px] xl:py-[96px] 2xl:py-[128px] flex-col'>
            <button className="topethreaincobtn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] relative group duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                <path d="M0.399902 46.4H12.3999V34.9M12.3999 11.9V0.400024C6.87119 0.400024 5.54964 0.400024 0.399902 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                <path d="M12.3999 46.4H0.399902V34.9M0.399902 11.9V0.400024C5.92861 0.400024 7.25017 0.400024 12.3999 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
              Incubated Projects
          </button>
          <h2 ref={addToRefs} className='comprecsupform pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[52px]'>Comprehensive Support<br className='sm:block hidden'/> <span className='shadow-none text-white/70'>for Every Project</span></h2>
          <p ref={textRef} className='gensiloundces text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] sm:w-[67%] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Genesis Incubations is your launchpad to success in the blockchain and DeFi space, offering a comprehensive suite of services designed to ensure secure, transparent, and community-driven project launches. </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  sm:px-0 px-6 overflow-hidden ">
            {cardsData.map((card, index) => (
              <div
                  key={card.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="overflow-hidden relative group  flex items-start justify-start flex-col rounded-[20px] border border-white/10 transition-all duration-400 "
                >
                <div className='p-[13px] sm:p-[14px] group-hover:scale-105 duration-200 md:p-[15px] lg:p-[16px] xl:p-[20px] 2xl:p-[24px]'>
                  <h3 className="dowloheadibng text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">
                    {card.title}
                  </h3>
                  <p className="lichangwinds text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-3.5 xl:pb-[15px] 2xl:pb-4">
                    {card.version}
                  </p>
                </div>
                <Image
                  className="w-full object-cover group-hover:scale-105 duration-200"
                  src={card.image}
                  alt={card.title}
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Pageone;