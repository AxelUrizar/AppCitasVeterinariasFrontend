import React from "react"
import { Link, Navigate } from "react-router-dom"
import AuthService from "../../services/auth.service"

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: '', contrasenya:'', submitDone:false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(e){
        e.preventDefault();
        if (!this.state.email || !this.state.contrasenya) {
            console.log('Fields required!')
        } else {
            console.log('Submitted!')
            console.log(this.state.email, this.state.contrasenya)
            try {
                await AuthService.login(
                    this.state.email,
                    this.state.contrasenya
                )    
            } catch (error) {
                return console.log(error)
            }
            this.setState({submitDone:true})
        }
    }

    render(){
        return (
            <div className="container h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
                <div>
                    <h2 className="mb-5">Log In</h2>
                    <form className="mb-3" onSubmit={this.handleSubmit}>
                        <div className="d-flex flex-column justify-content-around">
                            <label className="row m-3">
                                <p className="col-6">E-mail:</p>
                                <input className="col-6" name="email" type='text' value={this.state.email} onChange={this.handleChange} />
                            </label>
                            <label className="row m-3">
                                <p className="col-6">Contraseña:</p>
                                <input className="col-6" name="contrasenya" type='password' value={this.state.contrasenya} onChange={this.handleChange} />
                            </label>
                        </div>
                        <button className="mt-4" type="submit">Acceder</button>
                    </form>
                    <Link to='/signup'>¿No tienes una cuenta?</Link>
                    {this.state.submitDone && <Navigate to='/perfil'/>}
                </div>
            </div>
        )
    }

}

export default Login;