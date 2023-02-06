import React from 'react'

function OpcionCategoria( categoria ) {
    return (
        <>
        <option value={categoria.categoria.name}>{categoria.categoria.name}</option>
        </>
    )
}

export default OpcionCategoria