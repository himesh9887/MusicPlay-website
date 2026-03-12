import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check for existing auth token on mount
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    const savedUser = localStorage.getItem('user_data');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Login function - simulates API call
  const login = async (email, password) => {
    try {
      // Simulate API validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser = {
        id: '1',
        email,
        username: email.split('@')[0],
        fullName: 'Music Lover',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
        bio: 'Passionate about music',
        location: 'New York, NY',
        favoriteGenre: 'Pop, Rock, Jazz',
        favoriteArtist: 'The Weeknd',
        socialLinks: {
          twitter: '',
          instagram: '',
        },
      };

      const token = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      
      setUser(mockUser);
      setIsAuthenticated(true);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Invalid credentials' };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: '1',
        email: userData.email,
        username: userData.username,
        fullName: userData.fullName,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
        bio: '',
        location: '',
        favoriteGenre: '',
        favoriteArtist: '',
        socialLinks: {
          twitter: '',
          instagram: '',
        },
      };

      const token = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      
      setUser(mockUser);
      setIsAuthenticated(true);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Update user profile
  const updateProfile = async (updates) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...user, ...updates };
      localStorage.setItem('user_data', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Update failed' };
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};