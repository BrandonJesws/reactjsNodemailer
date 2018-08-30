import React, { Component } from 'react';
import '../App.css';
import GastMedicosMayores from './GastMedicosMayores.js';
import Vida from './Vida.js';
import Empresarial from './Empresarial.js';
import Autos from './Autos.js';

class Divs extends Component {
	render() {
		return (
			<div className="tab-content" id="myTabContent">
				<GastMedicosMayores/>
				<Vida/>
				<Empresarial/>
				<Autos/>
			</div>
		);
	}
}
export default Divs;