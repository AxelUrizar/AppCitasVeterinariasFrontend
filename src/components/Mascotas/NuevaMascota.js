import React from "react";
import { Navigate } from "react-router-dom";
import servicios from "../../services/servicios";

class NuevaMascota extends React.Component{
    constructor(props){
        super(props)
        this.state = {nombre: '', especie: 'Pajaro', sexo: '', idMascota: '', submitDone: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        console.log('Submitted!')
        console.log(this.state.nombre, this.state.especie, this.state.sexo)
        try {
            servicios.nuevaMascota(
                this.state.nombre,
                this.state.especie,
                this.state.sexo
            ).then(res => {
                this.setState({idMascota: res.data.id})
                this.setState({submitDone: true}) 
            })
            .catch(error => console.log(error))
            
            
        } catch (error) {
            console.log(error)
        }
            
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-5">Registra tu mascota</h2>
                <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                    <div className="container mb-5">
                        <label className="row m-2 mb-3">
                            <p className="col-6">Nombre:</p>
                            <input className="col-6" name="nombre" type='text' required onChange={this.handleChange}/>
                        </label>
                        <label className="row m-2 d-flex">
                            <p className="col-6">Especie:</p>
                            <select className="col-6" name="especie" onChange={this.handleChange} required>
                                <option value='Pajaro'>Pajaro</option>
                                <option value='Gato' >Gato</option>
                                <option value='Perro'>Perro</option>
                            </select>
                        </label>
                        <label className="row m-2">
                            <p className="col-6 align-self-center">Sexo:</p>
                            <div className="col-6 p-0 d-flex flex-column align-items-center">
                                <div className="w-100 d-flex align-items-center justify-content-start">
                                    <label className="d-flex align-items-center">
                                        <p className="me-3">Macho</p>
                                        <input name="sexo" value='Macho' required type='radio' onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div className="w-100 d-flex align-items-center justify-content-start">
                                    <label className="d-flex align-items-center">
                                        <p className="me-2">Hembra</p>
                                        <input name="sexo" value='Hembra' required type='radio' onChange={this.handleChange}/>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <button type="submit">Registrar</button>
                </form>         
                {this.state.submitDone === true && <Navigate to='/perfil'/>}       
            </div>
        )
    }
}

export default NuevaMascota