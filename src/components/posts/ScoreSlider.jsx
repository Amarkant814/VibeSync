import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react'

const ScoreSlider = ({ postId, onScoreChange }) => {
  const [score, setScore] = useState(null);
  
  const handleScoreChange = (newScore) => {
    setScore(newScore);
    onScoreChange(postId, newScore);
  };

  const getScoreColor = (score) => {
    if (score > 0) return '#10B981';
    if (score < 0) return '#EF4444';
    return '#6B7280';
  };

  // Generate score options from -5 to +5
  const scoreOptions = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

  return (
    <div className="score-slider-container">
      <div className="slider-controls">
        <div className="slider-endpoint">
          <ThumbsDown className="slider-icon slider-icon-disagree" />
          <span className="slider-label">Disagree</span>
        </div>
        
        <div className="slider-wrapper">
          {/* Score markers */}
          <div className="score-markers">
            {scoreOptions.map((value) => (
              <div key={value} className="score-marker-container">
                <button
                  type="button"
                  className={`score-marker ${score === value ? 'score-marker-selected' : 'score-marker-unselected'}`}
                  onClick={() => handleScoreChange(value)}
                  aria-label={`Score ${value}`}
                >
                  {score === value && (
                    <span className="score-marker-value" style={{color: getScoreColor(value)}}>
                      
                    </span>
                  )}
                </button>
                <div className="score-label-below">
                  {value === -5 && '-5'}
                  {value === 0 && '0'}
                  {value === 5 && '+5'}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="slider-endpoint">
          <ThumbsUp className="slider-icon slider-icon-agree" />
          <span className="slider-label">Agree</span>
        </div>
      </div>
      
      <div className="score-display">
        {score !== null ? (
          <span className="score-value" style={{color: getScoreColor(score)}}>
            {score > 0 ? '+' : ''}{score}
          </span>
        ) : (
          <span className="score-value-placeholder">Select your score</span>
        )}
      </div>
    </div>
  );
};

export default ScoreSlider