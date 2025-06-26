import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

// Import route components
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import AuthProvider from './AuthProvider';

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/auth/*" element={<PublicRoutes />} />
            
            {/* Private Routes */}
            <Route path="/*" element={<PrivateRoutes />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;