import { types } from "../types";

// Crear nuevos productos.
export const crearNuevoProductoAction = ( producto ) => {
    return (dispatch) => {
        dispatch( agregarProducto())

        try {
            dispatch( agregarProductoExito(producto) )
        } catch (error) {
            dispatch( agregarProductoError(true) )
        }
    }
};

const agregarProducto = () => ({
    type: types.agregarProducto
});
//Si el producto se guarda en base de datos:
const agregarProductoExito = ( producto ) => ({
    type: types.agregarProductoExito,
    payload: producto
});
// Si hay un error:
const agregarProductoError = (estado) => ({
    type: types.agregarProductoError,
    payload: estado
});