import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Usuario/Login";
import SignUp from "./components/Usuario/SignUp"
import NavBar from "./components/NavBar";
import Perfil from "./components/Usuario/Perfil";
import Mascotas from "./components/Mascotas/Mascota";
import Home from "./components/Home";
import NuevaMascota from "./components/Mascotas/NuevaMascota";
import ListadoMascotas from "./components/Mascotas/ListadoMascotas";
import NuevaCita from "./components/Citas/NuevaCita";
import EditarCita from "./components/Citas/EditarCita";
import Logout from "./components/Usuario/Logout";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App vh-100">      
      <Routes>
        {/* Paths Principales */}
        <Route path='/' element={<Layout />}>
          <Route path='' element= {<Home/>}/>
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='signup' element={<SignUp />} />

          {/* Paths Usuarios */}
          <Route path='perfil' element={<Perfil />} />
            {/* <Route path='/logout' element={<Logout />} /> */}
            {/* <Route path='/logoutAll' element={<LogoutAll />} /> */}
            {/* <Route path='/eliminarCuenta' element={<EliminarCuenta />} /> */}

          {/* Paths Mascotas */}
          <Route path='perfil/nuevaMascota' element={<NuevaMascota />} />
          <Route path='perfil/listadoMascotas' element={<ListadoMascotas />}/>
          <Route path='mascotas/:id' element={<Mascotas />} />

          {/* Paths Citas */}
          <Route path='mascotas/:id/nuevaCita' element={<NuevaCita />} />
          <Route path='mascotas/:id/editarCita/:idCita' element={<EditarCita />} />
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
