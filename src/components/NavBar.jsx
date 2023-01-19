import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/NavBar.module.css';

const NavBar = () => (
  <nav className="nav">
    <Link to="/" className="logo">Bookstore CMS</Link>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink to="/">Books</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);
export default NavBar;
