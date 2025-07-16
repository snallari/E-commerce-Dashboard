import { useState } from "react";
import { Menu, Button, MenuItem } from "@mui/material";

function MenuDD(props) {
    const { category } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {[...category].map((c) => (
                    <MenuItem onClick={handleClose}>{c}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}
export default MenuDD