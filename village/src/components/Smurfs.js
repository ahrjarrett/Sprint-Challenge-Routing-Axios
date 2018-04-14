import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
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
		<span><a href="">Delete Smurf</a></span>
	      </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
