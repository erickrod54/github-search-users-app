import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/**Github-search-users app version 20 - 'App' js file - Features:
 * 
 *      -->Setting up 'PrivateRoute' in order to
 *         restrict the access only to authenticated 
 *         users.
 * 
 * 
 * Notes: the code previously done on 'PrivateRoute' 
 * Component has drill access to his children, this case
 * coing
*/
function App() {
  return (
    <div>
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
      
    </div>
  );
}

export default App;
