import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CardCarrito(juego) {

    const [userCarrito, setUser] = useState([])
    const idUser = localStorage.getItem('idUsuarioLogeado');
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/users/${idUser}`)
        .then((response) =>{
            setUser(response.data.cart);
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [idUser])

    const eliminarDelCarrito = async () => {

        for(let i = 0; i < userCarrito.length; i++) {
            if(userCarrito[i]._id === juego.juego._id) {
                userCarrito.splice(i, 1);
                break;
            }
        }
        await axios.patch(`http://localhost:8000/users/agregar-carrito`, {
            id: idUser,
            cart: userCarrito
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
                            <div className='ms-4'>{juego.juego.title}</div>
                        </div>
                    </div>
                    <div>$ {juego.juego.price} ARS</div>
                    <button type="button" className="btn btn-danger" onClick={eliminarDelCarrito}><i className="bi bi-trash fs-6"></i></button>
                </div>
            </div>
        </>
    )
}

export default CardCarrito