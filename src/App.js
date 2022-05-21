import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

import BotonCalc from './components/BotonCalc';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';

import Contador from './components/Contador';
import Boton from './components/Boton';

import Testimonio from './components/Testimonio';

import { useState } from 'react';
import { evaluate } from 'mathjs';

const testimonios = [
  {
    img: 'Shawn',
    nombre: 'Shawn Wang',
    pais: 'Singapore',
    cargo: 'Software Engineer',
    empresa: 'Amazon',
    testimonio:
      "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
  },
  {
    img: 'Sarah',
    nombre: 'Sarah Chima',
    pais: 'Nigeria',
    cargo: 'Software Engineer',
    empresa: 'ChatDesk',
    testimonio:
      'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.',
  },
  {
    img: 'Emma',
    nombre: 'Emma Bostian',
    pais: 'Sweden',
    cargo: 'Software Engineer',
    empresa: 'Spotify',
    testimonio:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
  },
];

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularRes = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.');
    }
  };

  let [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log('clic');
    setNumClics(numClics++);
  };

  const reiniciarContador = () => {
    console.log('reiniciar');
    setNumClics(0);
  };

  const testimonio = testimonios.map((testimonio, index) => (
    <Testimonio
      img={testimonio.img}
      nombre={testimonio.nombre}
      pais={testimonio.pais}
      cargo={testimonio.cargo}
      empresa={testimonio.empresa}
      testimonio={testimonio.testimonio}
      key={index}
    />
  ));

  return (
    <div className="App">
      <div className="calculadora">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de freeCodeCamp"
          />
        </div>
        <div className="contenedor-calculadora">
          <Pantalla input={input} />
          <div className="fila">
            <BotonCalc manejarClic={agregarInput}>1</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>2</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>3</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>+</BotonCalc>
          </div>
          <div className="fila">
            <BotonCalc manejarClic={agregarInput}>4</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>5</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>6</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>-</BotonCalc>
          </div>
          <div className="fila">
            <BotonCalc manejarClic={agregarInput}>7</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>8</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>9</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>*</BotonCalc>
          </div>
          <div className="fila">
            <BotonCalc manejarClic={calcularRes}>=</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>0</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>.</BotonCalc>
            <BotonCalc manejarClic={agregarInput}>/</BotonCalc>
          </div>
          <div className="fila">
            <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          </div>
        </div>
      </div>
      <div className="contador-container">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de freeCodeCamp"
          />
        </div>
        <div className="contenedor-contador-principal">
          <Contador numClics={numClics} />
          <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />
        </div>
      </div>
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>
        {testimonio}
      </div>
    </div>
  );
}

export default App;
