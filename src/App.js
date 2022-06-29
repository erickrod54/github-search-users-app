import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**Github-search-users app version 21 - 'App' js file - 
 * Features:
 * 
 *      -->Setting up 'AuthWrapper' in order to
 *         to wrap the whole application and 
 *         give acces to authenticated users.
 * 
 * 
 * Notes: the previous version ( version 20 ) was with
 * an apparent issue, but is not an issue, the 
 * authentication previuosly set using the protected
 * route and the 'login' code and 'PrivateRoute' code
 * needs to handle the login that the goal with
 * 'AuthWrapper'
*/
function App() {
  return (
    <div>
      <AuthWrapper>

      <Router>
        <Switch>
          <PrivateRoute path='/' exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      
      </AuthWrapper>
      
    </div>
  );
}

export default App;
