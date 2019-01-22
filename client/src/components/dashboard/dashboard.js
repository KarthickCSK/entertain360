import React, { Component } from 'react'
import Location from '../location/location';
import Overview from '../overview/overview';
import './dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"><Location/></div>
          <div className="col-10"><Overview /></div>
        </div>
      </div>
    )
  }
}
