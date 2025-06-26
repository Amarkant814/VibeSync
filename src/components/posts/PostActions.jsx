import { MessageCircle, Share2 } from 'lucide-react';
import React from 'react'

const PostActions = () => (
  <div className="post-actions">
    <button className="action-btn">
      <MessageCircle className="action-icon" />
      <span className="action-text">Discuss</span>
    </button>
    <button className="action-btn">
      <Share2 className="action-icon" />
      <span className="action-text">Share</span>
    </button>
  </div>
);

export default PostActions