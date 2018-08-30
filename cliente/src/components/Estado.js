import React, { Component } from 'react';
import '../App.css';

class Estado extends Component {
	render() {
		return (
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
					<option>Chihuahua</option>
					<option>Distrito Federal</option>
					<option>Durango</option>
					<option>Guanajuato</option>
					<option>Guerrero</option>
					<option>Hidalgo</option>
					<option>Jalisco</option>
					<option>México</option>
					<option>Michoacán de Ocampo</option>
					<option>Morelos</option>
					<option>Nayarit</option>
					<option>Nuevo León</option>
					<option>Oaxaca</option>
					<option>Puebla</option>
					<option>Querétaro</option>
					<option>Quintana Roo</option>
					<option>San Luis Potosí</option>
					<option>Sinaloa</option>
					<option>Sonora</option>
					<option>Tabasco</option>
					<option>Tamaulipas</option>
					<option>Tlaxcala</option>
					<option>Veracruz de Ignacio de la Llave</option>
					<option>Yucatán</option>
					<option>Zacatecas</option>
				</select>
			</div>
		);
	}
}

export default Estado;