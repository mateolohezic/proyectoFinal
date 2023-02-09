import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BusquedaCardJuego from '../../Components/BusquedaCardJuego/BusquedaCardJuego';

function Destacados() {

    const [juegos, setJuegos] = useState([]);
    const [encontro, setEncontro] = useState(false);

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/obtener-juegos`)
        .then((response) =>{
            setJuegos(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [])
    
    const juegosCoinciden = juegos.filter(juego => juego.favorite === true)
    
    useEffect(() =>{
        if (juegosCoinciden.length > 0) {
            setEncontro(true)
        }
    }, [juegosCoinciden])
    
    return (
        <>     
            <div className="fondoLogin">
                { encontro ?
                    <>
                        <div className="cajaBusqueda mx-auto p-4 mb-5">
                            <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Destacados</div>
                        </div>
                        <div className='d-flex flex-row flex-wrap justify-content-start flexCategorias m-5'>
                            {
                                juegosCoinciden.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).map(cadaJuego => <BusquedaCardJuego key={cadaJuego._id} juego={cadaJuego} />)
                            }
                        </div>
                    </>
                :
                    <>
                        <div className="cajaBusqueda mx-auto p-4 mb-5">
                            <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Actualmente no hay destacados.</div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Destacados

