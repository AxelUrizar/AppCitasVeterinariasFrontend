import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor (props){
        super(props)
    }

    render() {
        return (
            <div className="d-flex mb-5 justify-content-center align-items-center bg-dark">
                <Link to='/' className="col-3 navBar" id='logo'><h1>Clinica Veterinaria</h1></Link>
                <div className="col-6"></div>
                <ul className="col-3 d-flex justify-content-center align-items-center">
                    <li><Link to='/signup' className="px-3 navBar fw-bold">Sign Up</Link></li>
                    <li><Link to='/login' className="px-3 navBar fw-bold">Log In</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;