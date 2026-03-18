import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Rewise?',
      answer: 'Rewise is an all-in-one learning platform designed to help you master your learning journey with innovative tools and resources.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply download the Rewise app from the App Store or Google Play, create an account, and start learning with thousands of resources.'
    },
    {
      question: 'Is Rewise free?',
      answer: 'Rewise offers both free and premium plans. You can start with the free plan and upgrade anytime for additional features.'
    },
    {
      question: 'Can I use Rewise offline?',
      answer: 'Yes, you can download courses and access them offline. Premium members have enhanced offline access to more content.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Your data is encrypted and stored securely on our servers. We comply with all international data protection standards.'
    },
    {
      question: 'What devices does Rewise support?',
      answer: 'Rewise is available on iOS, Android, and web browsers, allowing you to learn on any device.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-24 py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold" style={{ color: '#0040c1' }} >Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about Rewise</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4" style={{ borderColor: '#0040c1' }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform`}
                  style={{ color: '#0040c1' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-blue-50 border-t" style={{ borderColor: '#0040c1' }}>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
