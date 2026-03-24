import React from 'react'

const Benifit2 = () => {
  return (
    <div className='h-screen text-white benifit-2 fixed top-0 left-0 right-0 z-40 overflow-hidden flex flex-col justify-between px-16 py-12 rounded-3xl' style={{ background: 'linear-gradient(135deg, #0028a0 0%, #0040c1 50%, #1a5cff 100%)' }}>
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-white/70 text-sm font-light tracking-widest uppercase">Benefit 03</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>

      {/* Center content */}
      <div className="flex items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-light leading-tight mb-6">
            Real-time<br />
            <span className="text-white/60">Progress Tracking</span>
          </h2>
          <p className="text-white/80 text-xl font-light leading-relaxed max-w-md">
            See exactly where you stand with beautiful progress dashboards. Identify weak spots, celebrate wins, and stay motivated every step of the way.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <button className="bg-white text-[#0040c1] px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors">
              Start Tracking Free
            </button>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=4" alt="" className="w-9 h-9 rounded-full border-2 border-white/30" />
                <img src="https://i.pravatar.cc/40?img=5" alt="" className="w-9 h-9 rounded-full border-2 border-white/30" />
                <img src="https://i.pravatar.cc/40?img=6" alt="" className="w-9 h-9 rounded-full border-2 border-white/30" />
              </div>
              <span className="text-white/70 text-sm font-light">+10k learners tracking</span>
            </div>
          </div>
        </div>

        {/* Progress widget */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[260px] flex flex-col gap-5">
          <p className="text-white/60 text-xs tracking-widest uppercase font-light">Weekly snapshot</p>

          {[
            { label: 'Vocabulary', pct: 82, color: 'bg-white' },
            { label: 'Grammar', pct: 65, color: 'bg-white/60' },
            { label: 'Reading', pct: 91, color: 'bg-white' },
            { label: 'Listening', pct: 48, color: 'bg-white/40' },
          ].map(({ label, pct, color }) => (
            <div key={label}>
              <div className="flex justify-between mb-1">
                <span className="text-white/80 text-xs font-light">{label}</span>
                <span className="text-white/50 text-xs">{pct}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}

          <div className="mt-2 flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
            <div className="w-6 h-6 rounded-full bg-green-400/80 flex items-center justify-center text-xs">↑</div>
            <p className="text-white/80 text-xs font-light">Up 18% from last week</p>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[60vw] h-40 bg-white rounded-full blur-3xl opacity-10 pointer-events-none" />
    </div>
  )
}

export default Benifit2
