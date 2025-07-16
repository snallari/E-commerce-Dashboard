import { Navigate } from "react-router-dom"

function Authenticate({children}){
    const isLoggedIn=false
    return isLoggedIn?children:<Navigate to="/login" />
}
export default Authenticate