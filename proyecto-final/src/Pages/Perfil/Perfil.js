import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Perfil.css';

function Perfil() {

    const [userEspecifico, setUserEspecifico] = useState({});
    const id = localStorage.getItem('idUsuarioLogeado');

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/${id}`)
        .then((response) =>{
            setUserEspecifico(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [])

    return (
        <>     
            <div className="fondoLogin">
                <div className="cajaPerfil mx-auto pb-5">
                    <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-5">Mi perfil</div>
                    <div className='row'>
                        <div className='col-12 text-center fuentePerfil mt-2'>Nombre:    {userEspecifico.name}</div>
                        <div className='col-12 text-center fuentePerfil mt-2'>Apellido:  {userEspecifico.surname}</div>
                    </div>
                    <div className='row'>
                        <div className='col-12 text-center fuentePerfil mt-2'>País:  {userEspecifico.country}</div>
                        <div className='col-12 text-center fuentePerfil mt-2'>Edad:  {userEspecifico.age}</div>
                    </div>
                    <div className='row'>
                        <div className='col-12 text-center fuentePerfil mt-2'>Usuario:   {userEspecifico.username}</div>
                        <div className='col-12 text-center fuentePerfil mt-2 mb-3'>E-mail:    {userEspecifico.email}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil