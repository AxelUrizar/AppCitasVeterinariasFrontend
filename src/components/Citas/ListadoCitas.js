import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Servicios from '../../services/servicios'

const ListadoCitas = () => {
    const [nombre, setNombre] = useState('')
    const [citas, setCitas] = useState(undefined)
    const [citaEliminada, setCitaEliminada] = useState(false)
    const [veterinarios, setVeterinarios] = useState([])
    const {id} = useParams()

    const eliminarCita = (event, idCita) => {
        Servicios.eliminarCita(idCita)
            .then(res => 
                Servicios.getCitaId(id)
                    .then(res => setCitas(res.data))
            )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        Servicios.getMascotaId(id)
            .then(res => setNombre(res.data.nombre))
            .catch(err => console.log(err))

        Servicios.getCitaId(id)
            .then(res => setCitas(res.data))
            .catch(err => console.log(err))

        Servicios.getVeterinarios()
            .then(res => setVeterinarios(res.data))
            .catch(err => console.log(err))
    }, [])

    // console.log(citas)
    // console.log(nombre)
    // console.log(veterinarios)

    return (
        <div className="mt-5 vw-100">
            {citas === false && <h4 className="my-5">Esta mascota no tiene citas.</h4>}
            {citas && 
                <div className="mt-5 container">
                    <div className="row">
                        <h3 className="col-2">Citas</h3>
                        <h5 className="col-3">Fecha</h5>
                        <h5 className="col-3">Descripción</h5>
                        <h5 className="col-3">Veterinario</h5>
                    </div>
                    <hr/>
                    <ul className="my-3 p-0">
                        {citas.map(cita => (
                            <li className="row mb-3" key={cita.id}>
                                <div className="col-2">
                                    <Link to={`editarCita/${cita.id}`}><button>Editar</button></Link>
                                    <button className="ms-1" onClick={(event, id) => {
                                        eliminarCita(event, cita.id)
                                    }}>Eliminar</button>
                                </div>
                                <div className="col-3">                                    
                                    <p>{cita.fechaCita}</p>
                                </div>
                                <div className="col-3">                                    
                                    <p>{cita.descripcion}</p>
                                </div>
                                <div className="col-3">
                                    <p>{veterinarios.map(
                                            veterinario => {
                                                if (veterinario.id === cita.veterinarioId) {
                                                    return veterinario.nombre
                                                } else {
                                                    return
                                                }
                                            }
                                    )}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            }
            <Link to='nuevaCita'><button className="my-5">Pedir cita para {nombre}</button></Link>
            {citaEliminada === true && <Navigate to={`/mascotas/${id}`} />}
        </div>
    )
}

export default ListadoCitas;