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
      })
      .to(".benifit-2", {
        yPercent: 0,
        ease: "none",
      })
      .to(".benifit-2", {
        width: "95vw",
        height: "95vh",
        top: "2.5vh",
        left: "2.5vw",
      })
      .to(".benifit-section", {
        opacity: 0,
      });
  });

  return (
    <>
      {/* Panel 1 — Smart Spaced Repetition */}
      <div className="h-screen text-white relative top-0 left-0 right-0 z-30 mt-24 benifit-section bg-[#0040c1] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col px-6 md:px-10 lg:px-16 py-8 md:py-12">
        {/* Top row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-white/70 text-xs md:text-sm font-light tracking-widest uppercase">Benefit 01</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>

        {/* Center content — vertically centered */}
        <div className="flex-1 flex items-center">
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 md:mb-6">
                Smart Spaced<br />
                <span className="text-white/60">Repetition</span>
              </h2>
              <p className="text-white/70 text-base md:text-xl font-light leading-relaxed max-w-md">
                Rewise schedules your reviews at the perfect moment — right before you forget. Science-backed memory curves keep knowledge locked in long-term.
              </p>
            </div>

            {/* Stats card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 min-w-0 md:min-w-[260px]">
              <p className="text-white/60 text-sm mb-2 font-light">Retention boost</p>
              <p className="text-4xl md:text-6xl font-light text-white mb-1">3×</p>
              <p className="text-white/50 text-sm font-light">more information retained vs traditional study</p>
              <div className="mt-4 md:mt-6 flex gap-2">
                {[80, 60, 90, 75, 95, 70, 88].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/20 rounded-full overflow-hidden flex flex-col-reverse" style={{ height: '48px' }}>
                    <div className="bg-white rounded-full" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle glow */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 pointer-events-none" />
      </div>
    </>
  );
};

export default Benefits;
