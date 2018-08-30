import React, { Component } from 'react';
import '../App.css';

class Nombre extends Component {

	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputName">Nombre</label>
				<input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" autocompleter="off" onChange={this.handleChange} required/>
			</div>
		);
	}
}

export default Nombre;