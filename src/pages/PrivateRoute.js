import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**Github-search-users app version 22 - 'PrivateRoute' 
 * js file - Features:
 * 
 *      --> Refactoring to to implement 
 *          'react-router version 6'.
 * 
 *      --> Implementation of 'Navigate' instead
 *          of 'Redirect' -this component is no 
 *          longer exists in react router version 6- 
 * 
 * Notes: I have access to the children -Dashboard-
 * and verifying that the user exists and 
 * isAuthenticated i procced to return the children
 * -Dashboard Component-
 * */

const PrivateRoute = ({ children }) => {
  
  const { isAuthenticated, user } = useAuth0()

  const isUser = isAuthenticated && user;

  if (!isUser) {
    return <Navigate to='/login'/>
  }
  
  return children;
};
export default PrivateRoute;
