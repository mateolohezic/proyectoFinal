import React, {useState, useEffect } from 'react'
import axios from 'axios';
import CarouselDestacados from '../../Components/CarouselDestacados/CarouselDestacados';
import './Home.css';

function Home() {

    const [destacados, setDestacados] = useState([])

    useEffect(() =>{
      axios.get(`http://localhost:8000/obtener-juegos`)
      .then((response) =>{
          setDestacados(response.data.filter(juego => juego.favorite === true ));

      })
      .catch((error) =>{
          console.log(error);
      })
  }, [])


    return (
      
      <>
      {
        destacados.length > 0 ? <CarouselDestacados /> : <></>
      }
      </>
    )
}

export default Home