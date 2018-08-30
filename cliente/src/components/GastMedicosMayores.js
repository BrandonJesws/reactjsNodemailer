import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Titulo from './Titulo.js';

class GastMedicosMayores extends Component {
	constructor(){

		super()
			this.state = {
				nombre: '',
				edad: '',
				telefono: '',
				correo: '',
				estado: '',
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
			
			const { nombre, edad, telefono, correo, estado, comentarios }= this.state
			const form = await axios.post('/api/form', {
				nombre,
				edad,
				telefono,
				correo,
				estado,
				comentarios
			})
		}
	
	render() {
		
		return (
			<div className="tab-pane fade show active" id="GMM" role="tabpanel" aria-labelledby="GMM-tab">
				<div className="container-contact100">
					<div className="wrap-contact100">
						<Titulo Nombre="Gastos Medicos Mayores"/>
						<form onSubmit={this.handleSubmit} className="contact100-form validate-form" method="post">
							<div className="form-group">
								<label htmlFor="InputName">Nombre</label>
								<input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" autocompleter="off" onChange={this.handleChange} required/>
							</div>
							<div className="form-group">
								<label htmlFor="InputEdad">Edad</label>
								<input type="number" className="form-control" placeholder="Edad" id="edad" name="edad" onChange={this.handleChange} required/>
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
								<label htmlFor="FormControlEstado">Estado</label>
								<select className="form-control" id="estado" name="estado" onChange={this.handleChange}>
									<option>Estado</option>
									<option>Aguascalientes</option>
									<option>Baja California</option>
									<option>Baja California Sur</option>
									<option>Campeche</option>
									<option>Coahuila de Zaragoza</option>
									<option>Colima</option>
									<option>Chiapas</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="FormControlTextarea1">Si quieres una póliza familiar o colectiva, favor de ingresar Nombres y edades:</label>
								<textarea className="form-control"rows="8" id="familiar" name="familiar" onChange={this.handleChange}></textarea>
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

export default GastMedicosMayores;
