import React from 'react'

const PostContent = ({ content, image }) => (
  <div className="post-content-section">
    <p className="post-text">{content}</p>
    
    {image && (
      <div className="post-image">
        {image}
      </div>
    )}
  </div>
);

export default PostContent