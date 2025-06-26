import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { matchesAPI } from './matchesAPI';

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async (_, { rejectWithValue }) => {
    try {
      const data = await matchesAPI.getMatches();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const calculateCompatibility = createAsyncThunk(
  'matches/calculateCompatibility',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await matchesAPI.calculateCompatibility(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const matchesSlice = createSlice({
  name: 'matches',
  initialState: {
    potentialMatches: [],
    activeConnections: [],
    compatibility: {},
    algorithm: {
      weights: {
        personality: 0.4,
        interests: 0.3,
        values: 0.3,
      }
    },
    loading: false,
    error: null,
  },
  reducers: {
    updateCompatibilityScore: (state, action) => {
      const { userId, score } = action.payload;
      state.compatibility[userId] = score;
    },
    connectWithUser: (state, action) => {
      const user = action.payload;
      state.activeConnections.push(user);
      state.potentialMatches = state.potentialMatches.filter(
        m => m.id !== user.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.potentialMatches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateCompatibilityScore, connectWithUser } = matchesSlice.actions;
export default matchesSlice.reducer;