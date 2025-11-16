import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navigation.css'
import { getUserDetails } from "../util/getUser";

function Navbar({active}){
  const [user,setUser] = useState('');
 // const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(()=>{
    const userDetails = getUserDetails();
    setUser(userDetails);
  },[]);

  //  const toggleDropdown = () => {
  //   setDropdownOpen(prev => !prev);
  // };

  
  // const handleLogout = () => {
  //   localStorage.removeItem('todoAppUser');
  //   window.location.reload();
  // };

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

    {user && (
      <li>
        <Link to="/todo" className={active === 'myTask' ? 'activeNav' : ''}>
          My Task
        </Link>
      </li>
    )}

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