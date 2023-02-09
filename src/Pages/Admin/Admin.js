import React, { useState, useEffect } from 'react'
import ModalAñadirJuego from '../../Components/ModalAñadirJuego/ModalAñadirJuego';
import './admin.css';
import axios from 'axios';
import FilaJuegosAdmin from '../../Components/FilaJuegosAdmin/FilaJuegosAdmin';
import ModalAñadirCategoria from '../../Components/ModalAñadirCategoria/ModalAñadirCategoria';
import FilaCategoriaAdmin from '../../Components/FilaCategoriasAdmin/FilaCategoriasAdmin';
import FilaUserAdmin from '../../Components/FilaUserAdmin/FilaUserAdmin';
import FilaComentarioAdmin from '../../Components/FilaComentarioAdmin/FilaComentarioAdmin';
import FilaConsultasAdmin from '../../Components/FilaConsultasAdmin/FilaConsultasAdmin';

function Admin() {

    const tokenAdmin = localStorage.getItem('token')

    if (!tokenAdmin) {
        window.location.replace('/404')
    }
    
    const [juegos, setJuegos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [users, setUsers] = useState([])
    const [comentarios, setComentarios] = useState([])
    const [consultas, setConsultas] = useState([])

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/obtener-juegos`)
        .then((response) =>{
            setJuegos(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })

    }, [])

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/categorias/obtener-categorias`)
        .then((response) =>{
            setCategorias(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })

    }, [])

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/users/obtener-users`)
        .then((response) =>{
            setUsers(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })

    }, [])

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/comentarios/obtener-comentario`)
        .then((response) =>{
            setComentarios(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })

    }, [])

    useEffect(() =>{
        axios.get(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/consulta/obtener-consulta`)
        .then((response) =>{
            setConsultas(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })

    }, [])

    return (
        <>
        <div className="tituloPrincipal text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Administración de Juegos</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-12">
                <div className="d-flex flex-row-reverse">
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
        <div className="mt-5 text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Administración de Comentarios</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-12 mt-2">
                <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Código</th>
                            <th>Usuario</th> 
                            <th>Juego</th> 
                            <th>Comentario</th> 
                            <th>Opciones</th> 
                        </tr>
                        </thead>
                        <tbody>
                        {
                            comentarios.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)).map(cadaComentario => <FilaComentarioAdmin key={cadaComentario._id} comentario={cadaComentario} />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="mt-5 text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Consultas</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-12 mt-2">
                <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th> 
                            <th>Apellido</th> 
                            <th>Email</th> 
                            <th>Consulta</th> 
                            <th>Opciones</th> 
                        </tr>
                        </thead>
                        <tbody>
                        {
                            consultas.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)).map(cadaConsulta => <FilaConsultasAdmin key={cadaConsulta._id} consulta={cadaConsulta} />)
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