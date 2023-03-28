import React,{ useState, useEffect} from 'react';
import PropTypes from 'prop-types';


const Clock = () => {
    const fechaInitial=new Date();

    const [fecha, setFecha] = useState(fechaInitial);
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState('Martin');
    const [apellidos, setApellidos] = useState('San José');

    const tick=()=>{
        setEdad(edad + 1)
        return {
            fecha:new Date(),
            edad
        }
    }

    useEffect(() => {
        
        //cuando se monta el componente
        const timerId=setInterval(() => {
            tick()
        }, 1000);

        return () => {    
            //cuando se destruya el componente
            clearInterval(timerId)
        };
    }, []);

    return (
       <div>
            <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
            <h3>{nombre} {apellidos}</h3>
             <h1>Edad: {edad}</h1>
            
        </div>
    );
};


Clock.propTypes = {

};


export default Clock;
