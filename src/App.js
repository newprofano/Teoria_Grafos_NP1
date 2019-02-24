import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/p5/Wrapper';
import Table from './components/Table/table';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Wrapper />
        <Table />
      </div>
    );
  }
}

export default App;
