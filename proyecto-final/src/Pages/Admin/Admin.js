import React from 'react'
import './Admin.css';

function Admin() {
  return (
    <>
    <div className="tituloPrincipal text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Administración de Productos</div>
    <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
        <div className="col-12">
            <div className="d-flex justify-content-between">
                <div className="text-start ms-1 mb-3">
                    <label htmlFor="search" className="mb-2 ms-auto me-2"><h1 className="modal-title fs-5"><i className="bi bi-search"></i></h1></label>
                    <input type="search" className="p-2 ms-auto w-75" id="search" placeholder= "Buscar..." />
                </div>
                <div className="text-end mb-3 me-1">
                    <button type="button" className="btn btn-danger p-2 pe-3 text-light"><i className="bi bi-plus"></i> Añadir</button>
                </div>
            </div>
            <div className="table-responsive mt-3">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Disponible</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Admin