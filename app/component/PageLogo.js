'use client';


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
// import imageone from './image/5265383_Light_Tunnel_Vj_Loop_3840x2160 1.png';
import Video from 'next-video';
import myVideo0 from '../../videos/2_Astronaut.mp4';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const PageLogo = () => {
    const textReff = useRef([]);
    const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)
  

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 80%',
                end: 'bottom 10%', // Desktop-specific values
                scrub: 0.8,
              },
            });
            tl.fromTo(
              wrapperRef.current,
              { y: -100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
              },
              0 
            );
            tl.fromTo(
              gridItem1Ref.current,
              { y: 150, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { y: 50, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);

useEffect(() => {
    const elements = document.querySelectorAll(".animate-text");

    elements.forEach((el) => {
      const wrapWords = (node) => {
        if (node.nodeType === 3) {
          const words = node.textContent.split(/(\s+)/);
          const fragment = document.createDocumentFragment();

          words.forEach((word) => {
            if (word.trim() === "") {
              fragment.appendChild(document.createTextNode(word));
            } else {
              const span = document.createElement("span");
              span.textContent = word;
              span.style.display = "inline-block";
              span.style.opacity = 0;
              span.style.filter = "blur(6px)";
              span.style.transform = "translateY(30px)";
              fragment.appendChild(span);
            }
          });

          return fragment;
        } else {
          const cloned = node.cloneNode(false);
          node.childNodes.forEach((child) =>
            cloned.appendChild(wrapWords(child))
          );
          return cloned;
        }
      };

      const wrapped = wrapWords(el);
      el.innerHTML = "";
      el.appendChild(wrapped);

      gsap.to(el.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
      });
    });
  }, []);


  // 
    return (
        <div className='relative  pt-9 sm:pt-10 md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[131px] '>
          <div className="flex items-start flex-col  justify-center relative z-10 container mx-auto px-6 sm:px-0 2xl:px-[270px]">
            <div ref={wrapperRef} className='mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[120px] xl:mb-[140px] 2xl:mb-[84px]'>
                <button className="topethreaincobtn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] relative group duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 right-0 group-hover:-right-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                  <path d="M0.399902 46.4H12.3999V34.9M12.3999 11.9V0.400024C6.87119 0.400024 5.54964 0.400024 0.399902 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full absolute top-0 left-0 group-hover:-left-0.5 group-hover:scale-120 duration-400" viewBox="0 0 13 47" fill="none">
                  <path d="M12.3999 46.4H0.399902V34.9M0.399902 11.9V0.400024C5.92861 0.400024 7.25017 0.400024 12.3999 0.400024" stroke="white" stroke-width="0.8" stroke-linecap="round"/>
                </svg>
                About Us
              </button>
              <h2 className="tradines  text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold  mt-10">
                Who We Are <span className="text-white/70!">– Your Trusted <br className="sm:block hidden" /> Web3 Incubator</span>
              </h2>
            </div>
            <div  className="grid sm:grid-cols-2 gap-[11px] sm:gap-3 md:gap-[13px] lg:gap-3.5 xl:gap-[15px] 2xl:gap-4">
              <div  className="relative containexrtmiss col-span-1 w-full overflow-hidden">
                <div className="absolute bottom-0 left-0 filtebluasee -z-1 w-full rounded-b-3xl h-full "></div>
                <div className="absolute inset-0 w-full h-full -z-1 mix-blend-luminosity bg-[linear-gradient(58deg,rgba(10,10,10,0.10)_13.26%,#0A0A0A_60.85%)]"></div>

                {/* <Image className="w-full h-full object-cover absolute top-0 left-0 -z-2 select-none" src={imageone} alt='Loading...'/> */}
                <div className='absolute top-0 left-0  -z-10 w-screen 2xl:w-[75vw] h-auto'>
                  <Video
                    src={myVideo0}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div class="absolute z-px left-0 top-0 block h-full w-full animate-gradient bg-linear-to-t from-white/20 via-white/5 to-white/20 bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract! "></div>
                <h3 className="misssfasttea animate-text">
                  <span className="text-white/60">What Is</span> <div className="text-white">Genesis Mission?</div>
                </h3>
                <div className="flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] relative z-10">
                  <p className="yearsgretesa animate-text">Genesis Incubations is a next-generation crypto incubator with over 15yr of combined blockchain and DeFi experience. </p>
                  <p className="yearsgretesa animate-text">Our mission is to empower startups with expert guidance, liquidity support, and strategic connections.  </p>
                  <p className="yearsgretesa animate-text">With a proven track record of 7 successful Web3 projects generating millions in revenue, we combine innovation, transparency, and security to help projects grow in today’s competitive market.</p>
                </div>
                <div className="grid grid-cols-2 pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[72px] relative z-10">
                  <div className="col-span-1">
                    <h3 className="yearsadate animate-text">15+ Years</h3>
                    <p className="yearsgretesa animate-text">Of Expertise</p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="yearsadate animate-text">7 Projects</h3>
                    <p className="yearsgretesa animate-text">Successfully Incubated</p>
                  </div>
                  <div className="col-span-1 pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]">
                    <h3 className="yearsadate animate-text">SpartkStarter</h3>
                    <p className="yearsgretesa">Our Exclusive Launchpad</p>
                  </div>
                </div>
              </div>
              <div className="relative containexrtmiss col-span-1 w-full">
                <div class="absolute -z-10 left-0 top-0 block h-full w-full animate-gradient bg-linear-to-t from-white/20 via-white/5 to-white/20 bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract!"></div>
                <div className="flex justify-between flex-col h-full ">
                  <div className="">
                    <h3 className="misssfasttea animate-text">
                      <span className="text-white/60">What Makes</span> <div className="text-white">Genesis Different?</div>
                    </h3>
                    <ul className="flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]">
                      <li className="flex items-center justify-start gap-[6px] lg:gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[21px]" viewBox="0 0 21 21" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.504 1.31775C15.5773 1.31775 19.6916 5.43207 19.6916 10.5053C19.6916 15.5786 15.5773 19.6929 10.504 19.6929C5.43073 19.6929 1.31641 15.5786 1.31641 10.5053C1.31641 5.43207 5.43073 1.31775 10.504 1.31775ZM8.59609 13.4895L6.34674 11.2383C5.96353 10.8549 5.96345 10.2296 6.34674 9.84626C6.73011 9.46297 7.35817 9.46537 7.73875 9.84626L9.32453 11.4333L13.2694 7.4884C13.6528 7.10503 14.2781 7.10503 14.6614 7.4884C15.0448 7.87169 15.0442 8.49758 14.6614 8.88041L10.0194 13.5224C9.63659 13.9052 9.01069 13.9058 8.6274 13.5224C8.61663 13.5116 8.60624 13.5007 8.59609 13.4895Z" fill="white"/>
                        </svg>
                        <p className="goldenslinea animate-text">Secure Crypto Launch</p>
                      </li>
                      <li className="flex items-center justify-start gap-[6px] lg:gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[21px]" viewBox="0 0 21 21" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.504 1.31775C15.5773 1.31775 19.6916 5.43207 19.6916 10.5053C19.6916 15.5786 15.5773 19.6929 10.504 19.6929C5.43073 19.6929 1.31641 15.5786 1.31641 10.5053C1.31641 5.43207 5.43073 1.31775 10.504 1.31775ZM8.59609 13.4895L6.34674 11.2383C5.96353 10.8549 5.96345 10.2296 6.34674 9.84626C6.73011 9.46297 7.35817 9.46537 7.73875 9.84626L9.32453 11.4333L13.2694 7.4884C13.6528 7.10503 14.2781 7.10503 14.6614 7.4884C15.0448 7.87169 15.0442 8.49758 14.6614 8.88041L10.0194 13.5224C9.63659 13.9052 9.01069 13.9058 8.6274 13.5224C8.61663 13.5116 8.60624 13.5007 8.59609 13.4895Z" fill="white"/>
                        </svg>
                        <p className="goldenslinea animate-text">Long-Term Blockchain Growth.</p>
                      </li>
                      <li className="flex items-center justify-start gap-[6px] lg:gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[21px]" viewBox="0 0 21 21" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.504 1.31775C15.5773 1.31775 19.6916 5.43207 19.6916 10.5053C19.6916 15.5786 15.5773 19.6929 10.504 19.6929C5.43073 19.6929 1.31641 15.5786 1.31641 10.5053C1.31641 5.43207 5.43073 1.31775 10.504 1.31775ZM8.59609 13.4895L6.34674 11.2383C5.96353 10.8549 5.96345 10.2296 6.34674 9.84626C6.73011 9.46297 7.35817 9.46537 7.73875 9.84626L9.32453 11.4333L13.2694 7.4884C13.6528 7.10503 14.2781 7.10503 14.6614 7.4884C15.0448 7.87169 15.0442 8.49758 14.6614 8.88041L10.0194 13.5224C9.63659 13.9052 9.01069 13.9058 8.6274 13.5224C8.61663 13.5116 8.60624 13.5007 8.59609 13.4895Z" fill="white"/>
                        </svg>
                        <p className="goldenslinea animate-text ">Transparent Web3 Incubation</p>
                      </li>
                    </ul>
                  </div>
                  <div className="gentermanitems p-[13px] sm:p-[14px] md:p-[15px] lg:p-[16px] xl:p-[20px] 2xl:p-[24px] mt-auto">
                    <ul className="flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]">
                      <li className="flex items-start justify-start gap-[6px] lg:gap-[10px]">
                        <div className='relative rounded-4xl p-[6px] md:p-[8px] xl:p-[10px] bg-black'>
                          <div class="absolute left-0 top-0 block h-full w-full animate-gradient bg-linear-to-tr from-white via-white/0 to-white bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract! z-20"></div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.5567 4.16248L10.5067 1.37498L10.4129 1.33748C10.1422 1.26869 9.85864 1.26869 9.58794 1.33748L9.49419 1.37498L3.44419 4.16248C3.15842 4.29405 2.91903 4.50882 2.75734 4.77868C2.59564 5.04855 2.51917 5.36094 2.53794 5.67498L2.75044 9.22498C2.87103 11.2668 3.56962 13.2323 4.76475 14.8922C5.95988 16.5521 7.60229 17.838 9.50044 18.6C9.65952 18.6716 9.83224 18.7078 10.0067 18.7062C10.1725 18.7088 10.3369 18.6746 10.4879 18.6062C12.3884 17.8461 14.0335 16.561 15.2309 14.901C16.4283 13.2409 17.1288 11.2745 17.2504 9.23123L17.4629 5.68123C17.483 5.36616 17.4071 5.0524 17.2454 4.78129C17.0836 4.51018 16.8435 4.29444 16.5567 4.16248ZM13.2817 8.53748L9.94419 12.2875C9.88989 12.3496 9.82383 12.4004 9.74981 12.4368C9.6758 12.4733 9.59529 12.4948 9.51294 12.5H9.48169C9.32464 12.5011 9.17291 12.4431 9.05669 12.3375L6.76294 10.225C6.64111 10.1123 6.56904 9.95576 6.56259 9.78991C6.55615 9.62405 6.61585 9.46243 6.72856 9.3406C6.84128 9.21877 6.99778 9.1467 7.16363 9.14025C7.32949 9.13381 7.49111 9.19351 7.61294 9.30623L9.43794 10.9875L12.3442 7.71248C12.4557 7.59633 12.6078 7.52773 12.7687 7.52098C12.9296 7.51423 13.0869 7.56984 13.2078 7.67623C13.3287 7.78262 13.4039 7.93157 13.4177 8.09203C13.4314 8.25248 13.3827 8.41206 13.2817 8.53748Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="">
                          <p className="goldenslinea 2xl:text-[18px]!">Transparency Guaranteed</p>
                          <p className="goldenslinea text-white/80! mt-[2px] sm:mt-[4px]">Fully audited token launches, strict compliance, and safe transactions.</p>
                        </div>
                      </li>
                      <li className="flex items-start justify-start gap-[6px] lg:gap-[10px]">
                        <div className='relative rounded-4xl p-[6px] md:p-[8px] xl:p-[10px] bg-black'>
                          <div class="absolute left-0 top-0 block h-full w-full animate-gradient bg-linear-to-tr from-white via-white/0 to-white bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract! z-20"></div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <g clip-path="url(#clip0_1401_3449)">
                                <path d="M7.14956 16.9665C7.32538 17.1423 7.42415 17.3808 7.42415 17.6294C7.42415 17.878 7.32538 18.1165 7.14956 18.2923L6.1584 19.2834C6.12939 19.3125 6.09494 19.3355 6.05703 19.3512C6.01912 19.3669 5.97849 19.375 5.93745 19.375C5.89641 19.375 5.85578 19.3669 5.81787 19.3512C5.77996 19.3355 5.74551 19.3125 5.7165 19.2834L0.716505 14.2834C0.657915 14.2248 0.625 14.1454 0.625 14.0625C0.625 13.9796 0.657915 13.9001 0.716505 13.8415L1.70766 12.8504C1.88347 12.6746 2.12193 12.5758 2.37057 12.5758C2.61921 12.5758 2.85766 12.6746 3.03348 12.8504L7.14956 16.9665ZM13.4375 5V10.0938C13.705 10.1712 13.9546 10.3007 14.1718 10.475L16.25 8.54688V5C16.2492 4.75158 16.1502 4.51355 15.9746 4.33789C15.7989 4.16223 15.5609 4.06322 15.3125 4.0625H14.375C14.1265 4.06323 13.8885 4.16223 13.7129 4.33789C13.5372 4.51355 13.4382 4.75158 13.4375 5ZM10.3125 5.9375C10.064 5.93823 9.82601 6.03723 9.65035 6.21289C9.47469 6.38855 9.37569 6.62658 9.37496 6.875V10H12.1875V6.875C12.1867 6.62658 12.0877 6.38855 11.9121 6.21289C11.7364 6.03723 11.4984 5.93822 11.25 5.9375H10.3125ZM8.12496 10V8.125C8.12424 7.87658 8.02523 7.63855 7.84957 7.46289C7.67391 7.28723 7.43588 7.18822 7.18746 7.1875H6.24996C6.00154 7.18823 5.76351 7.28723 5.58785 7.46289C5.41219 7.63855 5.31319 7.87658 5.31246 8.125V10.2094C5.72949 10.0698 6.16646 9.99912 6.60621 10H8.12496ZM18.9375 8.875C18.7983 8.73606 18.6331 8.62592 18.4513 8.55085C18.2695 8.47578 18.0747 8.43726 17.8781 8.4375C17.6828 8.4364 17.4892 8.47393 17.3085 8.54795C17.1277 8.62196 16.9634 8.73098 16.825 8.86875L14.6 10.9312C14.8608 11.2982 15.0006 11.7373 15 12.1875C14.9993 12.7675 14.7687 13.3235 14.3586 13.7336C13.9485 14.1437 13.3924 14.3744 12.8125 14.375H9.68746C9.60458 14.375 9.52509 14.3421 9.46649 14.2835C9.40788 14.2249 9.37496 14.1454 9.37496 14.0625C9.37496 13.9796 9.40788 13.9001 9.46649 13.8415C9.52509 13.7829 9.60458 13.75 9.68746 13.75H12.8125C13.2269 13.75 13.6243 13.5854 13.9173 13.2924C14.2103 12.9993 14.375 12.6019 14.375 12.1875C14.375 11.7731 14.2103 11.3757 13.9173 11.0826C13.6243 10.7896 13.2269 10.625 12.8125 10.625H6.60621C6.15454 10.6235 5.70706 10.7117 5.28972 10.8844C4.87238 11.0571 4.49347 11.311 4.17496 11.6313L3.43434 12.3719C3.4486 12.3836 3.46216 12.3961 3.47496 12.4094L7.59059 16.525C7.60385 16.5378 7.61637 16.5514 7.62809 16.5656L7.66871 16.525C7.75565 16.4379 7.85891 16.3687 7.97259 16.3216C8.08627 16.2744 8.20813 16.2501 8.33121 16.25H13.4031C13.9465 16.2495 14.482 16.1204 14.9659 15.8733C15.4499 15.6261 15.8684 15.268 16.1875 14.8281L19.0812 10.8281C19.2945 10.5391 19.3973 10.1832 19.3709 9.82495C19.3445 9.46669 19.1908 9.12971 18.9375 8.875ZM6.24996 5.9375C6.291 5.93755 6.33165 5.92948 6.36957 5.91377C6.40748 5.89805 6.44192 5.875 6.4709 5.84594L9.06246 3.25439L10.7165 4.90846C10.7455 4.93748 10.78 4.96051 10.8179 4.97622C10.8558 4.99192 10.8964 5.00001 10.9375 5.00001C10.9785 5.00001 11.0191 4.99192 11.0571 4.97622C11.095 4.96051 11.1294 4.93748 11.1584 4.90846L14.375 1.69189V2.8125C14.375 2.89538 14.4079 2.97487 14.4665 3.03347C14.5251 3.09208 14.6046 3.125 14.6875 3.125C14.7703 3.125 14.8498 3.09208 14.9084 3.03347C14.967 2.97487 15 2.89538 15 2.8125V0.9375C15 0.85462 14.967 0.775134 14.9084 0.716529C14.8498 0.657924 14.7703 0.625 14.6875 0.625H12.8125C12.7296 0.625 12.6501 0.657924 12.5915 0.716529C12.5329 0.775134 12.5 0.85462 12.5 0.9375C12.5 1.02038 12.5329 1.09987 12.5915 1.15847C12.6501 1.21708 12.7296 1.25 12.8125 1.25H13.9331L10.9375 4.24561L9.2834 2.59156C9.25439 2.56254 9.21994 2.53951 9.18203 2.5238C9.14412 2.50809 9.10349 2.50001 9.06245 2.50001C9.02141 2.50001 8.98078 2.50809 8.94287 2.5238C8.90496 2.53951 8.87051 2.56254 8.8415 2.59156L6.029 5.40406C5.98531 5.44777 5.95556 5.50345 5.94351 5.56406C5.93146 5.62467 5.93765 5.68749 5.9613 5.74459C5.98495 5.80168 6.02499 5.85048 6.07637 5.88482C6.12775 5.91916 6.18816 5.93749 6.24996 5.9375Z" fill="white"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_1401_3449">
                                  <rect width="20" height="20" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                        </div>
                        <div className="">
                          <p className="goldenslinea 2xl:text-[18px]! animate-text">Transparency Guaranteed</p>
                          <p className="goldenslinea text-white/80! mt-[2px] sm:mt-[4px] animate-text">Ongoing advisory and post-launch support for long-term success.</p>
                        </div>
                      </li>
                      <li className="flex items-start justify-start gap-[6px] lg:gap-[10px]">
                        <div className='relative rounded-4xl p-[6px] md:p-[8px] xl:p-[10px] bg-black'>
                          <div class="absolute left-0 top-0 block h-full w-full animate-gradient bg-linear-to-tr from-white via-white/0 to-white bg-size-[var(--bg-size)_100%] rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px mask-subtract! z-20"></div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M17.6557 8.33921C17.3851 8.18186 17.1419 7.98146 16.9357 7.74587C16.9566 7.41788 17.0347 7.09608 17.1666 6.79504C17.4091 6.11087 17.6832 5.33587 17.2432 4.73337C16.8032 4.13087 15.9724 4.15004 15.2432 4.16671C14.921 4.19986 14.5955 4.17788 14.2807 4.10171C14.113 3.8288 13.9932 3.52919 13.9266 3.21587C13.7199 2.51171 13.4841 1.71587 12.7599 1.47754C12.0616 1.25254 11.4149 1.74754 10.8432 2.18254C10.5966 2.40781 10.3107 2.58602 9.9999 2.70837C9.68581 2.58702 9.39681 2.40876 9.1474 2.18254C8.5774 1.75004 7.93323 1.25004 7.23156 1.47837C6.50906 1.71337 6.27323 2.51171 6.0649 3.21587C5.99834 3.52818 5.87974 3.82707 5.71406 4.10004C5.39866 4.17601 5.07275 4.19854 4.7499 4.16671C4.01823 4.14671 3.19406 4.12504 2.7499 4.73337C2.30573 5.34171 2.58323 6.11087 2.82656 6.79421C2.96026 7.0948 3.03955 7.41674 3.06073 7.74504C2.85496 7.98094 2.61204 8.18164 2.34156 8.33921C1.73156 8.75587 1.03906 9.23004 1.03906 10C1.03906 10.77 1.73156 11.2425 2.34156 11.6609C2.61198 11.8182 2.8549 12.0186 3.06073 12.2542C3.04178 12.5824 2.96475 12.9046 2.83323 13.2059C2.59156 13.8892 2.31823 14.6642 2.7574 15.2667C3.19656 15.8692 4.0249 15.85 4.7574 15.8334C5.07987 15.8002 5.40564 15.8222 5.72073 15.8984C5.88771 16.1716 6.00718 16.4711 6.07406 16.7842C6.28073 17.4884 6.51656 18.2842 7.24073 18.5225C7.35683 18.5598 7.47797 18.5789 7.5999 18.5792C8.1859 18.4951 8.73055 18.2286 9.15656 17.8175C9.40324 17.5923 9.68906 17.4141 9.9999 17.2917C10.314 17.4131 10.603 17.5913 10.8524 17.8175C11.4232 18.2534 12.0699 18.7509 12.7691 18.5217C13.4916 18.2867 13.7274 17.4884 13.9357 16.785C14.0025 16.4722 14.122 16.1729 14.2891 15.9C14.6033 15.8236 14.9282 15.801 15.2499 15.8334C15.9816 15.8509 16.8057 15.875 17.2499 15.2667C17.6941 14.6584 17.4166 13.8892 17.1732 13.205C17.0404 12.9047 16.9612 12.5835 16.9391 12.2559C17.1449 12.0198 17.3882 11.819 17.6591 11.6617C18.2691 11.245 18.9616 10.77 18.9616 10C18.9616 9.23004 18.2666 8.75671 17.6557 8.33921Z" fill="white"/>
                          <path d="M9.1667 12.2918C9.08462 12.2919 9.00332 12.2758 8.92751 12.2443C8.8517 12.2128 8.78288 12.1667 8.72504 12.1084L7.05837 10.4418C6.94797 10.3233 6.88787 10.1666 6.89072 10.0046C6.89358 9.84273 6.95917 9.68824 7.07368 9.57373C7.18819 9.45922 7.34268 9.39363 7.5046 9.39077C7.66652 9.38791 7.82322 9.44802 7.9417 9.55842L9.22504 10.8418L12.125 8.66675C12.2576 8.56729 12.4243 8.52459 12.5884 8.54803C12.7525 8.57147 12.9006 8.65914 13 8.79175C13.0995 8.92436 13.1422 9.09104 13.1188 9.25514C13.0953 9.41923 13.0076 9.56729 12.875 9.66675L9.5417 12.1668C9.43349 12.2478 9.30192 12.2917 9.1667 12.2918Z" fill="#040404"/>
                        </svg>
                        </div>
                        <div className="">
                          <p className="goldenslinea 2xl:text-[18px]! ">Transparency Guaranteed</p>
                          <p className="goldenslinea text-white/80! mt-[2px] sm:mt-[4px] ">Open processes and revenue accountability.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default PageLogo;