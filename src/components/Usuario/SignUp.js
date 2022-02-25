import React from "react"
import { Navigate } from "react-router-dom"
import AuthService from "../../services/auth.service"

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {nombre: '', contrasenya:'', confContrasenya:'', email:'', submitDone:false, contrasenyaCoincide: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(e){
        e.preventDefault();

        if(this.state.confContrasenya !== this.state.contrasenya) return (
            this.setState({contrasenyaCoincide: true})
        )

        console.log('Submitted!')
        console.log(this.state.nombre, this.state.email, this.state.contrasenya)

        try {
            AuthService.registrar(
                this.state.nombre,
                this.state.email,
                this.state.contrasenya
            )
                .then(this.setState({ submitDone:true }))
                .catch(err => console.log(err))
        } catch (error) {
            return console.log(error)
        }

        // axios.post('http://localhost:3000/usuarios/registrarse', {
        //     nombre: this.state.nombre,
        //     email: this.state.email,
        //     contrasenya: this.state.contrasenya
        // }).then((res) => console.log(res.data))

                
    }

    render(){
        return (
            <div className="h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
                <div>
                    <h2 className="mb-5">Sign Up</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="container d-flex flex-column align-items-between justify-content-center" >
                            <label className="row m-2">
                                <p className="col-6">Nombre Completo:</p>
                                <input className="col-6" name="nombre" type='text' required value={this.state.nombre} onChange={this.handleChange} />
                            </label>
                            <label className="row m-2">
                                <p className="col-6">E-mail:</p>
                                <input className="col-6" name="email" type='email' required value={this.state.email} onChange={this.handleChange} />
                            </label>
                            <label className="row m-2">
                                <p className="col-6">Contraseña:</p>
                                <input className="col-6" name="contrasenya" type='password' required value={this.state.contrasenya} onChange={this.handleChange} />
                            </label>
                            <label className="row m-2">
                                <p className="col-6">Confirmar Contraseña:</p>
                                <input className="col-6" name="confContrasenya" type='password' required value={this.state.confContrasenya} onChange={this.handleChange} />
                            </label>
                        </div>
                        <button className="mt-5" type="submit">Acceder</button>
                    </form>
                    {this.state.contrasenyaCoincide && <p className="contrasenyaCoincide">Las contraseñas no coinciden.</p>}
                    {this.state.submitDone && <Navigate to='/perfil'/>}

                </div>
            </div>
        )
    }

}

export default SignUp