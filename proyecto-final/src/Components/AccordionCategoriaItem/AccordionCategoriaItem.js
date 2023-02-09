import React from 'react'
import AccordionCategoriaCard from '../AccordionCategoriaCard/AccordionCategoriaCard'

function AccordionCategoriaItem(categoria) {
  return (
    <>
        <div className="accordion-item">
          <h2 className="accordion-header" id={"heading" + categoria.categoria._id}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + categoria.categoria._id} aria-expanded="false" aria-controls={"collapse" + categoria.categoria._id}>
              {categoria.categoria.name}
            </button>
          </h2>
          <div id={"collapse" + categoria.categoria._id} className="accordion-collapse collapse hide" aria-labelledby={"heading" + categoria.categoria._id} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <AccordionCategoriaCard key={categoria.categoria._id} categoria={categoria.categoria}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default AccordionCategoriaItem
