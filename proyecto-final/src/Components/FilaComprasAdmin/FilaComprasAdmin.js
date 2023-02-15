import React from 'react'
import ModalBorrarCompra from '../ModalBorrarCompra/ModalBorrarCompra';

function FilaComprasAdmin( compra ) {

    let estadoPago = "";
    if (compra.compra.pay === true){
        estadoPago = "Pagado"
    } else {
        estadoPago = "Pendiente"
    }
    return (
    <>
        <tr>
            <td>{compra.compra.idCompra}</td>
            <td>$ {compra.compra.items[0].unit_price}</td>
            <td>{compra.compra.items[0].quantity}</td>
            <td>{estadoPago}</td>
            <td>
                <div className="d-flex justify-content-evenly" >                                    
                    <div>
                        <ModalBorrarCompra compra={compra.compra} />
                    </div>
                </div>
            </td>
        </tr>
    </>
  )
}

export default FilaComprasAdmin