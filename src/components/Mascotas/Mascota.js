import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ListadoCitas from "../Citas/ListadoCitas";
import servicios from "../../services/servicios";

const Mascota = () => {
    const [nombre, setNombre] = useState('')
    const {id} = useParams()

    servicios.getMascotaId(id)
        .then(res => setNombre(res.data.nombre))
        .catch(err => console.log(err))
    
    return (
        <div className="container-fluid d-flex flex-column justify-content-around align-items-center">
            <div className="d-flex align-items-center justify-content-around row">
                <h2 className="col-3">Detalles {nombre}</h2>
                <p className="col-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor ut tortor vehicula, eget lacinia metus mattis. Nam lacinia nisi eu ante maximus viverra. Nam cursus libero in quam faucibus, in lobortis tortor imperdiet. Cras id dui sit amet mauris lacinia blandit. Integer tempus ornare diam sed bibendum. Sed dolor elit, rhoncus porta justo at, varius euismod nisi. Pellentesque consectetur maximus leo nec aliquam. Proin scelerisque egestas velit non vehicula. Nam eget risus lorem. Donec tempus orci eget est dignissim, non lacinia felis egestas. Cras rhoncus justo et ex venenatis egestas. Curabitur nibh justo, sodales quis lacinia eget, dapibus vel ante. Nunc nec arcu a elit pharetra sagittis vitae at orci.</p>
            </div>
            <ListadoCitas />
        </div>
    )
}

export default Mascota