import { types } from "../types";

// Cada reducer tiene su propio state

const initialState = {
    productos:[],
    error: null,
    loading: false
}

export default function ( state = initialState, action ) {
    switch (action.type) {
        case types.agregarProducto:
            return {
                ...state,
                loading: true
            }
        case types.agregarProductoExito:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case types.agregarProductoError:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}