import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Navbar from './Navbar';
import Footer from './Footer';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ListVinyls from '../pages/ListVinylsPage';
import VinylForm from '../pages/VinylFrom';
import VinylPage from '../pages/VinylPage';


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
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/list-vinyls" component={ListVinyls} />
          <Route path="/new-vinyl" component={VinylForm} />
          <Route path="/vinyl/:id" component={VinylPage} />
        </Switch>
        <Footer />
    </Router>
  );
}
