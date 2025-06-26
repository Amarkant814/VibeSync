import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import VibeSyncApp from './components/VibeSyncApp';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AuthFlow from './components/auth/AuthFlow';
import { MatchesContent } from './components';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthFlow />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <VibeSyncApp />
                </ProtectedRoute>
              } 
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;