import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Titulo from './Titulo.js';

class Empresarial extends Component {
	constructor(){
		super()
			this.state = {
				tipo: 'Empresarial',
				empresa: '',
				giro: '',
				telefono: '',
				correo: '',
				direccion: '',
				direcciones: '',
				comentarios: ''
			}
			 this.handleChange = this.handleChange.bind(this)
			 this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange = e =>{
		this.setState({[e.target.name]: e.target.value})
	}
	async handleSubmit(e){
		e.preventDefault()
			
		const { tipo, empresa, giro, telefono, correo, direccion, direcciones, comentarios }= this.state
		const form = await axios.post('/api/form', {
			tipo,
			empresa,
			giro,
			telefono,
			correo,
			direccion,
			direcciones,
			comentarios
		})
	}
	render() {
		return (
			<div className="tab-pane fade" id="Empresarial" role="tabpanel" aria-labelledby="Empresarial-tab">
				<div className="container-contact100">
					<div className="wrap-contact100">
						<Titulo Nombre="Seguro Empresarial"/>
						<form onSubmit={this.handleSubmit} className="contact100-form validate-form">
							<div className="form-group">
								<label htmlFor="InputName">Nombre de la empresa o razón social:</label>
								<input type="text" className="form-control" placeholder="Nombre" id="empresa" name="empresa" autocompleter="off"/>
							</div>
							<div className="form-group">
								<label htmlFor="InputName">Giro de la empresa:</label>
								<input type="text" className="form-control" placeholder="Giro" id="giro" name="giro" autocompleter="off"/>
							</div>
							<div className="form-group">
								<label htmlFor="InputTelefono">Télefono</label>
								<input type="tel" className="form-control" placeholder="Télefono" id="telefono" name="telefono" autocompleter="off" onChange={this.handleChange} required/>
							</div>
							<div className="form-group">
								<label htmlFor="InputCorreo">Correo</label>
								<input type="email" className="form-control" placeholder="Correo" id="correo" name="correo" autocompleter="off" onChange={this.handleChange} required/>
							</div>
							<div className="form-group">
								<label htmlFor="FormControlTextarea2">Direccion de la empresa o ubicacion del riesgo:</label>
								<textarea className="form-control"rows="3" id="direccion" name="direccion"></textarea>
							</div>
							<div className="form-group">
								<label htmlFor="FormControlTextarea1">Si hay varias ubicaciones, favor de mencionar:</label>
								<textarea className="form-control"rows="8" id="direcciones" name="direcciones"></textarea>
							</div>
							<div className="form-group">
								<label htmlFor="FormControlTextarea2">Comentarios:</label>
								<textarea className="form-control"rows="8" id="comentarios" name="comentarios" onChange={this.handleChange}></textarea>
							</div>
							<button type="submit" className="btn btn-primary" id="boto">Enviar</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Empresarial;