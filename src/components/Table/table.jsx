import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class table extends Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">A</th>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>

          <tr>
            <th scope="row">B</th>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>
          <tr>
            <th scope="row">C</th>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>
          <tr>
            <th scope="row">D</th>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>

          <tr>
            <th scope="row">E</th>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
