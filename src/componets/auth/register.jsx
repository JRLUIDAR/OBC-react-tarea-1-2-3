import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Register = ({users,setUsers}) => {

    const initialValues={
        email:'',
        password:''
    }

    const validaciones=Yup.object().shape({
        email:Yup.string().email('Formato incorecto').required('Campo Obigatorio'),
        password:Yup.string().required('Campo Obligatorio')
    })
    return (
        <div>
            <Formik
         initialValues={initialValues}
         validationSchema={validaciones}
         onSubmit={(values)=>{       
              let newUser={
                user:values.email,
                password:values.password
              } 
            setUsers([...users,newUser])  
              console.error(newUser)
          
         }}
         >
         { ({errors,touched}) =>(
          <Form className='w-25 mt-5 m-auto border border-1 p-3 bg-gray'>
            <div><h3>Registrate </h3></div>
            <div className='d-flex flex-column '>
            <Field type='text' name='email' placeholder='Introduzca Email' className='form-control'/>
            { errors.email && touched.email && (<ErrorMessage className='text-danger' name='email' component='small'></ErrorMessage>)}
            </div>

            <div className='d-flex flex-column my-3'>
            <Field type='text' name='password' placeholder='Introduzca password' className='form-control'/>
            { errors.password && touched.password && (<ErrorMessage className='text-danger' name='password' component='small'></ErrorMessage>)}
            </div>
            

            <button type='submit' className='btn btn-primary btn-lg w-100' > Guardar  </button>
          </Form>
            )}

        </Formik>

        <div>
            <small>Ya  tienes cuenta ? <Link to='/login'>Inicia session </Link></small>
        </div>
       
            
        </div>
    );
}

export default Register;
