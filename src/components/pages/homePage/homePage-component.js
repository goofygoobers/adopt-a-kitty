import React from 'react';
import { Grid } from '@material-ui/core';
import StoryCard from '../../story/story-component';
import Header from '../../header/header-component';

function HomePage() { 

    return(
        <Grid container direction="column" className="backgroundTest">
          <Grid item> 
            <Header /> 
          </Grid>
          <Grid item container>
            <StoryCard />
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8} />
            <Grid item xs={0} sm={2} />
          </Grid>
        </Grid>
    )
}

export default HomePage;