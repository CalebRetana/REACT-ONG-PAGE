import React, { useState } from 'react';
import "../../css/Form.css";
import logo from '../../imagenes/RAH.png';
import ninyos from '../../imagenes/niños.png'
function Form() {
  const [nombreTitular, setNombreTitular] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [cantidad, setCantidad] = useState('');
  
  const validarTarjeta = (numero) => {
    let suma = 0;
    let alternar = false;

    
    for (let i = numero.length - 1; i >= 0; i--) {
      let n = parseInt(numero[i]);

      if (alternar) {
        n *= 2;
        if (n > 9) {
          n -= 9;
        }
      }

      suma += n;
      alternar = !alternar;
    }

    return suma % 10 === 0;
  };

  const handleDonarClick = () => {
    if (!nombreTitular || !numeroTarjeta || !fechaExpiracion || !codigoSeguridad || !cantidad) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    
    const numeroTarjetaLimpio = numeroTarjeta.replace(/\s+/g, '');
    if (!/^\d{13,19}$/.test(numeroTarjetaLimpio)) {
      alert("El número de la tarjeta debe tener entre 13 y 19 dígitos.");
      return;
    }

    if (!validarTarjeta(numeroTarjetaLimpio)) {
      alert("El número de la tarjeta es inválido.");
      return;
    }

    alert("¡Donación realizada con éxito!");
  };

  return (
    <div className='containerForm'>
      <div className="formIzquierda">
        <img className='imgLogoForm' src={logo} alt='logo'/>
        <img className='imgNinyos' src={ninyos} alt='ninyos'/>
      </div>
      <div className="formDerecha">
        <h1>¡ESTÁS AYUDANDO A MUCHOS NIÑOS!</h1>
        <div className="formDatos">
          <div className="nombresTarjeta">
            <label>Nombre del titular de la tarjeta:</label>
            <input 
              className='inputNombreTitular'
              value={nombreTitular}
              onChange={(e) => setNombreTitular(e.target.value)}
            />
          </div>
          <div className="segundoBloque">
            <div className="numeroTarjeta">
              <label>Número de la tarjeta:</label>
              <input 
                className='inputNumeroTarjeta'
                value={numeroTarjeta}
                onChange={(e) => setNumeroTarjeta(e.target.value)}
              />
            </div>
            <div className="fechaVencimiento">
              <label>Fecha de vencimiento: </label> 
              <input 
                className='fechaExpiracion' 
                type='date' 
                value={fechaExpiracion}
                onChange={(e) => setFechaExpiracion(e.target.value)}
              />
            </div>
          </div> 
          <div className="codigoSeguridad">
            <label>Codigo de seguridad: </label>
            <input 
              className='inputCodigoSeguridad'
              value={codigoSeguridad}
              onChange={(e) => setCodigoSeguridad(e.target.value)}
            />
            <label>Cantidad (Dolares) $: </label>
            <input 
            className='Cantidad'
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
        </div>
        <div className="formAbajo">
          <button className='btnDonar' onClick={handleDonarClick}>Donar</button>
        </div>
      </div>
    </div>
  );
}

export default Form;




