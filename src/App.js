// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
import Login from './pages/Login';
import Events from './pages/Events';
import VolunteerLogin from './pages/VolunteerLogin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/login/volunteer' component={VolunteerLogin} />
          <Route exact path='/events' component={Events} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
