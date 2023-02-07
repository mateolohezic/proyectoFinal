import React from 'react'

function AccordionCategoriaCardJuego(juego) {

  const setearJuego = () =>{
    localStorage.setItem('idJuego',juego.juego._id)
    window.location.replace('/Game')
  }

  return (
    <>
        <div className="cardCategoria mb-5" onClick={setearJuego}>
            <div className="imgCardCategoria d-flex justify-content-center mx-auto">
                <img src={juego.juego.image1} className="d-block img-fluid p-3 imagenCardCategoria align-self-center" alt='imagen'/>
            </div>            
            <div className="card-body">
                <h5 className="card-title text-center tamañoLetraCardCategoria">{juego.juego.title}</h5>
                <p className="card-text text-center text-muted tamañoLetraCardCategoria">$ {juego.juego.price} ARS</p>
            </div>
        </div>
    </>
  )
}

export default AccordionCategoriaCardJuego