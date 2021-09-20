import React from 'react';
import '../styles/Main.css';
import { NavLink } from 'react-router-dom';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

const HomePage = () => {

    const images = [img1, img2, img3, img4, img5, img6];
    const img = images[Math.floor(Math.random() * 6)];

    return (
        <>
            <div className="main">
                <div className="main-header" style={{ backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img})`}}>
                    <span className="main-header-text">Welcome at the Vinyl Shelf Webiste!</span>
                    <NavLink to='/list-vinyls' className="main-link">Vinyl Shelf</NavLink>
                </div>
            </div>
        </>
    );
}

export default HomePage;