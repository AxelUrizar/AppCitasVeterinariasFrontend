import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar";
import Perfil from "./components/Perfil";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/perfil' element={<Perfil />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
