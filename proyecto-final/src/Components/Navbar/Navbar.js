import React from 'react'
import './Navbar.css';
import BotonLoginPerfilAdmin from '../BotonLoginPerfilAdmin/BotonLoginPerfilAdmin';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navBar sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Inicio" href="/"><div className='fs-2'><i className="bi bi-house-fill"></i></div></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Destacados" href="/Destacados"><div className='fs-2 ps-3'><i className="bi bi-star-fill"></i></div></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Novedades" href="/Error"><div className='fs-2 ps-3'><i className="bi bi-megaphone-fill"></i></div></a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">         
            <BotonLoginPerfilAdmin />
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Soporte" href="/Soporte"><div className='fs-3 ps-2'><i className="bi bi-chat-left-text-fill"></i></div></a>
            </li>     
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar