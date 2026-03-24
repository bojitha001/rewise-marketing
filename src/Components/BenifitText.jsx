import React from 'react'

const BenifitText = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 md:py-20 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15]">
        <p>Experience The</p>
        <p className="text-[#0040c1]">Future of Learning</p>
      </div>
      <div className="flex flex-col justify-end gap-4 max-w-sm md:mt-6">
        <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed">
          Rewise transforms how you study — using smart, science-backed techniques that adapt to how you think and grow.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full bg-[#0040c1]" />
          <p className="text-sm text-[#0040c1] font-medium">Scroll to explore your benefits</p>
        </div>
      </div>
    </div>
  )
}

export default BenifitText
