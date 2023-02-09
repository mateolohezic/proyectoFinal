import React from 'react'
import axios from 'axios';

function BotonQuitarPublicoCategoria( categoria ) {

    const quitarPublicoCategoria = () =>{
        axios.patch(`http://localhost:8000/categorias/editar-categoria`, {
            id: categoria.categoria._id,
            name: categoria.categoria.name,
            published: false,
        })
        window.location.reload(true)
    }
    
    return (
    <>
        <button type="button" className="btn btn-danger" onClick={quitarPublicoCategoria}><i className="bi bi-bag-check-fill"></i></button>
    </>
    )

}

export default BotonQuitarPublicoCategoria