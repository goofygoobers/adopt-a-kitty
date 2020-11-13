import React from 'react'; 
import CatCard from "../card/card-component";
import { Grid } from '@material-ui/core';
import logo from '../../logo.svg'
import PusheenPoke from '../../images/pusheen-boba.png'
import PusheenGamer from '../../images/pusheen-gamer.png'
import PusheenCheeto from '../../images/pusheen-cheeto.png'
import PusheenFlying from '../../images/pusheen-flying.png'
import PusheenCoffee from '../../images/pusheen-coffee.jpg'
import PusheenBook from '../../images/pusheen-bookworm.jpg'

function Body() {
    return(
        <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
                <CatCard title="Jacq" description="Only drinks Boba" imgSrc={PusheenPoke}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CatCard title="Rabe" description="Plays a lot of minecraft" imgSrc={PusheenGamer}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CatCard title="Cheeto" description="Only eats Flaming Hawt Cheetos" imgSrc={PusheenCheeto}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CatCard title="Bobert" description="Only drinks Cofee" imgSrc={PusheenCoffee}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CatCard title="Russell" description="Favourite Film, Up" imgSrc={PusheenFlying}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CatCard title="Hermione" description="Learning to read" imgSrc={PusheenBook}/>
            </Grid>
        </Grid>
    )
}

export default Body; 