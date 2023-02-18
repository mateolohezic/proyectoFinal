import React, {useState, useEffect } from 'react'
import './CarouselDestacados.css';
import axios from 'axios';

function CarouselDestacados() {

    const [destacados, setDestacados] = useState([])
    useEffect(() =>{
        axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/obtener-juegos`)
        .then((response) =>{
            setDestacados(response.data.filter(juego => juego.favorite === true && juego.published === true).sort((a, b) => 0.5 - Math.random()).shift());
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [])

    const setearJuego = () =>{
        if (destacados._id !== undefined) {   
            localStorage.setItem('idJuego',destacados._id)
            window.location.replace('/Game')
        }
    }

    const irADestacados = () =>{
        window.location.replace('/Destacados')
    }

    return (
        <>
        <button type='button' className='fs-4 badge text-dark tituloSeccion bg-white' onClick={irADestacados}><b>Destacados</b></button>
        <div className='container mt-5'>
            <div className="row cajaContenedoraCol">
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-sm-12 col-md-12 p-0 bg-dark">
                    <div id="carouselDestacados" className="carousel slide carouselDestacadoSombra" data-bs-ride="carousel">
                            <div className="carousel-inner cajaCarousel">
                                <div className="carousel-item active" data-bs-interval="2000">
                                <img src={destacados.image1} className="d-block w-100 imagenCarousel" alt="Imagen-Destacado"  onClick={setearJuego}/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src={destacados.image2} className="d-block w-100 imagenCarousel" alt="Imagen-Destacado"  onClick={setearJuego}/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src={destacados.image3} className="d-block w-100 imagenCarousel" alt="Imagen-Destacado"  onClick={setearJuego}/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src={destacados.image4} className="d-block w-100 imagenCarousel" alt="Imagen-Destacado"  onClick={setearJuego}/>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselDestacados" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselDestacados" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                    </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-sm-12 col-md-12 text-white p-0 bg-dark cajaInformacionDestacado">
                    <div className='d-flex justify-content-between align-items-top mt-2'>
                        <div className="fs-2 tituloCarouselDestacado" onClick={setearJuego}><b>{destacados.title}</b></div>
                        <a className="ms-4 mt-4 me-5 text-white text-opacity-75 botonVerMas text-decoration-none" href='/Game' onClick={ () => localStorage.setItem('idJuego', destacados._id)}><i className="bi bi-caret-right-fill"></i> Ver más</a>
                    </div>
                    { destacados.price > 0 ? <div className="fs-2 ms-4">$ {destacados.price} ARS</div> : <div className="fs-2 ms-4">Gratis</div> }
                    <div className="fs-5 ms-4 text-white text-opacity-75">{destacados.developer}</div>
                    <div className="fs-5 ms-4 text-white text-opacity-75">Fecha de Estreno: {destacados.date}</div>
                    <div className="fs-5 categoriaCarouselDestacado text-white text-opacity-75">{destacados.categorie}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CarouselDestacados