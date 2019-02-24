import React, { Component } from 'react';
import { Table, Container, Row } from 'reactstrap';

export default class table extends Component {
  renderCol(n) {
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let tr = [];
    tr[0] = <th>#</th>;
    for (var i = 0; i < n; i++) {
      tr[i + 1] = <th className='coluna'>{alf[i]}</th>;
    }
    return tr.map(test => test);
  }
  renderInput(n) {
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let input = [];
    for (var i = 0; i < n; i++) {
      input[i] = (
        <td>
          <input className='input ' type='text' />
        </td>
      );
    }
    return alf.map((res, i) => {
      if (i < n) {
        return (
          <tr>
            <th scope='row'>{res}</th>
            {input.map(test => test)}
          </tr>
        );
      }
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Table dark>
            <thead>
              <tr>{this.renderCol(this.props.n)}</tr>
            </thead>

            <tbody>{this.renderInput(this.props.n)}</tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
