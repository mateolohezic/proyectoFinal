import React from 'react';
import axios from 'axios';

function CardCarrito(juego) {

    const eliminarDelCarrito = async () => {
        axios.delete(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/carrito/eliminar-carrito`, {
        data: {
            id: juego.juego._id
        }}
        )
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