import React from 'react'
import {CreatePostPrompt, PostCard} from '../../components/index';

const FeedContent = ({ posts }) => (
  <div className="feed-container">
    <CreatePostPrompt />
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default FeedContent