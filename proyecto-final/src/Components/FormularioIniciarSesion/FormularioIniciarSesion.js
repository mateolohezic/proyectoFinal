import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function FormularioIniciarSesion() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(false)
    
    const onSubmit = async(datos) => {
        const respuesta = await axios.post(`http://localhost:8000/users/login-user`, {
            username: datos.username,
            password: datos.password
        })
        if (respuesta.status === 200) {        
            const userEncontrado = respuesta
            localStorage.setItem('idUsuarioLogeado', userEncontrado.data.user._id);
            if (userEncontrado.data.user.rol === "admin") {
                localStorage.setItem('token', userEncontrado.data.token);
            }
            window.location.replace("/")
          } 
          
        if (respuesta.status === 206){
            setError(true);
          }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" {...register("username", {
                        required:  <p className='text-danger mt-2 ms-1 fs-6'>Usuario requerido.</p>,
                    })}  name="username"  defaultValue="" maxLength={20}/>
                    {errors.username && errors.username.message}
                </div>
                </div>
                <div className="row">
                <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" {...register("password", {
                        required:  <p className='text-danger mt-2 ms-1 fs-6'>Contraseña requerida.</p>,
                    })}  name="password"  defaultValue="" maxLength={25}/>
                    {errors.password && errors.password.message}
                    {
                        error && <p className='text-danger mt-2 ms-1 fs-6'>Usuario o contraseña incorrectos.</p>
                    }
                </div>
                </div>
                <div className="text-end mt-2 mb-4">
                    ¿No tienes una cuenta?
                    <a className="registerIniciarSesion ms-2" href="/Register">Regístrate</a>
                    <div>
                    ¿Olvidaste tu contraseña? <a className="registerIniciarSesion ms-2" href='/404'>Restablecer</a>
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