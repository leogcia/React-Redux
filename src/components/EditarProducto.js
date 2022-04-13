import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editarProductoAction } from "../actions/productoActions";




function EditarProducto() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Nuevo state de producto:
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    });

    //Producto a editar:
    const productoEditar = useSelector( state => state.productos.productoEditar );
    
    // Llenar el state automáticamente:
    useEffect(() => {
        setProducto( productoEditar )
    }, [productoEditar]);

    const onChangeInput = (e) => {
        setProducto({
            ...producto,
            [e.target.id]: Number(e.target.value)
        })
    }

    const { nombre, precio } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();
        dispatch(editarProductoAction( producto ));
        navigate('/');
    };

    return (
        <div className="row justify-content-center">
            <div className="cl-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>

                        <form
                            onSubmit={ submitEditarProducto }
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input
                                    id="nombre"
                                    type='text'
                                    className="form-control"
                                    placeholder="Nombre del Producto."
                                    value={nombre}
                                    onChange={onChangeInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input
                                    id="precio"
                                    type='number'
                                    className="form-control"
                                    placeholder="Precio del Producto."
                                    value={precio}
                                    onChange={onChangeInput}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;