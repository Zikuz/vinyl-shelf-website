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

const HeaderText = styled.span`
    font-size: 2.5rem;
    font-weight: 400;
    padding: 10px;
`

const HeaderImg = styled.img`
    height: 50px;
    pointer-events: none;
    animation: ${logoRotate} infinite 10s linear;
`

const Header = () => {
    return (
        <HeaderBox>
            <HeaderImg src={Logo} alt="vinyl-logo" />
            <HeaderText>
                <NavLink to='/'>Vinyl Shelf</NavLink>
            </HeaderText>
        </HeaderBox>
    );
}
 
export default Header;
