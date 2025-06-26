import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../store/hooks';

// Import your existing components
import VibeSyncApp from '../components/VibeSyncApp';
import Dashboard from '../components/Dashboard';
import FeedContent from '../components/feed/FeedContent';
import MatchesContent from '../components/matches/MatchesContent';
import CommunitiesContent from '../components/pages/CommunitiesContent';
import CreateContent from '../components/pages/CreateContent';

// Import loading component
import LoadingScreen from './LoadingScreen';

const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return <LoadingScreen />;
  }

  // Redirect to auth if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Routes>
      {/* Main app routes - using your existing VibeSyncApp as layout */}
      <Route path="/" element={<VibeSyncApp />}>
        {/* Dashboard routes */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        
        {/* Feature routes - these will be handled by VibeSyncApp's internal state */}
        <Route path="feed" element={<VibeSyncApp />} />
        <Route path="matches" element={<VibeSyncApp />} />
        <Route path="communities" element={<VibeSyncApp />} />
        <Route path="create" element={<VibeSyncApp />} />
        
        {/* Catch all - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;