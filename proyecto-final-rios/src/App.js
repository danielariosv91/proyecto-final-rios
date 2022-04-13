import logo from './logo.svg';
import './App.css';

function App() {
  /** propiedad dinamica en un objeto */
  const notas = 'curso de react';

  const alumno = {
    nombre: 'Daniela', 
    apellido: 'Rios', 
    ['notas ' + notas]: 5
  }

  console.log(alumno);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
