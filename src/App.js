import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BackgroundStory from './components/pages/backgroundStoryPage/backgroundStory-component';
import HomePage from './components/pages/homePage/homePage-component';
import DonatePage from './components/pages/donatePage/donatePage-component';
import VolunteerPage from './components/pages/volunteerPage/volunteerPage-component';
import AdoptPage from './components/pages/adoptPage/adoptPage-component';

function App() {
  return (

    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/story' component={BackgroundStory}></Route>
          <Route path='/donate' component={DonatePage}></Route>
          <Route path='/volunteer' component={VolunteerPage}></Route>
          <Route path='/adopt' component={AdoptPage}></Route>
        </Switch> 
    </BrowserRouter>

  );
}

export default App;
