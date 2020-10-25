import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter, hashHistory } from 'react-router-dom';
import AllInfection from './components/Pages/AllInfection/AllInfection';
import MainPages from './components/Pages/MainPages/MainPages';
import ToDayInfection from './components/Pages/ToDayInfection/ToDayInfection';
import Navbar from './components/Pages/Navbar/Navbar';
import Error from './components/Pages/404/Error';
import Country from './components/Pages/Country/Country';
function App() {
  return (


      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
            <Navbar/>
        </div>
        <Switch>
          <Route exact path='/' component={MainPages}></Route>
          <Route exact path='/wszystkie' component={AllInfection}></Route>
          <Route exact path='/dzisiaj' component={ToDayInfection}></Route>
          <Route exact path='/kraj' component={Country}></Route>
          {/* <Route exact path={process.env.PUBLIC_URL + '/dzisiaj'} component={ToDayInfection}></Route> */}
          <Route component={Error}></Route>
        </Switch>
    </Router>

  );
}

export default App;
