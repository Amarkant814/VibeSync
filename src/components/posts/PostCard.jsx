import React from 'react'
import { CommunityScore, PostActions, PostContent, PostHeader, ScoreSlider } from '../index';

const PostCard = ({ post }) => (
  <div className="post-card">
    <PostHeader author={post.author} avatar={post.avatar} time={post.time} />
    <PostContent content={post.content} image={post.image} />
    <CommunityScore avgScore={post.avgScore} responses={post.responses} />
    <ScoreSlider postId={post.id} onScoreChange={(id, score) => console.log(`Post ${id}: ${score}`)} />
    <PostActions />
  </div>
);

export default PostCard