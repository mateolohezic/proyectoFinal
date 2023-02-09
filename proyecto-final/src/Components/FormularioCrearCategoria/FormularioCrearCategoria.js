import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

function FormularioCrearCategoria() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [categorias, setCategorias] = useState([])

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
        axios.post(`https://mateo-lohezic-Proyecto-Final-RC.up.railway.app/categorias/crear-categoria`, {
            accessToken: tokenAdmin,
            name: data.name,
        })
        window.location.reload(true);
    }}

    const categoriasCoinciden = categorias.filter(categoria => categoria.name === watch('name'))
    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Nombre de la Categoría</label>
                        <input type="text" className="form-control" {...register("name", {
                            required: <p className='text-danger mt-2 ms-1 fs-6'>Nombre requerido.</p>,
                            pattern: {
                                value: /^[a-zA-ZáéíóúñÑÁÉÍÓÚ ]{1,20}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Nombre invalido.</p>
                            },
                            validate: value => categoriasCoinciden.length === 0 || <p className='text-danger mt-2 ms-1 fs-6'>Esta categoría ya existe.</p>
                        })} name="name" defaultValue="" maxLength={20}/>
                        {errors.name && errors.name.message}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-danger">Añadir</button>
                </div>
            </form>
        </>
  )
}

export default FormularioCrearCategoria