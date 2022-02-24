import axios from "axios";

const url = 'http://localhost:3000/'

class AuthService {
    login(email, contrasenya) {
        try {
            return axios.post(url + 'usuarios/login', {
                email,
                contrasenya
            }).then(response=>{
                if (response.data) {
                    localStorage.setItem("token", JSON.stringify(response.data.token));
                }
                return true;

            }
            )
        } catch (error) {
            return false;
        }
    }      

    logOut(){
        axios.delete(url + 'usuarios/logout')
        localStorage.removeItem('token')
    }

    async registrar(nombre, email, contrasenya){
        try {
            await axios.post(url + 'usuarios/registrarse', {
                nombre, 
                email, 
                contrasenya
            })
            
            return this.login(email, contrasenya)
            
        } catch (error) {
            return console.log(error)
        }
    }

    getCurrentUser() {
        try {
            return JSON.parse(localStorage.getItem('token'))
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default new AuthService()