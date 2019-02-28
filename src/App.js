import React, { Component } from 'react';
import './App.css';
// import Wrapper from './components/p5/Wrapper';
import Home from './components/Home/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Wrapper /> */}
        <Home />
      </div>
    );
  }
}

export default App;
