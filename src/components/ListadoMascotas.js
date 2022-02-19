import React from "react";
import { Link } from "react-router-dom";

const ListadoMascotas = () => {
    const mascotas = [
        'Luna',
        'Kay',
        'Roy'
    ]
    
    return (
        <ul className="">
            {mascotas.map(mascota => (
                <li className="d-flex align-items-center justify-content-between mb-5">
                    <Link to={`/mascotas/${mascota}`} className='col-3'>{mascota}</Link>
                    <p className='col-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.</p>
                </li>
            ))}
        </ul>
    )
}


export default ListadoMascotas