import React, {useState, useEffect} from 'react';
import { Task } from '../model/task.class';
import { LEVELS } from '../model/levels.enum';
import { useNavigate } from 'react-router-dom';


const Tasks = ({users,logged,setLogged}) => {

    const navigate=useNavigate()

   /* Nos inventamos unas cuntas tareas */
   const task1= new Task('Primera','Primera tarea',true,LEVELS.NORMAL)
   const task2= new Task('Segunda','Segunda tarea',true,LEVELS.NORMAL)
   const task3= new Task('Tercera','Tercera tarea',true,LEVELS.URGENTE)

   const [tasks,setTasks] = useState([task1,task2,task3]);

   function logOnOff(){
     if(!logged) navigate('/login')
     if(logged)  setLogged(false)
   }


    return (
        <div className='w-50 m-auto mt-5'> 
         <button className=' btn btn-outline-secondary' onClick={()=>{logOnOff()}}>{logged ? 'Logout': 'Login'}</button>           
        { logged  ? (
           <div>
           <h3>Mis tareas</h3><hr/>
            <ul>
                {tasks.map((e,index)=><li key={index}>{e.name}</li>)}
            </ul>
           </div>

        ):( <h3>Logueate para poder ver las tareas</h3>)}
            
        </div>
    );
}

export default Tasks;
