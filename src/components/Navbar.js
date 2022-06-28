import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

/**Github-search-users app version 20 - 'NavBar' js file - 
 * Features:
 * 
 *      --> Building 'login' feature.
 * 
 *      --> Building 'logout' feature.
 * 
 *      --> Building 'isUser' to create 
 *          a conditional of the user
 *          existence and if is 
 *          authenticated.
 * 
 *      --> Building a Welcome message with
 *          the name and picture of the user.
 * 
 *      --> Building a condition to show 'login'
 *          or 'logout' button depending on the 
 *          condition if is or not the user
 *          authenticated.
 * 
 * Notes: During the authentication process i can see
 * how the 'isloading', 'isAuthtenticated' and 'user'
 * changes letting me know that is working properly
 * */

const Navbar = () => {
  
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  /**building isUser in order to check if is authenticated
   * an the user exists*/
  const isUser = isAuthenticated && user;

  console.log('this is what it changes on auth process ==> ', { isAuthenticated, user, isLoading})

  return (
  <Wrapper>
      {/**checking user and showing picture */}
      {isUser && user.picture && <img src={user.picture} alt={user.name}/>}

      {/**checking user and showing name */}
      {isUser && user.name && <h4>Welcome, <strong>{user.name.toUpperCase()}</strong></h4>}
      { isUser ? 
        (<button 
          onClick={() => logout({ returnTo:window.location.origin})}
          >logout</button>
          ) :
          (<button onClick={loginWithRedirect}>login</button>) 
      }
      
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
