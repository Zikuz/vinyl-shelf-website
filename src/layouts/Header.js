import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Logo from '../icons/vinyl3.svg';

const logoRotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    user-select: none;
`

const HeaderText = styled(NavLink)`
    font-size: 2.5rem;
    font-weight: 400;
    padding: 10px;
    color: #000; 
    margin-top: .5rem;
    
    @media(max-width: 450px) {
        font-size: 1.8rem;
        margin-top: 0;
    }

    @media(max-width: 310px) {
        font-size: 1.5rem
    }

`

const HeaderImg = styled.img`
    height: 50px;
    pointer-events: none;
    animation: ${logoRotate} infinite 10s linear;

    @media(max-width: 450px) {
        height: 40px;
    }
`

const Header = () => {
    return (
        <HeaderBox>
            <HeaderImg src={Logo} alt="vinyl-logo" />
            <HeaderText to='/'>Vinyl Shelf</HeaderText>
        </HeaderBox>
    );
}
 
export default Header;
