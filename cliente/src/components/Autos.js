import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Titulo from './Titulo.js';


class Autos extends Component {
	constructor(){
		super()
			this.state = {
				tipo: 'Autos',
				marca: '',
				carroceria: '',
				modelo:'',
				cobertura: '',
				estado: '',
				telefono: '',
				correo: '',
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
			
		const { tipo, marca, carroceria, modelo, cobertura, estado, telefono, correo, comentarios }= this.state
		const form = await axios.post('/api/form', {
			marca,
			carroceria,
			modelo,
			cobertura,
			estado,
			telefono,
			correo,
			comentarios
		})
	}
	render() {
		return (
			<div className="tab-pane fade" id="Autos" role="tabpanel" aria-labelledby="Autos-tab">
				<div className="container-contact100">
					<div className="wrap-contact100">
						<Titulo Nombre="Seguro para Autos"/>
						<form onSubmit={this.handleSubmit} className="contact100-form validate-form">
							<div className="form-group">
								<label htmlFor="InputName">Marca</label>
								<input type="text" className="form-control" placeholder="Marca" id="marca" name="marca" autocompleter="off"/>
							</div>
							<div className="form-group">
								<label htmlFor="InputName">Carroceria</label>
								<input type="text" className="form-control" placeholder="Carroceria" id="carroceria" name="carroceria" autocompleter="off"/>
							</div>
							<div className="form-group">
								<label htmlFor="InputName">Modelo</label>
								<input type="text" className="form-control" placeholder="Modelo" id="modelo" name="modelo" autocompleter="off"/>
							</div>
							<div className="form-group">
								<label htmlFor="FormControlEstado">Cobertura</label>
								<select className="form-control" id="cobertura">
									<option>Cobertura</option>
									<option>Aguascalientes</option>
									<option>Baja California</option>
								</select>
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
								<label htmlFor="InputTelefono">Télefono</label>
								<input type="tel" className="form-control" placeholder="Télefono" id="telefono" name="telefono" autocompleter="off" onChange={this.handleChange} required/>
							</div>
							<div className="form-group">
								<label htmlFor="InputCorreo">Correo</label>
								<input type="email" className="form-control" placeholder="Correo" id="correo" name="correo" autocompleter="off" onChange={this.handleChange} required/>
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

export default Autos;