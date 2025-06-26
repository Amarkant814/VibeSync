class AuthAPI {
  async login(email, password) {
    // Mock API call - replace with actual endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'demo@vibesync.com' && password === 'demo123') {
          resolve({
            user: { id: 1, name: 'Demo User', email, avatar: '👤' },
            token: 'mock-jwt-token',
            preferences: { ageRange: [22, 30], maxDistance: 25 },
            profile: { bio: 'Love traveling and good vibes!', completed: true }
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  async signup(name, email, password) {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: { id: Date.now(), name, email, avatar: '👤' },
          token: 'mock-jwt-token'
        });
      }, 1000);
    });
  }

  async updateProfile(profileData) {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(profileData), 500);
    });
  }

  async updatePreferences(preferences) {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(preferences), 500);
    });
  }
}

export const authAPI = new AuthAPI();