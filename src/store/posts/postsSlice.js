import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postsAPI } from './postAPI';

export const fetchFeed = createAsyncThunk(
  'posts/fetchFeed',
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const data = await postsAPI.getFeed(page, limit);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const scorePost = createAsyncThunk(
  'posts/scorePost',
  async ({ postId, score }, { rejectWithValue }) => {
    try {
      const data = await postsAPI.scorePost(postId, score);
      return { postId, score, ...data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData, { rejectWithValue }) => {
    try {
      const data = await postsAPI.createPost(postData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  'posts/fetchUserPosts',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await postsAPI.getUserPosts(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    feed: {
      items: [],
      loading: false,
      error: null,
      hasMore: true,
      currentPage: 1,
    },
    userPosts: {
      items: [],
      loading: false,
      error: null,
    },
    scoring: {
      userScores: {},
      loading: false,
    },
    creation: {
      loading: false,
      error: null,
    }
  },
  reducers: {
    clearFeed: (state) => {
      state.feed.items = [];
      state.feed.currentPage = 1;
      state.feed.hasMore = true;
    },
    updateLocalScore: (state, action) => {
      const { postId, score } = action.payload;
      state.scoring.userScores[postId] = score;
    },
    clearPostError: (state) => {
      state.feed.error = null;
      state.creation.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Feed
      .addCase(fetchFeed.pending, (state) => {
        state.feed.loading = true;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.feed.loading = false;
        if (action.payload.page === 1) {
          state.feed.items = action.payload.posts;
        } else {
          state.feed.items.push(...action.payload.posts);
        }
        state.feed.hasMore = action.payload.hasMore;
        state.feed.currentPage = action.payload.page;
      })
      .addCase(fetchFeed.rejected, (state, action) => {
        state.feed.loading = false;
        state.feed.error = action.payload;
      })
      // Score Post
      .addCase(scorePost.pending, (state) => {
        state.scoring.loading = true;
      })
      .addCase(scorePost.fulfilled, (state, action) => {
        state.scoring.loading = false;
        const { postId, score, newAverage } = action.payload;
        state.scoring.userScores[postId] = score;
        
        // Update post in feed
        const post = state.feed.items.find(p => p.id === postId);
        if (post && newAverage) {
          post.avgScore = newAverage;
          post.responses += 1;
        }
      })
      .addCase(scorePost.rejected, (state, action) => {
        state.scoring.loading = false;
      })
      // Create Post
      .addCase(createPost.pending, (state) => {
        state.creation.loading = true;
        state.creation.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.creation.loading = false;
        state.feed.items.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.creation.loading = false;
        state.creation.error = action.payload;
      })
      // User Posts
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.userPosts.items = action.payload;
        state.userPosts.loading = false;
      });
  },
});

export const { clearFeed, updateLocalScore, clearPostError } = postsSlice.actions;
export default postsSlice.reducer;