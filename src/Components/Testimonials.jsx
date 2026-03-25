import React from 'react'

const Testimonials = () => {
  const data = [
    {
      name: "Alexa Young, CA",
      text: "Testimonials provide a sense of what it's like to work with you or use your products."
    },
    {
      name: "Morgan James, NY",
      text: "A great testimonial can boost your brand’s image."
    },
    {
      name: "Lisa Driver, MI",
      text: "Have customers review you and share what they had to say."
    }
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 md:mb-16 gap-4 md:gap-0">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15]">
            <p>What</p>
            <p className="text-[#0040c1]">Our Users Say</p>
          </div>
          <div className="max-w-xs md:mt-4">
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              Discover how Rewise is making a difference in the learning journey.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300 bg-[#0040c10d] hover:bg-[#0040c118] border border-[#0040c115] p-6 lg:p-8 flex flex-col h-full"
            >
              <div className="text-6xl md:text-7xl text-[#0040c1] opacity-20 font-serif leading-none mb-2 md:mb-4">
                "
              </div>

              <p className="text-gray-800 font-light leading-relaxed text-sm lg:text-base italic flex-grow">
                "{item.text}"
              </p>
              
              <div className="mt-8 pt-6 border-t border-[#0040c115] flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0040c1] text-white flex items-center justify-center text-sm md:text-base font-medium flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900">
                    {item.name.split(',')[0]}
                  </h3>
                  <p className="text-[#0040c1] text-xs md:text-sm mt-0.5">
                    {item.name.split(',')[1]?.trim() || "Customer"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
