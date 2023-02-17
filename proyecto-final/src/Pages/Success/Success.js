import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Success() {

    const idCompraPagada = localStorage.getItem('idCompra')
    const idUser = localStorage.getItem('idUsuarioLogeado');
    const [user, setUser] = useState({})

    useEffect(() =>{
        const actualizarCarrito = async () => {
        axios.get(`http://localhost:8000/users/${idUser}`)
        .then((response) =>{
            setUser(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })}

        actualizarCarrito()
    }, [idUser])

    const pagarCompra = async () =>{

        await axios.patch(`http://localhost:8000/compra/pagar-compra`, {
            id: idCompraPagada,
        })

        await axios.patch(`http://localhost:8000/users/agregar-carrito`, {
            id: user._id,
            cart: []
        })
    }

    pagarCompra()


    return (
        <>     
            <div className="fondoLogin">
                <div className="formularioLogin mx-auto p-5">
                    <div className="text-center mx-auto fs-2 w-100">¡Pago realizado con éxito!</div>
                    <div className="text-center mx-auto fs-2 w-100">Nos contactaremos con usted.</div>
                </div>
            </div>
        </>
    )
}

export default Success