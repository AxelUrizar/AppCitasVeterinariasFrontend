import axios from "axios";
import authHeader from "./auth-header";

const url = 'http://localhost:3000/'

class UserService {
    getAll() {
        return axios.get(url + 'usuarios')
    }

    getPerfil(){
        return axios.get(url + 'usuarios/perfil', {
            headers: authHeader()
        })
    }
}

export default new UserService()