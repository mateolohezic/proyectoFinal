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
              <a className="nav-link" aria-current="page" href="/"><div className='border-bottom border-1 p-1'>INICIO</div></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Admin"><div className='border-bottom border-1 p-1'>DESTACADO</div></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#"><div className='border-bottom border-1 p-1'>CONTACTO</div></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#"><div className='border-bottom border-1 p-1'>NOVEDADES</div></a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">FAVORITOS   <i className="bi bi-star-fill ms-2 me-2 border-end border-2 pe-4"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">CARRITO <i className="bi bi-cart-fill ms-2 me-2 border-end border-2 pe-4"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">INICIAR SESIÓN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar