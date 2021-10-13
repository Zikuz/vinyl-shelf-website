import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 0px 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 15px 4px;
    background-color: rgb(233, 233, 233);

    @media(max-width: 450px) {
        padding: 0px 20px;
    }
    
`

const LoginLink = styled(NavLink)`
    font-size: 1.3rem;
    outline: none;
    cursor: pointer;
    transition: .2s;
    background-color: inherit;
    color: #131515;

    @media(max-width: 450px) {
        font-size: 1.2rem
    }

    @media(max-width: 310px) {
        font-size: 1rem
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Header />       
            <LoginLink to='/login'>login</LoginLink>        
        </Nav>
    );
}
 
export default Navbar;