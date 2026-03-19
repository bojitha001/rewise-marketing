import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  useGSAP(() => {
    gsap.set(".benifit-1", { yPercent: 100 });
    gsap.set(".benifit-2", { yPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benifit-section",
        start: "top 5%",
        end: "+=200%",
        scrub: true,
        markers: true,
        pin: true,
      },
    });

    tl.to(".benifit-section", {
      width: "95vw",
      height: "95vh",
      top: "2.5vh",
      left: "2.5vw",
    })
      .to(".benifit-1", {
        yPercent: 0,
        ease: "none",
      })
      .to(".benifit-1", {
        width: "95vw",
        height: "95vh",
        top: "2.5vh",
        left: "2.5vw",
      }).to(".benifit-2", {
        yPercent: 0,
        ease: "none",
      })
      
       .to(".benifit-2", {
        width: "95vw",  
        height: "95vh",
        top: "2.5vh",
        left: "2.5vw",}).to(".benifit-section", {
        opacity: 0,
      })
  });

  return (
    <>
      
      <div className="h-screen text-white relative top-0 left-0 right-0 z-30 mt-24 px-24 benifit-section bg-black">
Benifit 1
      </div>
    </>
  );
};

export default Benefits;
