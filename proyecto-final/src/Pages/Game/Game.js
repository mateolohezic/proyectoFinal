import React, { useState, useEffect } from 'react'
import CarouselGame from '../../Components/CarouselGame/CarouselGame';
import './Game.css';
import axios from 'axios';

function Game() {
    
    const [juegoEspecifico, setJuegoEspecifico] = useState({});
    const id = `63dd688f8df3d8a0af375e30`;

    useEffect(() =>{
        axios.get(`http://localhost:8000/${id}`)
        .then((response) =>{
            setJuegoEspecifico(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })
        console.log(juegoEspecifico.imagenes);
    }, [])

    return (
    <>
        <div className='fondoGame w-100'>
            <div className="text-start volverInicio ms-4">
                <a href="/" className="text-decoration-none inicio"><i className="bi bi-arrow-left-short"></i>Inicio</a>
            </div>
            <div className="text-center fs-1 tituloGame pb-3 mx-auto">{juegoEspecifico.title}</div>
            <div className='containerCarouselGame'>
            <CarouselGame image1={juegoEspecifico.image1} image2={juegoEspecifico.image2} image3={juegoEspecifico.image3} image4={juegoEspecifico.image4}/>
            </div>
            <div className='w-100'>
                <div className="column text-white text-start divFichaTecnica">
                    <div className="mt-5 fichaTecnicaTexto fs-1">Ficha técnica</div>
                    <div className="fs-3 ps-2 mt-5">{juegoEspecifico.title}</div>
                    <div className="fs-6 ps-2 text-white text-opacity-75">Desarrollador: {juegoEspecifico.developer}</div>
                    <div className="fs-6 ps-2 text-white text-opacity-75">Categoría: {juegoEspecifico.categorie}</div>
                    <div className="fs-6 ps-2 text-white text-opacity-75">Fecha de Estreno: {juegoEspecifico.date}</div>
                    <div className="fs-1 ps-2 mt-2">$   {juegoEspecifico.price} ARS</div>
                    <div className="fs-3 ps-2 mt-2">Descripción</div>
                    <div className="mt-2 ps-2 fs-5 text-white text-opacity-75">{juegoEspecifico.synopsis}</div>
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