import React from 'react'
import './Header.css';
import logoZonaPlay from './logo.png'

function Header() {


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
              <a className="header-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Buscar" href="/"><div className='fs-3 pe-2'><i className="bi bi-search"></i></div></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header