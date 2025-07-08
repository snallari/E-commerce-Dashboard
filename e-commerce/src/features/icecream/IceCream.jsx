import { useSelector,useDispatch }  from "react-redux"
import {actions} from "./icecreamSlice.js"
//install react-redux
//react-redux provides provider with reactredux
//add store to provider
export default function IceCream(){
    const numOfIceCreams=useSelector((state)=>state.iceCream.noOfIcecreams)
    const dispatch=useDispatch()
    const order=()=>{
        dispatch(actions.ordered())
    }
    return(
        <div>
            <h1>Icecream{numOfIceCreams}</h1>
            <button onClick={order}>Order Icecream</button>
            <button onClick={()=>dispatch(actions.restocked(10))}>Restock Icecream</button>
        </div>
    )
}