import React, { Component } from 'react';
import '../App.css';

class Direcciones extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="FormControlTextarea1">Si hay varias ubicaciones, favor de mencionar:</label>
				<textarea className="form-control"rows="8" id="direcciones" name="direcciones"></textarea>
			</div>
		);
	}
}

export default Direcciones;