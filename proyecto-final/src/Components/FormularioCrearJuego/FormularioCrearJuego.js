import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './FormularioCrearJuego.css';

function FormularioCrearJuego() {

    
    
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmite] = useState(false);
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
        image4: '',
        rating: 0,
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => { 
        event.preventDefault();
        setFormErrors(validate(datos));
        setIsSubmite(true);
        // await axios.post(`http://localhost:8000/crear-juego`, datos)
        // window.location.reload(true)
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z](?:[a-z\d]|-(?=[a-z\d])){6,20}$/i;
        if (!values.title) {
            errors.title = 'Titulo requerido.';
        } else if (!regex.test(values.title)) {
            errors.title = 'Titulo invalido.';
        }
        return errors;
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
    }, [formErrors])

    return (
        <>
            <form onSubmit={enviarDatos}>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Titulo</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="title" value={datos.name} />
                        <p>{ formErrors.title }</p>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Desarrollador</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="developer"  />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Categoría</label>
                        <select className="form-select" onChange={handleInputChange} name="categorie" >
                            <option defaultValue="" >Seleccione una Categoría</option>
                            <option value="Acción">Acción</option>
                            <option value="Carreras">Carreras</option>
                            <option value="Estrategia">Estrategia</option>
                            <option value="Terror">Terror</option>
                        </select>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Fecha de Estreno</label>
                        <input type="number" className="form-control" onChange={handleInputChange} name="date" min="1900" max="2023"   />
                    </div>
                </div>                                       
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control" onChange={handleInputChange} name="price"  aria-describedby="priceHelp"  />
                        <div className="form-text">Si el juego es gratis, inserte 0.</div>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Descripción</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="synopsis"   />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Portada</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image1"   />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 2</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image2"   />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 3</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image3"   />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 4</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image4"   />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <label className="form-label">Puntaje</label>
                        <select className="form-select" onChange={handleInputChange} aria-label="Default select example" name="rating" >
                            <option defaultValue="">Seleccione un puntaje</option>
                            <option value="0">0/5</option>
                            <option value="1">1/5</option>
                            <option value="2">2/5</option>
                            <option value="3">3/5</option>
                            <option value="4">4/5</option>
                            <option value="5">5/5</option>
                        </select>
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