import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-lavender-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading VibeSync...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;