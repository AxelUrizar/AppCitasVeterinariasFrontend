import axios from "axios";
import authHeader from "./auth-header";

const url = 'http://localhost:3000/'

class Servicios {
    getAll() {
        return axios.get(url + 'usuarios')
    }

    getPerfil(){
        return axios.get(url + 'usuarios/perfil', {
            headers: authHeader()
        })
    }

    getMascotas(){
        return axios.get(url + 'mascotas/usuario', {
            headers: authHeader()
        })
    }

    getMascotaId(id){
        return axios.get(`http://localhost:3000/mascotas/${id}`, {
            headers: authHeader()
        })
    }
    
    nuevaMascota(nombre, especie, sexo){
        try {
            return axios.post(url + 'mascotas/nuevaMascota', {
                nombre,
                especie,
                sexo
            }, {
                headers: authHeader()
            })
        } catch(error) {
            console.log(error)
        }
    }

    getCitas(){
        return axios.get(url + 'citas/mascota', {
            headers: authHeader()
        })
    }

    getCitaId(id){
        return axios.get(`http://localhost:3000/citas/mascota/${id}`, {
            headers: authHeader()
        })
    }

    getCitaById(idCita){
        return axios.get(`http://localhost:3000/citas/${idCita}`, {
            headers: authHeader()
        })
    }

    nuevaCita(id, descripcion, veterinarioId){
        return axios.post(url + `citas/nuevaCita/${id}`, {
            descripcion,
            veterinarioId
        }, {
            headers: authHeader()
        })
    }

    modificarCita(idCita, descripcion, veterinarioId){
        return axios.put(url + `citas/modificar/${idCita}`, {
            descripcion,
            veterinarioId
        }, {
            headers: authHeader()
        })
    }

    eliminarCita(idCita){
        return axios.delete(url + `citas/eliminar/${idCita}`, {
            headers: authHeader()
        })
    }

    getVeterinarios(){
        return axios.get(url + 'veterinarios')
    }

}

export default new Servicios()