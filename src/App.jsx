import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/iniciar-sesion/Register';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <Navbar />
  {/*     <Home /> */}
      <div className="App">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            {/* Agrega más rutas aquí conforme vayas creando otras páginas */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;