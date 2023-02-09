import React from 'react'
import './Spinner.css';

function SpinnerCargando() {
  return (
    <>
    <div className='center-screen text-center align-middle'>
        <div className='column text-center'>
            <div className="spinner-border text-danger centered" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className='fs-4 text-danger mt-3'>CARGANDO...</div>
        </div>
    </div>
    </>
  )
}

export default SpinnerCargando