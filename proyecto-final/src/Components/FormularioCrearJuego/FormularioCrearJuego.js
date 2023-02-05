import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './FormularioCrearJuego.css';

function FormularioCrearJuego() {

    const [juegos, setJuegos] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/obtener-juegos`)
        .then((response) =>{
            setJuegos(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })

    }, [])

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [datos, setDatos] = useState({
        title: '',
        developer: '',
        categorie: '',
        date: 0,
        price: 0,
        synopsis: '',
        image1: '',
        image2: '',
        image3: '',
        image4: ''
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
        const regexText = /^[a-z0-9 ,.'-]{1,300}$/i;
        const juegosCoinciden = juegos.filter(juego => juego.title === values.title)
        if (!values.title) {
            errors.title = 'Titulo requerido.';
        } else if (!regexText.test(values.title) || values.title.includes("  ") || values.title.charAt(0) === " ") {
            errors.title = 'Titulo invalido.';
        } else if (juegosCoinciden.length !== 0){
            errors.title = 'Este juego ya existe.';
        }
        if (!values.developer) {
            errors.developer = 'Nombre requerido.';
        } else if (!regexText.test(values.developer) || values.developer.includes("  ") || values.developer.charAt(0) === " ") {
            errors.developer = 'Nombre invalido.';
        }
        if (values.synopsis.length === 0 || values.synopsis.includes("  ") || values.synopsis.charAt(0) === " ") {
            errors.synopsis = 'Campo requerido.';
        }
        if (values.image1.length === 0 || values.image1.includes("  ") || values.image1.charAt(0) === " ") {
            errors.image1 = 'Campo requerido.';
        }
        if (values.image2.length === 0 || values.image2.includes("  ") || values.image2.charAt(0) === " ") {
            errors.image2 = 'Campo requerido.';
        }
        if (values.image3.length === 0 || values.image3.includes("  ") || values.image3.charAt(0) === " ") {
            errors.image3 = 'Campo requerido.';
        }
        if (values.image4.length === 0 || values.image4.includes("  ") || values.image4.charAt(0) === " ") {
            errors.image4 = 'Campo requerido.';
        }
        if (values.categorie.length <= 1) {
            console.log(values.categorie);
            errors.categorie = 'Campo requerido.';
        }
        return errors;
    }

    const enviarDatos = (event) => { 
        event.preventDefault();
        if (isSubmit === true) {
        axios.post(`http://localhost:8000/crear-juego`, datos)
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
                        <label className="form-label">Titulo</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="title" value={datos.title} />
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.title }</p>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Desarrollador</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="developer" value={datos.developer} />
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.developer }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Categoría</label>
                        <select className="form-select" onChange={handleInputChange} name="categorie">
                            <option value="a">Seleccione una Categoría</option>
                            <option value="Acción">Acción</option>
                            <option value="Carreras">Carreras</option>
                            <option value="Estrategia">Estrategia</option>
                            <option value="Terror">Terror</option>
                        </select>
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.categorie }</p>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Fecha de Estreno</label>
                        <input type="number" className="form-control" onChange={handleInputChange} name="date" min="1952" max="2024" required/>
                    </div>
                </div>                                       
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control" onChange={handleInputChange} name="price" min="0" max="30000" required/>
                        <div className="form-text">Si el juego es gratis, inserte 0.</div>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Descripción</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="synopsis" maxLength="200"/>
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.synopsis }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Portada</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image1" value={datos.image1} />
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.image1 }</p>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 2</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image2" value={datos.image2} />
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.image2 }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 3</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image3" value={datos.image3} />
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.image3 }</p>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 4</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image4" value={datos.image4} />
                        <p className='text-danger mt-2 ms-1 fs-6'>{ formErrors.image4 }</p>
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