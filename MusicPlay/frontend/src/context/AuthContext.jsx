import React, { createContext, useState } from 'react';
import { demoUser } from '../data/musicData';

const DEMO_OPT_OUT_KEY = 'musicplay_demo_opt_out';

const getStoredSession = () => {
  try {
    const rawUser = localStorage.getItem('user_data');
    const storedUser = rawUser ? JSON.parse(rawUser) : null;
    const hasStoredSession = Boolean(localStorage.getItem('auth_token') && storedUser);

    if (hasStoredSession) {
      return {
        user: storedUser,
        isAuthenticated: true,
      };
    }

    if (localStorage.getItem(DEMO_OPT_OUT_KEY) === '1') {
      return {
        user: null,
        isAuthenticated: false,
      };
    }

    return {
      user: demoUser,
      isAuthenticated: true,
    };
  } catch {
    return {
      user: demoUser,
      isAuthenticated: true,
    };
  }
};

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const initialSession = getStoredSession();
  const [user, setUser] = useState(initialSession.user);
  const [isAuthenticated, setIsAuthenticated] = useState(initialSession.isAuthenticated);
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

      localStorage.removeItem(DEMO_OPT_OUT_KEY);
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

      localStorage.removeItem(DEMO_OPT_OUT_KEY);
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
    localStorage.setItem(DEMO_OPT_OUT_KEY, '1');
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
