import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobsList from './components/JobsList/JobsList';
import JobForm from './components/JobsList/JobForm/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container pt-3">
          <JobForm/>
          <JobsList/>
        </div>
      </div>
    );
  }
}

export default App;