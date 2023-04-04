import React from 'react';
import { Task } from '../model/task.class';
import { LEVELS } from '../model/levels.enum';
import { Formik, Form, Field, ErrorMessage, resetForm} from 'formik';
import * as Yup from 'yup';
import { json } from 'react-router-dom';

/* creamos las validaciones  */
const validaciones=Yup.object().shape(
    {
        name:Yup.string().required('Campo obligatorio').min(6,'Minimo 6 caracteres'),
        description:Yup.string().required('Campo obligatorio').min(6,'Minimo 6 caracteres'),
        level:Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENTE, LEVELS.BLOCKING],null)
    }
)



const CreateTask = () => {


    const task= new Task()
    /* Creamos los valores iniciales del formulario */

    const initialForm={
        name:'',
        description:'',
        completed:false,
        level:LEVELS.NORMAL
    }
    
    return (
        <div>
       <div className='bg-primary  w-50 mx-auto'>
          <h6 className='mt-5'>En esta tarea , voy a crear un formulario para crear una tarea, pero utilizando formik e yup</h6>
          <small>Los datos del formulario, una vez mandados, se muestra en una alerta en formato JSON </small>
       </div>

        <Formik       
            validationSchema={validaciones}
            initialValues={initialForm}
            onSubmit={(values,{resetForm})=>{
                alert (JSON.stringify(values))             
                resetForm()
              
            }}
        >
           {({ errors, touched})=>( 

            <Form  className='border border-2 p-3 w-50 bg-ligth mx-auto mt-5'>
                    <h3>Crear nueva tarea</h3><hr></hr>
                <div class="d-flex flex-column justify-content-start mb-3 mt-3">             
                    <label style={{textAlign:'left', marginLeft:'3px'}} htmlFor='name'>Titulo Tarea *</label>
                    <Field type='text' name='name' placeholder='Titulo tarea' className='form-control form-row' />
                    { errors.name && touched.name && (<ErrorMessage className='text-danger' component="span" name='name'></ErrorMessage>)}          
                </div>

                <div class="d-flex flex-column justify-content-start mb-3">             
                    <label style={{textAlign:'left', marginLeft:'3px'}} htmlFor='name'>Description de la tarea *</label>
                    <Field component='textarea' name='description' placeholder='Titulo tarea' className='form-control form-row' rows="5" />
                    { errors.description && touched.description && (<ErrorMessage className='text-danger' component="span" name='description'></ErrorMessage>)}          
                </div>

                <div class="d-flex flex-column justify-content-start mb-3 mt-3">             
                    <label style={{textAlign:'left', marginLeft:'3px'}} htmlFor='level'>Seleciona nivel de urgencia *</label>
                    <Field as="select" name='level' placeholder='Titulo tarea' className='form-control form-row' >
                        <option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
                        <option value={LEVELS.URGENTE}>{LEVELS.URGENTE}</option>
                        <option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
                    </Field>
                    { errors.level && touched.level && (<ErrorMessage className='text-danger' component="span" name='level'></ErrorMessage>)}          
                </div>

                <button type='submit' className='btn btn-primary btn-lg w-100' > Crear </button>            
            </Form>
           )}

        </Formik>
           
        </div>
    );
}

export default CreateTask;
