# React + Vite

# Módulo de Registro

El módulo de registro proporciona un formulario para que los usuarios se registren en la aplicación. Incluye campos para el nombre, correo electrónico y contraseña.

## Estructura del Proyecto

- `src/components/Register/Register.jsx`: El componente principal del formulario de registro.
- `src/components/Register/Register.css`: Los estilos específicos para el componente de registro.

## Uso

Para utilizar el componente `Register` en tu aplicación, importalo y utilízalo en el componente principal:

```jsx
import React from 'react';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
