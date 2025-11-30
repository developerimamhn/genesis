// src/animations/h2Animation.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const h2Animation = () => {
  if (typeof window === "undefined") return; // SSR protection

  const elements = document.querySelectorAll(".animate-h2");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
