import React from "react";
import { Link } from 'react-router-dom';
import './MainMenu.css'; // Opcional para estilos

const MainMenu = () => (
  <nav className="main-menu">
    <ul>
      <li><Link to="/">Inicio</Link></li>
      {/* Agrega enlaces a otras páginas más adelante */}
    </ul>
  </nav>
);

export default MainMenu;

