import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearNuevoProductoAction } from "../actions/productoActions";



function NuevoProducto() {

    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    // Mandar llamar el action de productoAction
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );

    const submitNuevoProducto = e => {
        e.preventDefault()
        //Validar formulario
        if(nombre.trim() === '' || precio <= 0) {
            return;
        }
        //si no hay errores

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    };


    return (
        <div className="row justify-content-center">
            <div className="cl-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo Producto</h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input
                                    id="nombre"
                                    type='text'
                                    className="form-control"
                                    placeholder="Nombre del Producto."
                                    value={ nombre }
                                    onChange={ e => setNombre(e.target.value) }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input
                                    id="precio"
                                    type='number'
                                    className="form-control"
                                    placeholder="Precio del Producto."
                                    value={ precio }
                                    onChange={ e => setPrecio(Number(e.target.value)) }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;