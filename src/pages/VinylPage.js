import React from 'react';
import Vinyl from '../components/Vinyl';
import styled from 'styled-components';

const MainVinyl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 85vh;
    background-color: rgb(212, 212, 212);
`

const VinylPage = ({ match }) => {
    return (
        <MainVinyl>
            <Vinyl id={match.params.id} name={match.params.id}/>   
        </MainVinyl>
    );
}
export default VinylPage;