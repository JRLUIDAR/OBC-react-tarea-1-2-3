import React, {useState, useEffect} from 'react';
import Axios  from 'axios'


const Jokes = () => {

    const [chiste, setChiste] = useState('');
    const [meGusta, setMeGusta] = useState(0);
    const [noMeGusta, setNoMeGusta] = useState(0);
    const [votado, setvotado] = useState(true);

    useEffect(()=>{
        setvotado(false)
    },[chiste])

    useEffect(()=>{
        dimeChiste()
    },[])

    function like(){
        setMeGusta(meGusta +1)
        setvotado(!votado)
    }

    function dontLike(){
        setNoMeGusta(noMeGusta +1)
        setvotado(!votado)
    }

    /* una function que nos traera un chiste aleatorio desde una api */
    async function dimeChiste(){
        setvotado(true)
       await Axios.get('https://api.chucknorris.io/jokes/random').then((res)=>{
       console.log(res.data.value)
       setChiste(res.data.value)
       })
    }

    return (
        <div className='d-flex  justify-content-center'>
            
            <div className='w-50 m-auto mt-5 '>
                <h3>Chistes aleatorios , provieniente de una api</h3>
                <div className='d-flex justify-content-between w-50 m-auto'>
                  <span><i className="bi bi-heart-fill text-danger me-gusta mx-2"></i>Me gusta { meGusta}</span>
                  <span><i className="bi bi-heartbreak-fill mx-2"></i>No me gusta { noMeGusta}</span>
                </div>

                <div className="card">
                    <div className="card-body">
                       {chiste}                     
                    </div>
                    <button className='btn bg-info btn-sm w-70 m-auto my-3' onClick={dimeChiste}>Nuevo Chiste</button>
                     { !votado ? (
                        <div>
                        <button className='btn btn-outline-secondary btn-sm  mx-2' onClick={like}><i className="bi bi-heart-fill text-danger me-gusta mx-2"></i>Me Gusta</button>
                        <button className='btn btn-outline-secondary btn-sm mx-2 ' onClick={dontLike}><i className="bi bi-heartbreak-fill mx-2"></i>No Me Gusta</button>
                    </div>
                     ) : (
                        <div>
                         <h3>Gracias por su voto !</h3>
                        </div>
                      )}
                    <small style={{fontStyle:'italic'}}><b> Nota:</b> Puedes votar el chiste pulsando el icono corespondiente </small>
            </div>

                
            </div>

            
        </div>
    );
}

export default Jokes;
