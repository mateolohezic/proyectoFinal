import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardCarrito from '../../Components/CardCarrito/CardCarrito';
import './Carrito.css';

function Carrito() {

    const [sum, setSum] = useState("")
    const [carrito, setCarritoUser] = useState([])
    const [encontro, setEncontro] = useState(false);
    const idUser = localStorage.getItem('idUsuarioLogeado');

    useEffect(() =>{
        const actualizarCarrito = async () => {
        axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/${idUser}`)
        .then((response) =>{
            setCarritoUser(response.data.cart)
        })
        .catch((error) =>{
            console.error(error);
        })}

        actualizarCarrito()
    }, [idUser])

    useEffect(() =>{
        if (carrito){
        if (carrito.length > 0) {
            setEncontro(true)

        }
        let sum = 0;

        for (let i = 0; i < carrito.length; i += 1) {
            sum += carrito[i].price
        }
        setSum(sum);
        localStorage.setItem('totalAPagar', sum)

        }
    }, [carrito])

    const pagar = () => {
        window.location.replace("/MetodoPago")
    }

    return (
        <>     
            <div className="fondoLogin">
                <div className="cajaCarrito mx-auto p-5">
                    <div className="text-start mx-auto fs-4 border-bottom border-1 pb-2 w-100 mb-5">Tu carro de compra</div>
                    { encontro ?
                        <>
                            <div>
                                {
                                    carrito.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(cadaJuego => <CardCarrito key={cadaJuego._id} juego={cadaJuego} />)
                                }
                            </div>
                            <div className="text-end mx-auto fs-5 border-top border-1 pt-2 w-100 mt-5">Total: $ {sum} ARS</div>
                            <div className='d-flex flex-row-reverse mt-5'>
                                <button type="button" className="btn btn-danger" onClick={pagar}>Continuar</button>
                            </div>
                        </>
                    :
                        <>
                            <div className='w-100 text-center fs-2 text-dark text-opacity-75'>Ups... parece que esta vació.</div>
                            <div className='w-100 text-center fs-2 text-dark text-opacity-75 mb-4'>¡Ve a explorar nuestros juegos disponibles!</div>
                        </>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Carrito