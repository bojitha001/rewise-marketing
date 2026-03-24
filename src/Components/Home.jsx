import heroimg from "../../public/HeroRewise.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const scrollTextRef = useRef(null);

  useEffect(() => {
    if (scrollTextRef.current) {
      const containerWidth = scrollTextRef.current.parentElement.offsetWidth;

      gsap.to(scrollTextRef.current, {
        x: -containerWidth,
        duration: 60,
        ease: "none",
        repeat: -1,
        repeatType: "loop",
      });
    }
  }, []);
  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 min-h-[40vh] px-6 md:px-16 lg:px-24 mt-28 md:mt-36 lg:mt-48 gap-8 lg:gap-0">
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-[2fr_1fr] relative">
          <img
            className="hidden lg:block absolute left-50 translate-x-8/20 translate-y-10 h-150 z-20"
            src={heroimg}
            alt=""
          />
          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            <div className="text-4xl sm:text-5xl md:text-6xl flex flex-col gap-2">
              <p>Learn Smarter</p>
              <p>Grow Faster</p>
              <div className="flex items-center">
                <hr className="flex-1 border-gray-500 border-t-2" />
                <p className="ml-4 text-gray-500 text-2xl sm:text-3xl md:text-6xl">With Rewise Today</p>
              </div>
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

          <div className="hidden lg:block"></div>
        </div>

        <div className="col-span-1 p-0 lg:p-6 flex flex-col justify-between gap-6 lg:gap-0">
          <div>
            <svg
              className="w-8 h-8 mb-3 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="text-base md:text-lg font-light max-w-sm lg:w-[20vw]">
              Simplify your learning journey. Our intuitive app makes mastering
              concepts effortless.
            </p>
          </div>

          <div className="mt-4 lg:mt-6 max-w-sm lg:w-[20vw]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="User 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="User 2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="User 3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <span className="font-medium text-2xl md:text-3xl">+500</span>
            </div>
            <p className="text-xs text-gray-600 mb-3 font-light ">
              Trusted by thousands of learners
            </p>
          </div>
        </div>
      </div>

      {/* Blue Banner Section */}
      <div className="h-auto min-h-[60vh] md:h-[80vh] px-6 md:px-16 lg:px-24 mt-12 md:mt-18">
        <div className="h-full min-h-[50vh] md:h-[70vh] bg-gradient-to-b from-blue-800 to-blue-600 rounded-2xl md:rounded-3xl relative overflow-hidden">
          
          <div className="overflow-hidden w-full mt-8 md:mt-15">
            <div className="flex gap-4 md:gap-8 whitespace-nowrap" ref={scrollTextRef}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-5xl sm:text-7xl md:text-9xl font-bold text-white">REWISE</span>
                  <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">•</span>
                </div>
              ))}
            </div>
          </div>

          {/* App Download Section */}
          <div className="relative z-10 text-center mt-12 md:mt-28 px-6">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Download Our App Today</h2>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-6 md:mb-8">
              Learn smarter, grow faster with Rewise. Get instant access to thousands of learning resources.
            </p>

            {/* Download Buttons */}
            <div className="flex justify-center gap-4 md:gap-6 flex-wrap pb-8">
              <a href="#" className="flex items-center gap-3 bg-white text-black px-3 h-14 md:h-15 rounded-lg hover:bg-gray-100 transition duration-200 font-semibold">
                <div className="h-9 w-9 md:h-10 md:w-10 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-light">Download on</p>
                  <p className="font-medium text-xl md:text-2xl">App Store</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-3 bg-white text-black px-3 h-14 md:h-15 rounded-lg hover:bg-gray-100 transition duration-200 font-semibold">
                <div className="h-9 w-9 md:h-10 md:w-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-light">GET IT ON</p>
                  <p className="font-medium text-xl md:text-2xl">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-blue-800 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-blue-800 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-80 md:w-130 h-40 md:h-80 bg-white rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
