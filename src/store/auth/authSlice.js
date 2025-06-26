import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from './authApi';

// Async thunks
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await authAPI.login(email, password);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await authAPI.signup(name, email, password);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const data = await authAPI.updateProfile(profileData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePreferences = createAsyncThunk(
  'auth/updatePreferences',
  async (preferences, { rejectWithValue }) => {
    try {
      const data = await authAPI.updatePreferences(preferences);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    preferences: {
      ageRange: [18, 35],
      maxDistance: 50,
      interestedIn: 'both',
      notifications: true,
    },
    profile: {
      bio: '',
      interests: [],
      photos: [],
      completed: false,
    }
  },
  reducers: {
    initializeAuth: (state) => {
      const savedUser = localStorage.getItem('vibesync_user');
      const savedToken = localStorage.getItem('vibesync_token');
      if (savedUser && savedToken) {
        state.user = JSON.parse(savedUser);
        state.token = savedToken;
        state.isAuthenticated = true;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setPreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    updateProfileField: (state, action) => {
      const { field, value } = action.payload;
      state.profile[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.preferences = action.payload.preferences || state.preferences;
        state.profile = action.payload.profile || state.profile;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update Profile
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = { ...state.profile, ...action.payload };
      })
      // Update Preferences
      .addCase(updatePreferences.fulfilled, (state, action) => {
        state.preferences = { ...state.preferences, ...action.payload };
      });
  },
});

export const { initializeAuth, clearError, logout, setPreferences, updateProfileField } = authSlice.actions;
export default authSlice.reducer;