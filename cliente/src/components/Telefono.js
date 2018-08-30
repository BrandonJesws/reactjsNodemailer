import React, { Component } from 'react';
import '../App.css';

class Telefono extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputTelefono">Télefono</label>
				<input type="tel" className="form-control" placeholder="Télefono" id="telefono" name="telefono" autocompleter="off" onChange={this.handleChange} required/>
			</div>
		);
	}
}

export default Telefono;