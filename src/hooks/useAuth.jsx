
import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for active session on mount
    const getSession = async () => {
      setLoading(true);
      console.log('Checking for existing session...');
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error fetching session:', error.message);
      } else {
        console.log('Session data:', data);
      }
      
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // Set up listener for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email, password, fullName) => {
    try {
      console.log('Attempting to sign up user:', email);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        console.error('Sign up error:', error);
        toast.error(error.message);
        return;
      }

      console.log('Sign up successful:', data);
      if (data.user) {
        toast.success("Account created! Please check your email for verification.");
        navigate('/');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error('An error occurred during sign up. Please try again.');
    }
  };

  const signIn = async (email, password) => {
    try {
      console.log('Attempting to sign in user:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
        toast.error(error.message);
        return;
      }

      console.log('Sign in successful:', data);
      if (data.user) {
        toast.success('Successfully signed in!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('An error occurred during sign in. Please try again.');
    }
  };

  const signOut = async () => {
    try {
      console.log('Attempting to sign out user');
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Sign out error:', error);
        toast.error(error.message);
        return;
      }
      
      console.log('Sign out successful');
      toast.success('Successfully signed out');
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('An error occurred during sign out. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
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
