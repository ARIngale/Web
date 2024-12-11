import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../constants/Data';
import LikeButton from '../components/LikeButton';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id.toString() === id);
    if (foundPost) {
      setPost(foundPost);
      setLikes(foundPost.likes);
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
      setHasLiked(likedPosts.includes(id));
    }
  }, [id]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prevLikes => prevLikes + 1);
      setHasLiked(true);
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
      localStorage.setItem('likedPosts', JSON.stringify([...likedPosts, id]));
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Article not found</h1>
          <Link to="/blogs" className="text-cyan-300 hover:text-cyan-400">
            Return to Articles
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content) => {
    return content
      .replace(/\[.*?\]/g, "") // Remove all bracketed names like [first para], [second para], etc.
      .split("\n") // Split the content by newlines for paragraph separation
      .map((part, index) => {
        if (part.trim()) {
          // Only render non-empty paragraphs
          return <p key={index} className="mb-6 leading-relaxed">{part.trim()}</p>;
        }
        return null;
      })
      .filter(Boolean); // Remove null values from the resulting array
  };
  

  return (
    <div className="min-h-screen bg-transparent text-gray-100 py-12 mt-24">
      <div className="max-w-4xl mx-auto px-4"> 
        <Link to="/blogs" className="inline-block mb-6 text-cyan-300 hover:text-cyan-400 transition-colors">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Articles
          </span>
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-cyan-400 mb-4 leading-tight">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="text-sm text-gray-400 mb-4">
              <span>{post.readTime}</span> • <span>{post.category}</span> • <span>Published on {new Date().toLocaleDateString()}</span>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          </header>

          <div className="prose prose-invert max-w-none">
            {formatContent(post.content)}
          </div>
          
          <footer className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {/* Written by  */}
              </div>
              {/* <LikeButton likes={post.likes}/> */}
              <LikeButton postId={post.id} initialLikes={post.likes || 0} />

            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;

