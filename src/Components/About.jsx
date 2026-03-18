import React from "react";
import AboutCard from "../elements/AboutCard";

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-20 w-[80vw] relative">
        <AboutCard left="left-0" top="-top-20"/>
        <AboutCard right="right-0" top="top-5"/>
        <AboutCard bottom="-bottom-10" left="left-20"/>
        <AboutCard bottom="-bottom-20" right="right-30"/>
        <div className="flex flex-col items-center text-7xl font-light leading-18 text-[#0040c1]">
          <blockquote>Our app is an </blockquote>
          <blockquote>all-in-one solution for</blockquote>{" "}
          <blockquote> managing your learning </blockquote>
          <blockquote> and academic goals.</blockquote>
        </div>

        <div className="text-xl font-light flex flex-col items-center ">
          <div className="flex items-center gap-2 ">
            <p className="text-[#0040c1] text-sm">──────</p>
            <p className="">Experience the confidence that comes with</p>
            <p className="text-[#0040c1] text-sm">──────</p>
          </div>
          <p>mastering your learning journey</p>
        </div>

        <div className="flex items-center ">
          <button className="bg-blue-100 px-8 pr-18 py-4 rounded-full relative">
            <p className="text-lg text-[#0040c1]">Get Started Free</p>
            <div className="w-15 h-15 bg-[#0040c1] rounded-full absolute left-45 bottom-0 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white rotate-330"
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
