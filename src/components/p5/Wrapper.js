import P5Wrapper from 'react-p5-wrapper';

import React, { Component } from 'react';

import sketch from './sketch';

export default class Wrapper extends Component {
  state = {
    rotation: 0
  };
  render() {
    return (
      <div>
        <P5Wrapper sketch={sketch} rotation={this.state.rotation} />
      </div>
    );
  }
}
