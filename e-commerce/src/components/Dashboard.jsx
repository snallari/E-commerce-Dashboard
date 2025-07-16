import { Button, Grid, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom"
import { useSelector} from "react-redux";

function Dashboard() {
    const navigate = useNavigate()
    const products = useSelector((state) => state.product)

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
                <IconButton onClick={() => navigate(`/cake`)}>
                    View Details
                </IconButton>
            </Grid>
        </Grid>))

}

export default Dashboard;