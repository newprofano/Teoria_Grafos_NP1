import React, { Component } from 'react';
import { Container, Input, Label, FormGroup, Button } from 'reactstrap';
import Table from '../Table/table';
import List from '../List/List';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: false,
      list: false,
      input: {}
    };
    this.setTable = this.setTable.bind(this);
    this.setList = this.setList.bind(this);
    this.gerarGrafo = this.gerarGrafo.bind(this);
  }
  setTable() {
    document.getElementById('select').value !== '...' &&
    document.getElementById('radio').checked !== false
      ? this.setState({ table: true, list: false })
      : this.setState({ table: false });
  }
  setList() {
    document.getElementById('select').value !== '...' &&
    document.getElementById('radio2').checked !== false
      ? this.setState({ list: true, table: false })
      : this.setState({ list: false });
  }
  gerarGrafo() {
    let select = document.getElementById('select').value;
    let input = document.getElementsByClassName('input');
    let array = {
      A: [],
      B: [],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      i: [],
      j: []
    };
    const alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let j = -1;
    for (let i = 0; i < input.length; i++) {
      if (i % select == 0) {
        j++;
      }

      array[alf[j]].push(input[i].value);
      console.log(alf[j] + ' =  ' + input[i].value);
      console.log(array);
    }
    this.setState({ input: array });
    console.log(this.state.input);
  }
  render() {
    return (
      <Container>
        <FormGroup>
          <Label>Numero de Vertices</Label>
          <Input
            type="select"
            onChange={this.setTable}
            onChange={this.setList}
            name="select"
            id="select"
          >
            <option>...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                id="radio"
                onChange={this.setTable}
                name="radio1"
              />{' '}
              Matriz Adjacente
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                id="radio2"
                onChange={this.setList}
                name="radio1"
              />{' '}
              Lista Adjacente
            </Label>
          </FormGroup>
        </FormGroup>
        {this.state.table ? (
          <Table n={document.getElementById('select').value} />
        ) : (
          ''
        )}

        {this.state.list ? (
          <List n={document.getElementById('select').value} />
        ) : (
          ''
        )}
        <Button onClick={this.gerarGrafo}>Gerar Grafo</Button>
      </Container>
    );
  }
}
