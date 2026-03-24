import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-700 py-10 md:py-12" style={{ backgroundColor: '#0040c1' }}>
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">REWISE</h3>
            <p className="text-sm leading-relaxed text-blue-100">
              Learn smarter, grow faster. Your all-in-one solution for managing your learning and academic goals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
              <li><a href="#" className="hover:text-white transition">Download</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-6 md:pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6 md:mb-8">
            <a href="#" className="text-blue-100 hover:text-white transition">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.16c0-2.77 1.69-4.28 4.16-4.28 1.18 0 2.2.09 2.5.13v2.9h-1.72c-1.35 0-1.61.64-1.61 1.59v2.08h3.22l-4.20 3.54V20H8.29z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs md:text-sm text-blue-100">
            <p>&copy; 2026 Rewise. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
