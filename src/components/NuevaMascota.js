import React from "react";

class NuevaMascota extends React.Component{
    constructor(props){
        super(props)
        this.state = {nombre: '', tipo: '', sexo: '', submitDone: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        if (event.target.type == 'radio') {
            console.log(event.target.data)
        }
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(e){
        e.preventDefalut();

        console.log('Submitted!')
        console.log(this.state.nombre, this.state.tipo)
        this.setState({submitDone: true})   
    }

    render() {
        return (
            <div className="container">
                <h2>Registra tu mascota</h2>
                <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                    <div className="container">
                        <label className="row m-2 mb-3">
                            <p className="col-6">Nombre:</p>
                            <input className="col-6" name="nombre" type='text' required onChange={this.handleChange}/>
                        </label>
                        <label className="row m-2">
                            <p className="col-6">Tipo:</p>
                            <input className="col-6" name="tipo" type='text' required onChange={this.handleChange}/>
                        </label>
                        <label className="row m-2">
                            <p className="col-6 align-self-center">Sexo:</p>
                            <div className="col-6 p-0 d-flex flex-column align-items-center">
                                <div className="w-100 d-flex align-items-center justify-content-start">
                                    <label className="col-3 justify-content-start d-flex"qwer>Macho</label>
                                    <input name="sexo" required type='radio' />
                                </div>
                                <div className="w-100 d-flex align-items-center justify-content-start">
                                    <label className="col-3 justify-content-start d-flex">Hembra</label>
                                    <input name="sexo" required type='radio' />
                                </div>
                            </div>
                        </label>
                    </div>
                </form>
                
                <button type="submit">Registrar</button>
                
            </div>
        )
    }
}

export default NuevaMascota