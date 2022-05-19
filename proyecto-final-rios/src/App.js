import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './views/Home/Home';
import Comics from './views/Comics/Comics';
import Mangas from './views/Mangas/Mangas';
import Detalle from './views/Detalle/Detalle';
import Cart from './views/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/comics" element={<Comics/>} />
        <Route path="/mangas" element={<Mangas/>} />
        <Route path="/detalle/:id" element={<Detalle/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

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
