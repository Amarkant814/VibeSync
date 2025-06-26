import { TrendingUp } from 'lucide-react';
import React from 'react'

const CommunityScore = ({ avgScore, responses }) => {
  const getScoreClass = (score) => {
    if (score > 0) return 'score-value-positive';
    if (score < 0) return 'score-value-negative';
    return 'score-value-neutral';
  };

  return (
    <div className="community-score-section">
      <div className="score-info">
        <div className="score-label-section">
          <TrendingUp className="score-icon" />
          <span className="score-label">Community Score:</span>
          <span className={getScoreClass(avgScore)}>
            {avgScore > 0 ? '+' : ''}{avgScore}
          </span>
        </div>
        <span className="responses-count">{responses} responses</span>
      </div>
    </div>
  );
};

export default CommunityScore