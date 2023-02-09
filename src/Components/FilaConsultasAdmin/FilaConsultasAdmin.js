import React from 'react'
import ModalBorrarConsulta from '../ModalBorrarConsulta/ModalBorrarConsulta';

function FilaConsultasAdmin( consulta ) {
    return (
    <>
        <tr>
            <td>{consulta.consulta._id}</td>
            <td>{consulta.consulta.name}</td>
            <td>{consulta.consulta.surname}</td>
            <td>{consulta.consulta.email}</td>
            <td>{consulta.consulta.consulta}</td>
            <td>
                <div className="d-flex justify-content-evenly" >                                    
                    <div>
                        <ModalBorrarConsulta consulta={consulta.consulta} />
                    </div>
                </div>
            </td>
        </tr>
    </>
  )
}

export default FilaConsultasAdmin