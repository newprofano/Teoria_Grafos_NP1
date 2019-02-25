import React from 'react';
import { Table, Container, Row } from 'reactstrap';

export default class Example extends React.Component {
  renderInput(n) {
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    let input = [];

    for (let i = 0; i < 1; i++) {
      input[i] = (
        <td>
          <input className="inputAdj" type="text" />
        </td>
      );
    }

    return alf.map((res, i) => {
      if (i < n) {
        return (
          <tr>
            <th scope="row">{res} </th>
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
              <tr>
                <th>#</th>
                <th>Lista Adjacente</th>
              </tr>
            </thead>

            <tbody>{this.renderInput(this.props.n)}</tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
