// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
import Login from './pages/Login';
import VolunteerLogin from './pages/VolunteerLogin';
import Events from './pages/Events';
import Event from './pages/Event';
import OrganizationEvent from './pages/OrganizationEvent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/login/volunteer' component={VolunteerLogin} />

          <Route exact path='/events' component={Events} />
          <Route exact path='/event/id' component={Event} />

          <Route exact path='/organization/events' component={OrganizationEvent}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
