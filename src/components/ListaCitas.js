import React from 'react';
import Cita from './Cita';

import { connect } from 'react-redux';
import { obtenerCitas } from '../actions/citasActions';

import store from '../store';

store.subscribe( () => {
			localStorage.setItem('citas', JSON.stringify(store.getState()));
});


class ListaCitas extends React.Component {

	componentDidMount() {
		this.props.obtenerCitas();
	}

	render () {

		const citas = this.props.citas;
		const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas';

		return (
			<div className='card mt-5'>
				<div className='card-body'>
					<h2 className='card-title text-center'>{mensaje}</h2>
					<div className='lista-citas'>
					 {Object.keys(citas).map(cita => (
						 <Cita
						  key={cita}
						 	info={ citas[cita] }
						 />
					 ))}
					</div>
				</div>
			</div>
		)
	}
}

const mapsStateToProps = state => ({
	citas : state.citas.citas
});

export default connect(mapsStateToProps, { obtenerCitas }) (ListaCitas);
