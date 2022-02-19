import React from "react"
import { Link, Navigate } from "react-router-dom"

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {nombre: '', contrasenya:'', confContrasenya:'', email:'', submitDone:false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        if(this.state.confContrasenya != this.state.contrasenya) return console.log('Las contraseñas no coinciden');

        if (!this.state.nombre || !this.state.email || !this.state.contrasenya || !this.state.confContrasenya) {
            console.log('Fields required!')
        } else {
            console.log('Submitted!')
            console.log(this.state.nombre, this.state.email, this.state.contrasenya)
            this.setState({submitDone:true})
        }
    }

    render(){
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6">Nombre Completo:</p>
                            <input className="col-6" name="nombre" type='text' value={this.state.nombre} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">E-mail:</p>
                            <input className="col-6" name="email" type='text' value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">Contraseña:</p>
                            <input className="col-6" name="contrasenya" type='text' value={this.state.contrasenya} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">Confirmar Contraseña:</p>
                            <input className="col-6" name="confContrasenya" type='text' value={this.state.confContrasenya} onChange={this.handleChange} />
                        </label>
                    </div>
                    <button className="mt-4" type="submit">Acceder</button>
                </form>
                {this.state.submitDone && <Navigate to='/perfil'/>}
            </div>
        )
    }

}

export default SignUp