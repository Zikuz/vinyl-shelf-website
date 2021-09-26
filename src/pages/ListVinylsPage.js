import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ListVinyls.css';

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'

const items = [
  {
    id: '1',
    band: 'Van Halen',
    name: 'Jump',
    img: img1,
    date: '1989',
  },
  {
    id: '2',
    band: 'Metallica',
    name: 'Master of Puppets',
    img: img2,
    date: '2002',
  },
  {
    id: '3',
    band: 'Michael Jackson',
    name: 'Smooth Criminal',
    img: img3,
    date: '1972',
  },
  {
    id: '4',
    band: 'The Beatles',
    name: 'Don\'let me down',
    img: img4,
    date: '1999',
  },
  {
    id: '5',
    band: 'Kult',
    name: 'My Way',
    img: img5,
    date: '1995',
  },
  {
    id: '6',
    band: 'Nirvana',
    name: 'Smells Like Teen Spirit',
    img: img6,
    date: '2010',
  },
  {
    id: '7',
    band: 'Kult',
    name: 'Back In Black',
    img: img1,
    date: '2003',
  },
  {
    id: '8',
    band: 'Guns N\' Roses',
    name: 'It\'s So Easy',
    img: img2,
    date: '2020',
  }
];

export default class ListVinyls extends React.Component {

  state = {
    search: '',
  }

  handleChange = e => {
    this.setState({
      search: e.target.value,
    })
  }
    
  render() {

    const list = items.map(({band, name, date, id, img}) => (
      band.toUpperCase().includes(this.state.search.toUpperCase()) || name.toUpperCase().includes(this.state.search.toUpperCase()) || date.includes(this.state.search) ?
        <li key={id} name={band} className="container-list-element">
          <Link to={`/vinyl/${id}`} className="vinyl-element">
            <img src={img} className="element-img" alt="img" />
            <div className="element-header"><strong>{band}</strong>{name}</div>
            <div className="element-main"><span>{date}</span><span className="element-id">#{id}</span></div>
          </Link>
       </li> : false
    ))    
    
    return (
      <div className="main-vinyl">
          <div className="search-container">
            <input type="text" className="search-box" onChange={this.handleChange} value={this.state.search} placeholder="Search..."  />
          </div>
          <div className="main-lista">
            {/* <span>
              Vinyl records available {list.length}
            </span> */}
            <ul className="vinyl-list">
              {list}
            </ul>
          </div>
      </div>
    );
  }
}