import React, {useState, useEffect } from 'react'
import './carouselNovedades.css';
import axios from 'axios';

function CarouselNovedades() {
    
    const [novedades, setJuegosNovedades] = useState([])

    const irANovedades = () =>{
        window.location.replace('/404')
    }

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/obtener-juegos`)
        .then((response) =>{
            setJuegosNovedades(response.data.filter(juego => juego.published === true ).sort((a, b) => 0.5 - Math.random()).slice(-8));
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [])

    if (novedades.length > 0) {
    return (
        <>
        <button type='button' className='fs-4 badge text-dark tituloSeccion bg-white' onClick={irANovedades}><b>Novedades</b></button>
            <div className="row justify-content-evenly cajaCarouselNovedades align-middle mx-auto container-fluid carouselGrande">
                <span type="button" className="botonCarousel align-self-center fs-5" data-bs-target="#carouselNovedades" data-bs-slide="prev"><i className="bi bi-caret-left-fill"></i></span>
                <div id="carouselNovedades" className="carousel slide widthCarousel align-self-center" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row justify-content-evenly">
                                    <div className='card'>
                                        <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[0]._id)}>
                                            <div className="imgCard d-flex justify-content-center">
                                                <img src={novedades[0].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                            </div>            
                                            <div className="card-body">
                                                <h5 className="card-title text-center fs-6">{novedades[0].title}</h5>
                                                <p className="card-text text-center text-muted">$ {novedades[0].price} ARS</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='card'>
                                        <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[1]._id)}>
                                            <div className="imgCard d-flex justify-content-center">
                                                <img src={novedades[1].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                            </div>            
                                            <div className="card-body">
                                                <h5 className="card-title text-center fs-6">{novedades[1].title}</h5>
                                                <p className="card-text text-center text-muted">{ novedades[1].price > 0 ? <>$ {novedades[1].price} ARS </>  : <>Gratis</> }</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='card'>
                                        <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[2]._id)}>
                                            <div className="imgCard d-flex justify-content-center">
                                                <img src={novedades[2].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                            </div>            
                                            <div className="card-body">
                                                <h5 className="card-title text-center fs-6">{novedades[2].title}</h5>
                                                <p className="card-text text-center text-muted">{ novedades[2].price > 0 ? <>$ {novedades[2].price} ARS </>  : <>Gratis</> }</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='card'>
                                        <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[3]._id)}>
                                            <div className="imgCard d-flex justify-content-center">
                                                <img src={novedades[3].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                            </div>            
                                            <div className="card-body">
                                                <h5 className="card-title text-center fs-6">{novedades[3].title}</h5>
                                                <p className="card-text text-center text-muted">{ novedades[3].price > 0 ? <>$ {novedades[3].price} ARS </>  : <>Gratis</> }</p>
                                            </div>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row justify-content-evenly">
                                <div className='card'>
                                    <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[4]._id)}>
                                        <div className="imgCard d-flex justify-content-center">
                                            <img src={novedades[4].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                        </div>            
                                        <div className="card-body">
                                            <h5 className="card-title text-center fs-6">{novedades[4].title}</h5>
                                            <p className="card-text text-center text-muted">{ novedades[4].price > 0 ? <>$ {novedades[4].price} ARS </>  : <>Gratis</> }</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='card'>
                                    <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[5]._id)}>
                                        <div className="imgCard d-flex justify-content-center">
                                            <img src={novedades[5].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                        </div>            
                                        <div className="card-body">
                                            <h5 className="card-title text-center fs-6">{novedades[5].title}</h5>
                                            <p className="card-text text-center text-muted">{ novedades[5].price > 0 ? <>$ {novedades[5].price} ARS </>  : <>Gratis</> }</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='card'>
                                    <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[6]._id)}>
                                        <div className="imgCard d-flex justify-content-center">
                                            <img src={novedades[6].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                        </div>            
                                        <div className="card-body">
                                            <h5 className="card-title text-center fs-6">{novedades[6].title}</h5>
                                            <p className="card-text text-center text-muted">{ novedades[6].price > 0 ? <>$ {novedades[6].price} ARS </>  : <>Gratis</> }</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='card'>
                                    <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[7]._id)}>
                                        <div className="imgCard d-flex justify-content-center">
                                            <img src={novedades[7].image1} className="d-img-top img-fluid p-3 imagenCard align-self-end" alt="ImagenCarouselNovedades" />
                                        </div>            
                                        <div className="card-body">
                                            <h5 className="card-title text-center fs-6">{novedades[7].title}</h5>
                                            <p className="card-text text-center text-muted">{ novedades[7].price > 0 ? <>$ {novedades[7].price} ARS </>  : <>Gratis</> }</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span type="button" className="botonCarousel align-self-center fs-5" data-bs-target="#carouselNovedades" data-bs-slide="next"><i className="bi bi-caret-right-fill"></i></span>
            </div>
            <div className="row justify-content-evenly cajaCarouselNovedades carouselChico p-0 align-middle mx-auto mt-4 container-fluid">
                <span type="button" className="botonCarousel align-self-center fs-5 pe-4" data-bs-target="#carouselNovedades2" data-bs-slide="prev"><i className="bi bi-caret-left-fill"></i></span>
                <div id="carouselNovedades2" className="carousel slide widthCarousel align-self-center p-0" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[0]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[0].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center" alt='ImagenCarouselChico'/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[0].title}</h5>
                                        <p className="card-text text-center text-muted pb-5">{ novedades[0].price > 0 ? <>$ {novedades[0].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[1]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[1].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center"alt='ImagenCarouselChico' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[1].title}</h5>
                                        <p className="card-text text-center text-muted">{ novedades[1].price > 0 ? <>$ {novedades[1].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[2]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[2].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center"alt='ImagenCarouselChico' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[2].title}</h5>
                                        <p className="card-text text-center text-muted">{ novedades[2].price > 0 ? <>$ {novedades[2].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[3]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[3].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center"alt='ImagenCarouselChico' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[3].title}</h5>
                                        <p className="card-text text-center text-muted">{ novedades[3].price > 0 ? <>$ {novedades[3].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[4]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[4].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center"alt='ImagenCarouselChico' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[4].title}</h5>
                                        <p className="card-text text-center text-muted">{ novedades[4].price > 0 ? <>$ {novedades[4].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[5]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[5].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center"alt='ImagenCarouselChico' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[5].title}</h5>
                                        <p className="card-text text-center text-muted">{ novedades[5].price > 0 ? <>$ {novedades[5].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[6]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[6].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center"alt='ImagenCarouselChico' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[6].title}</h5>
                                        <p className="card-text text-center text-muted">{ novedades[6].price > 0 ? <>$ {novedades[6].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',novedades[7]._id)}>
                                <div className="card">
                                    <div className="imgCard d-flex justify-content-center mx-auto">
                                        <img src={novedades[7].image1} className="d-img-top img-fluid p-3 imagenCard align-self-center"alt='ImagenCarouselChico' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-6">{novedades[7].title}</h5>
                                        <p className="card-text text-center text-muted">{ novedades[7].price > 0 ? <>$ {novedades[7].price} ARS </>  : <>Gratis</> }</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <span type="button" className="botonCarousel align-self-center fs-5 ps-4" data-bs-target="#carouselNovedades2" data-bs-slide="next"><i className="bi bi-caret-right-fill botonRight"></i></span>
            </div>
        </>
    )
}
}

export default CarouselNovedades