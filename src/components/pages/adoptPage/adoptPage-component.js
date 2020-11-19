import React from 'react'; 
import CatCard from "../../card/card-component";
import { Grid } from '@material-ui/core';
import PusheenPoke from '../../../images/pusheen-boba.png'
import PusheenGamer from '../../../images/pusheen-gamer.png'
import PusheenCheeto from '../../../images/pusheen-cheeto.png'
import PusheenFlying from '../../../images/pusheen-flying.png'
import PusheenCoffee from '../../../images/pusheen-coffee.jpg'
import PusheenBook from '../../../images/pusheen-bookworm.jpg'
import Header from '../../header/header-component'

function Body() {
    return(
        <Grid container spacing={4}>
            <Header />
            {/* This creates a empty column */}
            <Grid item xs={0} sm ={2} />

            <Grid container spacing={2} item xs={12} sm={8}>
                <Grid item xs={3} sm={4}>
                    <CatCard title="Jacq" description="Only drinks Boba" imgSrc={PusheenPoke}/>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <CatCard title="Rabe" description="Plays a lot of minecraft" imgSrc={PusheenGamer}/>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <CatCard title="Cheeto" description="Only eats Flaming Hawt Cheetos" imgSrc={PusheenCheeto}/>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <CatCard title="Bobert" description="Only drinks Cofee" imgSrc={PusheenCoffee}/>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <CatCard title="Russell" description="Favourite Film, Up" imgSrc={PusheenFlying}/>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <CatCard title="Hermione" description="Learning to read" imgSrc={PusheenBook}/>
                </Grid>
            </Grid>
            {/* This creates a empty column */}
            <Grid item xs={0} sm ={2} />
        </Grid>
    )
}

export default Body; 