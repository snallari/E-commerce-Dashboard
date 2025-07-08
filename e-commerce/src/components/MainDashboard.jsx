import Dashboard from "./Dashboard"
import HeaderDD from "./HeaderDD"
import MenuDD from "./MenuDD"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchProducts} from "../components/ProductSlicer.js"

function MainDashboard() {
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.product)
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    return (products?.loading ? <div>Loading</div> :
    <div>{products?.products?.length>0} <Dashboard/></div>
    //<ul >{products.products.map((p)=>
    //     <li>{p.title}</li>
    // )}</ul>
   
    )

}
export default MainDashboard