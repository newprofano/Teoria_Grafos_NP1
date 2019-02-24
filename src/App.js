import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/p5/Wrapper';
import Home from './components/Home/Home';
import List from './components/List/List';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Wrapper />
        <Home />
        <List />
      </div>
    );
  }
}

export default App;
