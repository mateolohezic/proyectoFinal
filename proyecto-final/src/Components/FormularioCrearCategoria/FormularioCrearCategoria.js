import axios from 'axios';
import React, { useState, useEffect } from 'react'

function FormularioCrearCategoria() {

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

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [datos, setDatos] = useState({
        name: '',
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
        const categoriasCoinciden = categorias.filter(categoria => categoria.name === values.name)
        if (!values.name) {
            errors.name = 'Nombre requerido.';
        } else if (!regexText.test(values.title) || values.name.includes("  ") || values.name.charAt(0) === " ") {
            errors.name = 'Nombre invalido.';
        } else if (categoriasCoinciden.length !== 0){
            errors.name = 'Este juego ya existe.';
        }
        return errors;
    }

    const enviarDatos = (event) => { 
        event.preventDefault();
        if (isSubmit === true) {
        axios.post(`http://localhost:8000/categorias/crear-categoria`, datos)
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
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.title }</p>
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