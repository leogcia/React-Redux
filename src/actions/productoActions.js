import { types } from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";


// Crear nuevos productos.
export const crearNuevoProductoAction = ( producto ) => {
    return async (dispatch) => {
        dispatch( agregarProducto())
        try {
            // insertar en la API:
            await clienteAxios.post('/productos', producto);
            //Si todo sale bien, actualizar el state:
            dispatch( agregarProductoExito(producto) );

            // Alerta:
            Swal.fire(
                'Correcto',
                'El Producto se agregó correctamente.',
                'success'
            );
            
        } catch (error) {
            // Si hay un error cambiar el state:
            dispatch( agregarProductoError(true) );
            // Alerta Error:
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error.',
                text: 'Hubo un error, intenta de nuevo'
            });
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


//Funcion que descarga los productos de la base de datos:
export const obtenerProductosAction = () => {
    return async (dispatch) => {
        dispatch( descargarProductos() );
        try {
            const respuesta =  await clienteAxios('/productos');
            dispatch( descargarProductosExitosa(respuesta.data) )
        } catch (error) {
            console.log(error)
            dispatch( descargarProductosError() )
        }
    }
};

const descargarProductos = () => ({
    type: types.comenzarDescargaProductos,
    payload: true
});

const descargarProductosExitosa = ( productos ) => ({
    type: types.descargaProductosExito,
    payload: productos
});

const descargarProductosError = () => ({
    type: types.descargaProductosError,
    payload: true
});