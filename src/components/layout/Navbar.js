import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import Button from '../button/Button';

const Navbar = () => {
  // read the context
  const { user, setUser} = React.useContext(UserContext);

  //context field value is read here
  let linkToJoinForm = user !== undefined ? 
    <Button text="Log out" action={()=>setUser(undefined)} ></Button> : 
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
