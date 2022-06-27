import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

/**Github-search-users app version 19 - 'index' js file - 
 * Features:
 * 
 *      --> Wrapping the '<App>' with the 'AuthProvider'
 *          to set authentication features.
 * 
 * Notes: the 'Auth0Provider' object needs this data:
 * 
 * domain ==>
 * dev-b4dh24tk.us.auth0.com
 *
 *  client ID ==>
 * 
 * ZbPdXZFtDkid2AhRhIN4pCGJ99d8EvLY
 * 
 * reference ==>
 * 
 * https://manage.auth0.com/dashboard/
 * 
 * Auth0 is an authentication provider and the way to set up
 * reference on the Docs:
 * 
 *    reference ==>
 * 
 *  https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application
 *  
 * the data can be set as an .env variable
*/

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b4dh24tk.us.auth0.com"
      clientId="ZbPdXZFtDkid2AhRhIN4pCGJ99d8EvLY"
      redirectUri={window.location.origin}
     >
      <GithubProvider>
        <App />
      </GithubProvider>
     </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
