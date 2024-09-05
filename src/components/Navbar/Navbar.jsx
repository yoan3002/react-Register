'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#' },
    { name: 'Acerca de', href: '#' },
    { name: 'Contacto', href: '#' },
  ]

  return (
    <nav className="responsive-menu">
      <div className="menu-container">
        <div className="logo">Logo</div>
        
        {/* Menú para pantallas grandes */}
        <ul className="desktop-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="menu-item">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Botón de menú para móviles */}
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <ul className="mobile-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="mobile-menu-item"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}