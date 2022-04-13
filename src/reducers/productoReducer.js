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
        case types.comenzarDescargaProductos:
            return {
                ...state,
                loading: action.payload
            }
        case types.agregarProductoExito:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case types.agregarProductoError:
        case types.descargaProductosError:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.descargaProductosExito:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        default:
            return state;
    }
}