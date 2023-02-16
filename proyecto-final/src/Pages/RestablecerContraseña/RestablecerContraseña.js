import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

function RestablecerContraseña() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(false)

    const onSubmit = async(datos) => {
        const respuesta = await axios.post(`http://localhost:8000/users/restablecer-email`, {
            email: datos.email,
        })
        if (respuesta.status === 200) {     
            setError(false);   
            const userEncontrado = respuesta
            localStorage.setItem('idUsuarioRestablecer', userEncontrado.data._id);
            window.location.replace("/RestablecerContraseñaSiguiente")
          } 
          
        if (respuesta.status === 206){
            setError(true);
          }
    }

    return (
        <>     
            <div className="fondoLogin">
                <div className="formularioLogin mx-auto p-5">
                    <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-5">Restablecer Contraseña
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                                <label className="form-label">E-mail de la cuenta</label>
                                <input type="text" className="form-control"  {...register("email", {
                                    required:  <p className='text-danger mt-2 ms-1 fs-6'>E-mail requerido.</p>,
                                    pattern: {
                                        value: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>E-mail invalido.</p>
                                    },
                                })}  name="email"  defaultValue="" maxLength={50}/>
                                {errors.email && errors.email.message}
                                {
                                    error && <p className='text-danger mt-2 ms-1 fs-6'>E-mail inexistente.</p>
                                }
                            </div>
                        </div>
                        <div className="d-flex flex-row-reverse mt-3">
                            <button type="submit" className="btn btn-danger">Siguiente</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RestablecerContraseña