import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import logoZonaPlay from './logo.png'
import './header.css';

function Header() {

  const { register, watch, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('busqueda', data.search)
    window.location.replace('/Busqueda')
}

  return (
    <nav className="navbar navbar-expand-lg headerPrincipal">
      <div className="container-fluid p-0">
        <div className='row w-100 m-0 p-0'>
          <div className="col-4 row align-middle m-0 p-0">
            <div className="col-3 align-middle text-center m-0 p-0">
              <a className="header-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Facebook" href="https://www.facebook.com/mateo.lohezic"><div className='fs-3'><i className="bi bi-facebook"></i></div></a>
            </div>
            <div className="col-3 align-middle text-center m-0 p-0">
              <a className="header-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Instagram" href="https://www.instagram.com/mateo.lohezic/"><div className='fs-3'><i className="bi bi-instagram"></i></div></a>
            </div>
            <div className="col-3 align-middle text-center m-0 p-0">
              <a className="header-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Linkedin" href="https://www.linkedin.com/in/mateo-bernab%C3%A9-lohezic-8b5329222/"><div className='fs-3'><i className="bi bi-linkedin"></i></div></a>
            </div>
            <div className="col-3 align-middle text-center m-0 p-0">
              <a className="header-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Github" href="https://github.com/mateolohezic"><div className='fs-3'><i className="bi bi-github"></i></div></a>
            </div>
          </div>
          <div className="col-4 align-middle text-center m-0 p-0">
            <a className="w-100" href="/"><img className='logoNavBar' src={logoZonaPlay} alt="logo" /></a>
          </div>
          <div className="col-4 align-middle text-end m-0 p-0">
              <a className="header-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><div className='fs-3 pe-2'><i className="bi bi-search"></i></div></a>
          </div>
          <div className="collapse" id="collapseExample">
            <div className='buscadorInput'>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="btn-group w-100" role="group" aria-label="Basic example">
                  <input className="form-control" type="search" placeholder="Juego..." aria-label="Search" {...register("search", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Campo requerido.</p>,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ ]{1,30}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Campo invalido.</p>
                            },
                        })} name="search" defaultValue="" maxLength={30}/>

                  <button type="submit" className="btn btn-outline-secondary">Buscar</button>
                </div>
                {errors.search && errors.search.message}
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header