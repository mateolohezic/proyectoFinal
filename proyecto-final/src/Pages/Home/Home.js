import React, {useState, useEffect } from 'react'
import axios from 'axios';
import CarouselDestacados from '../../Components/CarouselDestacados/CarouselDestacados';
import './Home.css';
import CarouselNovedades from '../../Components/CarouselNovedades/CarouselNovedades';
import AccordionCategorias from '../../Components/AccordionCategorias/AccordionCategorias';
import Publicidad from '../../Components/Publicidad/Publicidad';

function Home() {

    const [destacados, setDestacados] = useState([])

    useEffect(() =>{
      axios.get(`http://localhost:8000/obtener-juegos`)
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
      }, 2000);
    }, [])

    return (
      <>
           
      <div className="fondoHome">
      {
        destacados.length > 0 ? <CarouselDestacados /> : <></>
      }
        <CarouselNovedades />
        <AccordionCategorias />
      </div>
        { publicidad && <Publicidad/>}
      
      </>
    )
}

export default Home