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
import NuevaMascota from "./components/NuevaMascota";

function App() {
  return (
    <BrowserRouter>
      <div className="App vh-100">
        <NavBar />
        
          <Routes>
            {/* Paths Principales */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

            {/* Paths Usuarios */}
            <Route path='/perfil' element={<Perfil />} />
              {/* <Route path='/logout' element={<Logout />} /> */}
              {/* <Route path='/logoutAll' element={<LogoutAll />} /> */}
              {/* <Route path='/eliminarCuenta' element={<EliminarCuenta />} /> */}

            {/* Paths Mascotas */}
              <Route path='/perfil/nuevaMascota' element={<NuevaMascota />} />
            <Route path='/mascotas/:nombre' element={<Mascotas />} />
            <Route path='/citas/:nombre' element={<CitasMascota />} />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
