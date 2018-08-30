import React, { Component } from 'react';
import '../App.css';

class NombreEmpresa extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputName">Nombre de la empresa o razón social:</label>
				<input type="text" className="form-control" placeholder="Nombre" id="empresa" name="empresa" autocompleter="off"/>
			</div>
		);
	}
}

export default NombreEmpresa;