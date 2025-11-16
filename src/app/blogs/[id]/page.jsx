import React from 'react'
import { blogs } from '../../../data/blogs.js'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const blogId = parseInt(id);
  const blog = blogs.find(b => b.id === blogId);
  
  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/blogs"
          className="inline-flex items-center mb-6"
        >
          ← Back to Blogs
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-gray-500">
                {blog.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8 pb-6 border-b">
              <span className="mr-4">By {blog.author}</span>
              <span>•</span>
              <span className="ml-4">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div 
              className="max-w-none text-gray-700 leading-relaxed blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
