
import { useSelector } from "react-redux"
import GridLayout from "./GridLayout"
import withLoading from "./WrappedComponent"

const Wrapper=withLoading(GridLayout)
function HeaderDD() {
    let unique=new Set()
    const products=useSelector((state)=>state.product)
    const filterValues=(products)=>{
        products.forEach(products => {
            unique.add(products.category)
        });
    }
    filterValues(products.products)

    return  <Wrapper loading={products.loading} products={products.products} unique={unique}/>
}
export default HeaderDD