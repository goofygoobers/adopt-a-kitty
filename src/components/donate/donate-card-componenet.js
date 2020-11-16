import React from 'react'; 
import HomeCat from '../../images/calm-cat.jpg';
import {makeStyles} from '@material-ui/styles';



const useStyles = makeStyles({
    donateComponent: {
        backgroundImage: `url(${HomeCat})`,
        position: "fixed",
        minHeight: "100%",
        minWidth: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#41b4e5"
    }
})

function DonateCard() {
    const classes = useStyles();
    return(
        <div className={classes.donateComponent}>
            <div>
                
            </div>
        </div>
    )
}

export default DonateCard;