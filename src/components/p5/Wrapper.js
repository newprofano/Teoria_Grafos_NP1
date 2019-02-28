import P5Wrapper from 'react-p5-wrapper';

import React, { Component } from 'react';

import sketch from './sketch';
import Node from './Node';

const makeConnectedToAndValues = input => {
  const arr = [];
  const values = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
      arr[i] = String.fromCharCode(65 + i);
      values[i] = { connectedId: arr[i], weight: input[i] };
    }
  }
  return { connectedTo: arr, values };
};

export default class Wrapper extends Component {
  state = {
    rotation: 0,
    nodes: []
  };

  static getDerivedStateFromProps(props) {
    const nodes = [];

    for (const input in props.inputs) {
      if (props.inputs[input].length !== 0) {
        const { connectedTo, values } = makeConnectedToAndValues(
          props.inputs[input]
        );

        nodes.push({
          id: input,
          node: new Node(input, true, connectedTo, values)
        });
      }
    }

    return {
      nodes
    };
  }
  render() {
    return <P5Wrapper sketch={sketch} nodes={this.state.nodes} />;
  }
}
