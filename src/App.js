import React, { Component } from 'react';
import './App.css';
// import Wrapper from './components/p5/Wrapper';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Home />
      </div>
    );
  }
}

export default App;
