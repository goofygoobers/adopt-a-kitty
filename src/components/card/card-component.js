import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    title: {
        fontSize: "20px",
        fontWeight: "bold"
    }, 
    adoptButton: {
        margin: "auto",
        background: "#EEEEEE"
    },
    media: {
        height: "250px"
    },
    background: {
        backgroundColor: "#EFEDE7"
    }
})

const CatCard = (props) => {

    const classes = useStyles();
    const { title, description, imgSrc } = props;  

    return(
        <Card className={classes.background}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image= {imgSrc}
                    title="Cat #1"
                />
            </CardActionArea>
            <Typography className={classes.title} color="textPrimary">
                {title}
            </Typography>
            <Typography color="textSecondary">
                {description}
            </Typography>
            <CardActions>
                <Button className={classes.adoptButton}>ADOPT ME!</Button>
            </CardActions>
        </Card>
    )
}

export default CatCard; 