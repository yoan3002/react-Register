/* Register Component
 *
 * Este componente proporciona un formulario para que los usuarios se registren.
 * Incluye campos para el nombre, correo electrónico y contraseña, junto con
 * un botón para enviar los datos del formulario.
 */

import React, { useState } from 'react';
import './Register.css';

/**
 * Manejador de cambios en los campos del formulario.
 * 
 * @param {Object} e - Evento de cambio.
 */

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

/**
 * Manejador del envío del formulario.
 * 
 * @param {Object} e - Evento de envío del formulario.
 */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User registered with data: ', formData);
    };

/**
 * Componente que renderiza el formulario de registro.
 * 
 * @returns {JSX.Element} - Formulario de registro.
 */

    return (
        <div className="register-container">
            <div className='register-container-form'>
            <h2 className="title-login">INICIAR SESION <br /> EN COOSDY</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label className='form-label'>NOMBRE:</label>
                    <input className='form-input'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Carlos"
                        required
                    />
                </div>
                <div className="form-item">
                    <label className='form-label'>CORREO:</label>
                    <input className='form-input'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="carlos77@gmail.com"
                        required
                    />
                </div>
                <div className="form-item">
                    <label className='form-label'>CONTRASEÑA:</label>
                    <input className='form-input'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="contraseña"
                        required
                    />
                </div>
                <button className='btn-iniciar' type="submit">INICIAR</button>
            </form>
            </div>
        </div>
    );
}

export default Register;

