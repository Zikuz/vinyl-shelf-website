import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/metallica.jpg';
import styled from 'styled-components';

const VinylMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 85vh;
    width: 100vw;
    font-family: "Josefin Sans", sans-serif;
    color: white;
`
const VinylContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(37, 37, 37);
    width: 50vw;
    height: 85vh;
`
const VinylImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 85vh;
    background-size: cover;
    background-position: top;
    position: relative;
`
const VinylBand = styled.span`
    font-size: 4.5rem;
`
const VinylAlbum = styled.span`
    font-size: 2.3rem;
`
const VinylTracklist = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.4rem;
`
const VinylReleased = styled.span`
    font-size: 1.2rem;
`

const Vinyl = props => {
    return (
        <VinylMain>
            <VinylImg style={{ backgroundImage: `url(${img})`}}></VinylImg>
            <VinylContainer>
                <VinylBand>Metallica</VinylBand>
                <VinylAlbum>Master of Puppets</VinylAlbum> 
                <VinylTracklist>
                    <li>Battery</li>
                    <li>Master Of Puppets</li>
                    <li>Welcome Home (Sanitarium)</li>
                    <li>The Thing That Should Not Be</li>
                    <li>Disposable Heroes</li>
                    <li>Leper Messiah</li>
                    <li>Orion</li>
                    <li>Damage, Inc.</li>
                </VinylTracklist>
                <VinylReleased>Released: March 3, 1986</VinylReleased>
                <Link to="/list-vinyls" style={{ fontSize: '1.2rem',  color: '#fff',  border: '2px solid #fff',  padding: '5px' }}>Back to vinyl list</Link>
            </VinylContainer>
        </VinylMain>

        //{/* <iframe src="https://open.spotify.com/embed/album/2Lq2qX3hYhiuPckC8Flj21" title="spotify" width="30%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}

    );
}
 
export default Vinyl;