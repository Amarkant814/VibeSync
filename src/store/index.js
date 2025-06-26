import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

// Import feature-based reducers
import authReducer from './auth/authSlice';
import postsReducer from './posts/postsSlice';
import matchesReducer from './matches/matchesSlice';
import uiReducer from './ui/uiSlice';

// Persist configuration
const persistConfig = {
  key: 'vibesync',
  storage,
  whitelist: ['auth', 'ui'], // Persist auth and user preferences
};

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  matches: matchesReducer,
  ui: uiReducer
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);