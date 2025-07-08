import { useSelector, useDispatch} from "react-redux"
import {useEffect} from "react"
import { fetchUsers}  from "./userSlice"
function Users(){
    const users=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return(
        <div>
           <h1>Users</h1>
           <div>{users.loading?<p>Loading</p>:null}</div>
            <div>{users.error?<p>Error: {users.error}</p>:null}</div>
            {/* <div>{users.users.title}</div>
            <div>{users.users.body}</div> */}
           <ul>{users.users.length>0?
               users.users.map((user)=>(<li key={user.id}>{user.title}</li>))
           : <li>No users found</li>}
           </ul>
        </div>
    )
}
export default Users