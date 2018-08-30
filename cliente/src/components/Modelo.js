import React, { Component } from 'react';
import '../App.css';

class Modelo extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputName">Modelo</label>
				<input type="text" className="form-control" placeholder="Modelo" id="modelo" name="modelo" autocompleter="off"/>
			</div>
		);
	}
}

export default Modelo;