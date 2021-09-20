import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ListVinyls.css';

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const items = [
  {
    id: '1',
    band: 'The Beatles',
    name: 'Yellow submarine',
    img: img1
  },
  {
    id: '2',
    band: 'Kult',
    name: 'Kaseta',
    img: img2
  },
  {
    id: '3',
    band: 'Van Halen',
    name: 'Jump',
    img: img3
  }
];

const ListVinyls = () => {

    const list = items.map(item => (
        <li key={item.id} name={item.band} className="container-list-element">
          <Link to={`/vinyl/${item.id}`} className="vinyl-element">
            <img src={item.img} className="element-img" alt="img" />
            <div><strong>{item.band}</strong></div>
            <div>{item.name}</div>
          </Link>
        </li>
      ))
    
      return (
        <div className="main-list">
            <ul className="vinyl-list">
              {list}
            </ul>
        </div>
    
      );
}
 
export default ListVinyls;