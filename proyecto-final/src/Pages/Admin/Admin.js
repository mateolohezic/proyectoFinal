import React, { useState, useEffect } from 'react'
import ModalAñadirJuego from '../../Components/ModalAñadirJuego/ModalAñadirJuego';
import './Admin.css';
import axios from 'axios';
import FilaJuegosAdmin from '../../Components/FilaJuegosAdmin/FilaJuegosAdmin';
import ModalAñadirCategoria from '../../Components/ModalAñadirCategoria/ModalAñadirCategoria';
import FilaCategoriaAdmin from '../../Components/FilaCategoriasAdmin/FilaCategoriasAdmin';
import FilaUserAdmin from '../../Components/FilaUserAdmin/FilaUserAdmin';

function Admin() {

    const [juegos, setJuegos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/obtener-juegos`)
        .then((response) =>{
            setJuegos(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })

    }, [])

    useEffect(() =>{
        axios.get(`http://localhost:8000/categorias/obtener-categorias`)
        .then((response) =>{
            setCategorias(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })

    }, [])

    useEffect(() =>{
        axios.get(`http://localhost:8000/users/obtener-users`)
        .then((response) =>{
            setUsers(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })

    }, [])

    return (
        <>
        <div className="tituloPrincipal text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Administración de Juegos</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="text-start ms-1 mb-3">
                        <label htmlFor="search" className="mb-2 ms-auto me-2"><h1 className="modal-title fs-5"><i className="bi bi-search"></i></h1></label>
                        <input type="search" className="p-2 ms-auto w-75" id="search" placeholder= "Buscar..." />
                    </div>
                    <div className="text-end mb-3 me-1">
                        <ModalAñadirJuego />
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
                            <th>Disponible</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            juegos.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).sort((a, b) => +b.favorite-a.favorite).map(cadaJuego => <FilaJuegosAdmin key={cadaJuego._id} juego={cadaJuego} />)
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="mt-5 text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Administración de Categorías</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-12">
                <div className="d-flex flex-row-reverse">
                    <div className="mb-3 me-1">
                        <ModalAñadirCategoria />
                    </div>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Disponible</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            categorias.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(cadaCategoria => <FilaCategoriaAdmin key={cadaCategoria._id} categoria={cadaCategoria} />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="mt-5 text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Administración de Usuarios</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-12 mt-2">
                <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th className='filaCodigoUser'>Código</th>
                            <th>Usuario</th> 
                            <th>Nombre</th> 
                            <th>Apellido</th> 
                            <th>Edad</th> 
                            <th>E-mail</th> 
                            <th>Contraseña</th> 
                            <th>País</th> 
                            <th>Opciones</th> 
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)).map(cadaUser => <FilaUserAdmin key={cadaUser._id} user={cadaUser} />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Admin