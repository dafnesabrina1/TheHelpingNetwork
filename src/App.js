// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Styles
import Login from './pages/Login';
import VolunteerLogin from './pages/VolunteerLogin';
import Events from './pages/Events';
import Event from './pages/Event';
import FacebookLogin from './pages/FacebookLogin';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/login/volunteer' component={VolunteerLogin} />

          <Route
            exact
            path='/fbLogin'
            render={({ history }) => <FacebookLogin history={history} />}
          />

          <Route exact path='/events' component={Events} />
          <Route exact path='/event/id' component={Event} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
