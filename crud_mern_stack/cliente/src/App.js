import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'blue'}} >CrudMergeStack - MANRED</h1>
      <ListaUsuarios/>
      <AgregarUsuario/>
      <EditarUsuario/>
    </div>
  );
}

export default App;
