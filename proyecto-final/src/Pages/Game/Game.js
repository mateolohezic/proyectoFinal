import React, { useState, useEffect }from 'react'
import CarouselGame from '../../Components/CarouselGame/CarouselGame';
import './Game.css';
import axios from 'axios';


function Game() {

    const [juegosTotales, SetJuegosTotales] = useState({})

    useEffect(() =>{
        axios.get(`http://localhost:8000/obtener-juegos`)
        .then((response) =>{
            SetJuegosTotales(response.data)
        })
        .catch((error) =>{
            console.log(error);
        })
    }, [])

    return (
    <>
        <div className='fondoGame w-100'>
            <div className="text-start volverInicio ms-4">
                <a href="/" className="text-decoration-none inicio"><i className="bi bi-arrow-left-short"></i>Inicio</a>
            </div>
            <div className="text-center fs-1 tituloGame pb-3 mx-auto">Titulo del Juego</div>
            <div className='containerCarouselGame'>
            <CarouselGame/>
            </div>
            <div className='w-100'>
                <div className="column text-white text-start divFichaTecnica">
                    <div className="mt-5 fichaTecnicaTexto fs-1">Ficha técnica</div>
                    <div className="fs-3 ps-2">Titulo del Juego</div>
                    <div className="fs-6 ps-2 text-white text-opacity-75">Titulo del Juego</div>
                    <div className="fs-6 ps-2 text-white text-opacity-75">Titulo del Juego</div>
                    <div className="fs-6 ps-2 text-white text-opacity-75">Titulo del Juego</div>
                    <div className="fs-6 ps-2 text-white text-opacity-75">Titulo del Juego</div>
                    <div className="fs-3 ps-2 mt-4">Titulo del Juego</div>
                    <div className="mt-2 ps-2 fs-5 mb-5">Titulo del Juego</div>
                </div>
            </div>
            <div className="d-flex flex-row-reverse fixedBottom m-5">
                <a href="/404"><button type="button" className="btn btn-darkk btn-lg">Comprar</button></a>
            </div>
        </div>
    </>
  )
}

export default Game