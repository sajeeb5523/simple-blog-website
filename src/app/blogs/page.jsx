import React from 'react'
import { blogs } from '../../data/blogs.js'
import Link from 'next/link'

export default function BlogsPage() {
  return (
    <div className="mb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Blog
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col h-full ">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-semibold">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {blog.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                
                <Link
                  href={`/blogs/${blog.id}`}
                  className="mt-auto inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
