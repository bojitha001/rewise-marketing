import React from 'react'

const BenifitText = () => {
  return (
    <div className="px-24 py-20 flex items-start justify-between">
      <div className="text-7xl font-light leading-[1.15]">
        <p>Experience The</p>
        <p className="text-[#0040c1]">Future of Learning</p>
      </div>
      <div className="flex flex-col justify-end gap-4 max-w-sm mt-6">
        <p className="text-gray-500 font-light text-lg leading-relaxed">
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
