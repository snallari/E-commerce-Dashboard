import { Button, Grid, IconButton} from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import {actions} from "./cartSlicer.js"

function Dashboard() {
    const products = useSelector((state) => state.product)
    const dispatch = useDispatch();

    return (products.products.map((p) =>
        <Grid container spacing={2} key={p.id}>
            <Grid size={3}>
                {p.category}
            </Grid>
            <Grid size={3}>
                {p.price}
            </Grid>
            <Grid size={3}>
                {p.title}
            </Grid>
            <Grid size={3}>
                <Button color="primary" aria-label="add to shopping cart" onClick={() => dispatch(actions.addToCart({id:p.id, quantity:1}))}>
                    ADD
                </Button>
                <Button color="primary" aria-label="add to shopping cart" onClick={() => dispatch(actions.removeFromCart({id:p.id}))}>
                    REMOVE
                </Button>
            </Grid>
        </Grid>))

}

export default Dashboard;