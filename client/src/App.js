import React, { Component } from 'react';
import Main from './components/main/main';
import { BrowserRouter as Router } from "react-router-dom";


import './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

