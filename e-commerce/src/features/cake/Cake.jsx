import { useSelector, useDispatch} from "react-redux"
import {actions} from "./cakeSlice.js"
export default function Cake(){
    const numofCakes=useSelector((state)=>state.cake.numOfCakes)
    const dispatch=useDispatch()
    return(
        <div>
            <h1>Cake {numofCakes}</h1>
            <button onClick={() => dispatch(actions.ordered())}>Order Cake</button>
            <button onClick={() => dispatch(actions.restocked(10))}>Restock Cake</button>
        </div>
    )
}
