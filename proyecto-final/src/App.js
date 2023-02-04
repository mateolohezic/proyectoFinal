import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Game from "./Pages/Game/Game";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Game" element={<Game/>} />
    </Routes>
    </>
  );
}

export default App;
