import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

function FormularioEnviarComentario() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const userLogeado = localStorage.getItem('idUsuarioLogeado');
    const juegoActual = localStorage.getItem('idJuego');
    const [juegoEspecifico, setJuegoEspecifico] = useState({});
    const [userEspecifico, setUserEspecifico] = useState({});

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/${juegoActual}`)
        .then((response) =>{
            setJuegoEspecifico(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [])

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/${userLogeado}`)
        .then((response) =>{
            setUserEspecifico(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }, [])

    const onSubmit = async (data) => {
        const comentario = data.comentario;
        const game = juegoEspecifico.title;
        const username = userEspecifico.username;
        await axios.post(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/comentarios/crear-comentario`, {
        username,
        game,
        comentario
        })
        window.location.reload(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Reseña</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"{...register("comentario", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Campo requerido.</p>,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóú:,." ]{1,1000}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Campo invalido.</p>
                            },
                        })} name="comentario" defaultValue="" maxLength={1000}></textarea>
                        {errors.comentario && errors.comentario.message}
                        
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-danger">Enviar</button>
                </div>
            </form>
        </>
  )
}

export default FormularioEnviarComentario