import React from "react"
import { Navigate } from "react-router-dom"

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {user: '', password:'', submitDone:false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if (!this.state.user || !this.state.password) {
            console.log('Fields required!')
        } else {
            console.log('Submitted!')
            console.log(this.state.user, this.state.password)
            this.setState({submitDone:true})
        }
    }

    render(){
        return (
            <div className="container h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
                <div>
                    <h2 className="mb-5">Log In</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="d-flex flex-column justify-content-around">
                            <label className="row m-3">
                                <p className="col-6">User:</p>
                                <input className="col-6" name="user" type='text' value={this.state.user} onChange={this.handleChange} />
                            </label>
                            <label className="row m-3">
                                <p className="col-6">Password:</p>
                                <input className="col-6" name="password" type='text' value={this.state.password} onChange={this.handleChange} />
                            </label>
                        </div>
                        <button className="mt-4" type="submit">Acceder</button>
                    </form>
                    {this.state.submitDone && <Navigate to='/perfil'/>}
                </div>
            </div>
        )
    }

}

export default Login;