import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authService from "../services/auth.service";

const NavBar = () => {
    // const [logged, setLogged] = useState(false)

    // const logComprobation = () => {
    //     console.log(localStorage.getItem('token'))
    //     if(localStorage.getItem('token')){
    //         setLogged(true)
    //     } else {
    //         setLogged(false)
    //     }
    // }

    // useEffect(() => {
    //     logComprobation()
    // })

    return (
        <div>
            {/* {logged === false &&  */}
                <div className="d-flex mb-5 justify-content-center align-items-center bg-dark">
                    <Link to='/' className="col-3 navBar" id='logo'><h1>Clinica Veterinaria</h1></Link>
                    <div className="col-6"></div>
                    <ul className="col-3 d-flex justify-content-center align-items-center">
                        <li><Link to='/signup' className="px-3 navBar fw-bold">Sign Up</Link></li>
                        <li><Link to='/login' className="px-3 navBar fw-bold">Log In</Link></li>
                        <li><Link to='/logout' className="px-3 navBar fw-bold">LogOut</Link></li>
                    </ul>
                </div>
            {/* }*/}

            {/* {logged === true && 
                <div className="d-flex mb-5 justify-content-center align-items-center bg-dark">
                    <Link to='/' className="col-3 navBar" id='logo'><h1>Clinica Veterinaria</h1></Link>
                    <div className="col-6"></div>
                    <ul className="col-3 d-flex justify-content-center align-items-center">
                        <li><Link to='/perfil' className="px-3 navBar fw-bold">Perfil</Link></li>
                        <li><Link to='/logout' className="px-3 navBar fw-bold">LogOut</Link></li>
                    </ul>
                </div>
            } */}
            
        </div>
    )
}


export default NavBar;