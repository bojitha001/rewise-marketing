import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Rewise?',
      answer: 'Rewise is an all-in-one learning platform designed to help you master your learning journey with innovative tools like AI flashcards, spaced repetition, and real-time progress tracking.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply download the Rewise app from the App Store or Google Play, create an account, and start learning with thousands of resources — completely free to begin.'
    },
    {
      question: 'Is Rewise free?',
      answer: 'Rewise offers both free and premium plans. The free plan includes core study tools, while premium unlocks AI-powered features, unlimited flashcards, and advanced analytics.'
    },
    {
      question: 'Can I use Rewise offline?',
      answer: 'Yes! Download your study materials and access them offline anytime. Premium members get enhanced offline access to all content and AI features.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Your data is encrypted end-to-end and stored securely. We comply with GDPR and all international data protection standards — your privacy is our priority.'
    },
    {
      question: 'What devices does Rewise support?',
      answer: 'Rewise works seamlessly on iOS, Android, and all modern web browsers. Your progress syncs automatically across every device.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 md:mb-16 gap-4 md:gap-0">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15]">
            <p>Frequently</p>
            <p className="text-[#0040c1]">Asked Questions</p>
          </div>
          <div className="max-w-xs md:mt-4">
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
            Can't find what you're looking for? Reach out to our support team anytime.
          </p>
            <div className="flex items-center gap-2 mt-3 md:mt-4">
              <div className="w-2 h-2 rounded-full bg-[#0040c1]" />
              <a href="#" className="text-sm text-[#0040c1] font-medium hover:underline">Contact Support</a>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'bg-[#0040c1]'
                  : 'bg-[#0040c10d] hover:bg-[#0040c118] border border-[#0040c115]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 md:px-8 md:py-6 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className={`text-xs md:text-sm font-light tabular-nums ${
                    openIndex === index ? 'text-white/50' : 'text-gray-300'
                  }`}>
                    0{index + 1}
                  </span>
                  <span className={`text-base md:text-lg font-light text-left ${
                    openIndex === index ? 'text-white' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-white/20 rotate-45' : 'bg-[#0040c115]'
                }`}>
                  <svg
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${
                      openIndex === index ? 'text-white' : 'text-[#0040c1]'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <div className="px-5 pb-4 md:px-8 md:pb-6">
                  <div className="pl-7 md:pl-9 border-l border-white/20 ml-1">
                    <p className="text-white/80 font-light leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0040c10d] border border-[#0040c115] rounded-2xl px-6 py-6 md:px-10 md:py-8">
          <div>
            <p className="text-lg md:text-xl font-normal">Still have questions?</p>
            <p className="text-gray-400 font-light text-xs md:text-sm mt-1">We're here to help you get started on your learning journey.</p>
          </div>
          <button className="bg-[#0040c1] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-medium text-sm hover:bg-[#003399] transition-colors w-full sm:w-auto text-center">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQ
