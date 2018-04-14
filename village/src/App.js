import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: []
  }

  componentDidMount = () => {
    axios({
      url: 'http://localhost:3333/smurfs',
      method: 'GET',
    }).then(response => this.setState(() => ({ smurfs: response.data })))
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
