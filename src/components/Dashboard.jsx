import { Bell, Heart, Settings, TrendingUp, Users } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-lavender-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🧠</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-lavender-600 bg-clip-text text-transparent">
                VibeSync
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.name}!</span>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to VibeSync!</h2>
          <p className="text-gray-600 mb-8">You are successfully logged in. This is where your main app content would go.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Feed</h3>
              <p className="text-gray-600">Discover posts and rate them</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Heart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Matches</h3>
              <p className="text-gray-600">Find your mindset matches</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Communities</h3>
              <p className="text-gray-600">Join like-minded groups</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard