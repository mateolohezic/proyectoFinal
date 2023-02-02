import axios from 'axios';
import React, { useState } from 'react'
import './FormularioCrearJuego.css';

function FormularioCrearJuego() {

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

    const enviarDatos = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:8000/api/juegos/crear-juego`, datos)
        .then((response) => console.log(response.data));
    }

    return (
        <>
            <form onSubmit={enviarDatos}>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Titulo</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="title" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Desarrollador</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="developer" required />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Categoría</label>
                        <select className="form-select" onChange={handleInputChange} name="categorie" required>
                            <option defaultValue="" >Seleccione una Categoría</option>
                            <option value="Acción">Acción</option>
                            <option value="Carreras">Carreras</option>
                            <option value="Estrategia">Estrategia</option>
                            <option value="Terror">Terror</option>
                        </select>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Fecha de Estreno</label>
                        <input type="number" className="form-control" onChange={handleInputChange} name="date" min="1900" max="2023"  required />
                    </div>
                </div>                                       
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control" onChange={handleInputChange} name="price"  aria-describedby="priceHelp" required />
                        <div className="form-text">Si el juego es gratis, inserte 0.</div>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Descripción</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="synopsis"  required />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Portada</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image1"  required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 2</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image2"  required />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 3</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image3"  required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Imagen 4</label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="image4"  required />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <label className="form-label">Puntaje</label>
                        <select className="form-select" onChange={handleInputChange} aria-label="Default select example" name="rating" required>
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
                    <button type="submit" className="btn btn-danger" >Añadir</button>
                </div>
            </form>
        </>
  )
}

export default FormularioCrearJuego