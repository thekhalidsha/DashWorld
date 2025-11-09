import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { useAuth } from './context/AuthContext';
import LogoutPage from './pages/LogoutPage';

export default function AppRoutes() {
const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
      />
      <Route
        path="/home"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/logout"
        element={<LogoutPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
