import React, { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { initializeAuth } from '../store/auth/authSlice';

const AuthProvider = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Initialize authentication on app start
    dispatch(initializeAuth());
  }, [dispatch]);

  return children;
};

export default AuthProvider;