import React, { useState } from 'react';

const LikeButton = ({ postId, initialLikes }) => {
  const [isLiked, setIsLiked] = useState(false); // Track whether the post is liked
  const [likes, setLikes] = useState(initialLikes); // Track the current like count

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLiked) {
      // If already liked, remove like
      setLikes(prevLikes => prevLikes - 1);
    } else {
      // If not liked, add like
      setLikes(prevLikes => prevLikes + 1);
    }

    setIsLiked(!isLiked); // Toggle the like state
  };

  return (
    <button
      className={`flex items-center ${isLiked ? "text-purple-600" : "text-purple-400 hover:text-purple-300"}`}
      onClick={handleLike}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill={isLiked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
