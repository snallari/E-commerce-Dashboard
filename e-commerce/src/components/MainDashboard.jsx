import Dashboard from "./Dashboard"
import HeaderDD from "./HeaderDD"
import MenuDD from "./MenuDD"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchProducts} from "../components/ProductSlicer.js"
import withLoading from "./WrappedComponent.jsx"


const WrappedDashboard=withLoading(Dashboard)
function MainDashboard() {
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.product)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);
    return <>
    <HeaderDD />
    <WrappedDashboard products={products?.products || []} isLoading={products?.loading} />
    </>
    // <ul>{products?.products?.map((p) =>
    //     <li key={p.id}>{p.title}</li>
    // )}</ul>

}
export default MainDashboard