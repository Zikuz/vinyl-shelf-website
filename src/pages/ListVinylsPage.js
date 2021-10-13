import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/metallica.jpg";
import img9 from "../images/img9.jpg";
import arrow from "../icons/arrow.svg";

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
  background-image: linear-gradient( to bottom, rgba(105, 103, 103, 0.8), rgba(105, 103, 103, 0.8)),url(${img9});
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: sticky;
  background-color: #adb5bd;
  width: 100%;
  top: 0;
  min-height: 10vh;

  @media(max-width: 700px) {
    flex-direction: column;
    padding: 10px 0;
  }
`

const ViynlAvailable = styled.div`
  color: #fff;
  padding: 5px 0;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-align: center;
`

const SearchInput = styled.input`
  display: block;
  font-size: 1.1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: none;
  color: #6b6f78;
  padding: 1.4rem 2rem;
  transition: all 0.3s;
  box-shadow: 0 0 1px 1px rgba(73, 80, 87, 0.2);
  outline: none;
  
  &:hover {
    box-shadow: 0 0 1px 1px rgba(73, 80, 87, 0.5);
  }
  
  &:focus {
    box-shadow: 0 0 2px 2px rgba(73, 80, 87, 0.5);
  }
`

const AddVinyl = styled(Link)`
  /* font-size: 1.1rem;
  padding: 1.4rem 2rem;
  color: #000;
  background-color: rgb(245, 245, 245);
  border: none;
  border-radius: 2px;
  cursor: pointer; */

  font-size: 1.2rem;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 20px;

  &:hover {
      background: #fff;
      color: #adb5bd;
  }
`

const VinylList = styled.ul`
  list-style: none;
  margin-top: 15px;
  text-align: center;
  min-height: 75vh;
`

const VinylElementList = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  padding-right: 10px;
  width: 100%;
  height: 8vh;
  margin-bottom: 20px; 
  border-radius: 0 20px 20px 0;

  :hover {
    background-color: aliceblue;
  }
`

const VinylElementText = styled.span`
  color: #000;
  font-size: 1.2em;
`

const VinylElementImg = styled.img`
  height: 8vh;
  width: 8vh;
  object-fit: cover;
  background-size: cover;
  background-position: center;
`

const VinylElementMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 33vw;
  padding: 0 5px;
`

const BtnScrollToTop = styled.button`
  border-radius: 100px;
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  background-color: #fff;
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
    img: img7,
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
    img: img3,
    date: "2014",
  },
  {
    id: "10",
    band: "AC/DC",
    name: "Live at River Plate",
    img: img4,
    date: "2012",
  },
  {
    id: "11",
    band: "Rammstein",
    name: "Rosenrot",
    img: img5,
    date: "2005",
  },
  {
    id: "12",
    band: "Slayer",
    name: "Repentless",
    img: img6,
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
    filteredItems: items
  };

  handleChange = e => {
    const filtered = items.filter(item => item.band.toUpperCase().includes(e.target.value.toUpperCase()) || item.name.toUpperCase().includes(e.target.value.toUpperCase()) || item.date.includes(e.target.value))
    this.setState({
      search: e.target.value,
      filteredItems: filtered
    });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
  render() {

    return (
      <VinylListMain>
        <SearchContainer>
          <SearchInput type="text" onChange={this.handleChange} value={this.state.search} placeholder="Search..." />
          <ViynlAvailable>Vinyl records available: {this.state.filteredItems.length}</ViynlAvailable>     
          <AddVinyl to={`/new-vinyl`}>
              Add vinyl
          </AddVinyl>
        </SearchContainer>
          
        <VinylList>
          {this.state.filteredItems.map(({ band, name, date, id, img }) => (
                <VinylElementList key={id} name={band} to={`/vinyl/${id}`}>
                  <VinylElementImg src={img} alt={`img: ${name}`} />
                  <VinylElementText>#{id}</VinylElementText>
                  <VinylElementMain>
                    <VinylElementText>{band}</VinylElementText>
                    <VinylElementText>{name}</VinylElementText>
                  </VinylElementMain>
                  <VinylElementText>{date}</VinylElementText>
                </VinylElementList>
          ))} 
          {this.state.filteredItems.length === 0 ? false : <BtnScrollToTop onClick={this.scrollToTop}><img src={arrow} alt="ToTop" /></BtnScrollToTop> }
          
        </VinylList>
      </VinylListMain>
    );
  }
}        