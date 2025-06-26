import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setActiveTab } from '../store/ui/uiSlice';
// import { Outlet } from 'react-router-dom';

// Import your existing components
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import MainContent from './layout/MainContent';

const VibeSyncApp = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector(state => state.ui);

  // Sample data (move this to your store later)
  const posts = [
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: '👩‍🎨',
      time: '2h ago',
      content: 'I believe that traveling solo is one of the most liberating experiences. It teaches you independence and helps you discover who you really are.',
      image: null,
      avgScore: 3.2,
      responses: 847,
      userScore: null
    },
    {
      id: 2,
      author: 'Marcus Johnson',
      avatar: '👨‍💼',
      time: '4h ago',
      content: 'Work-life balance is overrated. I think passion-driven work naturally creates its own balance.',
      image: '🏢',
      avgScore: -1.8,
      responses: 1203,
      userScore: null
    },
    {
      id: 3,
      author: 'Elena Rodriguez',
      avatar: '👩‍🍳',
      time: '6h ago',
      content: 'Cooking is an art form. Every meal should be an experience that engages all your senses.',
      image: '🍳',
      avgScore: 4.1,
      responses: 592,
      userScore: null
    }
  ];

  const matches = [
    { id: 1, name: 'Alex', avatar: '👨‍🎨', compatibility: 94, commonTopics: ['Travel', 'Art', 'Philosophy'] },
    { id: 2, name: 'Maya', avatar: '👩‍🔬', compatibility: 89, commonTopics: ['Science', 'Environment', 'Books'] },
    { id: 3, name: 'David', avatar: '👨‍🏫', compatibility: 87, commonTopics: ['Education', 'Music', 'History'] }
  ];

  const handleSetTab = (tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="app-container">
      <Header />
      
      <div className="main-layout">
        <Navigation activeTab={activeTab} setActiveTab={handleSetTab}/>
        <MainContent activeTab={activeTab} posts={posts} matches={matches} />
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default VibeSyncApp;