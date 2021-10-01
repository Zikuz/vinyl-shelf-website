import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Navbar from './Navbar';
import Page from './Page';
import Footer from './Footer';

const GlobalStyled = createGlobalStyle`  
  * {
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    transition: 0.2s;
  }
`
export default function App() {
  return (
    <Router>
      <GlobalStyled />
        <Navbar />
        <Page />
        <Footer />
    </Router>
  );
}
