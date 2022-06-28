import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
/**Github-search-users app version 20 - 'Login' Component - 
 * Features:
 * 
 *      --> Setting 'loginWithRedirect' method to 
 *          get redirected to '/authorize' from
 *          'Auth0' -issue with the authentication
 *            does not behave as is supposed to be-
 * 
 * 
 * Notes: There is an issue with the authentication feature
 * most the times fail to redirect me to '/authorize' screen
*/
const Login = () => {

  const { loginWithRedirect } = useAuth0()
  
  return(
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user'/>
        <h1>github user</h1>
        <button className='btn' onClick={loginWithRedirect}>login / sign up</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
