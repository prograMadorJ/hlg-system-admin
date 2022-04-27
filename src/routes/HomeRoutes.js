import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Logout from '../pages/Logout';

export default function () {
  return (
    <Routes>
      <Route path="/">
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}
