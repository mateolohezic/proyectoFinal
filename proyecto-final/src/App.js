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


function App() {

  const [cargando, setCargando] = useState(false)

  useEffect(() =>{
    setCargando(true);
    setTimeout(() => {
      if (document.readyState === "complete") {
        setCargando(false);
      }
    }, 700);
}, [])

  return (
    <>
    { cargando ? <SpinnerCargando/> : 
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Game" element={<Game/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
    <Footer />
    </>
    }
    </>
  );
}

export default App;
