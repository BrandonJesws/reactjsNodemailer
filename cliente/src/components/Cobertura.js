import React, { Component } from 'react';
import '../App.css';

class Cobertura extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="FormControlEstado">Cobertura</label>
				<select className="form-control" id="cobertura">
					<option>Cobertura</option>
					<option>Aguascalientes</option>
					<option>Baja California</option>
				</select>
			</div>
		);
	}
}

export default Cobertura;