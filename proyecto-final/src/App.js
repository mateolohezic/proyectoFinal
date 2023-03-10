import Navbar from "./Components/Navbar/Navbar";
import React, {useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Game from "./Pages/Game/Game";
import SpinnerCargando from "./Components/Spinner/Spinner";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Carrito from "./Pages/Carrito/Carrito";
import Destacados from "./Pages/Destacados/Descatados";
import Perfil from "./Pages/Perfil/Perfil";
import Favoritos from "./Pages/Favoritos/Favoritos";
import Error from "./Pages/Error/Error";
import Soporte from "./Pages/Soporte/Soporte";
import Header from "./Components/Header/Header";
import Busqueda from "./Pages/Busqueda/Busqueda";
import MetodoPago from "./Pages/MetodoPago/MetodoPago";
import Nosotros from "./Pages/Nosotros/Nosotros";
import Failure from "./Pages/Failure/Failure";
import Success from "./Pages/Success/Success";
import RestablecerContraseña from "./Pages/RestablecerContraseña/RestablecerContraseña";
import RestablecerContraseñaSiguiente from "./Pages/RestablecerContraseñaSiguiente/RestablecerContraseñaSiguiente";


function App() {

  const [cargando, setCargando] = useState(false)

  useEffect(() =>{
    setCargando(true);
    setTimeout(() => {
      if (document.readyState === "complete") {
        setCargando(false);
      }
    }, 2000);
}, [])

  return (
    <>
    { cargando ? <SpinnerCargando/> : 
    <>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Game" element={<Game/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Carrito" element={<Carrito/>} />
      <Route path="/Destacados" element={<Destacados/>} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route path="/404" element={<Error/>} />
      <Route path="/Favoritos" element={<Favoritos/>} />
      <Route path="/Soporte" element={<Soporte/>} />
      <Route path="/Busqueda" element={<Busqueda />} />
      <Route path="/MetodoPago" element={<MetodoPago />} />
      <Route path="/Nosotros" element={<Nosotros />} />
      <Route path="/Failure" element={<Failure />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/RestablecerContraseña" element={<RestablecerContraseña />} />
      <Route path="/RestablecerContraseñaSiguiente" element={<RestablecerContraseñaSiguiente />} />
    </Routes>
    <Footer />
    </>
    }
    </>
  );
}

export default App;