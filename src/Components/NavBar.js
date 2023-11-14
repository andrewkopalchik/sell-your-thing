import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
  return(
    <div className='navbar-container'>
        <p className='logo'>
            <Link href='/'>Sell your thing</Link>
        </p>
    </div>
  )
}

export default NavBar;