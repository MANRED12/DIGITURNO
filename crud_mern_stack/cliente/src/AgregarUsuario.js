import React from 'react'

function AgregarUsuario() {

    function agregarUsuario() {

    }
    return (
        <div className="container">
            <div className="row">
                <h2 className="mt-4" style={{ color: "green" }}><b>CREAR UN NUEVO USUARIO</b></h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">

                    <div className="mb-3 mt-5">
                        <label htmlFor="nombre" className="form-label"><b>Nombre</b></label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><b>E-mail</b></label>
                        <input type="email" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label"><b>Teléfono</b></label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarUsuario