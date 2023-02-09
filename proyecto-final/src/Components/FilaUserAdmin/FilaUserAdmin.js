import React from 'react'
import './FilaUserAdmin.css';
import BotonEstadoUsuario from '../BotonEstadoUsuario/BotonEstadoUsuario';
import ModalBorrarUser from '../ModalBorrarUser/ModalBorrarUser';

function FilaUserAdmin( user ) {
    return (
    <>
        <tr>
            <td className='filaCodigoUser'>{user.user._id}</td>
            <td>{user.user.username}</td>
            <td>{user.user.name}</td>
            <td>{user.user.surname}</td>
            <td>{user.user.age}</td>
            <td>{user.user.email}</td>
            <td>{user.user.country}</td>
            <td>
                <div className="d-flex justify-content-evenly" >                                    
                    <div>
                        <BotonEstadoUsuario user={user.user}/>
                    </div>
                    <div>
                        <ModalBorrarUser user={user.user} />
                    </div>
                </div>
            </td>
        </tr>
    </>
  )
}

export default FilaUserAdmin