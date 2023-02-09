import React from 'react'
import FormularioCrearUser from '../../Components/FormularioCrearUsuario/FormularioCrearUsuario';
import './Register.css';

function Register() {

    return (
        <>     
            <div className="fondoLogin">
                <div className="formularioRegister mx-auto p-5">
                    <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-5">Crear Cuenta</div>
                    <FormularioCrearUser />
                    <div className="text-center mx-auto fs-6 text-dark text-opacity-50 border-top border-1 pt-4 w-75 mt-5">Luego de crear su cuenta, deberá esperar a que sea verificada.</div>
                </div>
            </div>
        </>
    )
}

export default Register