import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/Data';
import LikeButton from '../components/LikeButton';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-center bg-heading-bg text-transparent bg-clip-text text-5xl font-bold mt-24 mb-10">Blogs</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blogs/${post.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="bg-cyan-500 text-gray-900 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2 text-cyan-300 hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.readTime}</span>
                  {/* Pass post.id and post.likes to LikeButton */}
                  <LikeButton postId={post.id} initialLikes={post.likes || 0} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Innovative Feature: Featured Article Spotlight */}
        <div className="mt-16 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-3xl font-bold text-cyan-400 p-6">Featured Article</h2>
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-400 mb-4">{blogPosts[0].excerpt}</p>
              <Link 
                to={`/blogs/${blogPosts[0].id}`}
                className="inline-block bg-cyan-500 text-gray-900 font-bold py-2 px-4 rounded hover:bg-cyan-400 transition-colors duration-300"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;