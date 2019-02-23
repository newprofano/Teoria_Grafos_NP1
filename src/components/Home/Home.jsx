import React, { Component } from "react";
import { Container, Input, Label, InputGroup, FormGroup } from "reactstrap";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <FormGroup>
          <Label>Numero de Vertices</Label>
          <Input type="select" name="select" id="select">
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
      </Container>
    );
  }
}
