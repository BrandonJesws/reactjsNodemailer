import React, { Component } from 'react';
import '../App.css';
import Titulo from './Titulo.js';
import NombreEmpresa from './NombreEmpresa.js';
import Giro from './Giro.js';
import Telefono from './Telefono.js';
import Correo from './Correo.js';
import Direccion from './Direccion.js';
import Direcciones from './Direcciones.js';
import Comentarios from './Comentarios.js';
import Boton from './Boton.js';

class Empresarial extends Component {
	render() {
		return (
			<div className="tab-pane fade" id="Empresarial" role="tabpanel" aria-labelledby="Empresarial-tab">
				<div className="container-contact100">
					<div className="wrap-contact100">
						<Titulo Nombre="Seguro Empresarial"/>
						<form className="contact100-form validate-form">
							<NombreEmpresa/>
							<Giro/>
							<Telefono/>
							<Correo/>
							<Direccion/>
							<Direcciones/>
							<Comentarios/>
							<Boton/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Empresarial;