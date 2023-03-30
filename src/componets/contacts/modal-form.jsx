import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../model/Contacto.class';

const ModalForm = ({modalOff,add}) => {

    const nombreRef=useRef('');
    const apellidoRef=useRef('');
    const emailRef=useRef('')

    /* function para crear nuevo contacto */
    function crearContacto(e){
         e.preventDefault();
        const nuevoContacto= new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        )

        //comprobabos que los valores no vienen vacios
        if(nombreRef.current.value !=='' && apellidoRef.current.value !=='' && emailRef.current.value !==''){
            add(nuevoContacto);
            modalOff()      
        }else{
            alert('todos los campos son Oligatorios')
        }
    }


    return (
        <div className='miModal'>

        <form className='form mi-form' onSubmit={crearContacto}>
          <div className='cerrar-modal' onClick={()=>modalOff()}> X</div>
            <h3 className='mx-auto'>Nuevo Contacto</h3><hr></hr>
          <div class="form-group px-5 py-2">
          
            <input  ref={nombreRef}  type="text" className="form-control my-2" placeholder="Nombre"/>
            <input  ref={apellidoRef}  type="text" className="form-control my-2" placeholder="Apellido"/> 
            <input  ref={emailRef}  type="email" className="form-control my-2" placeholder="Email"/>  
            <button type='submit' className='btn btn-primary my-2 btn-lg w-100' >Crear Contacto</button>    
         </div>
        </form>
    
           

        </div>
    );
};


ModalForm.propTypes = {

    //declaramos los props
    modalOff:PropTypes.func,
    add:PropTypes.func
};


export default ModalForm;
