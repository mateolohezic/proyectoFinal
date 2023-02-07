import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AccordionCategoriaItem from '../AccordionCategoriaItem/AccordionCategoriaItem';
import './AccordionCategorias.css';

function AccordionCategorias() {

    const [categorias, setCategorias] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/categorias/obtener-categorias`)
        .then((response) =>{
            setCategorias(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })

    }, [])

    return (
        <>
        <div className='container w-75 bg-white p-0 divAccordionCategorias'>
            <div className='fs-4 p-4'>Explorar por categorías</div>
            <div className="accordion accordion-flush w-100 mx-auto mb-5" id="accordionExample">
                {
                    categorias.filter(categoria => categoria.published === true ).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(cadaCategoria => <AccordionCategoriaItem key={cadaCategoria._id} categoria ={cadaCategoria} />)
                }
            </div>
        </div>
        </>
    )
}

export default AccordionCategorias