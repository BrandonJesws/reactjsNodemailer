import React, { Component } from 'react';
import '../App.css';

class Titulo extends Component {
	render() {
		return (
			<div className="contact100-form-title">
					<span>{this.props.Nombre}</span>
				</div>
		);
	}
}
export default Titulo;