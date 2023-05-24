import './App.css';
import logoApp from "../src/imagenes/logoApp.png";
import AppTareas from "../src/componentes/listaTareas.jsx";
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-logo'>
        <img src={logoApp} className="logoApp" ></img>
      </div>
      <AppTareas ></AppTareas>
    </div>
  );
}
export default App;
