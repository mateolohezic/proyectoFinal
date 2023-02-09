import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function ModalBorrarComentario( comentario ) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const eliminarComentario = async () => {
    const tokenAdmin = localStorage.getItem('token')
    if (!tokenAdmin) {
        window.location.replace('/404')
    } else {
        axios.delete(`http://localhost:8000/comentarios/eliminar-comentario`, {
        data: {
            accessToken: tokenAdmin,
            id: comentario.comentario._id
        }}
        )
        window.location.reload(true);
    }
    }

    return (
        <>
        <Button variant="danger" onClick={handleShow}><i className="bi bi-trash fs-6"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><h1 className="modal-title fs-5">Comentario de {comentario.comentario.username}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className='mt-2 fs-5 text-center'>¿Estas seguro que quiere eliminar este comentario?</div>
                    <div className='fs-6 text-dark text-opacity-75 text-center'>Esta acción no podrá deshacerse luego.</div>
                    <div className='mt-4 mb-4 text-center'><button type="button" className="btn btn-danger btn-lg" onClick={eliminarComentario}>Eliminar</button></div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default ModalBorrarComentario