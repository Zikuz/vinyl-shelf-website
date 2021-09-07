import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Header from './Header';

const list = [
    { name: "login", path: "/login", styleName: "btn-login" },
    { name: "register", path: "/register", styleName: "btn-register" },
]

const Navbar = () => {

    const menu = list.map(item => (
        <li key={item.name}>
          <NavLink to={item.path} className={item.styleName}>{item.name}</NavLink>
        </li>
      ))

    return (
        <nav className="navbar">
            <Header />
            <div className="nav">
                <ul className="nav-menu">
                    {menu}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;