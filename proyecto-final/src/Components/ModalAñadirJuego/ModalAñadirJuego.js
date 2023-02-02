import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAñadirJuego() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}><i className="bi bi-plus"></i> Añadir</Button>
      <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title><h1 className="modal-title fs-5">Añadir un juego</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="row">
                <div className="mb-3 col">
                    <label for="title" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="title" value="" required />
                </div>
                <div className="mb-3 col">
                    <label for="developer" className="form-label">Desarrollador</label>
                    <input type="text" className="form-control" id="developer" value="" required />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Categoría</label>
                    <select className="form-select" aria-label="Default select example" id="categorie" required>
                        <option value="" selected>Seleccione una Categoría</option>
                        <option value="Acción">Acción</option>
                        <option value="Carreras">Carreras</option>
                        <option value="Estrategia">Estrategia</option>
                        <option value="Terror">Terror</option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <label for="date" className="form-label">Fecha de Estreno</label>
                    <input type="number" className="form-control" id="date" min="1900" max="2023" value="" required />
                </div>
            </div>                                       
            <div className="row">
                <div className="mb-3 col">
                    <label for="price" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="price" value="" aria-describedby="priceHelp" required />
                    <div id="priceHelp" className="form-text">Si es gratis, inserte 0.</div>
                </div>
                <div className="mb-3 col">
                    <label for="synopsis" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="synopsis" value="" required />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label for="image1" className="form-label">Portada</label>
                    <input type="text" className="form-control" id="image1" value="" required />
                </div>
                <div className="mb-3 col">
                    <label for="image2" className="form-label">Imagen 2</label>
                    <input type="text" className="form-control" id="image2" value="" required />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label for="image3" className="form-label">Imagen 3</label>
                    <input type="text" className="form-control" id="image3" value="" required />
                </div>
                <div className="mb-3 col">
                    <label for="image4" className="form-label">Imagen 4</label>
                    <input type="text" className="form-control" id="image4" value="" required />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col-6">
                    <label className="form-label">Puntaje</label>
                    <select className="form-select" aria-label="Default select example" id="rating" required>
                        <option value="" selected>Seleccione un puntaje</option>
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
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <button type="button" className="btn btn-danger" onClick="" >Añadir</button>
            </div>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAñadirJuego