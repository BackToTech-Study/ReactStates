import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <h1>BackTo Tech</h1>
          </Link>
        </li>
        <li>
          <p className="navbarTitle">useState & Context</p>
        </li>
        <li>
          <Button text="Join us"></Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
