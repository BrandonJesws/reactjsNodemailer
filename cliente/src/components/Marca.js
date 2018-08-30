import React, { Component } from 'react';
import '../App.css';

class Marca extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputName">Marca</label>
				<input type="text" className="form-control" placeholder="Marca" id="marca" name="marca" autocompleter="off"/>
			</div>
		);
	}
}

export default Marca;