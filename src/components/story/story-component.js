import React from 'react'; 
import HomeCat from '../../images/calm-cat.jpg';
// Why can't be export my custom button component and add material ui styling to it? 
// import Button from '../button/button-component'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    storyComponent: {
        backgroundImage: `url(${HomeCat})`,
        position: "fixed",
        minHeight: "100%",
        minWidth: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    storyText: {
        color: "#E8E2DB",
        fontFamily: "Quicksand",
        fontSize: "500%",
        position: "absolute",
        marginLeft: "545px",
        marginTop: "100px",
        fontWeight: "bold"
    },
    storyButton: {
        position: "center",
        marginLeft: "820px",
        marginTop: "730px",
        fontSize: "200%",
        fontFamily: "Quicksand",
        backgroundColor: "#E8E2DB",
        color: "#1A3263"
    }
})

function StoryCard() {
    const classes = useStyles();
    return(
       
            <div className={classes.storyComponent}>
                
                <h1 className={classes.storyText}>
                    Hi, my name is Nuni 
                </h1>

                <Button variant="contained" className={classes.storyButton} href="story">MY STORY</Button>
        </div>
    )
}

export default StoryCard;