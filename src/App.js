import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobsManagement from './components/JobsManagement/JobsManagement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container pt-3">
          
            <JobsManagement/>
        </div>
      </div>
    );
  }
}

export default App;