import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor (props){
        super(props)
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <h1 className="col-3">Clinica Veterinaria</h1>
                <div className="col-6"></div>
                <ul className="col-3 d-flex justify-content-center align-items-center">
                    <li><Link to='/signup' className="px-3">Sign Up</Link></li>
                    <li><Link to='/login' className="px-3">Log In</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;