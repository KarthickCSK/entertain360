import React, { Component } from 'react'
import Location from '../location/location';
import Overview from '../overview/overview';
import './dashboard.css'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
          <div className="nav-container">
            <span className="navbar-brand" href="#">
              <span className="logo-title">Movie</span>
              <img src={require('./logo.png')} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
            </span>
            <span className="navbar-text">
              Browse movies, TV shows and know things around you
            </span>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"><Location/></div>
            <div className="col-10"><Overview /></div>
          </div>
        </div>
      </div>
    )
  }
}
