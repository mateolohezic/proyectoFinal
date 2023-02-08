import React from 'react'
import ModalBorrarComentario from '../ModalBorrarComentario/ModalBorrarComentario';

function FilaComentarioAdmin( comentario ) {
    return (
    <>
        <tr>
            <td>{comentario.comentario._id}</td>
            <td>{comentario.comentario.username}</td>
            <td>{comentario.comentario.game}</td>
            <td>{comentario.comentario.comentario}</td>
            <td>
                <div className="d-flex justify-content-evenly" >                                    
                    <div>
                        <ModalBorrarComentario comentario={comentario.comentario} />
                    </div>
                </div>
            </td>
        </tr>
    </>
  )
}

export default FilaComentarioAdmin