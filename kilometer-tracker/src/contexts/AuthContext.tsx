'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { User } from '@/lib/auth/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refetch: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else if (response.status === 401) {
        // Try to refresh the token
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          // Retry fetching user after refresh
          const retryResponse = await fetch('/api/auth/me');
          if (retryResponse.ok) {
            const data = await retryResponse.json();
            setUser(data.user);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshAccessToken = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
      });
      return response.ok;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return false;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // Remove user dependency to prevent infinite loop

  useEffect(() => {
    // Set up automatic token refresh every 14 minutes (before 15min expiry)
    const refreshInterval = setInterval(async () => {
      if (user) {
        await refreshAccessToken();
      }
    }, 14 * 60 * 1000); // 14 minutes

    return () => clearInterval(refreshInterval);
  }, [user]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
      }

      const data = await response.json();

      // Store token in localStorage for Apollo Client
      if (data.token) {
        localStorage.setItem('auth-token', data.token);
      }

      setUser(data.user);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const refetch = async () => {
    setLoading(true);
    await fetchUser();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthGuardProps {
  children: ReactNode;
  redirectTo?: string;
  fallback?: ReactNode;
}

export function AuthGuard({ children, redirectTo = '/login', fallback = null }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectTo);
    }
  }, [user, loading, router, redirectTo]);

  if (loading) {
    return <>{fallback}</>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}

interface AutoAuthGuardProps {
  children: ReactNode;
}

export function AutoAuthGuard({ children }: AutoAuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const publicRoutes = ['/login', '/not-found'];
  const isPublicRoute = publicRoutes.includes(pathname);

  useEffect(() => {
    if (!loading && !user && !isPublicRoute) {
      router.push('/login');
    }
  }, [user, loading, router, isPublicRoute]);

  if (isPublicRoute) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}