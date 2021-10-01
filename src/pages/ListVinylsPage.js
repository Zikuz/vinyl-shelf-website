import React from "react";
import { Link } from "react-router-dom";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
// import img7 from '../images/img7.jpg'
import img8 from "../images/img8.jpg";
import styled from "styled-components";

const VinylListMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 85vh;
  background-size: cover;
  background-position: top;
  position: relative;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 15vh;
`

const SearchInput = styled.input`
  display: block;
  font-size: 1.1rem;
  background-color: rgba(#fff, 0.5);
  -webkit-box-shadow: inset 0px 0px 36px -17px rgba(184, 184, 184, 1);
  -moz-box-shadow: inset 0px 0px 36px -17px rgba(184, 184, 184, 1);
  box-shadow: inset 0px 0px 36px -17px rgba(184, 184, 184, 1);
  border-radius: 0.5rem;
  padding: 1.4rem 2rem;
  transition: all 0.3s;
`

const VinylList = styled.ul`
  list-style: none;
  min-height: 30vh;
`
const VinylElementText = styled.span`
  color: rgb(167, 167, 167);
  font-size: 1.5rem;
`

const VinylElementMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 33vw;
`

const items = [
  {
    id: "1",
    band: "Van Halen",
    name: "Jump",
    img: img1,
    date: "1989",
  },
  {
    id: "2",
    band: "Metallica",
    name: "Master of Puppets",
    img: img2,
    date: "2002",
  },
  {
    id: "3",
    band: "Michael Jackson",
    name: "Smooth Criminal",
    img: img3,
    date: "1972",
  },
  {
    id: "4",
    band: "The Beatles",
    name: "Don'let me down",
    img: img4,
    date: "1999",
  },
  {
    id: "5",
    band: "Slayer",
    name: "Praying To Satan",
    img: img5,
    date: "2019",
  },
  {
    id: "6",
    band: "Nirvana",
    name: "Smells Like Teen Spirit",
    img: img6,
    date: "2010",
  },
  {
    id: "7",
    band: "Rammstein",
    name: "Rammstein",
    img: img1,
    date: "2019",
  },
  {
    id: "8",
    band: "Metallica",
    name: "Reload",
    img: img2,
    date: "1997",
  },
  {
    id: "9",
    band: "AC/DC",
    name: "Rock or Bust",
    img: img1,
    date: "2014",
  },
  {
    id: "10",
    band: "AC/DC",
    name: "Live at River Plate",
    img: img1,
    date: "2012",
  },
  {
    id: "11",
    band: "Rammstein",
    name: "Rosenrot",
    img: img1,
    date: "2005",
  },
  {
    id: "12",
    band: "Slayer",
    name: "Repentless",
    img: img1,
    date: "2015",
  },
  {
    id: "13",
    band: "AC/DC",
    name: "Power up",
    img: img1,
    date: "2020",
  },
];

export default class ListVinyls extends React.Component {
  state = {
    search: "",
  };

  handleChange = e => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <VinylListMain
        style={{
          backgroundImage: `linear-gradient( to bottom, rgba(105, 103, 103, 0.555), rgba(129, 129, 129, 0.59)),url(${img8})`,
        }}
      >
        <SearchContainer>
          <SearchInput type="text" onChange={this.handleChange} value={this.state.search} placeholder="Search..." />
        </SearchContainer>
          
        <VinylList>
          {items.map(({ band, name, date, id, img }) =>
            band.toUpperCase().includes(this.state.search.toUpperCase()) ||
            name.toUpperCase().includes(this.state.search.toUpperCase()) ||
            date.includes(this.state.search) ? (
              <li key={id} name={band} style={{ marginBottom: '20px' }}>
                <Link to={`/vinyl/${id}`} style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgb(255, 255, 255)', padding: '20px 10px', width: '100%' }}>
                  <VinylElementText>#{id}</VinylElementText>
                  <VinylElementMain>
                    <VinylElementText>{band}</VinylElementText>
                    <VinylElementText>{name}</VinylElementText>
                  </VinylElementMain>
                  <VinylElementText>{date}</VinylElementText>
                  {/* <img src={img} alt={`img: ${name}`} className="list-element-img" /> */}
                </Link>
              </li>
            ) : (
              false
            )
          )}
        </VinylList>
        {/* <span>Vinyl records available {list.length}</span> */}
      </VinylListMain>
    );
  }
}