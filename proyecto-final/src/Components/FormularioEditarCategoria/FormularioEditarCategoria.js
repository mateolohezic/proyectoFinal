import axios from 'axios';
import React, { useState, useEffect } from 'react'

function FormularioEditarCategoria( categoria) {

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [datos, setDatos] = useState({
        id: categoria.categoria.categoria._id,
        name: categoria.categoria.categoria.name,
        published: categoria.categoria.categoria.published,
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
        setFormErrors(validate(datos));
    }

    const validate =  (values) => {
        const errors = {}
        const regexText = /^[a-zA-Z]{1,300}$/i;
         if (!values.name) {
            errors.name = 'Nombre requerido.';
        } else if (!regexText.test(values.name) || values.name.includes("  ") || values.name.charAt(0) === " ") {
            errors.name = 'Nombre invalido.';
        }
        return errors;
    }
    
    const enviarDatos = (event) => { 
        event.preventDefault();
        if (isSubmit === true) {
        axios.patch(`http://localhost:8000/categorias/editar-categoria`, {
            id: categoria.categoria.categoria._id,
            name: datos.name,
            published: categoria.categoria.categoria.published,
        })
        window.location.reload(true)
        }
    }

    useEffect(() => {

        setIsSubmit(false)
        if(Object.keys(formErrors).length === 0){
        setIsSubmit(true)
        }
    }, [handleInputChange])

  return (
    <>
        <form onSubmit={enviarDatos}>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Nombre de la Categoría</label>
                    <input type="text" className="form-control" onChange={handleInputChange} name="name" value={datos.name} required/>
                    <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.name }</p>
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-danger">Añadir</button>
            </div>
        </form>
    </>
  )
}

export default FormularioEditarCategoria