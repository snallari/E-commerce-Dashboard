import Dashboard from "./Dashboard"
import HeaderDD from "./HeaderDD"
import MenuDD from "./MenuDD"
import { useState, useEffect } from "react"

function MainDashboard() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products || []);
                setLoading(false);
            });
    }, []);
    return (loading ? <div>Loading</div> :
        <>
        <HeaderDD products={products} />
        <Dashboard products={products}/>
        </>
    )

}
export default MainDashboard