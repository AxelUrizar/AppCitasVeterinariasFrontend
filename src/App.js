import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar";
import Perfil from "./components/Perfil";
import Mascotas from "./components/Mascotas";
import CitasMascota from "./components/CitasMascota";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App vh-100">
        <NavBar />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/perfil/' element={<Perfil />} />
            <Route path='/mascotas/:nombre' element={<Mascotas />} />
            <Route path='/citas/:nombre' element={<CitasMascota />} />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
