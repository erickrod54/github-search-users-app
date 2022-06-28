import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**Github-search-users app version 20 - 'PrivateRoute' js file - 
 * Features:
 * 
 *      --> Issue with the authentication feature
 *          redirects me right to '/login' page
 * 
 * Notes: i use the the 'google' and 'twitter' services
 * to get authenticated, also i try with different google
 * accounts, and try also sign in up a new user -the same
 * issue-
 * 
 * */

const PrivateRoute = ({ children, ...rest }) => {
  
  const { isAuthenticated, user } = useAuth0()
  
  const isUSer = isAuthenticated && user;
  
  return(
    <>
       <Route {...rest} render={ () => {
        return( isUSer ? children : <Redirect to='/login'></Redirect>)
       }} >

       </Route>

    </>
  );
};
export default PrivateRoute;
