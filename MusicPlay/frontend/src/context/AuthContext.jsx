import React, { createContext, useState } from 'react';

const storedUser = (() => {
  try {
    const rawUser = localStorage.getItem('user_data');
    return rawUser ? JSON.parse(rawUser) : null;
  } catch {
    return null;
  }
})();

const hasStoredSession = Boolean(localStorage.getItem('auth_token') && storedUser);

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(storedUser);
  const [isAuthenticated, setIsAuthenticated] = useState(hasStoredSession);
  const [loading] = useState(false);

  const login = async (email, _password) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

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

      const token = `mock_jwt_token_${Date.now()}`;

      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      setUser(mockUser);
      setIsAuthenticated(true);

      return { success: true };
    } catch {
      return { success: false, error: 'Invalid credentials' };
    }
  };

  const register = async (userData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

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

      const token = `mock_jwt_token_${Date.now()}`;

      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      setUser(mockUser);
      setIsAuthenticated(true);

      return { success: true };
    } catch {
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = async (updates) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const updatedUser = { ...user, ...updates };
      localStorage.setItem('user_data', JSON.stringify(updatedUser));
      setUser(updatedUser);

      return { success: true };
    } catch {
      return { success: false, error: 'Update failed' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
