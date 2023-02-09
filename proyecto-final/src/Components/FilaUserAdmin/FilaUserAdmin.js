import React from 'react'
import BotonEstadoUsuario from '../BotonEstadoUsuario/BotonEstadoUsuario';
import ModalBorrarUser from '../ModalBorrarUser/ModalBorrarUser';

function FilaUserAdmin( user ) {

    if (user.user.rol === "user"){
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
    )} else {
        return(
        <>
        </>
        )
    }
}

export default FilaUserAdmin