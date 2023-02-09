import React from 'react'
import axios from 'axios';

function BotonHacerPublicoCategoria( categoria ) {

    const hacerPublicoCategoria = () =>{
        const tokenAdmin = localStorage.getItem('token')

        if (!tokenAdmin) {
            window.location.replace('/404')
        } else {
        axios.patch(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/categorias/editar-categoria`, {
            accessToken: tokenAdmin,
            id: categoria.categoria._id,
            name: categoria.categoria.name,
            published: true,
        })
        window.location.reload(true)
    }}
    
    return (
    <>
        <button type="button" className="btn btn-danger" onClick={hacerPublicoCategoria}><i className="bi bi-bag-check"></i></button>
    </>
    )

}

export default BotonHacerPublicoCategoria