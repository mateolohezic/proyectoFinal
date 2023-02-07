import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

function FormularioIniciarSesion() {

    const { register, watch, handleSubmit, trigger, formState: { errors } } = useForm();
    const [userEncontrado, setUserEncontrado] = useState({
        password: ''
    })
    const [users, setUsers] = useState([])

    useEffect(() =>{
      axios.get(`http://localhost:8000/users/obtener-users`)
      .then((response) =>{
          setUsers(response.data.filter(user => user.status === 'activo'));
      })
      .catch((error) =>{
          console.log(error);
      })
    }, [])
    
    const onSubmit = () => {
        localStorage.setItem('estadoLogeado', userEncontrado.rol);
        localStorage.setItem('idUsuarioLogeado', userEncontrado._id);
        window.location.replace('/');
    }
    
    const usersCoinciden = users.filter(user => user.username === watch(`username`))

    useEffect(() =>{
        setUserEncontrado(usersCoinciden[0])
    }, [usersCoinciden.length])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" {...register("username", {
                        required:  <p className='text-danger mt-2 ms-1 fs-6'>Usuario requerido.</p>,
                        validate: value => usersCoinciden.length === 1 || 
                        <p className='text-danger mt-2 ms-1 fs-6'>Usuario o contraseña incorrectos.</p>,
                    })}  name="username"  defaultValue="" maxLength={20}/>
                </div>
                </div>
                <div className="row">
                <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" {...register("password", {
                        required:  <p className='text-danger mt-2 ms-1 fs-6'>Contraseña requerida.</p>,
                        validate: value => value === userEncontrado.password ||
                        <p className='text-danger ms-1 fs-6'>Usuario o contraseña incorrectos.</p>,
                    })}  name="password"  defaultValue="" maxLength={25}/>
                    {
                        errors.username ? <>{errors.username && errors.username.message} </>: <>{errors.password && errors.password.message}</>                                 
                    }
                </div>
                </div>
                <div className="text-end mt-2 mb-4">
                    ¿No tienes una cuenta?
                    <a className="registerIniciarSesion ms-2" href="/Register">Regístrate</a>
                    <div>
                    ¿Olvidaste tu contraseña? <a className="registerIniciarSesion ms-2" href='/'>Restablecer</a>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse mt-3">
                    <button type="submit" className="btn  btn-danger">Iniciar Sesión</button>
                </div>
            </form>
        </>
  )
}

export default FormularioIniciarSesion