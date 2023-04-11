import logo from './logo.svg';
import './App.css';
import AComponent from './componets/AComponent';
import Home from './componets/Home';
import Clock from './componets/Clock';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListaContactos from './componets/contacts/listaContactos';
import CambiarColor from './componets/CambiarColor';
import CreateTask from './componets/createTask';
import Tasks from './componets/tasks';
import Login from './componets/auth/login';
import React, { useState, useEffect } from 'react';
import Register from './componets/auth/register';
import Jokes from './componets/jokes';


function App() {
   
  const [users,setUsers] = useState(JSON.parse(localStorage.getItem('usuarios')) ?? []);
  const [logged, setLogged] = useState(false);
 

  useEffect(()=>{
    localStorage.setItem('usuarios',JSON.stringify(users))
},[users])

  
  return (
    <div className="App col-12">

    <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between '>
      <div className='w-25'>
        <a className="btn btn-primary mx-2" href='/'><i className="bi bi-house"></i>Home</a>
        <h3  className='text-bold mx-2'>Tareas React BootCamp</h3>
      </div>

      <div className='w-75 d-flex justify-start'>
        <a href='/tarea-1-2-3' className='btn btn-primary mx-2'>Tarea 1-2-3</a>
        <a href='/tarea-4-5-6' className='btn btn-primary mx-2'>Tarea 4-5-6</a>
        <a href='/tarea-7-8-9' className='btn btn-primary mx-2'>Tarea 7-8-9</a>
        <a href='/tarea-10-11-12' className='btn btn-primary mx-2'>Tarea 10-11-12</a>
        <a href='/tarea-13-14-15' className='btn btn-primary mx-2'>Tarea 13-14-15</a>
        <a href='/tarea-16-17-18' className='btn btn-primary mx-2'>Tarea 16-17-18</a>
        <a href='/tarea-19-20-21' className='btn btn-primary mx-2'>Tarea 19-20-21</a>
      </div>
    
      
    </nav>
     <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/tarea-1-2-3' element={<AComponent/>}/>
        <Route  path='/tarea-4-5-6' element={<Clock/>}/>
        <Route  path='/tarea-7-8-9' element={<ListaContactos/>}/>
        <Route path='/tarea-10-11-12' element={<CambiarColor/>}/>
        <Route path='/tarea-13-14-15' element={<CreateTask/>}/>
        <Route path='/tarea-16-17-18' element={<Tasks users={users} logged={logged} setLogged={setLogged} />}/>
        <Route path='/login' element={<Login  users={users} logged={logged} setLogged={setLogged}/>} />
        <Route path='/register' element={<Register users={users} setUsers={setUsers}/>}/>
        <Route path='/tarea-19-20-21' element={<Jokes/>}/>
      </Routes>
    </BrowserRouter>
    </div>

   


  );
}

export default App;
