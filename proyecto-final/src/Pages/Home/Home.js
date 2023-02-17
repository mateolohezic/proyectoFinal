import React, {useState, useEffect } from 'react'
import axios from 'axios';
import CarouselDestacados from '../../Components/CarouselDestacados/CarouselDestacados';
import './Home.css';
import CarouselNovedades from '../../Components/CarouselNovedades/CarouselNovedades';
import AccordionCategorias from '../../Components/AccordionCategorias/AccordionCategorias';
import Publicidad from '../../Components/Publicidad/Publicidad';
import SeccionCaracteristicasEmpresa from '../../Components/SeccionCaracteristicasEmpresa/SeccionCaracteristicasEmpresa';

function Home() {

    const [destacados, setDestacados] = useState([])
    const [carga, setCarga] = useState(true)

    useEffect(() =>{
      axios.get(`https://mateo-lohezic-proyecto-final-rolling-code.up.railway.app/obtener-juegos`)
      .then((response) =>{
          setDestacados(response.data.filter(juego => juego.favorite === true && juego.published === true));

      })
      .catch((error) =>{
          console.error(error);
      })
  }, [])

    const [publicidad, setPublicidad] = useState(false)

    useEffect(() =>{
      setTimeout(() => {
        setPublicidad(true);
      }, 20000);
    }, [])

    return (
      <>
           
      <div className="fondoHome">
        { destacados.length > 0 ? <CarouselDestacados /> : <></>}
        <CarouselNovedades />
        <AccordionCategorias />
        <SeccionCaracteristicasEmpresa />
      </div>
        { publicidad && <Publicidad/>}
      </>
    )
}

export default Home