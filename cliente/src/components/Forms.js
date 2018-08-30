import React, { Component } from 'react';
import '../App.css';


class Forms extends Component {
	render() {
		return (
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link active" id="home-tab" data-toggle="tab" href="#GMM" role="tab" aria-controls="home" aria-selected="true">Gastos Medicos Mayores</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="profile-tab" data-toggle="tab" href="#Vida" role="tab" aria-controls="profile" aria-selected="false">Vida</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="contact-tab" data-toggle="tab" href="#Empresarial" role="tab" aria-controls="contact" aria-selected="false">Empresarial</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="contact-tab" data-toggle="tab" href="#Autos" role="tab" aria-controls="Autos" aria-selected="false">Autos</a>
				</li>
			</ul>
		);
	}
}
export default Forms;