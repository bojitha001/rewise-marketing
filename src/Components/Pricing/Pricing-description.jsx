const PricingDescription = () => {
  return (
    <>
        <div className="h-[120vh] px-30 mt-18">
            <div className="h-[85vh] bg-gradient-to-b from-blue-300 to-blue-800 rounded-[50px] relative overflow-hidden text-center text-white">
                <div>
                    <div className="text-7xl font-regular mt-23">
                        <p>Your First Step Toward</p>
                        <p>Smarter Learning</p>
                        <p>Starts Here</p>
                    </div>
                    <img
                        src="/left-image.png"
                        alt="Left preview"
                        className="absolute left-10 bottom-0 w-64 md:w-72 lg:w-80 rotate-[-12deg] origin-bottom"
                    />
                    <img
                        src="/right-image.png"
                        alt="Right preview"
                        className="absolute right-10 bottom-0 w-64 md:w-72 lg:w-80 rotate-[12deg] origin-bottom"
                    />
                    <div className="mt-10">
                        <p className="">Unlock your potential. Start learning today and </p>
                        <p>take control of your future.</p>
                    </div>
                    <div className="flex justify-center gap-6 flex-wrap mt-20">
                        <a href="#" className="flex items-center gap-3 bg-white text-black px-3 h-15 rounded-lg hover:bg-gray-100 transition duration-200 font-semibold">
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
                        <a href="#" className="flex items-center gap-3 bg-white text-black px-3 h-15 rounded-lg hover:bg-gray-100 transition duration-200 font-semibold">
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
               
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-130 h-80 bg-white rounded-full blur-3xl opacity-30"></div>
            </div>
        </div>
        
    </>
  )
}

export default PricingDescription