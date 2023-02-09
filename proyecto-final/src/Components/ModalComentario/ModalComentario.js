import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioEnviarComentario from '../FormularioEnviarComentario/FormularioEnviarComentario';

function ModalComentario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}><i className="bi bi-plus"></i>  Reseña</Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title><h1 className="modal-title fs-5">Dejar una reseña</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormularioEnviarComentario />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComentario