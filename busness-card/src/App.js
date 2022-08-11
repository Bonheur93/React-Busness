import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App body">
        <Header />
        <Body />
        <Footer />
        
      </div>
    );
  }
}

export default App;
