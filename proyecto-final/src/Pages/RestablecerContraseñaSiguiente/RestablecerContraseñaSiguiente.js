import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

function RestablecerContraseñaSiguiente() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const idUser = localStorage.getItem('idUsuarioRestablecer');

    const onSubmit = async (datos) => {
        await axios.patch(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/users/restablecer-password`, {
            id: idUser,
            password: datos.password
        })
        window.location.replace("/Login")
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
                                <label className="form-label">Nueva contraseña</label>
                                <input type="password" className="form-control"  {...register("password", {
                                    required:  <p className='text-danger mt-2 ms-1 fs-6'>Contraseña requerida.</p>,
                                    pattern: {
                                        value: /^([a-zA-Z0-9áéíóúñÑÁÉÍÓÚ*#$-_+"!%&]{6,25})$/i,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>Contraseña invalida.</p>
                                    },
                                    minLength: {
                                        value: 6,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>Debe contener más de 6 caracteres.</p>
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>Debe contener menos de 25 caracteres.</p>
                                    },
                                })}  name="password"  defaultValue="" maxLength={25}/>
                                {errors.password && errors.password.message}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                                <label className="form-label">Confirmar contraseña</label>
                                <input type="password" className="form-control"  {...register("passwordConfirmar", {
                                    required:  <p className='text-danger mt-2 ms-1 fs-6'>Confirme su contraseña.</p>,
                                    validate: value => value === watch('password')	 || <p className='text-danger mt-2 ms-1 fs-6'>Las contraseñas no coinciden.</p>
                                })}  name="passwordConfirmar"  defaultValue="" maxLength={50}/>
                                {errors.passwordConfirmar && errors.passwordConfirmar.message}
                            </div>
                        </div>
                        <div className="d-flex flex-row-reverse mt-3">
                            <button type="submit" className="btn btn-danger">Restablecer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RestablecerContraseñaSiguiente