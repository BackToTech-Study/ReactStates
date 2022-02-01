import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Navbar = () => {
  // read the context

  //context field value is read here
  let linkToJoinForm = 
    <Link to="/application">  
      <Button text="Join us" ></Button> 
    </Link>;

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
          {linkToJoinForm}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
