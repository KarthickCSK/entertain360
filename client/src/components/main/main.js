import React, { Component } from 'react'
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import Dashboard from '../dashboard/dashboard';
import Wishlist from '../wishlist/wishlist';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <span className="navbar-brand" href="#">
            <span className="logo-title">Movie</span>
            <img src={require('./logo.png')} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-a" to="/">Home</NavLink>
              </li>
            </ul>
            <span className="navbar-text">
            Browse movies, TV shows and know things around you
            </span>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/wishlist" component={Wishlist} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Main);
