import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
// import Main from './Main';
import Page from './Page';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() { 
    return (
      <Router>
        <div className="app">
          <header>
            {<Navbar />}
          </header>
          <main>
            {<Page />}
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}
 
export default App;