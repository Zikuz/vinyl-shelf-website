import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/metallica.jpg';

const Vinyl = props => {
    return (
        <div className="vinyl">
            <div className="vinyl-left-container" style={{ backgroundImage: `url(${img})`}}>
                
                {/* <img src={img1} alt="vinyl_img" className="vinyl-img"/> */}
            </div>

            <div className="vinyl-right-container">
                <span className="vinyl-band">Metallica</span>
                <span className="vinyl-album">Master of Puppets</span> 
                <ol className="vinyl-tacklist">
                    <li>Battery</li>
                    <li>Master Of Puppets</li>
                    <li>Welcome Home (Sanitarium)</li>
                    <li>The Thing That Should Not Be</li>
                    <li>Disposable Heroes</li>
                    <li>Leper Messiah</li>
                    <li>Orion</li>
                    <li>Damage, Inc.</li>
                </ol>
                <span className="vinyl-released">Released: March 3, 1986</span>

                <Link to="/list-vinyls" className="vinyl-return">Back to vinyl list</Link>
            </div>
        </div>

        
        // <div className="vinyl">
        //     <span className="vinyl-band">Metallica</span>
        //     <span className="vinyl-album">Master of Puppets</span>
        //     <div className="vinyl-container">
        //         <img src={img1} alt="vinyl_img" className="vinyl-img"/>
        //         {/* <iframe src="https://open.spotify.com/embed/album/2Lq2qX3hYhiuPckC8Flj21" title="spotify" width="30%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
        //         <ol className="vinyl-tacklist">
        //             <li>Battery</li>
        //             <li>Master Of Puppets</li>
        //             <li>Welcome Home (Sanitarium)</li>
        //             <li>The Thing That Should Not Be</li>
        //             <li>Disposable Heroes</li>
        //             <li>Leper Messiah</li>
        //             <li>Orion</li>
        //             <li>Damage, Inc.</li>
        //         </ol>
        //     </div>
        //     <span className="vinyl-released">Released: March 3, 1986</span>
        //     <Link to="/list-vinyls" className="vinyl-return">Back to vinyl list</Link>
        // </div>
    );
}
 
export default Vinyl;