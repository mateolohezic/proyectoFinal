import React, {useState, useEffect } from 'react'
import axios from 'axios';
import CarouselDestacados from '../../Components/CarouselDestacados/CarouselDestacados';
import './Home.css';
import CarouselNovedades from '../../Components/CarouselNovedades/CarouselNovedades';
import AccordionCategorias from '../../Components/AccordionCategorias/AccordionCategorias';

function Home() {

    const [destacados, setDestacados] = useState([])

    useEffect(() =>{
      axios.get(`http://localhost:8000/obtener-juegos`)
      .then((response) =>{
          setDestacados(response.data.filter(juego => juego.favorite === true && juego.published === true));

      })
      .catch((error) =>{
          console.log(error);
      })
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
      </>
    )
}

export default Home