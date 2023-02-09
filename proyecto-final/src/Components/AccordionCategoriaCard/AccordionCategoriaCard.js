import React, {useState, useEffect } from 'react'
import axios from 'axios';
import './AccordionCategoriaCard.css'
import AccordionCategoriaCardJuego from '../AccordionCategoriaCardJuego/AccordionCategoriaCardJuego';



function AccordionCategoriaCard(categoria) {

    const [juegosCategoria, setJuegosCategoria] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/obtener-juegos`)
        .then((response) =>{
            setJuegosCategoria(response.data.filter(juego => juego.published === true && juego.categorie === categoria.categoria.name));
        })
        .catch((error) =>{
            console.log(error);
        })
    }, [])
    return (
        <>
        <div className='d-flex flex-row flex-wrap justify-content-start flexCategorias'>
        {
            juegosCategoria.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).map(cadaJuego => <AccordionCategoriaCardJuego key={cadaJuego._id} juego={cadaJuego} />)
        }
        </div>
        </>
    )
}

export default AccordionCategoriaCard