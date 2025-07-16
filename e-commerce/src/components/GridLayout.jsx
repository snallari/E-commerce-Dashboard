import { Grid, Button} from "@mui/material"
import MenuDD from "./MenuDD"
function GridLayout(props){
    const {products, unique}=props
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
    return(
        <Grid container spacing={2} >
        <Grid size={3}>
            <MenuDD category={unique}/>
        </Grid>
        <Grid size={3}>
            <Button variant="text" onClick={()=>sortByPrice(products,"asc")}>Text</Button>
        </Grid>
        <Grid size={3}>
            <Button variant="text" onClick={()=>sortByPrice(products,"desc")}>Text</Button>
        </Grid>
         <Grid size={3}>
            Add To Cart
        </Grid>
        </Grid>
    )
}
export default GridLayout