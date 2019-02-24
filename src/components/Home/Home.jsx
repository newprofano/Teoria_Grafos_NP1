import React, { Component } from "react";
import { Container, Input, Label, FormGroup } from "reactstrap";
import Table from "../Table/Table";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { table: false };
    this.setTable = this.setTable.bind(this);
  }
  setTable() {
    document.getElementById("select").value !== "..."
      ? this.setState({ table: true })
      : this.setState({ table: false });
    // this.setState({ table: true });
  }
  render() {
    return (
      <Container>
        <FormGroup>
          <Label>Numero de Vertices</Label>
          <Input
            type="select"
            name="select"
            onChange={this.setTable}
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
        {this.state.table ? (
          <Table n={document.getElementById("select").value} />
        ) : (
          ""
        )}
      </Container>
    );
  }
}
