import axios from 'axios';
import React, { useState, useEffect } from 'react'
import OpcionCategoria from '../OpcionCategoria/OpcionCategoria';
import { useForm } from "react-hook-form";

function FormularioCrearJuego() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [juegos, setJuegos] = useState([])
    const [categorias, setCategorias] = useState([])

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

    const onSubmit = (data) => {
        const tokenAdmin = localStorage.getItem('token')
        if (!tokenAdmin) {
            window.location.replace('/404')
        } else {
        axios.post(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/crear-juego`, {
            accessToken: tokenAdmin,
            title: data.title,
            developer: data.developer,
            categorie: data.categorie,
            date: data.date,
            price: data.price,
            synopsis: data.synopsis,
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            image4: data.image4
        })
        window.location.reload(true)
    }}

    const juegosCoinciden = juegos.filter(juego => juego.title === watch('title'))

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Titulo</label>
                        <input type="text" className="form-control" {...register("title", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Nombre requerido.</p>,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóú ]{1,50}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Nombre invalido.</p>
                            },
                            validate: value => juegosCoinciden.length === 0 || <p className='text-danger mt-2 ms-1 fs-6'>Este juego ya existe.</p>
                        })} name="title" defaultValue="" maxLength={50}/>
                        {errors.title && errors.title.message}
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Desarrollador</label>
                        <input type="text" className="form-control" {...register("developer", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Nombre requerido.</p>,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóú ]{1,50}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Nombre invalido.</p>
                            }
                            
                        })} name="developer" defaultValue="" maxLength={50}/>
                        {errors.developer && errors.developer.message}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Categoría</label>
                        <select className="form-select" {...register("categorie", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Seleccione una opción.</p>
                        })} name="categorie" defaultValue="" >
                            <option value="">Seleccione una Categoría</option>
                            {
                                categorias.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(cadaCategoria => <OpcionCategoria key={cadaCategoria._id} categoria ={cadaCategoria} />)
                            }
                        </select>
                        {errors.categorie && errors.categorie.message}
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Fecha de Estreno</label>
                        <input type="number" className="form-control" {...register("date", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Fecha requerida.</p>,
                            min: {
                                value: 1950,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Debe ser mayor a 1950.</p>
                            },
                            max: {
                                value: 2024,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Debe ser menor a 2024.</p>
                            },
                            
                        })} name="date" defaultValue="" max={9999}/>
                        {errors.date && errors.date.message}
                    </div>
                </div>                                       
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control"{...register("price", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Precio requerido.</p>,
                            max: {
                                value: 30000,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Debe ser menor a $30.000</p>
                            },                            
                        })} name="price" defaultValue="" max={99999}/>
                        <div className="form-text">Si el juego es gratis, inserte 0.</div>
                        {errors.price && errors.price.message}
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Descripción</label>
                        <input type="text" className="form-control" {...register("synopsis", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Descripción requerida.</p>,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóú:,." ]{1,1000}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Descripción invalida.</p>
                            }
                            
                        })} name="synopsis" defaultValue="" maxLength={1000}/>
                        {errors.synopsis && errors.synopsis.message}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Portada</label>
                        <input type="text" className="form-control" {...register("image1", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Link requerido.</p>,
                            maxLength : {
                                value: 1000,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Link invalido.</p>,
                            }
                            
                        })} name="image1" defaultValue="" maxLength={1000}/>
                        {errors.image1 && errors.image1.message}
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 2</label>
                        <input type="text" className="form-control" {...register("image2", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Link requerido.</p>,
                            maxLength : {
                                value: 1000,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Link invalido.</p>,
                            }
                            
                        })} name="image2" defaultValue="" maxLength={1000}/>
                        {errors.image2 && errors.image2.message}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 3</label>
                        <input type="text" className="form-control" {...register("image3", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Link requerido.</p>,
                            maxLength : {
                                value: 1000,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Link invalido.</p>,
                            }
                            
                        })} name="image3" defaultValue="" maxLength={1000}/>
                        {errors.image3 && errors.image3.message}
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 4</label>
                        <input type="text" className="form-control" {...register("image4", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Link requerido.</p>,
                            maxLength : {
                                value: 1000,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Link invalido.</p>,
                            }
                            
                        })} name="image4" defaultValue="" maxLength={1000}/>
                        {errors.image4 && errors.image4.message}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-danger">Añadir</button>
                </div>
            </form>
        </>
  )
}

export default FormularioCrearJuego