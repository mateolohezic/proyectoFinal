import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

function Soporte() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.post(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/consulta/crear-consulta`, data)
        window.location.reload(true)
    }

    return (
        <>     
            <div className="fondoLogin">
                <div className="formularioLogin mx-auto p-5">
                    <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-5">Contáctenos
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" {...register("name", {
                                    required: <p className='text-danger mt-2 ms-1 fs-6'>Nombre requerido.</p>,
                                    pattern: {
                                        value: /^[a-zA-ZáéíóúñÑÁÉÍÓÚ ]{1,50}$/i,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>Nombre invalido.</p>
                                    }
                                    
                                })} name="name" defaultValue="" maxLength={50}/>
                                {errors.name && errors.name.message}
                            </div>
                            <div className="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                                <label className="form-label">Apellido</label>
                                <input type="text" className="form-control" {...register("surname", {
                                    required: <p className='text-danger mt-2 ms-1 fs-6'>Apellido requerido.</p>,
                                    pattern: {
                                        value: /^[a-zA-ZáéíóúñÑÁÉÍÓÚ ]{1,50}$/i,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>Apellido invalido.</p>
                                    }
                                })} name="surname"  defaultValue="" maxLength={50}/>
                                {errors.surname && errors.surname.message}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                                <label className="form-label">E-mail</label>
                                <input type="text" className="form-control"  {...register("email", {
                                    required:  <p className='text-danger mt-2 ms-1 fs-6'>E-mail requerido.</p>,
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>E-mail invalido.</p>
                                    },
                                })}  name="email"  defaultValue="" maxLength={50}/>
                                {errors.email && errors.email.message}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col">
                                <label className="form-label">Escribe tu consulta.</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"{...register("consulta", {
                                    required: <p className='text-danger mt-2 ms-1 fs-6'>Campo requerido.</p>,
                                    pattern: {
                                        value: /^[a-zA-Z0-9áéíóú:,." ]{1,1000}$/i,
                                        message: <p className='text-danger mt-2 ms-1 fs-6'>Campo invalido.</p>
                                    },
                                })} name="consulta" defaultValue="" maxLength={1000}></textarea>
                                {errors.consulta && errors.consulta.message}
                                
                            </div>
                        </div>
                        <div className="d-flex flex-row-reverse mt-3">
                            <button type="submit" className="btn btn-danger">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Soporte