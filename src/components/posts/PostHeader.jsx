import { Bookmark } from 'lucide-react';
import React from 'react'

const PostHeader = ({ author, avatar, time }) => (
  <div className="post-header">
    <div className="post-avatar">
      {avatar}
    </div>
    <div className="post-author-info">
      <h3 className="post-author-name">{author}</h3>
      <p className="post-time">{time}</p>
    </div>
    <button className="bookmark-btn">
      <Bookmark className="bookmark-icon" />
    </button>
  </div>
);

export default PostHeader