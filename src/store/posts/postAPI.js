class PostsAPI {
  async getFeed(page = 1, limit = 10) {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockPosts = [
          {
            id: 1,
            author: 'Sarah Chen',
            avatar: '👩‍🎨',
            time: '2h ago',
            content: 'I believe that traveling solo is one of the most liberating experiences.',
            image: null,
            avgScore: 3.2,
            responses: 847,
          },
          // Add more mock posts...
        ];
        
        resolve({
          posts: mockPosts,
          page,
          hasMore: page < 3,
        });
      }, 500);
    });
  }

  async scorePost(postId, score) {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          newAverage: Math.random() * 10 - 5,
        });
      }, 300);
    });
  }

  async createPost(postData) {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now(),
          ...postData,
          author: 'You',
          time: 'now',
          avgScore: 0,
          responses: 0,
        });
      }, 1000);
    });
  }

  async getUserPosts(userId) {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => resolve([]), 500);
    });
  }
}

export const postsAPI = new PostsAPI();