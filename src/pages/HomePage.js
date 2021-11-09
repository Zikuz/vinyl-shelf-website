import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

const HomePageMain = styled.div`
    min-height: 85vh;
`

const HomePageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    gap: 20px;
    background-size: cover;
    background-position: top;
    position: relative;
    background-image: linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${props => props.img});
`

const HomePageText = styled.span`
    text-align: center;
    font-size: 3rem;
    color: #fff;
`

const HomePageLink = styled(NavLink)`
    font-size: 1.2rem;
    color: #fff;
    border: 2px solid #fff;
    padding: 10px 20px;

    &:hover {
       background: #fff;
       color: #000;
    }
`

// const HomePageSection = styled.div`
//     height: 95vh;
// `


export default function HomePage() {
    const images = [img1, img2, img3, img4, img5, img6];
    const img = images[Math.floor(Math.random() * 6)];

    return (
        <HomePageMain>
            <HomePageHeader img={img}>
                <HomePageText>Welcome at the Vinyl Shelf Webiste!</HomePageText>
                <HomePageLink to='/list-vinyls'>Vinyl Shelf</HomePageLink>
            </HomePageHeader>
            {/* <HomePageSection>
            </HomePageSection> */}
        </HomePageMain>
        
    );
}