import React, { Component } from 'react';
import '../App.css';

class Correo extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputCorreo">Correo</label>
				<input type="email" className="form-control" placeholder="Correo" id="correo" name="correo" autocompleter="off" onChange={this.handleChange} required/>
			</div>
		);
	}
}

export default Correo;