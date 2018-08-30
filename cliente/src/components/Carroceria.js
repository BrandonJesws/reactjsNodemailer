import React, { Component } from 'react';
import '../App.css';

class Carroceria extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="InputName">Carroceria</label>
				<input type="text" className="form-control" placeholder="Carroceria" id="carroceria" name="carroceria" autocompleter="off"/>
			</div>
		);
	}
}

export default Carroceria;