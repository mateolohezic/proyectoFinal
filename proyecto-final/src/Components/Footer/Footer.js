import React from 'react'
import './footer.css';
import logoZonaPlay from './logo.png'

const Footer = () => {
  return (
    <>
        <footer className="pie-pagina footerShadow">
          <div className="grupo-1">
            <div className="box">
              <figure>
                <a href="/" className="logo">
                  <img src={logoZonaPlay} alt="Logo zona play" />
                </a>
              </figure>
            </div>
            <div className="box-1">
              <h2>SOBRE NOSOTROS</h2>
              <div className='row'>
                <div className='col-6'>
                  <a href="/Nosotros">Quienes somos</a>
                  <a href="/Soporte">Contacto</a>
                  <a href="/404">Envíos</a>
                  <a href="/404">Reembolso</a>
                </div>
                <div className='col-6'>
                  <a href="/404">Franquicia</a>
                  <a href="/404">Política de privacidad</a>
                  <a href="/404">Eventos</a>
                  <a href="/404">Torneos</a>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <div className="box">
                <h2>SÍGUENOS</h2>
                <div className="redes">
                  <a href="https://www.linkedin.com/in/mateo-bernab%C3%A9-lohezic-8b5329222/?originalSubdomain=ar"><i className="bi bi-linkedin"></i></a>
                  <a href="https://www.instagram.com/mateo.lohezic/"><i className="bi bi-instagram"></i></a>
                  <a href="https://github.com/mateolohezic"><i className="bi bi-github"></i></a>
                  <a href="https://www.facebook.com/mateo.lohezic"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
              <div className="box">
                <div className="informacionContacto mt-3">
                  <div>Argentina, Tucumán, CP 4107</div>
                  <div>zonaplay@gmail.com</div>
                  <div>+54-381-5690169</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grupo-2">
            <small>&copy; 2023 <b>ZONAPlay - Mateo Bernabé Lohezic</b> - Todos los derechos reservados. </small>
          </div>
        </footer>
    </>
  )
}

export default Footer
