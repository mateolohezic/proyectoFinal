import React from 'react'
import axios from 'axios';

function BotonHacerPublico( juego ) {

    const hacerPublico = () =>{
        const tokenAdmin = localStorage.getItem('token')

        if (!tokenAdmin) {
            window.location.replace('/404')
        } else {
        axios.patch(`http://localhost:8000/editar-juego`, {
            id: juego.juego._id,
            title: juego.juego.title,
            developer:  juego.juego.developer,
            categorie:  juego.juego.categorie,
            date:  juego.juego.date,
            price:  juego.juego.price,
            synopsis:  juego.juego.synopsis,
            image1:  juego.juego.image1,
            image2:  juego.juego.image2,
            image3:  juego.juego.image3,
            image4:  juego.juego.image4,
            favorite: juego.juego.favorite,
            published: true,
        })
        window.location.reload(true)
    }}
    
    return (
    <>
        <button type="button" className="btn btn-danger" onClick={hacerPublico}><i className="bi bi-bag-check fs-6"></i></button>
    </>
    )

}

export default BotonHacerPublico