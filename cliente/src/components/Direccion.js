import React, { Component } from 'react';
import '../App.css';

class Direccion extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="FormControlTextarea2">Direccion de la empresa o ubicacion del riesgo:</label>
				<textarea className="form-control"rows="3" id="direccion" name="direccion"></textarea>
			</div>
		);
	}
}

export default Direccion;