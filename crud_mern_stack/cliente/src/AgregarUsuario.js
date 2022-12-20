import React, {useState} from 'react'
import uniquid from 'uniqid'

function AgregarUsuario() {
    
    //Hooks de react - para utilizarlos en el formulario con el atributo value
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    function agregarUsuario() {
        var usuario ={
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniquid()
        }
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
                        <input type="text" className="form-control" value={nombre} onChange={(e) => { setNombre(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><b>E-mail</b></label>
                        <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label"><b>Teléfono</b></label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => { setTelefono(e.target.value)}}></input>
                </div>

                <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
            </div>
        </div>
        </div >
    )
}

export default AgregarUsuario