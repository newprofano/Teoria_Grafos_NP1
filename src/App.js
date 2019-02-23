import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/p5/Wrapper';
import Table from './components/Table/table';
import { Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className='App'>
        
        <Table />
      </div>
    );
  }
}

export default App;