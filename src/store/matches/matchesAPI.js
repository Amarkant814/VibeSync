class MatchesAPI {
  async getMatches() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Alex', avatar: '👨‍🎨', compatibility: 94 },
          { id: 2, name: 'Maya', avatar: '👩‍🔬', compatibility: 89 },
        ]);
      }, 800);
    });
  }

  async calculateCompatibility(userId) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ userId, score: Math.random() * 100 }), 500);
    });
  }
}

export const matchesAPI = new MatchesAPI();