import React, { Component } from 'react';
import '../App.css';
import Titulo from './Titulo.js';
import Marca from './Marca.js';
import Carroceria from './Carroceria.js';
import Modelo from './Modelo.js';
import Cobertura from './Cobertura.js';
import Estado from './Estado.js';
import Telefono from './Telefono.js';
import Correo from './Correo.js';
import Comentarios from './Comentarios.js';
import Boton from './Boton';

class Autos extends Component {
	render() {
		return (
			<div className="tab-pane fade" id="Autos" role="tabpanel" aria-labelledby="Autos-tab">
				<div className="container-contact100">
					<div className="wrap-contact100">
						<Titulo Nombre="Seguro para Autos"/>
						<form className="contact100-form validate-form">
							<Marca/>
							<Carroceria/>
							<Modelo/>
							<Cobertura/>
							<Estado/>
							<Telefono/>
							<Correo/>
							<Comentarios/>
							<Boton/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Autos;