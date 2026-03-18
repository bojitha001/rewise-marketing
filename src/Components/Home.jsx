import heroimg from "../../public/HeroRewise.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const scrollTextRef = useRef(null);

  useEffect(() => {
    if (scrollTextRef.current) {
      const textWidth = scrollTextRef.current.offsetWidth;
      const containerWidth = scrollTextRef.current.parentElement.offsetWidth;

      // Create infinite horizontal scroll animation
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
      <div className="grid grid-cols-3 h-[40vh] px-24 mt-48">
        <div className="col-span-2 grid grid-cols-[2fr_1fr] relative">
          <img
            className="absolute left-50 translate-x-8/20 translate-y-10 h-150 z-20"
            src={heroimg}
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div className="text-6xl flex flex-col gap-2">
              <p>Learn Smarter</p>
              <p>Grow Faster</p>
              <div className="flex items-center">
                <hr className="flex-1 border-gray-500 border-t-2" />
                <p className="ml-4 text-gray-500">With Rewise Today</p>
              </div>
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

          <div className=""></div>
        </div>

        <div className="col-span-1 p-6 flex flex-col justify-between">
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
            <p className="text-lg font-light w-[20vw]">
              Simplify your learning journey. Our intuitive app makes mastering
              concepts effortless.
            </p>
          </div>

          <div className="mt-6 w-[20vw]">
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
              <span className="font-medium text-3xl">+500</span>
            </div>
            <p className="text-xs text-gray-600 mb-3 font-light ">
              Trusted by thousands of learners
            </p>
          </div>
        </div>
      </div>

      <div className="h-[80vh] px-24 mt-18">
        <div className="h-[70vh] bg-gradient-to-b from-blue-800 to-blue-600 rounded-3xl relative overflow-hidden ">
          
          <div className="overflow-hidden w-full mt-15">
            <div className="flex gap-8 whitespace-nowrap" ref={scrollTextRef}>

              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
              <div className="flex items-center">
                <span className="text-9xl font-bold text-white">REWISE</span>
                <span className="text-6xl font-bold text-white">•</span>
              </div>
            </div>
          </div>

          {/* App Download Section Inside Blue Box */}
          <div className="relative z-10 text-center mt-24">
            <h2 className="text-3xl font-bold text-white mb-4">Download Our App Today</h2>
            <p className="text-lg text-white max-w-2xl mx-auto mb-8">
              Learn smarter, grow faster with Rewise. Get instant access to thousands of learning resources.
            </p>

            {/* Download Buttons */}
            <div className="flex justify-center gap-6 flex-wrap">
              {/* App Store Button */}
              <a href="#" className="flex items-center gap-3 bg-white text-black px-3 h-15 rounded-lg hover:bg-gray-100 transition duration-200 font-semibold">
                {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.64.94-1.64 2.05 0 1.12.73 2.05 1.64 2.05s1.64-.93 1.64-2.05c0-1.11-.73-2.05-1.64-2.05zM16.56 5.44c.5 0 1-.23 1.35-.65.34-.41.56-.95.56-1.55 0-.6-.22-1.14-.57-1.55C17.56 1.23 17.06 1 16.56 1c-.5 0-1 .23-1.35.65-.34.41-.56.95-.56 1.55 0 .6.22 1.14.57 1.55.34.42.84.65 1.34.65zM8.88 7.72c0-1.66-1.35-3.01-3.01-3.01s-3.01 1.35-3.01 3.01c0 1.66 1.35 3.01 3.01 3.01s3.01-1.35 3.01-3.01zM15.04 10.6c0-.82.67-1.5 1.5-1.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5z"/>
                </svg> */}
                <div className="h-10 w-10 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-light">Download on</p>
                  <p className="font-medium text-2xl">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a href="#" className="flex items-center gap-3 bg-white text-black px-3 h-15 rounded-lg hover:bg-gray-100 transition duration-200 font-semibold">
                {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.798 12 3.609 22.186a1.004 1.004 0 01-.609-.928V2.742c0-.383.22-.743.609-.928zm1.572-.756L17.589 12 5.181 22.942l11.224-10.942L5.181 1.058z"/>
                </svg> */}
                <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-light">GET IT ON</p>
                  <p className="font-medium text-2xl">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Left Gradient Overlay */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-800 to-transparent pointer-events-none"></div>
          
          {/* Right Gradient Overlay */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-blue-800 to-transparent pointer-events-none"></div>

          {/* Glowing sun circle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-130 h-80 bg-white rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
