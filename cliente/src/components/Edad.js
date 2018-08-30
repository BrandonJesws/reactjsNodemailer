import React, { Component } from 'react';
import '../App.css';

class Edad extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputEdad">Edad</label>
				<input type="number" className="form-control" placeholder="Edad" id="edad" name="edad" onChange={this.handleChange} required/>
			</div>
		);
	}
}

export default Edad;