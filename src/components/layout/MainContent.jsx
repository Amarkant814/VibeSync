import React from 'react'
import {CommunitiesContent, CreateContent, FeedContent, MatchesContent} from '../index';
import CollectionsPage from '../collections/CollectionsPage';

const MainContent = ({ activeTab, posts, matches }) => {
  const renderContent = () => {
    switch(activeTab) {
      case 'feed':
        return <FeedContent posts={posts} />;
      case 'matches':
        return <MatchesContent matches={matches} />;
      case 'communities':
        return <CommunitiesContent />;
      case 'create':
        return <CollectionsPage />;
      default:
        return null;
    }
  };

  return (
    <main className="main-content">
      <div className="content-wrapper">
        {renderContent()}
      </div>
    </main>
  );
};

export default MainContent