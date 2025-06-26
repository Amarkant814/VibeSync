import { Heart, Plus, TrendingUp, Users } from 'lucide-react';
import React from 'react'

const Navigation = ({ activeTab, setActiveTab }) => {
  const handleNav = (tab) => {
    if (setActiveTab) setActiveTab(tab);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button
          onClick={() => handleNav('feed')}
          className={`nav-button ${activeTab === 'feed' ? 'nav-button-active' : 'nav-button-inactive'}`}
        >
          <TrendingUp className="nav-icon" />
          <span className="nav-text">Feed</span>
        </button>
        
        <button
          onClick={() => handleNav('matches')}
          className={`nav-button ${activeTab === 'matches' ? 'nav-button-active' : 'nav-button-inactive'}`}
        >
          <Heart className="nav-icon" />
          <span className="nav-text">Matches</span>
        </button>
        
        <button
          onClick={() => handleNav('communities')}
          className={`nav-button ${activeTab === 'communities' ? 'nav-button-active' : 'nav-button-inactive'}`}
        >
          <Users className="nav-icon" />
          <span className="nav-text">Communities</span>
        </button>
        
        <button
          onClick={() => handleNav('create')}
          className={`nav-button ${activeTab === 'create' ? 'nav-button-active' : 'nav-button-inactive'}`}
        >
          <Plus className="nav-icon" />
          <span className="nav-text">Create</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation