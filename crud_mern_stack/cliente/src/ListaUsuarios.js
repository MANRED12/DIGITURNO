import React from "react";
import UsuarioIndividual from "./UsuarioIndividual";

//Construimoscomponente
function ListaUsuarios() {
  return (
    <div>
      <h2 style={{ color: "red" }}>Lista de Usuarios</h2>
      <UsuarioIndividual/>
    </div>
  );
}

export default ListaUsuarios;
