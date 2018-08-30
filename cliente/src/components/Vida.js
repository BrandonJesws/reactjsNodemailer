import React, { Component } from 'react';
import '../App.css';
import Titulo from './Titulo.js';
import Nombre from './Nombre.js';
import Edad from './Edad.js';
import Telefono from './Telefono.js';
import Correo from './Correo.js';
import Estado from './Estado.js';
import Familiar from './Familiar.js';
import Comentarios from './Comentarios.js';
import Boton from './Boton.js';

class Vida extends Component {
	render() {
		return (
			<div className="tab-pane fade" id="Vida" role="tabpanel" aria-labelledby="Vida-tab">
				<div className="container-contact100">
					<div className="wrap-contact100">
						<Titulo Nombre="Seguro de vida"/>
						<form className="contact100-form validate-form">
							<Nombre/>
							<Edad/>
							<Telefono/>
							<Correo/>
							<Estado/>
							<Familiar/>
							<Comentarios/>
							<Boton/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Vida;