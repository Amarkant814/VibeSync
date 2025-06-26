import { Heart } from 'lucide-react';
import React from 'react'

const Logo = () => (
  <div className="flex items-center justify-center mb-8">
    <div className="relative">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-lavender-400 rounded-2xl flex items-center justify-center shadow-lg">
        <Heart className="w-8 h-8 text-white" fill="white" />
      </div>
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">VS</span>
      </div>
    </div>
  </div>
);

export default Logo