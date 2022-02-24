import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Servicios from "../../services/servicios";

class ListadoMascotas extends React.Component{
    constructor(props){
        super(props)
        this.state = {mascotas: []}
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        Servicios.getMascotas()
            .then(res=> {
                this.setState({mascotas: res.data})
            })
            .catch(error => console.log(error))
    }
        
        
    render(){
        // const mascotas = [
        //     'Luna',
        //     'Kay',
        //     'Roy'
        // ]
        return (
            <div>
                {!this.state.mascotas && <h2>Cargando...</h2>}
                {this.state.mascotas.length === 0 && <h1>No tienes mascotas registradas!</h1>}
                {this.state.mascotas && 
                    <ul>
                        {this.state.mascotas.map(mascota => (
                            <div>
                                <hr/>
                                <li className="d-flex align-items-center justify-content-between" key={mascota.id}>
                                    <h4 className="col-2">{mascota.nombre}</h4>
                                    <p className='col-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis purus. Nullam lorem justo, finibus et mi eu, sollicitudin tincidunt elit. Nam consequat, libero eu dictum faucibus, nisi libero pulvinar quam, non faucibus elit orci nec purus. Vestibulum nec suscipit sem. Morbi eu eleifend urna. Praesent a est et velit faucibus varius.</p>
                                    <Link to={`/mascotas/${mascota.id}`} className='col-2'>Ver mascota</Link>
                                </li>
                            </div>
                        ))}
                    </ul>
                }                
            </div>
        )
    }
}


export default ListadoMascotas