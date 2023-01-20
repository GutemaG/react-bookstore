import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => (
  <nav className="nav">
    <ul className="nav-items">
      <li className="nav-item nav-brand">
        <Link to="/" className="brand">Bookstore CMS</Link>
      </li>
      <li className="nav-item">
        <NavLink to="/">Books</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
    <button type="button" className="userIcon">
      <span>
        <i className="fa-solid fa-user user" />
      </span>
    </button>
  </nav>
);
export default NavBar;
