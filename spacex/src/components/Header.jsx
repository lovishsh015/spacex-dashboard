// Header.jsx
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SpaceX Dashboard</div>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/analytics">Analytics</NavLink>
      </nav>
    </header>
  );
};

export default Header;
