import React from 'react';
import { Table, Container, Row } from 'reactstrap';

export default class Example extends React.Component {
  renderCol(n) {
    
    const alf = ['Adjacente'];
    let th = [];

    th[0] = <th>#</th>;
    th[1] = <th>Adjacente</th>;

    

    return alf.map((res, i) =>{
        if(i <n){
            return th.map (test =>test);
        }
    });
   
  }

  renderInput(n) {
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    let input = [];

    for (let i = 0; i < 1; i++) {
      input[i] = (
        <td>
          <input className="input" type="text" />
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
              <tr>{this.renderCol(this.props.n)}</tr>
            </thead>

            <tbody>{this.renderInput(this.props.n)}</tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
