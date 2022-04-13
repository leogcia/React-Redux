import { types } from "../types";

const initialState = {
    alerta: null
};

export default function( state = initialState, action ) {
    switch (action.type) {
        case types.mostarAlerta:
            return {
                ...state,
                alerta: action.payload
            }
        case types.ocultarAlerta:
            return {
                ...state,
                alerta: null
            }
        default:
            return state;
    }
}