import React from 'react'
import './Navbar.css';
import logoZonaPlay from './logo.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navBar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#"><img className='logoNavBar' src={logoZonaPlay} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Destacado</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Contactos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Destacado</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">Favoritos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Carrito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Iniciar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar