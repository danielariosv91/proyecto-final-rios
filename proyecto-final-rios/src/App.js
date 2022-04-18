import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Button texto="Hola Mundillo" />
    </div>
  );
}

export default App;
