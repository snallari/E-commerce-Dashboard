import { Grid, Button} from "@mui/material"
import MenuDD from "./MenuDD"
import { useReducer } from "react"
function GridLayout(props){
    const {products, unique}=props
    const [sortVal, setSortVal] = useReducer((sortVal)=>{
        switch(sortVal){
            case "asc":
                console.log("products",products)
                return [...products.sort((a,b)=>a.price-b.price)]
            case "desc":
                console.log("products",products)
                return [...products.sort((a,b)=>b.price-a.price)]
            case "reset":
                return[...products]
        }
    })
    const sortByPrice=(order)=>{
        let arr=[]
        console.log("sort order",order)
        arr=setSortVal(order)
        console.log("sort products",arr)
        return arr
    }
    return(
        <Grid container spacing={2} >
        <Grid size={3}>
            <MenuDD category={unique}/>
        </Grid>
        <Grid size={3}>
            <Button variant="text" onClick={()=>sortByPrice("asc")}>Text</Button>
        </Grid>
        <Grid size={3}>
            <Button variant="text" onClick={()=>sortByPrice("desc")}>Text</Button>
        </Grid>
         <Grid size={3}>
            Add To Cart
        </Grid>
        </Grid>
    )
}
export default GridLayout