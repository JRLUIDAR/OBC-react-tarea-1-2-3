import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../model/Contacto.class';
import ModalForm from './modal-form';


const ListaContactos = () => {

    const contacto1=new Contacto('Luciano','Stefanuca','luc@luc.com',true)
    const contacto2=new Contacto('Dario','Tofan','dar@dar.com',false)
    const contacto3=new Contacto('Louisa','Stefanuca','lui@lui.com',false)
    const [contactos, setContactos] = useState([contacto1,contacto2,contacto3]);
    const [modal,setModal]=useState(false)

    /* funcion para cambiar el estado del contacto o deconectado */
    function onOff(contacto){

        const pos=contactos.indexOf(contacto);
        const temp=[...contactos];
        temp[pos].conectado=!temp[pos].conectado
        setContactos(temp);
    }

    function modalOn(){
        setModal(true)
    }
    function modalOff(){
        setModal(false)
    }

    /* funcion para agregar nuvo contacto */
    function add(contacto){
        const temp=[...contactos];
        temp.push(contacto);
        setContactos(temp)
    }

    /* funcion para eliminar un contacto */
    function borrarContacto(contacto){
        const pos=contactos.indexOf(contacto)
        const temp=[...contactos]
        temp.splice(pos,1)
        setContactos(temp)
    }

    return (
        <div>
            <div className='card w-50 mx-auto p-3 mt-5'>
                <div className='card-header p-3'>Contactos</div>
                <div className='card-boody'>
                 <table className='table'>
                    <thead>
                    <th scope='col'>NOMBRE</th>
                    <th scope='col'>APELLIDO</th>
                    <th scope='col'>EMAIL</th>
                    <th scope='col'>CONECTADO</th>
                    <th scope='col'>OPTIONES</th>
                 </thead>

                <tbody>
                    {contactos.map((contact,index)=>{
                       return(
                        <tr key={index}>
                            <td>{contact.nombre}</td>
                            <td>{contact.apellido}</td>
                            <td>{contact.email}</td>
                            <td  onClick={()=>onOff(contact)} >
                                { contact.conectado ?
                                 (<i className='bi-toggle-on' style={{color:'green',cursor:'pointer'}}></i>):
                                 (<i className='bi-toggle-off' style={{color:'red',cursor:'pointer'}}></i>)
                                  }                         
                            </td>
                            <td className='d-flex justify-content-center'>                          
                             <i className="bi bi-trash mx-2 " style={{cursor:'pointer',color:'red'}} onClick={()=>borrarContacto(contact)}></i>
                            </td> 
                            
                        </tr>
                       )
                    })}
                    </tbody>
                
                </table>
            <button className='btn btn-primary my-2 btn-lg w-100' onClick={modalOn}>New Contact</button>
            </div> 
                
        </div>
         { modal && <ModalForm  modalOff={modalOff} add={add} />}  
        </div>
        
    );
};


ListaContactos.propTypes = {

};


export default ListaContactos;
