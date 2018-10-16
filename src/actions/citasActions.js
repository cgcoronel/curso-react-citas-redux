import { MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA } from './types';

export const obtenerCitas = () => {
		return {
			type: MOSTRAR_CITAS
		}
}

export const agregarCita = (cita) => {
	return {
		type: AGREGAR_CITA,
		payload: cita
	}
}

export const borrarCita = (id) => {
	return {
		type: BORRAR_CITA,
		payload: id	
	}
}
