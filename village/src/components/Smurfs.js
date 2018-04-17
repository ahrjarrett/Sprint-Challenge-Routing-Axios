import React, { Component } from 'react';
import axios from 'axios'

import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
    smurfs: [],
  }

  componentDidMount = () => {
    this.getSmurfs()
  }

  getSmurfs = () => {
    axios({
      url: 'http://localhost:3333/smurfs',
      method: 'GET',
    })
    .then(response => this.setState(() => ({ smurfs: response.data })))
  }

  handleDelete = e => {
    e.preventDefault()
    const id = e.target.name
    axios({
      method: 'DELETE',
      url: `http://localhost:3333/smurfs/${id}`
    })
      .then()
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
	      <div key={smurf.id}>
		<Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
		  />
		<span>
		  <a
		    onClick={this.handleDelete}
		    name={smurf.id}
		    href=""
		    >Delete Smurf
		  </a>
		</span>
	      </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
