import React from 'react'
import BotonHacerPublicoCategoria from '../BotonHacerPublicoCategoria/BotonHacerPublicoCategoria';
import BotonQuitarPublicoCategoria from '../BotonQuitarPublicoCategoria/BotonQuitarPublicoCategoria';
import ModalBorrarCategoria from '../ModalBorrarCategoria/ModalBorrarCategoria';
import ModalEditarCategoria from '../ModalEditarCategoria/ModalEditarCategoria';

function FilaCategoriaAdmin( categoria ) {
    return (
    <>
        <tr>
            <td>{categoria.categoria._id}</td>
            <td>{categoria.categoria.name}</td>
            <td>
                {
                   categoria.categoria.published ? <BotonQuitarPublicoCategoria categoria = {categoria.categoria} /> : <BotonHacerPublicoCategoria categoria={categoria.categoria} />
                }
            </td>
            <td>
            <div className="d-flex justify-content-evenly" >                                    
                <div>
                    <ModalEditarCategoria categoria={categoria.categoria}/>
                </div>
                <div>
                    <ModalBorrarCategoria categoria={categoria.categoria}/>
                </div>
            </div>
            </td>
        </tr>
    </>
  )
}

export default FilaCategoriaAdmin