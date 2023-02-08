import React from 'react'
import './MetodoPago.css';

function MetodoPago() {

    const total = localStorage.getItem('totalAPagar');
    const totalEfectivo = parseInt(total / 10 * 9)

    return (
        <>     
            <div className="fondoLogin">
                <div className="formularioLogin mx-auto p-5">
                    <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-5">Método de Pago</div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Efectivo
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className='fs-6'>Total a pagar: $ {totalEfectivo} ARS <span className='fs-6 ms-2 text-success text-opacity-75'>10% de descuento</span></div>
                                    <div className='fs-6 mt-2 text-dark text-opacity-75'>Deberá diríjase a nuestra sucursal mas cercana para pagar.</div>
                                    <div className='d-flex flex-row-reverse mt-3 mb-3'>
                                        <a href="/404"><button type="button" className="btn btn-danger">Pagar</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Tarjeta de Débito
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className='fs-6'>Total a pagar: $ {total} ARS</div>
                                    <div className='fs-6 mt-2 text-dark text-opacity-75'>A continuación deberá insertar los datos de su tarjeta.</div>
                                    <div className='d-flex flex-row-reverse mt-3 mb-3'>
                                        <a href="/404"><button type="button" className="btn btn-danger">Pagar</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Mercado Pago
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className='fs-6'>Total a pagar: $ {total} ARS</div>
                                    <div className='fs-6 mt-2 text-dark text-opacity-75'>A continuación deberá iniciar sesión.</div>
                                    <div className='d-flex flex-row-reverse mt-3 mb-3'>
                                        <a href="/404"><button type="button" className="btn btn-danger">Pagar</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MetodoPago