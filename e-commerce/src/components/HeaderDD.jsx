import { Grid, Button} from "@mui/material"
import MenuDD from "./MenuDD"
function HeaderDD(props) {
    let unique=new Set()
    const {products}=props
    const sortByPrice=(products,sortVal="asc")=>{
        filterValues(products)
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

    return (<Grid container spacing={2}>
        <Grid size={4}>
            <MenuDD category={unique}/>
        </Grid>
        <Grid size={4}>
            <Button variant="text" onClick={sortByPrice(products, "asc")}>Text</Button>
        </Grid>
        <Grid size={4}>
            <Button variant="text">Text</Button>
        </Grid>
    </Grid>)
}
export default HeaderDD