import React from 'react'
import {MatchCard} from '../index';

const MatchesContent = ({ matches }) => (
  <div className="matches-container">
    <div className="matches-header">
      <h2 className="matches-title">Your Mindset Matches</h2>
      <p className="matches-subtitle">People who think similarly to you based on your topic responses</p>
    </div>
    
    <div className="matches-grid">
      {matches.map(match => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  </div>
);

export default MatchesContent