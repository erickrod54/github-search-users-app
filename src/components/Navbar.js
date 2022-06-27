import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

/**Github-search-users app version 19 - 'NavBar' js file - 
 * Features:
 * 
 *      --> Destructuring the 'Auth0' props using the
 *          'useAuth0' hook.     
 * 
 *      --> Testing 'login' feature.
 *    
 *      --> Testing 'logout' feature.
 * 
 *      --> Tesing changes on  'isAuthenticated', 'user', 
 *        'isLoading' during the login process.
 * 
 * Notes: these props comes directly form the object 'Auth0'
 * so i can use it to set all the authentication feature and
 * this provider handles the detail of each prop :)
 * */

const Navbar = () => {
  
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  console.log('this is what it changes on auth process ==> ', { isAuthenticated, user, isLoading})

  return (
  <Wrapper>
      <button onClick={loginWithRedirect}>login</button>
      <button onClick={() => logout({ returnTo:window.location.origin})}>logout</button>
  </Wrapper>);
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
