import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

function FormularioEditarCategoria( categoria ) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.patch(`http://localhost:8000/categorias/editar-categoria`, {
            id: categoria.categoria.categoria._id,
            name: data.name,
            published: categoria.categoria.categoria.published,
        })
        window.location.reload(true);
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Nombre de la Categoría</label>
                    <input type="text" className="form-control"{...register("name", {
                        required: <p className='text-danger mt-2 ms-1 fs-6'>Nombre requerido.</p>,
                        pattern: {
                            value: /^[a-zA-ZáéíóúñÑÁÉÍÓÚ ]{1,20}$/i,
                            message: <p className='text-danger mt-2 ms-1 fs-6'>Nombre invalido.</p>
                        },
                    })} name="name" defaultValue={categoria.categoria.categoria.name} maxLength={20}/>
                    {errors.name && errors.name.message}
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-danger">Editar</button>
            </div>
        </form>
    </>
  )
}

export default FormularioEditarCategoria