import { Link, useParams } from "react-router-dom";

const CitasPendientes = () => {
    const {nombre} = useParams() 

    return (
        <div>
            <Link to={`/citas/${nombre}`}>Cita {nombre}</Link>
        </div>
    )
}

export default CitasPendientes;