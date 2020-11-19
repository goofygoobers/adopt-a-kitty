import React from 'react';
import Header from '../../header/header-component';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    background: {
        backgroundColor: "#12306b"
    },
    font: {
        color: "#f9d400",
        fontFamily: "Quicksand",
        fontSize: "4em",
        textAlign: "center",
        fontWeight: "900",
        paddingTop:"75px"
    },
    body: {
        minHeight:"100%",
        minWidth:"100%",
        backgroundSize: "cover"
    }
    
}));

function BackgroundStory() { 
    
    const classes = useStyles();

    return(
        <Grid container direction="column" className={classes.background} spacing={10}>
            <Grid item>
                <Header /> 
            </Grid>
            <Grid container direction="column">
                <Grid item>
                    <h1 className={classes.font}>Nuni's Story</h1>
                    <h2 className={classes.font}> 2020</h2>
                </Grid>
            </Grid>

        </Grid>


    ) 
}

export default BackgroundStory; 
