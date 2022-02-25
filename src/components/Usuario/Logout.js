import { useEffect } from "react"
import AuthService from '../../services/auth.service'

const Logout = () => {

    useEffect(() => {
        AuthService.logOut()
        
    })

    return <h2>logout</h2>
}

export default Logout