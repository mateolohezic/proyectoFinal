import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

function FormularioCrearUser() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [users, setUsers] = useState([])

    const onSubmit = async (data) => {
        await axios.post(`http://localhost:8000/users/crear-user`, data)
        window.location.replace('/Login');
    }

    useEffect(() =>{
        axios.get(`http://localhost:8000/users/obtener-users`)
        .then((response) =>{
            setUsers(response.data);
        })
        .catch((error) =>{
          console.error(error);
        })
    }, [])

    const usersUsernameCoinciden = users.filter(user => user.username === watch('username'))
    const usersEmailCoinciden = users.filter(user => user.email === watch('email'))

    return (
        <>
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
                    <div className="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label className="form-label">Edad</label>
                        <input type="number" className="form-control" {...register("age", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Edad requerida.</p>,
                            min: {
                                value: 13,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>La edad debe ser mayor a 13.</p>
                            },
                            max: {
                                value: 99,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>La edad debe ser menor a 99.</p>
                            },
                        })}  name="age"  defaultValue="" max={999}/>
                        {errors.age && errors.age.message}
                    </div>
                    <div className="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label className="form-label">País</label>
                        <input type="text" className="form-control"  {...register("country", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>País requerido.</p>,
                            pattern: {
                                value: /^[a-zA-ZáéíóúñÑÁÉÍÓÚ ]{1,50}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>País invalido.</p>
                            }
                        })}  name="country"  defaultValue="" maxLength={50}/>
                        {errors.country && errors.country.message}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control"  {...register("username", {
                            required:  <p className='text-danger mt-2 ms-1 fs-6'>Usuario requerido.</p>,
                            pattern: {
                                value: /^[a-z0-9A-ZáéíóúñÑÁÉÍÓÚ,.'-]{4,20}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Usuario invalido.</p>
                            },
                            minLength: {
                                value: 4,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Debe contener más de 4 caracteres.</p>
                              },
                            validate: value => usersUsernameCoinciden.length === 0 || <p className='text-danger mt-2 ms-1 fs-6'>Este usuario ya existe.</p>
                        })}  name="username"  defaultValue="" maxLength={20}/>
                        {errors.username && errors.username.message}
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
                            validate: value => usersEmailCoinciden.length === 0 || <p className='text-danger mt-2 ms-1 fs-6'>Este E-mail ya esta en uso.</p>
                        })}  name="email"  defaultValue="" maxLength={50}/>
                        {errors.email && errors.email.message}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                        <label className="form-label">Contraseña</label>
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
                <div className="text-end mt-2 mb-4">
                    ¿Ya tienes una cuenta?
                    <a className="registerIniciarSesion ms-2" href="/Login">Iniciar Sesión</a>
                </div>
                <div className="d-flex flex-row-reverse mt-3">
                    <button type="submit" className="btn btn-danger">Crear Cuenta</button>
                </div>
            </form>
        </>
  )
}

export default FormularioCrearUser