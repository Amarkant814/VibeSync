import React from 'react'

const MatchCard = ({ match }) => (
  <div className="match-card">
    <div className="match-avatar">
      {match.avatar}
    </div>
    <h3 className="match-name">{match.name}</h3>
    <div className="compatibility-section">
      <div className="compatibility-score">{match.compatibility}%</div>
      <div className="compatibility-label">Compatibility</div>
    </div>
    <div className="topics-section">
      {match.commonTopics.map((topic, index) => (
        <span key={index} className="topic-tag">
          {topic}
        </span>
      ))}
    </div>
    <button className="connect-btn">
      Connect
    </button>
  </div>
);

export default MatchCard