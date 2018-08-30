import React, { Component } from 'react';
import '../App.css';

class Giro extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputName">Giro de la empresa:</label>
				<input type="text" className="form-control" placeholder="Giro" id="giro" name="giro" autocompleter="off"/>
			</div>
		);
	}
}

export default Giro;