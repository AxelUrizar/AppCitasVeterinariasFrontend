import { useEffect } from "react"
import { Navigate } from "react-router"
import AuthService from '../../services/auth.service'

const Logout = () => {

    useEffect(() => {
        AuthService.logOut()
        
    })

    return <Navigate to='/'>logout</Navigate>
}

export default Logout