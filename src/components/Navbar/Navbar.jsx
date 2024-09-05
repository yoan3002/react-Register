// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa los estilos de la barra de navegación

const Navbar = () => {
    return (
        <div className="div-container">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Coosdy
                    </Link>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/que-somos" className="navbar-link">
                                Qué Somos
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/blogs" className="navbar-link">
                                Blogs
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contactanos" className="navbar-link">
                                Contáctanos
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/productos" className="navbar-link">
                                Productos
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/register" className="navbar-link">
                                Registro
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;