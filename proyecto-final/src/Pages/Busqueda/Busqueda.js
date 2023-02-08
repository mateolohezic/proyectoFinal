import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Busqueda.css';
import BusquedaCardJuego from '../../Components/BusquedaCardJuego/BusquedaCardJuego';

function Busqueda() {

    const [busqueda, setBusqueda] = useState('');
    const [juegos, setJuegos] = useState([]);
    const [encontro, setEncontro] = useState(false);

    useEffect(() => {
        setBusqueda(localStorage.getItem('busqueda'));
    }, [])

    useEffect(() =>{
        axios.get(`http://localhost:8000/obtener-juegos`)
        .then((response) =>{
            setJuegos(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })
    }, [])
    
    const juegosCoinciden = juegos.filter(juego => juego.title.toLowerCase().includes(`${busqueda.toLowerCase()}`) || juego.developer.toLowerCase().includes(`${busqueda.toLowerCase()}`) ||juego.categorie.toLowerCase().includes(`${busqueda.toLowerCase()}`) || juego.date === busqueda)
    
    useEffect(() =>{
        if (juegosCoinciden.length > 0) {
            setEncontro(true)
        }
    }, [juegosCoinciden])
    
    console.log(juegosCoinciden.length);
    console.log(encontro);
    return (
        <>     
            <div className="fondoLogin">
                { encontro ?
                    <>
                        <div className="cajaBusqueda mx-auto p-4 mb-5">
                            <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Resultados</div>
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
                            <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">No se encontraron resultados.</div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Busqueda

