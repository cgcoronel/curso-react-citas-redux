import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { agregarCita } from '../actions/citasActions';
import { mostrarError } from '../actions/errorActions';

class AgregarCita extends React.Component {

	componentWillMount(){
		this.props.mostrarError(false);
	}

	nombreMascotaRef = React.createRef();
	propietarioRef = React.createRef();
	fechaRef = React.createRef();
	horaRef = React.createRef();
	sintomasRef = React.createRef();

  crearNuevaCita = (e) => {
  	e.preventDefault();


		const mascota = this.nombreMascotaRef.current.value,
			propietario = this.propietarioRef.current.value,
						fecha = this.fechaRef.current.value,
						 hora = this.horaRef.current.value,
				 sintomas = this.sintomasRef.current.value;

		if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
				this.props.mostrarError(true);
		} else {
			const nuevaCita = {
				id: `citas${Date.now()}`,
				nombreMascotaRef: mascota,
				propietarioRef: propietario,
				fechaRef: fecha,
				horaRef: hora,
				sintomasRef: sintomas
			}

			this.props.agregarCita(nuevaCita);

			e.currentTarget.reset();

			this.props.mostrarError(false);
		}
  }

	render() {

			const existeError = this.props.error;

			let error;
			if (existeError) {
				error = (
					<div className="alert alert-danger">
					 <strong>Atencion!</strong> Todos los campos deben ser completados
					</div>
				);
			}

			return(
			 <div className="card mt-5">
							 <div className="card-body">
									 <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
									 <form onSubmit={this.crearNuevaCita}>
											 <div className="form-group row">
													 <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
													 <div className="col-sm-8 col-lg-10">
															 <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
													 </div>
											 </div>
											 <div className="form-group row">
													 <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
													 <div className="col-sm-8 col-lg-10">
															 <input ref={this.propietarioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
													 </div>
											 </div>

												<div className="form-group row">
													 <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
													 <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
															 <input ref={this.fechaRef} type="date" className="form-control" />
													 </div>

													 <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
													 <div className="col-sm-8 col-lg-4">
															 <input ref={this.horaRef} type="time" className="form-control" />
													 </div>
											 </div>

											 <div className="form-group row">
													 <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
													 <div className="col-sm-8 col-lg-10">
															 <textarea  ref={this.sintomasRef} className="form-control"></textarea>
													 </div>
											 </div>
											 <div className="form-group row justify-content-end">
													 <div className="col-sm-3">
															 <button type="submit" className="btn btn-success w-100">Agregar</button>
													 </div>
											 </div>

											 {error}

									 </form>
							 </div>
			 </div>
			 )
	 }
}

AgregarCita.propTypes = {
	agregarCita: PropTypes.func.isRequired
}

const mapsStateToProps = state => ({
	citas: state.citas.citas,
	error: state.error.error
})

export default connect(mapsStateToProps, { agregarCita, mostrarError }) (AgregarCita);
