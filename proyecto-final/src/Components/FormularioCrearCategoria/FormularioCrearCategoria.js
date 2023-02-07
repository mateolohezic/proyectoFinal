import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

function FormularioCrearCategoria() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [categorias, setCategorias] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/categorias/obtener-categorias`)
        .then((response) =>{
            setCategorias(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })

    }, [])

    const onSubmit = (data) => {
        axios.post(`http://localhost:8000/categorias/crear-categoria`, data)
        window.location.reload(true);
    }

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
                                value: /^[a-zA-ZáéíóúñÑÁÉÍÓÚ ]{1,50}$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Nombre invalido.</p>
                            },
                            validate: value => categoriasCoinciden.length === 0 || <p className='text-danger mt-2 ms-1 fs-6'>Esta categoría ya existe.</p>
                        })} name="name" defaultValue=""/>
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