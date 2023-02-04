import React from 'react'
import ModalEditarJuego from '../ModalEditarJuego/ModalEditarJuego';
import './FilaJuegosAdmin.css';

function FilaJuegosAdmin( juego ) {

    return (
    <>
        <tr>
            <td>{juego.juego._id}</td>
            <td>{juego.juego.title}</td>
            <td>{juego.juego.categorie}</td>
            <td>$ {juego.juego.price}</td>
            <td>
                <button type="button" className="btn btn-danger" ><i className="bi bi-bag-check-fill"></i></button>
            </td>
            <td>
            <div className="d-flex justify-content-evenly" >                                    
                <div>
                    <button type="button" className="btn btn-danger"><i className="bi bi-star-fill"></i></button>
                </div>
                <div>
                    <ModalEditarJuego juego={juego.juego}/>
                </div>
                <div>
                    <button type="button" className="btn btn-danger"><i className="bi bi-trash"></i></button>
                </div>
            </div>
            </td>
        </tr>
    </>
  )
}

export default FilaJuegosAdmin