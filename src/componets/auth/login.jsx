import React, { useEffect, useState } from 'react';
import { Formik,Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate,useNavigate } from 'react-router-dom';

import { Task } from '../../model/task.class';

const Login = ( {users,logged,setLogged}) => {

    const [usuarioRegistrado, setUsuarioRegistrado] = useState({});
    const navigate=useNavigate()


    const initialValues={
        email:'',
        password:''
    }

    const validaciones=Yup.object().shape({
        email:Yup.string().email('Formato incorecto').required('Campo Obigatorio'),
        password:Yup.string().required('Campo Obligatorio')
    })
    useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(users))
    },[users])

    useEffect(()=>{
       if(logged){
        navigate('/tarea-16-17-18')
       }else return

    },[usuarioRegistrado])

    /* Creamos  un metodo para comporbar que el usuario existe  */
    function getUsuario(user){
        return users.filter(e=>e.user===user.email)
       // if(temp) setUsuarioRegistrado(temp)  
      } 

    return (
        <div>
        
        <Formik
         initialValues={initialValues}
         validationSchema={validaciones}
         onSubmit={(values)=>{   
          const temp=getUsuario(values)  
          setUsuarioRegistrado(temp[0].email)    
          usuarioRegistrado!=='' ? 
          ( setLogged(true)
             
          )
           :
          ( setLogged(false))    
         }}
         >
         { ({errors,touched}) =>(
          <Form className='w-25 mt-5 m-auto border border-1 p-3 bg-gray'>
            <div><h3>Login </h3></div>
            <div className='d-flex flex-column '>
            <Field type='text' name='email' placeholder='Introduzca Email' className='form-control'/>
            { errors.email && touched.email && (<ErrorMessage className='text-danger' name='email' component='small'></ErrorMessage>)}
            </div>

            <div className='d-flex flex-column my-3'>
            <Field type='text' name='password' placeholder='Introduzca password' className='form-control'/>
            { errors.password && touched.password && (<ErrorMessage className='text-danger' name='password' component='small'></ErrorMessage>)}
            </div>
            

            <button type='submit' className='btn btn-primary btn-lg w-100' > Login </button>
          </Form>
            )}

        </Formik>

        <div>
            <small>Aun no tines cuenta ? <Link to='/register'>Registrate </Link></small>
        </div>
        </div>
    );
}

export default Login;
