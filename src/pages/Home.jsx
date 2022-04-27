import React from 'react';
import '../style.css';

import globals from '../globals';
import { AppContainer } from '../components/styles/App.style';
import Header from '../components/Header';
import DisplayWidth from '../components/utils/DisplayWidth';
import HomeRoutes from '../routes/HomeRoutes';

export default function () {

  const menu = [
    {
      text: 'Sair',
      link: '/logout',
      icon: () => <i className="fa-solid fa-right-from-bracket"></i>,
    },
  ],

  return (
    <AppContainer>
      <Header title={globals.AppTitle} menuItems={menu} />
      <HomeRoutes />
      <DisplayWidth />
    </AppContainer>
  );
}
