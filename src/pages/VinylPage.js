import React from 'react';
import Vinyl from '../components/Vinyl';
import '../styles/Vinyl.css';

const VinylPage = ({ match }) => {
    return (
        <div className="main-vinyl">
            <Vinyl id={match.params.id} name={match.params.id}/>   
        </div>
    );
}
export default VinylPage;