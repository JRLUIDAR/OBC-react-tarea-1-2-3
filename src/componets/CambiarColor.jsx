import React,{ useState} from 'react';

const CambiarColor = () => {

 const [red, setRed] = useState(0);
 const [green,setGreen] = useState(0);
 const [blue, setBlue] = useState(0);
 const [tiempo, setTiempo] = useState(1500);
 const [cambia, setCambia] = useState(true);


    function cambiarColor(){ 
        if(cambia){
            setRed(Math.round(Math.random()*255))
            setGreen(Math.round(Math.random()*255));
            setBlue(Math.round(Math.random()*255));
        }   
       };      
         
    function stop(){
        setCambia(false)     
    }   

    return (
        <div >
            <h3>Entra con el raton para cambiar de color</h3>

            {<div className='cuadrado' onMouseEnter={cambiarColor}  onDoubleClick={stop} style={{backgroundColor:`rgb(${red} ${green} ${blue})`}} >
                    <p className='p-2'> Haz doble click dentro del cuadrado para para el cambio de color</p>
            </div>}
        </div>
    );
}

export default CambiarColor;
