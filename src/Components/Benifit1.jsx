import React from 'react'

const Benifit1 = () => {
  return (
    <div className='h-screen text-white benifit-1 fixed top-0 left-0 right-0 z-40 bg-black rounded-3xl overflow-hidden flex flex-col justify-between px-16 py-12'>
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white/50 text-sm font-light tracking-widest uppercase">Benefit 02</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div>

      {/* Center content */}
      <div className="flex items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-light leading-tight mb-6">
            Personalised<br />
            <span className="text-[#4d80ff]">AI Study Plans</span>
          </h2>
          <p className="text-white/60 text-xl font-light leading-relaxed max-w-md">
            No two learners are alike. Rewise builds a completely unique study schedule based on your goals, pace, and performance — and adapts it every day.
          </p>

          <div className="flex gap-6 mt-10">
            <div className="border border-white/10 rounded-2xl px-6 py-5 min-w-[140px]">
              <p className="text-3xl font-light text-white">92<span className="text-[#4d80ff]">%</span></p>
              <p className="text-white/40 text-xs mt-1 font-light">Goal completion rate</p>
            </div>
            <div className="border border-white/10 rounded-2xl px-6 py-5 min-w-[140px]">
              <p className="text-3xl font-light text-white">14<span className="text-[#4d80ff]">d</span></p>
              <p className="text-white/40 text-xs mt-1 font-light">Avg. to see improvement</p>
            </div>
            <div className="border border-white/10 rounded-2xl px-6 py-5 min-w-[140px]">
              <p className="text-3xl font-light text-white">∞</p>
              <p className="text-white/40 text-xs mt-1 font-light">Plans & subjects supported</p>
            </div>
          </div>
        </div>

        {/* Visual: AI path diagram */}
        <div className="bg-white/5 rounded-2xl p-8 min-w-[280px] flex flex-col gap-3">
          <p className="text-white/40 text-xs mb-2 tracking-widest uppercase font-light">Your adaptive path</p>
          {["Set your goals", "AI builds your plan", "Study smart daily", "Track & adapt", "Achieve mastery"].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${i < 3 ? 'bg-[#0040c1] text-white' : 'bg-white/10 text-white/30'}`}>
                {i < 3 ? '✓' : i + 1}
              </div>
              <span className={`text-sm font-light ${i < 3 ? 'text-white' : 'text-white/30'}`}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blue glow bottom left */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0040c1] rounded-full blur-3xl opacity-20 pointer-events-none" />
    </div>
  )
}

export default Benifit1
