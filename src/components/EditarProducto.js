function EditarProducto() {
    return (
        <div className="row justify-content-center">
            <div className="cl-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>

                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input
                                    id="nombre"
                                    type='text'
                                    className="form-control"
                                    placeholder="Nombre del Producto."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input
                                    id="precio"
                                    type='number'
                                    className="form-control"
                                    placeholder="Precio del Producto."
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