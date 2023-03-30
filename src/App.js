import logo from './logo.svg';
import './App.css';
import AComponent from './componets/AComponent';
import Home from './componets/Home';
import Clock from './componets/Clock';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListaContactos from './componets/contacts/listaContactos';

function App() {
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
      </div>
    
      
    </nav>
     <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/tarea-1-2-3' element={<AComponent/>}/>
        <Route  path='/tarea-4-5-6' element={<Clock/>}/>
        <Route  path='/tarea-7-8-9' element={<ListaContactos/>}/>
     
        
      </Routes>
    </BrowserRouter>
    </div>

   


  );
}

export default App;
