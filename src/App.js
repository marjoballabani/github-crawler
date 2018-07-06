import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

import Repo from './components/Repos';
import Commits from './components/Commits';

import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
  render() {
    return (
      <div className="row main-container">
        <Repo/>
        <Commits />
      </div>
    );
  }
}

export default App;
