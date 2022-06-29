import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';

/**Github-search-users app version 21 - 'AuthWrapper' js 
 * file - Features:
 * 
 *      --> Destructuring 'isLoading' and 'error'
 *         from 'useAuth0()'
 * 
 *      --> Handleling the 'loading' and 'error'
 *          case for the 'children' -the whole
 *          'App' js file-
 * 
 * Notes: The protected route and the 'login' code and 
 * 'PrivateRoute' code needs to handle the login that the 
 * goal with 'AuthWrapper' solve and handle a sucessfull
 * authentication process showing the 'children' that will
 * be the 'Dashboard' Component
*/

/**this time i access the children to have accces to
 * the whole 'App' js that will be children of this
 * Component*/
function AuthWrapper({ children }) {

  /**'isLoading' and 'error' comes from 'useAuth0()' 
   * -they're different to the local states that 
   * i have-*/
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return(
      <Wrapper>
        <img src={loadingGif} alt='spinner' />
      </Wrapper>
    )
  }

  if (error) {
    return <Wrapper><h1>{error.message}</h1></Wrapper>
  }

  /**after the 'isloading' and error verification i
   * display the children */
  return(
    <>{children}</>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
