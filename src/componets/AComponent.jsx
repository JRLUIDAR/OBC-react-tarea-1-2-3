import React, {useState} from 'react';
import BComponent from './BComponent';
import { Contacto } from '../model/Contacto.class';
import Asincronos from './asincronos';


const AComponent = () => {
    const usuario=new Contacto('Luciano','Stefanuca','luc@luc.com',true)
    const[ user,setConectado]=useState(usuario)

   function cambiaEstadoUsuario(){
    
     setConectado({
        nombre:user.nombre,
        apellido:user.apellido,
        email:user.email,
        conectado:!user.conectado
     })
    }

    return (
        <div>
            <BComponent contacto={user} fn={cambiaEstadoUsuario}></BComponent>
            <Asincronos/>
        </div>
    );
};



export default AComponent;
