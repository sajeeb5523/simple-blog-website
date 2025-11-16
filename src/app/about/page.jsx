import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">    
        <div className="rounded-lg overflow-hidden">
          <div className="mt-20 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              About Our Blog
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to our blog, a platform dedicated to sharing inspiring personal journeys and meaningful Islamic insights. 
                  We believe in the power of storytelling to connect hearts and minds, creating a community where faith and 
                  modern life harmoniously coexist.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to provide content that uplifts, educates, and inspires readers to navigate life's challenges 
                  with faith, purpose, and resilience.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Share</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Journey Stories</h3>
                    <p className="text-gray-700">
                      Real-life experiences of personal growth, career transitions, overcoming challenges, and finding purpose 
                      through faith and determination.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Islamic Insights</h3>
                    <p className="text-gray-700">
                      Practical guidance on applying Islamic principles in daily life, spiritual development, and maintaining 
                      balance in the modern world.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Authenticity:</strong> We share genuine stories and experiences that resonate with real life.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Faith-Based:</strong> All content aligns with Islamic values and principles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Inclusivity:</strong> We welcome readers from all backgrounds who seek inspiration and knowledge.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Growth:</strong> We believe in continuous learning and personal development.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We love hearing from our readers! Whether you have a story to share, feedback on our content, 
                  or questions about faith and life's journey, we're here to listen.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> simpleblogs@gmail.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Social Media:</strong> Follow us on Facebook, Twitter, and Instagram
                  </p>
                  <p className="text-gray-700">
                    <strong>Community:</strong> Join our growing family of readers and contributors
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/blogs"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Our Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
