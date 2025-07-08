import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function Dashboard() {
    const products=useSelector((state)=>state.product)
    return (products.products.map((p) =>
        <Grid container spacing={2} key={p.id}>
            <Grid size={4}>
                {p.category}
            </Grid>
            <Grid size={4}>
                {p.price}
            </Grid>
            <Grid size={4}>
                {p.title}
            </Grid>
        </Grid>))

}

export default Dashboard;