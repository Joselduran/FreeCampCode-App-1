import Logo_fondo_blanco from "./Logo_fondo_blanco.png";
import "./App.css";
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
