import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from './AuthGuard';

import Login from '../pages/Login';
import Home from '../pages/Home';

export default function () {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        exact
        path="/"
        element={
          <AuthGuard>
            <Home />
          </AuthGuard>
        }
      />
    </Routes>
  );
}
