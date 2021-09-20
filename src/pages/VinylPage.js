import React from 'react';
import { Link } from 'react-router-dom';
import Vinyl from '../components/Vinyl';

const VinylPage = ({ match }) => {
    return (
        <>
            <div>Vinyl Page</div>
            <Vinyl id={match.params.id} name={match.params.id}/>
            <Link to="/list-vinyls">Back to vinyl list</Link>
        </>
    );
}
 
export default VinylPage;