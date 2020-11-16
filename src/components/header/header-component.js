import React from 'react'; 
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'; 
import PetsIcon from '@material-ui/icons/Pets';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    buttonStyles: {
        flex: 1,
        fontSize: "20px", 
        fontFamily: "Quicksand",
        color: "#12306b",
        fontWeight: "bolder"
    },
    iconSpacing: {
        paddingRight: "5px",
        fontSize: "2em",
        color: "yellow"
    },
    title: {
        margin: "auto",
        fontSize: "2em",
        fontFamily: "Quicksand"
    },
    background: {
        background: '#41b4e5'
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
                        Avanzino
                    </Typography>
                </IconButton>
                </Toolbar>
                <Toolbar>
                <Button className={classes.buttonStyles} href="about">
                    Adopt
                </Button>
                <Button className={classes.buttonStyles} href="donate">
                    Volunteer
                </Button>
                <Button className={classes.buttonStyles} href="login">
                    Donate
                </Button>
                </Toolbar>
 
            
        </AppBar>
    )
}

export default Header;