import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
