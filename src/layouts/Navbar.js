import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 10%; */
    height: 10vh;
    padding: 0px 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 15px 4px;
    background-color: rgb(233, 233, 233);
`

const Navbar = () => {
    return (
        <Nav>
            <Header />       
            <NavLink to='/login' style={{fontSize: '1.3rem',  outline: 'none', cursor: 'pointer', transition: '0.2s', backgroundColor: 'inherit',  color: '#131515'}}>login</NavLink>        
        </Nav>
    );
}
 
export default Navbar;