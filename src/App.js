import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Projects from './components/pages/Projects/Projects'
import Music from './components/pages/Music/Music'

class App extends Component {
  render() {
    return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/music' component={Music} />
      </React.Fragment>
    </Router>
    );
  }
}

export default App;
