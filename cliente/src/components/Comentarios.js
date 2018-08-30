import React, { Component } from 'react';
import '../App.css';

class Comentarios extends Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="FormControlTextarea2">Comentarios:</label>
				<textarea className="form-control"rows="8" id="comentarios" name="comentarios" onChange={this.handleChange}></textarea>
			</div>
		);
	}
}

export default Comentarios;