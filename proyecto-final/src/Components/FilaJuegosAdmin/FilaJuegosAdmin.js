import React from 'react'
import BotonHacerFavorito from '../BotonHacerFavorito/BotonHacerFavorito';
import BotonHacerPublico from '../BotonHacerPublico/BotonHacerPublico';
import BotonQuitarFavorito from '../BotonQuitarFavorito/BotonQuitarFavorito';
import BotonQuitarPublico from '../BotonQuitarPublico/BotonQuitarPublico';
import ModalBorrarJuego from '../ModalBorrarJuego/ModalBorrarJuego';
import ModalEditarJuego from '../ModalEditarJuego/ModalEditarJuego';

function FilaJuegosAdmin( juego ) {

    return (
    <>
        <tr>
            <td>{juego.juego._id}</td>
            <td>{juego.juego.title}</td>
            <td>{juego.juego.categorie}</td>
            <td>$ {juego.juego.price}</td>
            <td>
                {
                    juego.juego.published ? <BotonQuitarPublico juego={juego.juego} /> : <BotonHacerPublico juego={juego.juego} />
                }
            </td>
            <td>
            <div className="d-flex justify-content-evenly" >                                    
                <div>
                    {
                        juego.juego.favorite ? <BotonQuitarFavorito juego={juego.juego} /> : <BotonHacerFavorito juego={juego.juego} />
                    }
                </div>
                <div>
                    <ModalEditarJuego juego={juego.juego}/>
                </div>
                <div>
                    <ModalBorrarJuego juego={juego.juego}/>
                </div>
            </div>
            </td>
        </tr>
    </>
  )
}

export default FilaJuegosAdmin