
import './App.css';
import Header from './components/header/header-component';
import { Grid } from '@material-ui/core';
// import Body from './components/body/body-component';
import DonateCard from './components/donate/donate-card-componenet';

function App() {
  return (
    <Grid container direction="column" className="backgroundTest">
        <Grid item> 
          <Header /> 
        </Grid>
        <Grid item container>
          <DonateCard />
          <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8} >              
              {/* <Body />  */}
            </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
  );
}

export default App;
