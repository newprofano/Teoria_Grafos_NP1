import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import imagem from '../../img/logoGrafo.png';

export default class Logo extends React.Component {
  render() {
    return (
      <Navbar color="dark" fixed="top" className="navbar-dark">
        <NavbarBrand href="#home" color="light">
          <img
            alt=""
            src={imagem}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
          {'   Grafos: Matriz e Lista Adjacentes'}
        </NavbarBrand>
      </Navbar>
    );
  }
}
