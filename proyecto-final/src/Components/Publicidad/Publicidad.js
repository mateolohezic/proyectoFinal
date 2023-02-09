import React, {useState} from 'react'
import './Publicidad.css'

function Publicidad() {

    const [mostrar, setMostrar] = useState(true)

    const esconder = () =>{
        setMostrar(false)
    }

    if (mostrar === true) {
        return (
        <>
            <div className="modal fade show modalPublicidad" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-fullscreen ">
                <div className="modal-content fondoModalPublicidad">
                    <button type="button" className="btn-close btn-close-white ms-4 mt-4 fs-1" data-bs-dismiss="modal" aria-label="Close" onClick={esconder}></button>
                <div className="modal-body">
                </div>
                </div>
            </div>
            </div>
        </> 
        )
    } else {
        return (
            <>
            </>
        )
    }
    
}

export default Publicidad
