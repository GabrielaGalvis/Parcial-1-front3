import { useState } from 'react';
import './App.css'
import Card from "./components/Card";
import Mensaje  from './components/mensaje';
import Styles from './styles/Fomulario.module.css'

function App() {
  const [estudiante, setEstudiante]=useState({
    nombre:"",
    materiaFavorita:""
  });

  const [mostrarCard, setMostrarCard]=useState(false);
  const [errores, setErrores]=useState(false);

  const handleChangeNombre= (event) =>{
    setEstudiante({...estudiante, nombre:event.target.value});
    console.log('es',estudiante);
  }

  const handleChangeMateriaFavorita= (event) =>{
    setEstudiante({...estudiante,materiaFavorita:event.target.value});
    console.log('es',estudiante);

  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('es1',estudiante);
    if(estudiante.nombre.length>=3 &&  !(/^\s/.test(estudiante.nombre)) && estudiante.materiaFavorita.length>=6){
      setMostrarCard(true);
      setErrores(false);
    }else{
      setMostrarCard(false);
      setErrores(true);
    }
  }
  return (
    <div className="App">
      <h1 className={Styles.titulo}>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit} className={Styles.formulario}>
        <label >Nombre</label>
        <input className={Styles.input} onChange={handleChangeNombre} type='text' placeholder='Ingresa tu nombre'/>
        <label>Materia favorita</label>
        <input className={Styles.input} onChange={handleChangeMateriaFavorita} type='text' placeholder='Ingresa tu materia favorita'/>
        <button className={Styles.boton} type='submit'>Enviar</button>
      </form>  
      {errores && <Mensaje/> } 
      {mostrarCard && <Card nombre={estudiante.nombre} materiaFavorita={estudiante.materiaFavorita}/>}
      
    </div>
    );
}

export default App
