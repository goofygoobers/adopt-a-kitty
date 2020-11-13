import React from 'react'; 
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'; 
import PetsIcon from '@material-ui/icons/Pets';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    buttonStyles: {
        flex: 1
    },
    iconSpacing: {
        paddingRight: "25px",
        fontSize: "2em"
    },
    title: {
        margin: "auto",
        fontSize: "2em"
    },
    background: {
        background: '#9CC0E7'
    }

}));

function Header() {

    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.background}>
            <Toolbar>
                <IconButton className={classes.title} href='home' size="medium" edge="start" color="inherit" aria-label="menu">
                    <PetsIcon className={classes.iconSpacing}/>
                    <Typography variant="h5" className={classes.title}>
                        Adopt a Kitty
                    </Typography>
                </IconButton>
                </Toolbar>
                <Toolbar>
                <Button className={classes.buttonStyles} href="about" color="inherit">
                    About Us
                </Button>
                <Button className={classes.buttonStyles} href="donate" color="inherit">
                    Donate
                </Button>
                <Button className={classes.buttonStyles} href="login" color="inherit">
                    Login
                </Button>
                </Toolbar>
 
            
        </AppBar>
    )
}

export default Header;