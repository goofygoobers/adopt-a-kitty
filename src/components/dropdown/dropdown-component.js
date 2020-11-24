import React, { useState } from 'react'; 
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'; 
import Menu from '@material-ui/core/Menu';


function DropdownMenu() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl); 

    const handleClick = (event)  => { 
        setAnchorEl(event.currentTarget); 
    }

    const handleClose = () => {
        setAnchorEl(null); 
    }

    return(
        <div>
            <IconButton 
                aria-label="more"
                aria-controls="long-menu"
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style:{
                        height: "100%",
                        width: '75%',
                        background: '#90CCF4',
                        backgroundSize: 'cover'
                    },
                }}
            >
            </Menu>
        </div>
    )
}

export default DropdownMenu;