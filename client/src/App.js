import React, { Component } from 'react';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
