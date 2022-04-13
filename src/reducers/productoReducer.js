import { types } from "../types";

// Cada reducer tiene su propio state

const initialState = {
    productos:[],
    error: null,
    loading: false,
    productoEliminar: null,
    productoEditar: null
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
        case types.productoEliminadoError:
        case types.productoEditadoError:
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
        case types.obtenerProductoEliminar:
            return {
                ...state,
                productoEliminar: action.payload
            }
        case types.productoEliminadoExito:
            return {
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoEliminar ),
                productoEliminar: null
            }
        case types.obtenerProductoEditar:
            return {
                ...state,
                productoEditar: action.payload
            }
        case types.productoEditadoExito:
            return {
                ...state,
                productoEditar: null,
                productos: state.productos.map( producto => producto.id === action.payload.id ? producto = action.payload : producto )
            }
        default:
            return state;
    }
}