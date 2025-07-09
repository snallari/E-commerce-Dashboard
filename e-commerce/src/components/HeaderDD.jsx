import { Grid, Button} from "@mui/material"
import MenuDD from "./MenuDD"
import { useSelector } from "react-redux"
function HeaderDD() {
    let unique=new Set()
    const products=useSelector((state)=>state.product)
    function sortByPrice(products,sortVal="asc"){
        console.log("products", products)
        console.log("uniq", unique, Array.isArray(products))
        let finalPP=[]
        if(sortVal=="asc"){
             finalPP= [...products, products.sort((a,b)=>a.price-b.price)]
        }else{
            finalPP=  [...products,products.sort((a,b)=>b.price-a.price)]
        }
         return finalPP
    }

    const filterValues=(products)=>{
        products.forEach(products => {
            unique.add(products.category)
        });
    }
    filterValues(products.products)

    return (products?.products?.length>0?<Grid container spacing={2} >
        <Grid size={3}>
            <MenuDD category={unique}/>
        </Grid>
        <Grid size={3}>
            <Button variant="text" onClick={()=>sortByPrice(products.products,"asc")}>Text</Button>
        </Grid>
        <Grid size={3}>
            <Button variant="text" onClick={()=>sortByPrice(products.products,"desc")}>Text</Button>
        </Grid>
         <Grid size={3}>
            Add To Cart
        </Grid>
    </Grid>:<div>Loading</div>)
}
export default HeaderDD