import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navigation.css'

function Navbar({active}){
    return(
        <header>
<nav>
  <div className="logo_wrapper">
    <img src={logo} alt="logo" />
    <h4>Molearn</h4> 
  </div>
  <ul className="navigation-menu">
    <li>
      <Link to="/" className={active === 'home' ? 'activeNav' : ''}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/register" className={active === 'register' ? 'activeNav' : ''}>
        Register
      </Link>
    </li>
    <li>
      <Link to="/login" className={active === 'login' ? 'activeNav' : ''}>
        Login
      </Link>
    </li>
  </ul>
</nav>
</header>

      
    )
}

export default Navbar