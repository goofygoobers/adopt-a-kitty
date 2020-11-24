import React from 'react'; 
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core'; 
import PetsIcon from '@material-ui/icons/Pets';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import DropDownMenu from '../dropdown/dropdown-component';

const useStyles = makeStyles(() => ({
    buttonStyles: {
        flex: 1,
        fontSize: "22px", 
        fontFamily: "Quicksand",
        color: "#12306b",
        fontWeight: "bolder"
    },
    iconSpacing: {
        paddingRight: "5px",
        fontSize: "2em",
        color: "#FFFF00"
    },
    title: {
        fontSize: "2em",
        fontFamily: "Quicksand",
        color: "#fcfbfa",
    },
    titlePosition: {
        paddingLeft: "75px"
    },
    background: {
        background: '#90CCF4',
        overflowX: "hidden"
    },
    buttonToolBar: {
        paddingTop: "25px",
        paddingRight: "50px"

    }

}));

function Header() {

    const classes = useStyles();

    return(
        <Grid container className={classes.background}>
            <Grid item xs={8}>
                <Toolbar className={classes.titlePosition}>
                    <IconButton className={classes.title} href='/' size="medium" edge="start" color="inherit" aria-label="menu">
                        <PetsIcon className={classes.iconSpacing}/>
                        <Typography variant="h5" className={classes.title}>
                            Avanzino
                        </Typography>
                    </IconButton>
                </Toolbar>
            </Grid>
            <Grid item xs={4}>
                <Toolbar className={classes.buttonToolBar}>
                    {/* find a way to avoid code replication "classes.buttonStyles" */}
                    <Button className={classes.buttonStyles} href="adopt">
                        Adopt
                    </Button>
                    <Button className={classes.buttonStyles} href="volunteer">
                        Volunteer
                    </Button>
                    <Button className={classes.buttonStyles} href="donate">
                        Donate
                    </Button>
                    <DropDownMenu />
                </Toolbar>
            </Grid>
        </Grid>
    )
}

export default Header;