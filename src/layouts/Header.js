import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../icons/vinyl4.svg';
import '../styles/Header.css'

const Header = () => {

    return (
        <div className="header">
                <img src={Logo} className="header-logo" alt="vinyl-logo" />
                <span className="header-text-logo">
                    <NavLink to='/' exact>Vinyl Shelf</NavLink>
                </span>
        </div>
    );
}
 
export default Header;
