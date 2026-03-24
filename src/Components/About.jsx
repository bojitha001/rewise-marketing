import React from "react";
import AboutCard from "../elements/AboutCard";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-0 py-16 lg:py-0">
      <div className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20 w-full lg:w-[80vw] relative">
        <div className="hidden lg:block">
          <AboutCard left="left-0" top="-top-20"/>
          <AboutCard right="right-0" top="top-5"/>
          <AboutCard bottom="-bottom-10" left="left-20"/>
          <AboutCard bottom="-bottom-20" right="right-30"/>
        </div>
        <div className="flex flex-col items-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-snug md:leading-18 text-[#0040c1] text-center">
          <blockquote>Our app is an </blockquote>
          <blockquote>all-in-one solution for</blockquote>{" "}
          <blockquote> managing your learning </blockquote>
          <blockquote> and academic goals.</blockquote>
        </div>

        <div className="text-base md:text-xl font-light flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <p className="text-[#0040c1] text-sm hidden sm:block">──────</p>
            <p className="">Experience the confidence that comes with</p>
            <p className="text-[#0040c1] text-sm hidden sm:block">──────</p>
          </div>
          <p>mastering your learning journey</p>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-100 px-8 pr-18 py-4 rounded-full relative">
            <p className="text-base md:text-lg text-[#0040c1]">Get Started Free</p>
            <div className="w-12 h-12 md:w-15 md:h-15 bg-[#0040c1] rounded-full absolute left-40 md:left-45 bottom-0 flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white rotate-330"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
