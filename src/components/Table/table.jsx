import React, { Component } from 'react';
import { Table, Container, Row, Input, Label } from 'reactstrap';

export default class table extends Component {
  renderCol(n) {
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let tr = [];
    tr[0] = <th>#</th>;
    for (let i = 0; i < n; i++) {
      tr[i + 1] = (
        <th align='center' style={{ textAlign: 'center' }} className='coluna'>
          {alf[i]}
        </th>
      );
    }
    return tr.map(test => test);
  }

  handleChangeCheckbox = e => {};

  renderInput(n, type) {
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let input = [];

    let aux = []; // culpa do andersu
    for (let i = 0; i < n; i++) {
      aux[i] = i;
    }

    for (let i = 0; i < n; i++) {
      input[i] = (
        <td align='center'>
          <Label>
            <Input
              onChange={() => this.props.gerarGrafo(null, null)}
              className='input'
              type={type}
            />
            {/* {!this.props.valorado && 'conectado'} */}
          </Label>
        </td>
      );
    }

    const { grafoGerado, direcionado, valorado } = this.props;

    // TALVEZ DPOIS :)
    // let temGrafo =
    //   !direcionado && !valorado && Object.keys(grafoGerado).length !== 0;

    // {temGrafo
    //   ? aux.map((_, i) => (
    //       <td align='center'>
    //         <Label>
    //           <Input
    //             onChange={() => this.props.gerarGrafo(res, i)}
    //             className='input'
    //             type={type}
    //             checked={grafoGerado[res][i]}
    //           />
    //           {/* {!this.props.valorado && 'conectado'} */}
    //         </Label>
    //       </td>
    //     ))
    //   : input}

    return alf.map((res, i) => {
      if (i < n) {
        return (
          <tr>
            <th scope='row' style={{ width: '50px' }}>
              {res}
            </th>
            {input}
          </tr>
        );
      }
    });
  }
  render() {
    const { n, direcionado, valorado } = this.props;
    const type = valorado ? 'input' : 'checkbox';
    return (
      <Container>
        <Row>
          <Table dark>
            <thead>
              <tr>{this.renderCol(n)}</tr>
            </thead>

            <tbody>{this.renderInput(n, type)}</tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
