import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../store/hooks';

// Import your existing auth components
import AuthFlow from '../components/auth/AuthFlow';

const PublicRoutes = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to dashboard if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Routes>
      {/* Main auth flow */}
      <Route index element={<AuthFlow />} />
      
      {/* Catch all - redirect to main auth */}
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default PublicRoutes;