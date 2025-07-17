import { Navigate } from "react-router-dom"

function Authenticate({children}){
    const isLoggedIn=localStorage.getItem("user")?true:false
    return isLoggedIn?children:<Navigate to="/login" />
}
export default Authenticate