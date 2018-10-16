import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA } from '../actions/types';

const initialState = { citas: [] }

export default function(state = initialState, action) {
		switch(action.type){
			case MOSTRAR_CITAS:
			 	return { ...state }
			case AGREGAR_CITA:
				return {
					...state,
					citas: [...state.citas, action.payload]
				}
			case BORRAR_CITA:
					return {
						...state,
						citas: state.citas.filter(cita => cita.id !== action.payload)
					}
			default:
				return state;
		}
}
