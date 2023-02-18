import React, { useState, useEffect } from 'react'
import CarouselGame from '../../Components/CarouselGame/CarouselGame';
import ModalComentario from '../../Components/ModalComentario/ModalComentario';
import './Game.css';
import axios from 'axios';
import CardComentario from '../../Components/CardComentario/CardComentario';

function Game() {
    
    const [user, setUser] = useState({})
    const [carritoUser, setCarritoUser] = useState([])
    const [favoritosUser, setFavoritosUser] = useState([])
    const [comentarios, setComentarios] = useState([])
    const [hayComentarios, setHayComentarios] = useState(false)
    const [juegoEspecifico, setJuegoEspecifico] = useState({});
    const [logeado, setLogeado] = useState(false);
    const id = localStorage.getItem('idJuego');
    const idUser = localStorage.getItem('idUsuarioLogeado');

    if (id === null) {
        window.location.replace('/')
    }

    useEffect(() =>{
        if (id !== null) {
            axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/${id}`)
            .then((response) =>{
                setJuegoEspecifico(response.data);
            })
            .catch((error) =>{
                console.error(error);
            })
        }
    }, [id])

    useEffect(() =>{
        if (idUser !== null) {   
            axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/${idUser}`)
            .then((response) =>{
                setUser(response.data);
            })
            .catch((error) =>{
                console.error(error);
            })
        }
    }, [idUser])
    
    useEffect(() =>{
        if (idUser !== null){
            setLogeado(true)
        }
    }, [idUser])
    
    useEffect(() =>{
        axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/comentarios/obtener-comentario`)
        .then((response) =>{
            setComentarios(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })

    }, [])

    useEffect(() =>{
        if (user) {
            const actualizarCarrito = async () => {
                await setCarritoUser(user.cart)
                await setFavoritosUser(user.favorites)
            }
            actualizarCarrito()
        }
    }, [user])

    const agregarCarrito = async () =>{

        const carrito = carritoUser;
        const count = await carrito.push(juegoEspecifico);
        await axios.patch(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/agregar-carrito`, {
            id: user._id,
            cart: carrito
        })
        window.location.replace("/Carrito");
    }

    const agregarFavorito = async () =>{

        const favoritos = favoritosUser;
        const countFavoritos = await favoritos.push(juegoEspecifico);
        await axios.patch(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/agregar-favorito`, {
            id: user._id,
            favorites: favoritos
        })
        window.location.replace("/Favoritos")
    }

    const irALogin =  () =>{
        window.location.replace("/Login");
    }
        
    const comentariosCoinciden = comentarios.filter(comentario => comentario.game === juegoEspecifico.title);

    useEffect(() =>{
        if (comentariosCoinciden.length > 0){
            setHayComentarios(true)
        }
    }, [comentariosCoinciden])

    return (
    <>
        <div className='fondoGame w-100'>
            <div className="text-start volverInicio ms-4">
                <a href="/" className="text-decoration-none inicio"><i className="bi bi-arrow-left-short"></i>Inicio</a>
            </div>
            <div className="text-center fs-1 tituloGame pb-3 mx-auto">{juegoEspecifico.title}
            </div>
            <div className='containerCarouselGame'>
            <CarouselGame image1={juegoEspecifico.image1} image2={juegoEspecifico.image2} image3={juegoEspecifico.image3} image4={juegoEspecifico.image4}/>
            </div>
            <div className='w-100'>
                <div className="column text-white text-start divFichaTecnica">
                    <div className="mt-5 fichaTecnicaTexto fs-1">Ficha técnica</div>
                    <div className="fs-3 ms-4 ps-2 mt-5">{juegoEspecifico.title}
                    {
                        logeado && <button type="button" className="btn btn-danger ms-3" onClick={agregarFavorito}><i className="bi bi-heart-fill"></i></button>
                    }
                    </div>
                    <div className="fs-6 ms-4 mt-3 ps-2 text-white text-opacity-75">Desarrollador: {juegoEspecifico.developer}</div>
                    <div className="fs-6 ms-4 ps-2 text-white text-opacity-75">Categoría: {juegoEspecifico.categorie}</div>
                    <div className="fs-6 ms-4 ps-2 text-white text-opacity-75">Fecha de Estreno: {juegoEspecifico.date}</div>
                    
                    <div className="fs-1 ms-4 ps-2 mt-2">{ juegoEspecifico.price > 0 ? <>$ {juegoEspecifico.price} ARS</>  : <>Descargar gratis</> }</div>
                    <div className="fs-3 ms-4 ps-2 mt-2">Descripción</div>
                    <div className="mt-2 ms-4 ps-2 pe-5 fs-5 text-white text-opacity-75 descripcionTexto">{juegoEspecifico.synopsis}</div>
                    {   logeado && <div className="mt-5 ms-4 ps-2 pe-5 fs-5"><ModalComentario /></div>}
                    { hayComentarios ? comentariosCoinciden.map(cadaComentario => <CardComentario key={cadaComentario._id} comentario={cadaComentario} />)
                    :
                    <div className="mt-4 ms-4 ps-2 fs-6 text-white text-opacity-75 descripcionTexto">Todavia no hay comentarios para este juego, se el primero en dejar uno!</div>
                    }
                </div>
            </div>
                    {   logeado ? 
                    <>
                    <div className="d-flex flex-row-reverse fixedBottom m-5">
                        <button type="button" className="btn btn-darkk btn-lg" onClick={agregarCarrito}>{ juegoEspecifico.price > 0 ? <>Comprar</>  : <>Descargar</> }</button>
                    </div>
                    </>
                    :
                    <>
                    <div className="d-flex flex-row-reverse fixedBottom m-5">
                        <button type="button" className="btn btn-darkk btn-lg" onClick={irALogin}>{ juegoEspecifico.price > 0 ? <>Comprar</>  : <>Descargar</> }</button>
                    </div>
                    </>
                    }
            
        </div>
    </>
  )
}
export default Game