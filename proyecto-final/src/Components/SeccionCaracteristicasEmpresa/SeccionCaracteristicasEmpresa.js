import React from 'react'
import logo1 from './envios.jpg'
import logo2 from './tarjeta.jpg'
import logo3 from './seguridad.jpg'
import './seccionCaracteristicasEmpresa.css';

function SeccionCaracteristicasEmpresa() {
  return (
    <>
    <div className="cajaCaracteristicasEmpresa pb-5 row mx-auto justify-content-evenly">
        <div className="col-3 cajaCaracteristicas pt-5">
            <div className="text-center">
                <img src={logo2} className="mx-auto img-fluid" alt='seccion'/>
                <div className="card-body mt-4">
                    <h5 className="fs-6"><b>Todos los medios de pago</b></h5>
                    <p className="card-text fs-6">Podés pagar con tarjeta, débito, efectivo, hasta 12 cuotas sin interés.</p>
                </div>
            </div>
        </div>
        <div className="col-3 cajaCaracteristicas pt-5">
            <div className="text-center">
                <img src={logo1} className="mx-auto img-fluid" alt='seccion' />
                <div className="card-body mt-4">
                    <h5 className="fs-6"><b>Envíos en el momento</b></h5>
                    <p className="card-text fs-6">Hacemos envíos apenas realizas tu compra.</p>
                </div>
            </div>    
        </div>
        <div className="col-3 cajaCaracteristicas pt-5">
            <div className="text-center">
                <img src={logo3} className="mx-auto img-fluid" alt='seccion' />
                <div className="card-body mt-4">
                    <h5 className="fs-6"><b>Seguridad en tu compra</b></h5>
                    <p className="card-text fs-6">¿No te gusta? ¡Devolvelo! Estás siempre protegido.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SeccionCaracteristicasEmpresa