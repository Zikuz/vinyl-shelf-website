import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import '../styles/Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar">
            <Header />       
            <NavLink to='/login' className='menu-login'>login</NavLink>        
        </nav>
    );
}
 
export default Navbar;