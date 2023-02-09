import React from 'react'
import miFoto from './yo.jpg'
import './nosotros.css';


function Nosotros() {

    return (
        <>     
            <div className="fondoLogin">
                <div className="formularioLogin mx-auto p-5">
                    <div className="text-center mx-auto fs-1 w-100 border-bottom border-2 pb-4 mb-5">Sobre mi</div>
                    <div className='w-75 mx-auto mb-5 border border-5 border-danger'>
                        <img className="w-100" src={miFoto} />
                    </div>
                    <div className='textoNosotros'>Mi nombre es Mateo Bernabé Lohezic, tengo 21 años y soy estudiante de Ingenieria Industrial en la Universidad Nacional de Tucumán. También soy programador FullStack en MERN, y manejo demás recursos como ingles, japones, y paquete Adobe, entre otros.</div>
                </div>
            </div>
        </>
    )
}

export default Nosotros