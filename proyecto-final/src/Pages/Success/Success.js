import React from 'react'
import axios from 'axios'

function Success() {

    const idCompraPagada = localStorage.getItem('idCompra')

    const pagarCompra = async () =>{

        await axios.patch(`http://localhost:8000/compra/pagar-compra`, {
            id: idCompraPagada,
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