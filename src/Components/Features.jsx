import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".features-section",
      start: "top bottom",
      onEnter: () =>
        gsap.to(
          [".benifit-section", ".benifit-1", ".benifit-2"],
          { autoAlpha: 0, duration: 0.4, ease: "power2.out", pointerEvents: "none" }
        ),
      onLeaveBack: () =>
        gsap.to(
          [".benifit-section", ".benifit-1", ".benifit-2"],
          { autoAlpha: 1, duration: 0.4, ease: "power2.out", pointerEvents: "auto" }
        ),
    });

    // Staggered card entrance
    gsap.fromTo('.feature-card', 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        }
      }
    );
  })

  return (
    <div className='px-24 mt-24 pb-20 features-section relative z-100'>
      {/* Section Header */}
      <div className='text-center text-7xl font-light leading-20'>
        <p>Explore Our</p>
        <p className='text-[#0040c1]'>Standout Features</p>
      </div>
      <p className='text-center text-gray-400 text-lg font-light mt-4 max-w-xl mx-auto'>
        Everything you need to master any subject — powered by science, designed for you.
      </p>

      {/* Top Row — 2 large cards */}
      <div className='features-grid grid grid-cols-2 gap-5 mt-15'>

        {/* Card 1 — Practice Sessions */}
        <div className='feature-card rounded-3xl bg-[#0040c10d] border border-[#0040c115] p-10 flex flex-col justify-between min-h-[520px] group hover:bg-[#0040c118] transition-colors duration-500 relative overflow-hidden'>
          {/* Top visual — mock quiz UI */}
          <div className='flex-1 flex items-center justify-center'>
            <div className='w-full max-w-sm'>
              {/* Mini quiz card */}
              <div className='bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 mb-4'>
                <div className='flex items-center gap-2 mb-4'>
                  <div className='w-6 h-6 rounded-full bg-[#0040c1] flex items-center justify-center'>
                    <span className='text-white text-xs font-medium'>Q</span>
                  </div>
                  <span className='text-sm text-gray-400 font-light'>Question 4 of 20</span>
                  <div className='ml-auto flex gap-1'>
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`w-6 h-1.5 rounded-full ${i <= 3 ? 'bg-[#0040c1]' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <p className='text-sm font-medium text-gray-800 mb-4'>What is the derivative of sin(x)?</p>
                <div className='space-y-2'>
                  {['cos(x)', '-cos(x)', 'tan(x)', '-sin(x)'].map((opt, i) => (
                    <div key={i} className={`px-4 py-2.5 rounded-xl text-sm transition-all ${i === 0 ? 'bg-[#0040c1] text-white' : 'bg-gray-50 text-gray-600 border border-gray-100'}`}>
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
              {/* Streak indicator */}
              <div className='flex items-center gap-2 justify-center'>
                <div className='flex gap-1'>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className='w-2 h-2 rounded-full bg-[#0040c1]' />
                  ))}
                  <div className='w-2 h-2 rounded-full bg-gray-200' />
                  <div className='w-2 h-2 rounded-full bg-gray-200' />
                </div>
                <span className='text-xs text-gray-400 font-light'>5 streak 🔥</span>
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <p className='text-2xl font-normal mb-2'>Practice Sessions</p>
            <p className='text-base text-gray-400 font-light leading-relaxed max-w-xs'>
              Build confidence with guided quizzes, instant feedback, and adaptive difficulty.
            </p>
          </div>
        </div>

        {/* Card 2 — AI Flashcards */}
        <div className='feature-card rounded-3xl bg-[#0040c10d] border border-[#0040c115] p-10 flex flex-col justify-between min-h-[520px] group hover:bg-[#0040c118] transition-colors duration-500 relative overflow-hidden'>
          {/* Top — Label */}
          <div className='mt-2'>
            <p className='text-2xl font-normal mb-2'>AI-Generated Flashcards</p>
            <p className='text-base text-gray-400 font-light leading-relaxed max-w-xs'>
              Upload notes, and Rewise creates smart flashcards with key concepts automatically.
            </p>
          </div>

          {/* Visual — stacked flashcards */}
          <div className='flex-1 flex items-center justify-center relative'>
            {/* Back card */}
            <div className='absolute w-72 h-44 bg-white rounded-2xl shadow-md shadow-blue-100/30 rotate-[-4deg] translate-x-3 translate-y-2'>
              <div className='p-5 h-full flex flex-col'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-5 h-5 rounded bg-green-100 flex items-center justify-center'>
                    <span className='text-green-600 text-xs'>✓</span>
                  </div>
                  <span className='text-xs text-gray-300'>Mastered</span>
                </div>
                <p className='text-sm text-gray-300 font-light leading-relaxed'>Mitochondria is the organelle responsible for producing ATP through cellular respiration.</p>
              </div>
            </div>
            {/* Front card */}
            <div className='relative w-72 h-44 bg-white rounded-2xl shadow-lg shadow-blue-100/50 rotate-[2deg] -translate-x-1 z-10'>
              <div className='p-5 h-full flex flex-col justify-between'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 rounded bg-[#0040c115] flex items-center justify-center'>
                      <span className='text-[#0040c1] text-xs'>⚡</span>
                    </div>
                    <span className='text-xs text-gray-400 font-light'>Biology</span>
                  </div>
                  <span className='text-xs text-[#0040c1] bg-[#0040c110] px-2 py-0.5 rounded-full'>New</span>
                </div>
                <div className='text-center'>
                  <p className='text-base font-medium text-gray-800'>What is the powerhouse of the cell?</p>
                </div>
                <div className='flex justify-center'>
                  <span className='text-xs text-gray-300 font-light'>Tap to reveal →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className='flex gap-6 mt-4'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-[#0040c1]' />
              <span className='text-xs text-gray-400 font-light'>142 cards generated</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-green-400' />
              <span className='text-xs text-gray-400 font-light'>89 mastered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row — 1 wide + 1 CTA */}
      <div className='grid grid-cols-[2fr_500px] gap-5 mt-5'>

        {/* Card 3 — Analytics Dashboard */}
        <div className='feature-card rounded-3xl bg-[#0040c10d] border border-[#0040c115] p-10 min-h-[380px] relative overflow-hidden group hover:bg-[#0040c118] transition-colors duration-500'>
          <div className='flex gap-12 h-full'>
            {/* Left content */}
            <div className='flex flex-col justify-center max-w-sm'>
              <p className='text-2xl font-normal mb-2'>Study Analytics</p>
              <p className='text-base text-gray-400 font-light leading-relaxed'>
                Deep insights into your learning patterns. Know your peak hours, strongest topics, and areas that need attention.
              </p>
              <div className='flex gap-3 mt-6'>
                <div className='bg-white rounded-xl px-4 py-3 shadow-sm'>
                  <p className='text-2xl font-light text-[#0040c1]'>4.2<span className='text-sm text-gray-300 ml-1'>hrs</span></p>
                  <p className='text-xs text-gray-400 font-light mt-1'>Avg. daily study</p>
                </div>
                <div className='bg-white rounded-xl px-4 py-3 shadow-sm'>
                  <p className='text-2xl font-light text-[#0040c1]'>87<span className='text-sm text-gray-300 ml-1'>%</span></p>
                  <p className='text-xs text-gray-400 font-light mt-1'>Consistency score</p>
                </div>
                <div className='bg-white rounded-xl px-4 py-3 shadow-sm'>
                  <p className='text-2xl font-light text-[#0040c1]'>12</p>
                  <p className='text-xs text-gray-400 font-light mt-1'>Day streak</p>
                </div>
              </div>
            </div>

            {/* Right — mini chart */}
            <div className='flex-1 flex items-end justify-center gap-3 pb-6'>
              {[
                { day: 'Mon', h: 65 },
                { day: 'Tue', h: 80 },
                { day: 'Wed', h: 45 },
                { day: 'Thu', h: 90 },
                { day: 'Fri', h: 70 },
                { day: 'Sat', h: 55 },
                { day: 'Sun', h: 85 },
              ].map(({ day, h }) => (
                <div key={day} className='flex flex-col items-center gap-2'>
                  <div className='w-8 rounded-xl bg-gradient-to-t from-[#0040c1] to-[#4d80ff] transition-all duration-500 group-hover:opacity-100 opacity-70' style={{ height: `${h * 2.2}px` }} />
                  <span className='text-xs text-gray-300 font-light'>{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4 — CTA "Get the App" */}
        <div className='feature-card rounded-3xl bg-[#0040c1] relative overflow-hidden min-h-[380px] flex flex-col justify-between p-10 group'>
          {/* Floating elements */}
          <div className='absolute top-8 right-8 flex gap-2'>
            <div className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center'>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Center content */}
          <div className='flex-1 flex flex-col items-center justify-center text-center'>
            {/* App icon mockup */}
            <div className='w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500'>
              <span className='text-3xl font-light text-white'>R</span>
            </div>
            <p className='text-4xl text-white font-light mb-3'>Get the App</p>
            <p className='text-white/60 text-sm font-light max-w-[200px]'>Available on iOS and Android. Learn anywhere, anytime.</p>
          </div>

          {/* Download buttons */}
          <div className='flex gap-3 justify-center'>
            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2 hover:bg-white/25 transition-colors cursor-pointer'>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className='text-left'>
                <p className='text-[9px] text-white/60 leading-none'>Download on</p>
                <p className='text-xs text-white font-medium leading-tight'>App Store</p>
              </div>
            </div>
            <div className='bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2 hover:bg-white/25 transition-colors cursor-pointer'>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.445 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-1.945 1.132-2.512-2.507 2.155-2.307zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className='text-left'>
                <p className='text-[9px] text-white/60 leading-none'>GET IT ON</p>
                <p className='text-xs text-white font-medium leading-tight'>Google Play</p>
              </div>
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute -bottom-32 -right-32 w-130 h-80 bg-white rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#4d80ff] rounded-full blur-3xl opacity-20 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default Features
