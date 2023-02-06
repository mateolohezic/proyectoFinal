import Navbar from "./Components/Navbar/Navbar";
import React, {useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Game from "./Pages/Game/Game";
import SpinnerCargando from "./Components/Spinner/Spinner";


function App() {

  const [cargando, setCargando] = useState(false)

  useEffect(() =>{
    setCargando(true); //
    setTimeout(() => {
      setCargando(false);
    }, 1000);
}, [window.location.href])

  return (
    <>
    { cargando ? <SpinnerCargando/> : 
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Game" element={<Game/>} />
    </Routes>
    </>
    }
    </>
  );
}

export default App;
