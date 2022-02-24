import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import servicios from "../../services/servicios"

const EditarCita = () => {
    const [cita, setCita] = useState(undefined)
    const [descripcion, setDescripcion] = useState('')
    const [veterinarios, setVeterinarios] = useState([])
    const [veterinarioId, setVeterinarioId] = useState(1)
    const [submitDone, setSubmitDone] = useState(false)
    
    const {idCita, id} = useParams()

    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value)
    }

    const handleChangeVeterinario = (e) => {
        setVeterinarioId(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(descripcion, id, veterinarioId)
        servicios.modificarCita(idCita, descripcion, veterinarioId)
            .then(res => setSubmitDone(true))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        // servicios.getMascotaId(id)
        //     .then(res => setNombre(res.data.nombre))
        //     .catch(err => console.log(err))

        servicios.getCitaById(idCita)
            .then(res => setCita(res.data))
            .catch(err => console.log(err))

        servicios.getVeterinarios()
            .then(res => setVeterinarios(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Editar Cita {idCita}</h2>
            <form className="w-50 mt-5 m-auto" onSubmit={handleSubmit}>
                <div className="container mb-5">
                    <label className="row m-2 mb-3">
                        <p className="col-6">Motivo de la visita:</p>
                        <input className="col-6" name="nombre" type='text' required onChange={handleChangeDescripcion}/>
                    </label>
                    <label className="row m-2 d-flex">
                            <p className="col-6">Veterinario:</p>
                            <select className="col-6" name="especie" onChange={handleChangeVeterinario} required>
                                {veterinarios.map(veterinario => (
                                    <option key={veterinario.id} value={veterinario.id}>{veterinario.nombre}</option>
                                ))}
                            </select>
                        </label>
                </div>
                <button type="submit">Registrar</button>
            </form>    
            {submitDone === true && <Navigate to={`/mascotas/${id}`} />}
        </div>
    )
}

export default EditarCita