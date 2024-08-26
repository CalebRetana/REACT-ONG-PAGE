import React, { useState } from 'react';
import "../../css/Form.css";
import logo from '../../imagenes/RAH.png';
import ninyos from '../../imagenes/niños.png';

function FormVoluntarios() {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [contacto, setContacto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    let erroresTemp = {};

    if (!nombre.trim()) {
      erroresTemp.nombre = 'El nombre es requerido *';
    }

    if (!edad || isNaN(edad)) {
      erroresTemp.edad = 'Introduce una edad válida *';
    }
    if ( edad <= 18) {
        erroresTemp.edad = 'Debes ser mayor de edad :( *';
      }
    if (!contacto.trim()) {
      erroresTemp.contacto = 'El contacto es requerido *';
    }

    if (!cantidad.trim()) {
      erroresTemp.cantidad = 'Introduce tu genero *';
    }

    return erroresTemp;
  };

  const handleDonar = () => {
    const erroresValidacion = validarFormulario();

    if (Object.keys(erroresValidacion).length === 0) {
      setNombre('');
      setEdad('');
      setContacto('');
      setCantidad('');
      setErrores({});
      setMensaje('¡Gracias! Pronto nos pondremos en contacto.');
    } else {
      
      setErrores(erroresValidacion);
    }
  };

  return (
    <div className='containerForm'>
      <div className="formIzquierda">
        <img className='imgLogoForm' src={logo} alt='logo' />
        <img className='imgNinyos' src={ninyos} alt='ninyos' />
      </div>
      <div className="formDerecha">
        <h1>¡Hola amigo voluntario!</h1>
        <div className="formDatos">
          <div className="nombresTarjeta">
            <label>Escríbenos tu nombre:</label>
            <input 
              className='inputNombreTitular'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}
          </div>
          <div className="segundoBloque">
            <div className="numeroTarjeta">
              <label>¿Cuál es tu edad?:</label>
              <input 
                className='inputNumeroTarjeta'
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
              {errores.edad && <p className="error">{errores.edad}</p>}
            </div>
            <div className="fechaVencimiento">
              <label>Déjanos un contacto:</label> 
              <input 
                className='fechaExpiracion'
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
              />
              {errores.contacto && <p className="error">{errores.contacto}</p>}
            </div>
          </div> 
          <div className="codigoSeguridad">
            <label>Genero:</label>
            <input 
              className='Cantidad'
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
            {errores.cantidad && <p className="error">{errores.cantidad}</p>}
          </div>
        </div>
        <div className="formAbajo">
          <button className='btnDonar' onClick={handleDonar}>Registrarme</button>
        </div>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>
  );
}

export default FormVoluntarios;

