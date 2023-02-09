import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Favoritos.css';
import CardFavoritos from '../../Components/CardFavoritos/CardFavoritos';

function Favoritos() {

    const [favorito, setFavorito] = useState([])
    const [encontro, setEncontro] = useState(false);

    useEffect(() =>{
        axios.get(`http://localhost:8000/favorito/obtener-favorito`)
        .then((response) =>{
            setFavorito(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })

    }, [])

    useEffect(() =>{
        if (favorito.length > 0) {
            setEncontro(true)
        }
    }, [favorito])

    return (
        <>     
            <div className="fondoLogin">
                <div className="cajaCarrito mx-auto p-5">
                    <div className="text-start mx-auto fs-4 border-bottom border-1 pb-2 w-100 mb-5">Tus favoritos</div>
                    { encontro ?
                        <>
                            <div>
                                {
                                    favorito.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(cadaJuego => <CardFavoritos key={cadaJuego._id} juego={cadaJuego} />)
                                }
                            </div>
                        </>
                    :
                        <>
                            <div className='w-100 text-center fs-2 text-dark text-opacity-75'>Ups... parece que esta vació.</div>
                            <div className='w-100 text-center fs-2 text-dark text-opacity-75 mb-4'>¡Ve a explorar nuestros juegos disponibles!</div>
                        </>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Favoritos