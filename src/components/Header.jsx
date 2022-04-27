import React from 'react';

import { Link } from 'react-router-dom';
import { HeaderContainer, Title, MenuContainer } from './styles/Header.style';
import Logo from './Logo';

export default function ({ title, menuItems }) {
  function Menu({ items }) {
    return (
      <MenuContainer>
        <ul>
          <div className="btn-menu">
            <i className="fa-solid fa-bars fa-2x"></i>
          </div>
          {items?.map((item, key) => (
            <li key={key}>
              <Link to={item.link}>
                <span>{item.text}</span>
                <span style={{ paddingLeft: '8px' }}>{item.icon()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </MenuContainer>
    );
  }

  return (
    <HeaderContainer>
      <Logo />
      <Title>{title}</Title>
      <Menu items={menuItems} />
    </HeaderContainer>
  );
}
