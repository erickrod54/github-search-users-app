import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

/**Github-search-users app version 21 - 'index' js file - 
 * Features:
 * 
 *      --> Setting 'cacheLocation' prop on 'Auth0Provide'
 *        object in order to make 'social media users'
 *        persistent across the app
 * 
 * Notes: the social media user data will be storage
 * in the app to make the persistent.
 *  
 * reference ==>
 * 
 * https://auth0.com/docs/libraries/auth0-single-page-app-sdk
 *
*/

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b4dh24tk.us.auth0.com"
      clientId="ZbPdXZFtDkid2AhRhIN4pCGJ99d8EvLY"
      redirectUri={window.location.origin}
      cacheLocation= 'localstorage'
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
