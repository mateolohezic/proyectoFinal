import React from 'react'

function CardComentario( comentario ) {
    return (
    <>
        <div className="mt-2 ms-4 ps-2 pe-5 fs-5 text-white text-opacity-75">
            <div className='cardComentario card'>
                <div><b>{comentario.comentario.username}</b></div>
                <div className='card-body' ><i>"{comentario.comentario.comentario}"</i></div>
            </div>
        </div> 
    </>
  )
}

export default CardComentario