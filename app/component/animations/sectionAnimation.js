// src/animations/sectionAnimation.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const sectionAnimation = (elements) => {
  gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: elements[0]?.parentNode,
      start: "top 90%",
    },
  });
};
