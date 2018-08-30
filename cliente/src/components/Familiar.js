import React, { Component } from 'react';
import '../App.css';

class Familiar extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="FormControlTextarea1">Si quieres una póliza familiar o colectiva, favor de ingresar Nombres y edades:</label>
				<textarea className="form-control"rows="8" id="familiar" name="familiar" onChange={this.handleChange}></textarea>
			</div>
		);
	}
}

export default Familiar;