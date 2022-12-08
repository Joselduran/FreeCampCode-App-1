import Logo_fondo_blanco from "./img/Logo_fondo_blanco.png";
import "./App.css";
import js from "./img/js.png";
import htmlima from "./img/htmlima.png";
import cssima from "./img/cssima.png";
import Reactima from "./img/Reactima.png";
import Boton from "./Componentes/Boton.js";
import Contador from "./Componentes/Contador.js";
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);

  const ejecutarClic = () => {
    setNumClics(numClics + 1);
  };



  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img src={Logo_fondo_blanco} className="josel-logo" alt="logo" />
      </div>
      <div className="social">
        <img src={js} className="prueba" alt="javascript" />
        <img src={htmlima} className="prueba" alt="html" />
        <img src={cssima} className="prueba" alt="css" />
        <img src={Reactima} className="prueba" alt="react" />
      </div>
      <div className="contenedor-contador-botones">
        <Contador numClics={numClics} />
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
        <Boton
          texto="Clic"
          esBotonClic={true}
          manejarClic={ejecutarClic}
        />
      </div>
    </div>
  );
}

export default App;
