import React from 'react'
import BotonActivo from '../BotonActivo/BotonActivo';
import BotonPendiente from '../BotonPendiente/BotonPendiente';
import BotonSuspendido from '../BotonSuspendido/BotonSuspendido';

function BotonEstadoUsuario(user) {  
  
    if (user.user.status === "pendiente") {
        return (
            <>
            <BotonPendiente user={user.user}/>
            </>
          )
    } else  if (user.user.status === "activo") {
        return (
            <>
            <BotonActivo user={user.user}/>
            </>
          )
    } else  if (user.user.status === "suspendido") {
        return (
            <>
            <BotonSuspendido user={user.user}/>
            </>
          )
    }
}

export default BotonEstadoUsuario