import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**Github-search-users app version 22 - 'App' js file - 
 * Features:
 * 
 *      --> Implementing 'react-router version 6'
 * 
 *      --> Importing and placing 'Routes' instead
 *          of 'SWITCH' -this component does not 
 *          exist on version 6-
 * 
 * 
 * Notes: the implementations 'changes' SWITCH for 
 * 'Routes' and the 'Routes' are going to have 'path'
 * 'element' prop, 'element' prop will contain the 
 * Component that is going to be Routed. 
*/
function App() {
  return (
    <div>
      <AuthWrapper>

      <Router>

        {/**here i place 'Routes' */}
        <Routes>
          {/**the 'PrivateRoute' is inside the 'element'
           * prop wrapping the 'Dashboard'*/}
          <Route path='/' element={
          <PrivateRoute>
             <Dashboard/>
          </PrivateRoute>
        }/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<Error />}/>

        </Routes>
      </Router>
      
      </AuthWrapper>
      
    </div>
  );
}

export default App;
