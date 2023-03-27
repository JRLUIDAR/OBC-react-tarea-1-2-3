import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../model/Contacto.class'


const BComponent = ({contacto,fn})=> {
    return (
        <div>
            <div>Info Contacto</div>
            <h2>Nombre : { contacto.nombre }</h2>
            <h3>Apellido :  { contacto.apellido }</h3>
            <h4>Email : { contacto.email  } </h4>
            <h5>{ contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'  }</h5>
            <button onClick={fn}>Cambiar Estado Usuario </button>
        </div>
    );
};


BComponent.propTypes = {
 contacto:PropTypes.instanceOf(Contacto)  
 
}

export default BComponent;
