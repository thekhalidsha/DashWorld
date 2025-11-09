import React, { createContext, useContext, useState, useEffect } from 'react';

const AUTH_USER = { email: 'test@user.com', password: 'Password1!' };

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [error, setError] = useState(null);

  const login = ({ email, password }) => {
    if (
      email === AUTH_USER.email &&
      password === AUTH_USER.password
    ) {
      setIsAuthenticated(true);
      setError(null);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    } else {
      setIsAuthenticated(false);
      setError('Invalid email or password');
      localStorage.setItem('isAuthenticated', 'false');
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setError(null);
    localStorage.setItem('isAuthenticated', 'false');
  };

  useEffect(() => {
    const persisted = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(persisted);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
