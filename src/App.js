import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/**Github-search-users app version 1 - 'App' js file - Features:
 * 
 *      -->Setting up routing using react-router-dom
 *         library.
 * 
 * 
 * Notes: This setup is made with react router version 5
 * at the end of this project i'll update the implementation 
 * to version 6
*/
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Dashboard />
          </Route>
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
