import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function ModalBorrarCompra( compra ) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const eliminarCompra = async () => {
    const tokenAdmin = localStorage.getItem('token')
    if (!tokenAdmin) {
        window.location.replace('/404')
    } else {
        await axios.delete(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/compra/eliminar-compra`, {
        data: {
            accessToken: tokenAdmin,
            id: compra.compra._id
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
            <Modal.Title><h1 className="modal-title fs-5">Compra {compra.compra.idCompra}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className='mt-2 fs-5 text-center'>¿Estas seguro que quiere eliminar esta compra?</div>
                    <div className='fs-6 text-dark text-opacity-75 text-center'>Esta acción no podrá deshacerse luego.</div>
                    <div className='mt-4 mb-4 text-center'><button type="button" className="btn btn-danger btn-lg" onClick={eliminarCompra}>Eliminar</button></div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default ModalBorrarCompra