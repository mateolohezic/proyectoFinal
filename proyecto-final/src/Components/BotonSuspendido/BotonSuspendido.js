import axios from 'axios';
import React from 'react'

function BotonSuspendido(user) {
    
    const reactivar = () => {
        const tokenAdmin = localStorage.getItem('token')

        if (!tokenAdmin) {
            window.location.replace('/404')
        } else {
        axios.patch(`http://localhost:8000/users/estado-user`, {
            id: user.user._id,
            status: "activo"
        })
        window.location.reload(true);
    }}

    return (
        <>
        <button type="button" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="right" title="Usuario suspendido" onClick={reactivar}><i className="bi bi-person-x-fill"></i></button>
        </>
    )
}

export default BotonSuspendido