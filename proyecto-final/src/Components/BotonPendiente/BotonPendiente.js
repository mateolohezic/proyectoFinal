import axios from 'axios';
import React from 'react'

function BotonPendiente(user) {
    
    const activar = () => {
        axios.patch(`http://localhost:8000/users/estado-user`, {
            id: user.user._id,
            status: "activo"
        })
        window.location.reload(true);
    }

    return (
        <>
        <button type="button" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="right" title="Usuario pendiente" onClick={activar}><i className="bi bi-person-plus-fill"></i></button>
        </>
    )
}

export default BotonPendiente