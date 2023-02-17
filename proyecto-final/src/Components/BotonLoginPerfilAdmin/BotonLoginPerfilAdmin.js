import React, { useState, useEffect } from 'react'
import axios from 'axios';

function BotonLoginPerfilAdmin() {

    const [carrito, setCarrito] = useState([])
    const [favoritos, setFavoritos] = useState([])
    const [hayCarrito, setHayCarrito] = useState(false)
    const [hayFavoritos, setHayFavoritos] = useState(false)
    const [users, setUsers] = useState("")
    const id = localStorage.getItem('idUsuarioLogeado');

    useEffect(() =>{
        if (id !== null){
            axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/${id}`)
            .then((response) =>{
                setUsers(response.data);
                setCarrito(response.data.cart);
                setFavoritos(response.data.favorites)
                if (response.data.cart.length > 0) {
                    setHayCarrito(true)
                }
                if (response.data.favorites.length > 0) {
                    setHayFavoritos(true)
                }
            })
            .catch((error) =>{
                console.error(error);
            })
        }
    }, [users])

    const cerrarSesion = async () => {
        localStorage.removeItem('idUsuarioLogeado');
        localStorage.removeItem('token');
    }

    if (users.rol === "admin") {
        return (
            <>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Favoritos" href="/Favoritos"><div className='fs-3 botonNavBar'>{ hayFavoritos ? <>{favoritos.length}    </> : <></>}<i className="bi bi-bookmark-heart-fill"></i></div></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Carrito" href="/Carrito"><div className='fs-3 botonNavBar'> { hayCarrito ? <>{carrito.length}   </> : <></>}<i className="bi bi-cart-fill"></i></div></a>
            </li> 
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Perfil" href="/Perfil"><div className='fs-3 botonNavBar'><i className="bi bi-person-circle"></i></div></a>
            </li>
             <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Administración" href="/Admin"><div className='fs-3 botonNavBar'><i className="bi bi-gear-wide-connected"></i></div></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Cerrar Sesión" href="/" onClick={cerrarSesion}><div className='fs-3 botonNavBar'><i className="bi bi-door-open-fill"></i></div></a>
            </li>
            </>
        )
    } else if (users.rol === 'user') {
        return (
            <>
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Favoritos" href="/Favoritos"><div className='fs-3 botonNavBar'><i className="bi bi-bookmark-heart-fill"></i></div></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Carrito" href="/Carrito"><div className='fs-3 botonNavBar'><i className="bi bi-cart-fill"></i></div></a>
            </li> 
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Perfil" href="/Perfil"><div className='fs-3 botonNavBar'><i className="bi bi-person-circle"></i></div></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Cerrar Sesión" href="/" onClick={cerrarSesion}><div className='fs-3 botonNavBar'><i className="bi bi-door-open-fill"></i></div></a>
            </li>
            </>
        )
    } else {
        return (
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Iniciar Sesión" href="/Login"><div className='fs-3 botonNavBar'><i className="bi bi-person-bounding-box"></i></div></a>
            </li>
        )
    } 
}

export default BotonLoginPerfilAdmin