import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalAñadirJuego.css';
import FormularioCrearJuego from '../FormularioCrearJuego/FormularioCrearJuego';

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
            <FormularioCrearJuego />     
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAñadirJuego