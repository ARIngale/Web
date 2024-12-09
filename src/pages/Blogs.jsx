import React, { useState } from 'react';
import { blogPosts } from '../constants/index';

const BlogsPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [likes, setLikes] = useState({});

  const handleLike = (e, postId) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1,
    }));
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 mt-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">Recent posts</h1>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-700 flex flex-col h-full"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-2 line-clamp-3">{post.excerpt}</p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                  <div className="flex items-center gap-2">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <button
                    className="text-purple-400 hover:text-purple-300 flex items-center"
                    onClick={(e) => handleLike(e, post.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{(likes[post.id] || 0) + post.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
            />
            
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
              {selectedPost.title}
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="bg-purple-800 text-white text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 text-sm mb-4">{selectedPost.content}</p>
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-800">
              <div className="text-xs text-gray-400">
                {selectedPost.readTime} • {selectedPost.category}
              </div>
              <button
                className="text-purple-400 hover:text-purple-300 flex items-center"
                onClick={(e) => handleLike(e, selectedPost.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{(likes[selectedPost.id] || 0) + selectedPost.likes}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;

