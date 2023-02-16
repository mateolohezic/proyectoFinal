import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CardFavoritos(juego) {

    const [userFavoritos, setUser] = useState([])
    const idUser = localStorage.getItem('idUsuarioLogeado');

    useEffect(() =>{
        axios.get(`http://localhost:8000/users/${idUser}`)
        .then((response) =>{
            setUser(response.data.favorites);
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [idUser])

    const eliminarDeFavoritos = async () => {

        for(let i = 0; i < userFavoritos.length; i++) {
            if(userFavoritos[i]._id === juego.juego._id) {
                userFavoritos.splice(i, 1);
                break;
            }
        }
        await axios.patch(`http://localhost:8000/users/agregar-favorito`, {
            id: idUser,
            favorites: userFavoritos
        })
        window.location.reload(true);
        }

    return (
        <>
            <div className='cardCarrito card mt-5'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center w-50 '>
                        <div className="cajaImagenCarrito">
                            <img src={juego.juego.image1} className="imagenCarrito" alt='imagen'/>
                        </div>
                        <div className="cajaImagenCarrito">
                            <a href='/Game' className='text-decoration-none text-dark' onClick={ () => localStorage.setItem('idJuego',juego.juego._id)}>
                                <div className='ms-4'>{juego.juego.title}</div>
                            </a>
                        </div>
                    </div>
                    <div>$ {juego.juego.price} ARS</div>
                    <button type="button" className="btn btn-danger" onClick={eliminarDeFavoritos}><i className="bi bi-trash fs-6"></i></button>
                </div>
            </div>
        </>
    )
}

export default CardFavoritos