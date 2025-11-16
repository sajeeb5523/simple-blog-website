import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Our Blog</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sharing inspiring journeys and Islamic insights to help you grow spiritually and navigate modern life with faith and purpose.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blogs" className="text-gray-300 hover:text-white transition-colors">
                  All Blogs
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: simpleblogs@gmail.com</p>
              <p>Follow us on social media</p>
              <div className="flex space-x-4 mt-3">
                <a href="www.facebook.com" className="text-gray-300 hover:text-white transition-colors">
                  <FaFacebook size={20} />
                </a>
                <a href="www.twitter.com" className="text-gray-300 hover:text-white transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="www.instagram.com" className="text-gray-300 hover:text-white transition-colors">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Our Blog. All rights reserved. Made with ❤️ for the community.</p>
        </div>
      </div>
    </footer>
  )
}
