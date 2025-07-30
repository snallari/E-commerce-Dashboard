import { Button, Card, CardContent, CardHeader, Grid, IconButton} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

function Dashboard() {
    const navigate = useNavigate()
    const products = useSelector((state) => state.product)

    return (<Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.products.map((p) =>
            <Grid item xs={4}>
                {/* <Item> */}
                    <Card >
                        <CardHeader>{p.title}</CardHeader>
                        <CardContent>{p.category}</CardContent>
                        <CardContent>{p.price}</CardContent>
                        <IconButton  color="primary" aria-label="add to shopping cart">
                           <AddShoppingCartIcon />
                        </IconButton>
                        <Button variant="primary" onClick={() => navigate(`/details`)}>
                            View Details
                        </Button>
                    </Card>
                {/* </Item> */}
            </Grid>
    )}
        </Grid>)

}

export default Dashboard;