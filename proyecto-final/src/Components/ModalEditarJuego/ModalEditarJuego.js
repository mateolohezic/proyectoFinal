import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalEditarJuego.css';

function ModalEditarJuego( juego ) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="danger" onClick={handleShow}><i className="bi bi-pencil-fill"></i></Button>
        <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
            <Modal.Title><h1 className="modal-title fs-5">Editar {juego.juego.title}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Holaaa
            </Modal.Body>
        </Modal>
        </>
    )
}

export default ModalEditarJuego