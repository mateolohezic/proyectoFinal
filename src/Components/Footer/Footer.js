import React from 'react'
import './Footer.css';
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
                  <a href="/404">Quienes somos</a>
                  <a href="/404">Contacto</a>
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
            <div className="box">
              <h2>SÍGUENOS</h2>
              <div className="redes">
                <a href="https://www.facebook.com/"><i className="bi bi-linkedin"></i></a>
                <a href="https://twitter.com/"><i className="bi bi-instagram"></i></a>
                <a href="https://www.youtube.com/"><i className="bi bi-twitter"></i></a>
                <a href="https://www.instagram.com/"><i className="bi bi-facebook"></i></a>
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
