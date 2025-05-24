
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Checking for existing session...');
    // Check for existing session
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      // Simulate checking for existing session
      const savedSession = localStorage.getItem('userSession');
      const sessionData = savedSession ? JSON.parse(savedSession) : null;
      
      console.log('Session data:', { session: sessionData });
      
      if (sessionData && sessionData.user) {
        setUser(sessionData.user);
        console.log('Auth state changed: EXISTING_SESSION', sessionData.user);
      } else {
        console.log('Auth state changed: INITIAL_SESSION', null);
      }
    } catch (error) {
      console.error('Error checking session:', error);
      console.log('Auth state changed: SESSION_ERROR', null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      // Simulate sign in
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = { 
        id: Math.random().toString(36).substr(2, 9),
        email,
        created_at: new Date().toISOString()
      };
      
      // Save session
      localStorage.setItem('userSession', JSON.stringify({ user: userData }));
      setUser(userData);
      console.log('Auth state changed: SIGNED_IN', userData);
      
      return userData;
    } catch (error) {
      console.error('Sign in error:', error);
      console.log('Auth state changed: SIGN_IN_ERROR', null);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email, password) => {
    try {
      setLoading(true);
      // Simulate sign up
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = { 
        id: Math.random().toString(36).substr(2, 9),
        email,
        created_at: new Date().toISOString()
      };
      
      // Save session
      localStorage.setItem('userSession', JSON.stringify({ user: userData }));
      setUser(userData);
      console.log('Auth state changed: SIGNED_UP', userData);
      
      return userData;
    } catch (error) {
      console.error('Sign up error:', error);
      console.log('Auth state changed: SIGN_UP_ERROR', null);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Clear session
      localStorage.removeItem('userSession');
      setUser(null);
      console.log('Auth state changed: SIGNED_OUT', null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
