import React from 'react'
import './Login.css';

function Login() {

    return (
        <>     
            <div className="fondoLogin">
                <div className="formularioLogin mx-auto p-5">
                    <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-5">Iniciar Sesión</div>
                    <form>
                        <div className="row">
                        <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                            <label for="nombreOtro" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="nombreOtro" value="" required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                            <label for="marcaOtro" className="form-label">Contraseña</label>
                            <input type="text" className="form-control" id="marcaOtro" value="" required />
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
                            <button type="button" className="btn  btn-danger">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login