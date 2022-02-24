import { useEffect } from "react"
import AuthService from '../../services/auth.service'

const Logout = () => {

    useEffect(() => {
        AuthService.logOut()
            .then(res => console.log('Logout completado'))
    })

    return <h2>logout</h2>
}

export default Logout