import React from 'react';
import Header from '../../header/header-component';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import AbandonCat from '../../../images/nuni-story-house.jpg';
import ShyCat from '../../../images/nuni-story-shy.jpg';
import CuriousCat from '../../../images/nuni-story-curious.jpg';
import CuddleCat from '../../../images/nuni-story-cuddle.jpg';

const useStyles = makeStyles(() => ({
    background: {
        backgroundColor: "#12306b",
        overflowX: "hidden"
    },
    header: {
        minWidth: "100%"
    },
    font: {
        color: "#FFFF00",
        fontFamily: "Quicksand",
        fontSize: "5em",
        textAlign: "center",
        fontWeight: "900",
        paddingTop:"75px"
    },
    body: {
        minHeight:"100%",
        minWidth:"100%",
        backgroundSize: "cover"
    },
    ImageLeft: {
        maxHeight: "600px",
        maxWidth: "600px",
        float: "left",
        marginLeft: "75px"
    },
    ImageRight: {
        maxHeight: "600px",
        maxWidth: "600px",
        float: "right",
        marginRight: "50px"
    },
    subtitle: {
        color: "#FFFF00",
        fontFamily: "Quicksand",
        fontSize: "4em",
        float: "right",
        marginRight: "100px",
        textAlign: "center"
    },
    paragraphLeft: {
        color: "#FFFF00",
        fontFamily: "Quicksand",
        fontSize: "26px",
        float: "left",
        textAlign:"left",
        marginLeft:"75px",
        overflowWrap:"break-word"
    },
    paragraphRight: {
        color: "#FFFF00",
        fontFamily: "Quicksand",
        fontSize: "26px",
        float: "right",
        textAlign:"left",
        overflowWrap:"break-word"
    }, 
    a: {
        color: '#FFFFFF'
    }
    
}));

function BackgroundStory() { 
    
    const classes = useStyles();

    return(
        <Grid container direction="row" className={classes.background} spacing={10}>
            <Grid className={classes.header} item xs={12}>
                <Header /> 
            </Grid>
            <Grid container direction="row" spacing={4}>
                <Grid item xs={12}>
                    <h1 className={classes.font}>Nuni's Story</h1>
                </Grid>
                <Grid container direction="row" spacing={8}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                        <img src={AbandonCat} className={classes.ImageLeft} alt="Abandoned Cat"></img>
                    </Grid>
                    <Grid item xs={4}>
                        <p className={classes.paragraphRight}> Nuni's story started when her owners decided to move and rather than taking her with them or to the shelter, they just left thinking "someone will care for her." She was found confused as she waited for her owners to come home by the window that is normally opened for her.</p>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Grid item />
                
                <Grid container direction="row" spacing={8}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                        <p className={classes.paragraphLeft}> Nuni was brought to an Avanzino shelter where she was under our care until her future loving family to come and find her. </p>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={ShyCat} className={classes.ImageRight} alt="Shy Cat" ></img>  
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid item />

                <Grid container direction="row" spacing={8}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                        <img src={CuriousCat} className={classes.ImageRight} alt="Curious Cat" ></img>  
                    </Grid>
                    <Grid item xs={4}>
                        <p className={classes.paragraphRight}> One day, the Lee family came to visit and immediately fell in love with Nuni. Finding out her story, they welcomed Nuni into their home and their hearts. Although, initially Nuni was very distanced and cautious around the Lee family, that was quickly not the case, as her natural curiosity drew her closer to her new family. Here we see Nuni peeping over the kitchen counter to see what's for dinner.</p>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            
                <Grid item />
            
                <Grid container direction="row" spacing={8}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                        <p className={classes.paragraphLeft}> Today Nuni is a happy go lucky cat who loves nothing more than cuddles and attention. For more information about how you can provide love and care to a cat in need, please visit our <a href='/adopt' className={classes.a}>adopt/foster</a> info page.</p>
                    </Grid>
                    <Grid item xs={4}>
                    <img src={CuddleCat} className={classes.ImageRight} alt="Comfy Cat" ></img>  
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

            </Grid>
        </Grid>


    ) 
}

export default BackgroundStory; 
