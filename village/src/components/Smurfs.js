import React, { Component } from 'react';
import axios from 'axios'

import Smurf from './Smurf';

class Smurfs extends Component {

  handleDelete = e => {
    e.preventDefault()
    const id = e.target.name
    axios({
      method: 'DELETE',
      url: `http://localhost:3333/smurfs/${id}`
    })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
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
