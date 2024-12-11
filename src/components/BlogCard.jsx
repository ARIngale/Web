import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blogs/${post.id}`} className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-700 flex flex-col h-full">
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
          <LikeButton postId={post.id} initialLikes={post.likes} />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

