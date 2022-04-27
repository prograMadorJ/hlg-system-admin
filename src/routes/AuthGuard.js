import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

export default function ({ children }) {

  const auth = useAuth();

  return !auth.isAuth ? (
    <Navigate to="/login" state={{ from: useLocation() }} replace />
  ) : (
    children
  );
}
