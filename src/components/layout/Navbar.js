import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Navbar = (props) => {
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
          <Link to="/application">
            <Button></Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
