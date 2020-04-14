import React, {useState, useEffect, useContext} from 'react';
import { authApi} from '../services/api';
export const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({
  children
}) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('@versusauthtoken');
      setToken(token);
      if (token) {
        const user = await getUser(token);
        setUser(user);
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const getUser = async (token) => {
    return await authApi.get('/me', {
      headers: { Authorization: `Bearer ${token}`}
    });
  }

  return (
    <AuthContext.Provider value={{ user, loading, token}}>
      {children}
    </AuthContext.Provider>
  )
}
