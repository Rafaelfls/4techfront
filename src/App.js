import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobsManagement from './components/JobsManagement/JobsManagement';
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container pt-3">
            <Switch>
              <Route exact path='/' component = {JobsManagement}/>
              <Route exact path='/dashboard' component = {JobsManagement}/>
              <Route path='/vagas' component = {JobsManagement}/>
              <Route path='/sobre' component = {About}/>
              <Route path='*' component = {NotFound}/>
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;