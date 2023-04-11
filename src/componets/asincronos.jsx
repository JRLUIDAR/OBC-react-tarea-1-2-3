import React from 'react';
import { Observable} from 'rxjs'

const Asincronos = () => {
   

    async  function saluda(){
        let nombre;
        console.log('primera vez =' + nombre)
        return  new Promise((resolve,error)=>{
            setTimeout(() =>resolve(nombre='Lucian'), 2000);
       })

    }

    async function prueba(){
        saluda().then(res=>console.log(`despues de haber resuelto la promesa  el nombre es = ${res}`))
    }

    /* Creamos un observalbe */
    const contador = new Observable(e=>{
        let num;
       for( let i=0;i<5;i++){
        setTimeout(() => {
            e.next(num=i)
        }, 1500);
       }

        if(num==5) e.complete()
    })


    /* Usemos el observalbe */
    const usaObservable=()=>{ 
        contador.subscribe({
            next(res){console.log(`El valor del contador es ${res}`)},
            error(err){console.error(`Aqui manejamos los posibles errores`)},
            complete(){console.log(`Nos desesrivimos del Observalbe`)}
        })
    }
    
 

    return (
        <div>
        <button onClick={prueba}>Saluda</button><hr/>
        <h3>Probamos el observable</h3>
        <button onClick={usaObservable}>Prueba Observable</button>
            
        </div>
    );
}

export default Asincronos;
