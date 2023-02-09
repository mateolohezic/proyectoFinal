import React from 'react'
import axios from 'axios';

function BotonHacerPublicoCategoria( categoria ) {

    const hacerPublicoCategoria = () =>{
        axios.patch(`http://localhost:8000/categorias/editar-categoria`, {
            id: categoria.categoria._id,
            name: categoria.categoria.name,
            published: true,
        })
        window.location.reload(true)
    }
    
    return (
    <>
        <button type="button" className="btn btn-danger" onClick={hacerPublicoCategoria}><i className="bi bi-bag-check"></i></button>
    </>
    )

}

export default BotonHacerPublicoCategoria