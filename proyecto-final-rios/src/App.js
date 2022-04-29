import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <ItemDetailContainer></ItemDetailContainer>
      {/* <ItemListContainer greeting="Hola Mundo. Este es un props"/> */}
    
      
    </div>
  );
}

export default App;

/**
 * Anatomía de un componente 
 *  Props 
 *    valores comunes [num, bool, array, obj]
 *    funciones 
 *    componente (si son funciones)
 *    children 
 *    valores inyectados por librerias (location, rutas)
 *  State 
 *  DOM Sync 
 *  Lifecycle 
 */
