import axios from "axios";

const url = 'http://localhost:3000/'

class AuthService {
    async login(email, contrasenya){
        const res = await axios.post(url + 'usuarios/login', {
            email,
            contrasenya
        });
        if (res.data.token) {
            localStorage.setItem('usuario', JSON.stringify(res.token));
        }
        return res.data;
    }

    logOut(){
        return axios.delete(url + 'usuarios/logout')
    }

    registrar(nombre, email, contrasenya){
        return axios.post(url + 'usuarios/registrarse', {
            nombre, 
            email, 
            contrasenya
        })
        .then(() => {
            return this.login(email, contrasenya)
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('usuario'))
    }
}

export default new AuthService()