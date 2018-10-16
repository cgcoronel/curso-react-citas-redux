import { MOSTRAR_ERROR } from './types';

export const mostrarError = (estado) => {
		return {
			type: MOSTRAR_ERROR,
			payload: estado
		}
}
