import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/p5/Wrapper";
import Table from "./components/Table/Table";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <Home />
        <Table />
      </div>
    );
  }
}

export default App;
