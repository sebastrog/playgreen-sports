import { createContext, useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../firebase'

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  loading: true,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  console.log('user', user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
