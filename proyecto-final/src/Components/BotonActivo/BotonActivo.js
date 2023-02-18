import axios from 'axios';
import React from 'react'

function BotonActivo(user) {

    const suspender = async () => {

        const tokenAdmin = localStorage.getItem('token')

        if (!tokenAdmin) {
            window.location.replace('/404')
        } else {
        await axios.patch(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/estado-user`, {
            accessToken: tokenAdmin,
            id: user.user._id,
            status: "suspendido"
        })
        window.location.reload(true);
        }
    }

    return (
        <>
        <button type="button" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="right" title="Usuario activo" onClick={suspender}><i className="bi bi-person-check-fill"></i></button>
        </>
    )
}

export default BotonActivo