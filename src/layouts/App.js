import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Page from './Page';
import Footer from './Footer';

export default class App extends Component {
  render() { 
    return (
      <Router>
        <div className="app">
            {<Navbar />}
            {<Page />}
            {<Footer />}
        </div>
      </Router>
    );
  }
}