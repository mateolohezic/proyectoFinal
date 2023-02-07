import axios from 'axios';
import React from 'react'

function BotonActivo(user) {

    const suspender = () => {
        axios.patch(`http://localhost:8000/users/estado-user`, {
            id: user.user._id,
            status: "suspendido"
        })
        window.location.reload(true);
    }

    return (
        <>
        <button type="button" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="right" title="Usuario activo" onClick={suspender}><i className="bi bi-person-check-fill"></i></button>
        </>
    )
}

export default BotonActivo